import { readdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const iconDir = join(root, 'icons');
const icons = [];

async function collectIcons(directory, relativeDirectory = '') {
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const relativePath = relativeDirectory
      ? `${relativeDirectory}/${entry.name}`
      : entry.name;
    const fullPath = join(directory, entry.name);

    if (entry.isDirectory()) {
      await collectIcons(fullPath, relativePath);
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.svg')) {
      icons.push({
        file: relativePath,
        category: relativePath.split('/')[0] || 'other',
      });
    }
  }
}

await collectIcons(iconDir);
icons.sort((left, right) => left.file.localeCompare(right.file, 'en'));

if (!icons.length) throw new Error('No SVG icons found in icons/.');

await writeFile(join(root, 'icons.json'), `${JSON.stringify(icons, null, 2)}\n`);

console.log(`Generated the icon catalog with ${icons.length} SVG files.`);
