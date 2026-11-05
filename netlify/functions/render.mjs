import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const ICON_DIR = join(process.cwd(), 'icons');

// Recursively collect every .svg under icons/, in any number of category folders.
async function walk(dir, rel = '') {
  const entries = await readdir(join(dir, rel), { withFileTypes: true });
  const out = [];
  for (const entry of entries) {
    const next = rel ? `${rel}/${entry.name}` : entry.name;
    if (entry.isDirectory()) out.push(...(await walk(dir, next)));
    else if (entry.name.toLowerCase().endsWith('.svg')) out.push(next);
  }
  return out;
}

// Key = slug of the file name (folder is ignored), so URLs never change when
// icons move between categories. On duplicate names the first (sorted) path wins.
const iconByKey = new Map();
for (const file of (await walk(ICON_DIR)).sort()) {
  const base = file.slice(file.lastIndexOf('/') + 1).replace(/\.svg$/i, '');
  const key = slug(base);
  if (iconByKey.has(key)) console.warn(`Duplicate icon key "${key}": ${file} ignored`);
  else iconByKey.set(key, file);
}

function slug(value) {
  return value.toLocaleLowerCase().replace(/[^a-z0-9]/g, '');
}

function numberParam(params, key, fallback, min, max) {
  const raw = params.get(key);
  if (raw === null || raw.trim() === '') return fallback;
  const value = Number(raw);
  return Number.isFinite(value) ? Math.max(min, Math.min(max, Math.round(value))) : fallback;
}

function escapeXml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;',
  })[char]);
}

function safeSvg(source, prefix) {
  const tags = [...source.matchAll(/<\/?svg\b[^>]*>/gi)];
  const root = tags[0];
  if (!root || /^<\//.test(root[0])) return null;
  const selfClosing = /\/\s*>$/.test(root[0]);
  const attributes = root[0].slice(4, root[0].length - (selfClosing ? 2 : 1));
  let body = '';
  if (!selfClosing) {
    let depth = 1;
    for (const tag of tags.slice(1)) {
      if (/^<\//.test(tag[0])) depth -= 1;
      else if (!/\/\s*>$/.test(tag[0])) depth += 1;
      if (depth === 0) {
        body = source.slice(root.index + root[0].length, tag.index);
        break;
      }
    }
    if (body === '') return null;
  }
  const viewBox = attributes.match(/\bviewBox\s*=\s*(["'])([0-9eE+.,\s-]+)\1/i)?.[2]?.trim();
  if (!viewBox || viewBox.split(/[ ,]+/).length !== 4) return null;
  const rootAttrs = ['fill', 'stroke', 'stroke-width', 'fill-rule', 'clip-rule']
    .map((name) => {
      const value = attributes.match(new RegExp(`\\b${name}\\s*=\\s*(["'])(.*?)\\1`, 'i'))?.[2];
      return value ? ` ${name}="${escapeXml(value)}"` : '';
    }).join('');

  body = body
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<(script|foreignObject|iframe|object|embed)\b[^>]*>[\s\S]*?<\/\1\s*>/gi, '')
    .replace(/\s+on[a-z]+\s*=\s*(["']).*?\1/gi, '')
    .replace(/\s+(?:href|xlink:href)\s*=\s*(["'])(?!#).*?\1/gi, '')
    .replace(/url\(\s*(["']?)(?:https?:|\/\/|data:).*?\1\s*\)/gi, 'none')
    .replace(/\bid\s*=\s*(["'])(.*?)\1/g, (_, quote, id) => `id="${prefix}-${id}"`)
    .replace(/url\(\s*#([^)\s]+)\s*\)/g, `url(#${prefix}-$1)`)
    .replace(/((?:href|xlink:href)\s*=\s*["'])#([^"']+)/g, `$1#${prefix}-$2`);

  return { viewBox, rootAttrs, body };
}

export default async (request) => {
  const url = new URL(request.url);
  const params = url.searchParams;
  const requested = (params.get('icons') || '').split(',').map((key) => key.trim()).filter(Boolean);
  if (!requested.length) return new Response('Provide icons as a comma-separated list.', { status: 400 });
  if (requested.length > 100) return new Response('Choose no more than 100 icons.', { status: 400 });

  const items = requested.map((key) => iconByKey.get(slug(key))).filter(Boolean);
  if (!items.length) return new Response('No matching icons were found.', { status: 404 });

  const size = numberParam(params, 'size', 64, 16, 512);
  const gap = numberParam(params, 'gap', 16, 0, 256);
  const columns = numberParam(params, 'row', items.length, 1, 40);
  const align = ['left', 'center', 'right'].includes(params.get('align')) ? params.get('align') : 'left';
  const rowCount = Math.ceil(items.length / columns);
  const width = Math.max(size, Math.min(items.length, columns) * size + (Math.min(items.length, columns) - 1) * gap);
  const height = rowCount * size + (rowCount - 1) * gap;
  const rendered = [];

  for (let index = 0; index < items.length; index += 1) {
    const file = items[index];
    const source = await readFile(join(ICON_DIR, file), 'utf8');
    const icon = safeSvg(source, `icon${index}`);
    if (!icon) continue;
    const row = Math.floor(index / columns);
    const column = index % columns;
    const countInRow = Math.min(columns, items.length - row * columns);
    const rowWidth = countInRow * size + (countInRow - 1) * gap;
    const offset = align === 'center' ? (width - rowWidth) / 2 : align === 'right' ? width - rowWidth : 0;
    const x = offset + column * (size + gap);
    const y = row * (size + gap);
    rendered.push(`<svg x="${x}" y="${y}" width="${size}" height="${size}" viewBox="${escapeXml(icon.viewBox)}" preserveAspectRatio="xMidYMid meet"${icon.rootAttrs}>${icon.body}</svg>`);
  }

  if (!rendered.length) return new Response('The selected icons could not be rendered.', { status: 422 });
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">${rendered.join('')}</svg>`;
  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
      'X-Content-Type-Options': 'nosniff',
    },
  });
};
