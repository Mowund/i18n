import { readdirSync, readFileSync } from 'node:fs';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url),
  __dirname = dirname(__filename);

export function getBotStaticCatalog() {
  const folders = readdirSync(path.join(__dirname, 'locale')),
    list = {};

  for (const folder of folders) {
    list[folder] = JSON.parse(readFileSync(path.join(__dirname, `locale/${folder}/bot.json`)));
  }
  return list;
}
