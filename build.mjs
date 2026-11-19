// Genera index.html inyectando las variables de .dev.vars en index.template.html
// Uso: node build.mjs
import { readFileSync, writeFileSync } from 'node:fs';

const vars = {};
const raw = readFileSync('.dev.vars', 'utf8');
for (const line of raw.split(/\r?\n/)) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith('#')) continue;
  const eq = trimmed.indexOf('=');
  if (eq === -1) continue;
  const key = trimmed.slice(0, eq).trim();
  const value = trimmed.slice(eq + 1).trim().replace(/^["']|["']$/g, '');
  vars[key] = value;
}

let html = readFileSync('index.template.html', 'utf8');
const missing = [];
html = html.replace(/\{\{(\w+)\}\}/g, (match, key) => {
  if (vars[key] === undefined) {
    missing.push(key);
    return match;
  }
  return vars[key];
});

if (missing.length > 0) {
  console.error('[build] Faltan variables en .dev.vars: ' + missing.join(', '));
  process.exit(1);
}

writeFileSync('index.html', html);
console.log('[build] index.html generado (' + Buffer.byteLength(html) + ' bytes)');
