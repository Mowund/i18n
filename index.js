import { readdirSync, readFileSync } from 'node:fs';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url),
  __dirname = dirname(__filename);

/**
 * @returns {Object | Array} The bot static catalog or supported languages
 * @param {boolean} [supportedLanguages=false] Whether the supported languages instead of static catalog
 */
export function getBotStaticCatalog(supportedLanguages = false) {
  const folders = readdirSync(path.join(__dirname, 'locale')),
    list = supportedLanguages ? [] : {};

  for (const folder of folders) {
    if (supportedLanguages) list.push(folder);
    else list[folder] = JSON.parse(readFileSync(path.join(__dirname, `locale/${folder}/bot.json`)));
  }

  return list;
}
