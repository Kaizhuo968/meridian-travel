#!/usr/bin/env node
/**
 * Integrity checks for the MERIDIAN site.
 * - every language in LANGS exists in I18N
 * - all languages share the SAME key structure as the reference language (default: en)
 * - arrays have matching lengths across languages
 * - no empty strings
 * - every data-i18n key used in index.html resolves in the reference language
 *
 * Exits non-zero on failure (used by CI and locally).
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const REF = "en"; // reference language

function loadI18n() {
  const src = fs.readFileSync(path.join(ROOT, "i18n.js"), "utf8");
  // i18n.js declares `const I18N`, `const LANGS`, `const LANG_NAMES` at top level.
  return new Function(src + "\nreturn { I18N, LANGS, LANG_NAMES };")();
}

const errors = [];

let I18N, LANGS;
try {
  ({ I18N, LANGS } = loadI18n());
} catch (e) {
  console.error("❌ could not evaluate i18n.js:", e.message);
  process.exit(1);
}

if (!I18N || !LANGS) {
  console.error("❌ i18n.js did not expose I18N / LANGS");
  process.exit(1);
}

const refObj = I18N[REF];
if (!refObj) {
  console.error(`❌ reference language "${REF}" missing in I18N`);
  process.exit(1);
}

// ---- key path collection (objects only; arrays collapse to "path[]") ----
function keyPaths(obj, prefix = "") {
  if (Array.isArray(obj)) return [prefix + "[]"];
  if (obj && typeof obj === "object") {
    let out = [];
    for (const k of Object.keys(obj)) out = out.concat(keyPaths(obj[k], prefix ? prefix + "." + k : k));
    return out;
  }
  return [prefix];
}
function arrayLengths(obj, prefix = "", out = {}) {
  if (Array.isArray(obj)) out[prefix] = obj.length;
  else if (obj && typeof obj === "object")
    for (const k of Object.keys(obj)) arrayLengths(obj[k], prefix ? prefix + "." + k : k, out);
  return out;
}
function emptyPaths(obj, prefix = "", out = []) {
  if (typeof obj === "string") { if (!obj.trim()) out.push(prefix); }
  else if (Array.isArray(obj)) obj.forEach((v, i) => emptyPaths(v, `${prefix}[${i}]`, out));
  else if (obj && typeof obj === "object")
    for (const k of Object.keys(obj)) emptyPaths(obj[k], prefix ? prefix + "." + k : k, out);
  return out;
}
const get = (o, p) => p.split(".").reduce((a, k) => (a && a[k] != null ? a[k] : undefined), o);

const refKeys = new Set(keyPaths(refObj));
const refArrays = arrayLengths(refObj);
const refEmpty = emptyPaths(refObj).filter((p) => p !== "");

if (refEmpty.length) errors.push(`${REF}: empty string at ${refEmpty.join(", ")}`);

for (const lang of LANGS) {
  if (!I18N[lang]) { errors.push(`missing language block: ${lang}`); continue; }
  const keys = new Set(keyPaths(I18N[lang]));
  for (const k of refKeys) if (!keys.has(k)) errors.push(`[${lang}] missing key: ${k}`);
  for (const k of keys) if (!refKeys.has(k)) errors.push(`[${lang}] extra key (not in ${REF}): ${k}`);

  const arr = arrayLengths(I18N[lang]);
  for (const k of Object.keys(refArrays))
    if (arr[k] !== refArrays[k])
      errors.push(`[${lang}] array length mismatch at ${k}: ${arr[k]} vs ${refArrays[k]} (expected)`);

  for (const p of emptyPaths(I18N[lang]).filter((x) => x !== ""))
    errors.push(`[${lang}] empty string at ${p}`);
}

// ---- data-i18n keys used in index.html must resolve ----
const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
const used = [...html.matchAll(/data-i18n="([^"]+)"/g)].map((m) => m[1]);
for (const k of used) if (get(refObj, k) === undefined) errors.push(`index.html: data-i18n key not found in ${REF}: ${k}`);

if (errors.length) {
  console.error("❌ integrity check failed:\n" + errors.map((e) => "   - " + e).join("\n"));
  process.exit(1);
}

console.log(
  `✅ integrity check passed — ${LANGS.length} languages (${LANGS.join(", ")}), ` +
  `${refKeys.size} keys, ${used.length} data-i18n refs`
);
