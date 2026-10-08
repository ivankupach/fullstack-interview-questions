#!/usr/bin/env node
// Renders every <topic>/diagrams/*.mmd to a .png next to it.
// Usage: npm run diagrams            -> all topics, only changed/missing PNGs
//        npm run diagrams -- react   -> one topic
//        npm run diagrams -- --force -> re-render everything
import { readdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const force = args.includes('--force');
const only = args.filter((a) => !a.startsWith('--'));
const mmdc = join(root, 'node_modules', '.bin', 'mmdc');
const config = join(root, 'scripts', 'mermaid.config.json');

const topics = readdirSync(root).filter(
  (d) => existsSync(join(root, d, 'diagrams')) && (only.length === 0 || only.includes(d)),
);

let rendered = 0;
let failed = 0;
for (const topic of topics) {
  const dir = join(root, topic, 'diagrams');
  for (const file of readdirSync(dir).filter((f) => f.endsWith('.mmd'))) {
    const src = join(dir, file);
    const out = src.replace(/\.mmd$/, '.png');
    if (!force && existsSync(out) && statSync(out).mtimeMs >= statSync(src).mtimeMs) continue;
    try {
      execFileSync(mmdc, ['-i', src, '-o', out, '-c', config, '-b', 'white', '-s', '2', '-q'], {
        stdio: ['ignore', 'ignore', 'pipe'],
      });
      console.log(`ok   ${topic}/diagrams/${file}`);
      rendered++;
    } catch (err) {
      console.error(`FAIL ${topic}/diagrams/${file}\n${err.stderr?.toString() ?? err.message}`);
      failed++;
    }
  }
}
console.log(`\n${rendered} rendered, ${failed} failed`);
process.exit(failed ? 1 : 0);
