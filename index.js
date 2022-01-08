import { readdirSync, readFileSync } from 'node:fs';

export function getBotStaticCatalog() {
    const folders = readdirSync('./locale'),
        list = {};

    for (const folder of folders) {
        list[folder] = JSON.parse(readFileSync(`./locale/${folder}/bot.json`));
    }
    return list;
}