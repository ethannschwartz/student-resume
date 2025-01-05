#!/usr/bin/env node

/**
 * Node script to extract keys from $t('...') calls in .vue files,
 * and merge them into en.json and he.json without duplicates.
 *
 * Usage: `node extract-translations.js`
 */
import fs from "fs";

import path from 'path';

// 1) Adjust these paths for your project:
const VUE_FILES_ROOT = path.join('./');          // e.g., root where .vue files live
const LOCALES_DIR = path.join('./', 'locales');  // directory with en.json & he.json
const EN_JSON_PATH = path.join(LOCALES_DIR, 'en.json');
const HE_JSON_PATH = path.join(LOCALES_DIR, 'he.json');

// 2) Load existing translations (if they exist)
let enTranslations = {};
let heTranslations = {};
try {
    enTranslations = JSON.parse(fs.readFileSync(EN_JSON_PATH, 'utf8'));
} catch (error) {
    console.log(`No existing en.json found or invalid JSON. Starting fresh.`);
}
try {
    heTranslations = JSON.parse(fs.readFileSync(HE_JSON_PATH, 'utf8'));
} catch (error) {
    console.log(`No existing he.json found or invalid JSON. Starting fresh.`);
}

// 3) Collect new keys in a set to avoid duplicates
const newKeys = new Set();

// 4) Function to recursively scan for .vue files
function findVueFiles(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            // Recursively search subdirectories
            findVueFiles(filePath);
        } else if (stats.isFile() && filePath.endsWith('.vue')) {
            extractKeysFromFile(filePath);
        }
    }
}

// 5) Regex to find $t('SOME_KEY') or $t("SOME_KEY")
const I18N_REGEX = /\$t\(['"]([^'"]+)['"]\)/g;

/**
 * Extract keys from a .vue file and add them to `newKeys`.
 */
function extractKeysFromFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    let match;
    while ((match = I18N_REGEX.exec(content)) !== null) {
        // match[1] is the captured group inside $t('...')
        const key = match[1];
        newKeys.add(key);
    }
}

// 6) Start scanning from the root directory (or wherever you keep .vue files)
findVueFiles(VUE_FILES_ROOT);

// 7) Merge new keys into existing translations
//    For English, if the key doesn't exist, we set it to an empty string or some placeholder
//    For Hebrew, likewise.

let updated = false;

for (const key of newKeys) {
    // If key not in English, add it
    if (!enTranslations.hasOwnProperty(key)) {
        enTranslations[key] = ''; // or 'TODO: Translate'
        updated = true;
    }

    // If key not in Hebrew, add it
    if (!heTranslations.hasOwnProperty(key)) {
        heTranslations[key] = ''; // or 'TODO: Translate'
        updated = true;
    }
}

// 8) If anything changed, write back to disk
if (updated) {
    fs.writeFileSync(EN_JSON_PATH, JSON.stringify(enTranslations, null, 2), 'utf8');
    fs.writeFileSync(HE_JSON_PATH, JSON.stringify(heTranslations, null, 2), 'utf8');
    console.log(`Updated en.json and he.json with new keys.`);
} else {
    console.log(`No new translation keys found.`);
}
