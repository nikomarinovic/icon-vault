import { readdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const iconDir = join(root, 'icons');
const iconFiles = (await readdir(iconDir, { withFileTypes: true }))
  .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith('.svg'))
  .map((entry) => entry.name)
  .sort((left, right) => left.localeCompare(right, 'en'));

if (!iconFiles.length) throw new Error('No SVG icons found in icons/.');

await writeFile(join(root, 'icons.json'), `${JSON.stringify(iconFiles, null, 2)}\n`);

const htmlPath = join(root, 'index.html');
const html = await readFile(htmlPath, 'utf8');
const fallbackPattern = /const fallbackIcons=\[.*?\];/s;
if (!fallbackPattern.test(html)) throw new Error('Could not find fallbackIcons in index.html.');
const updatedHtml = html.replace(
  fallbackPattern,
  `const fallbackIcons=${JSON.stringify(iconFiles)};`,
);
if (updatedHtml !== html) await writeFile(htmlPath, updatedHtml);

console.log(`Generated the icon catalog with ${iconFiles.length} SVG files.`);
