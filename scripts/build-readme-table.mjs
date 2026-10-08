#!/usr/bin/env node
// Regenerates the topics table in the root README between the TOPICS markers.
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const topics = [
  ['frontend', 'Frontend', 'HTML, CSS, browser internals, web performance, accessibility'],
  ['javascript', 'JavaScript', 'Closures, event loop, prototypes, async, implement-it-yourself'],
  ['typescript', 'TypeScript', 'Generics, narrowing, conditional & mapped types, tsconfig'],
  ['react', 'React', 'Hooks, rendering, concurrent features, React 19, performance'],
  ['nextjs', 'Next.js', 'App Router, Server Components, caching, Server Actions'],
  ['react-native', 'React Native', 'New Architecture, Hermes, navigation, performance, Expo & releases'],
  ['backend', 'Backend', 'Auth, caching, queues, concurrency, rate limiting, architecture'],
  ['nodejs', 'Node.js', 'Event loop, libuv, streams, workers, production Node'],
  ['nestjs', 'NestJS', 'Modules, DI & scopes, request lifecycle, guards, testing'],
  ['databases', 'Databases', 'SQL, transactions, isolation, indexes, replication, NoSQL'],
  ['postgres', 'PostgreSQL', 'MVCC, vacuum, EXPLAIN, index types, locking, replication'],
  ['api', 'API Design', 'REST, GraphQL, gRPC, pagination, idempotency, versioning'],
  ['devops', 'DevOps', 'Docker, Kubernetes, CI/CD, IaC, observability'],
  ['aws', 'AWS', 'IAM, VPC, Lambda, S3, DynamoDB, SQS/SNS, DR & cost'],
  ['microservices', 'Microservices', 'DDD, sagas, outbox, Kafka, resilience patterns'],
  ['system-design', 'System Design', 'Concepts + case studies with architecture diagrams'],
  ['security', 'Web Security', 'OWASP, XSS, CSRF, SSRF, auth & session security'],
  ['testing', 'Testing', 'Unit/integration/e2e, RTL, Playwright, mocking, flaky tests'],
];

const count = (md, re) => (md.match(re) || []).length;
const rows = [];
let total = 0;
for (const [dir, title, desc] of topics) {
  const file = join(root, dir, 'README.md');
  if (!existsSync(file)) continue;
  const md = readFileSync(file, 'utf8');
  const q = count(md, /^### \d+\./gm);
  const j = count(md, /^`🟢 Junior`/gm);
  const m = count(md, /^`🟡 Middle`/gm);
  const s = count(md, /^`🔴 Senior`/gm);
  const diagDir = join(root, dir, 'diagrams');
  const d = existsSync(diagDir) ? readdirSync(diagDir).filter((f) => f.endsWith('.png')).length : 0;
  total += q;
  rows.push(`| [${title}](./${dir}/README.md) | ${desc} | ${q} | ${j} / ${m} / ${s} | ${d} |`);
}
const table = [
  '| Topic | Covers | Questions | 🟢 / 🟡 / 🔴 | Diagrams |',
  '| --- | --- | ---: | :---: | ---: |',
  ...rows,
  `| **Total** | | **${total}** | | |`,
].join('\n');

const readme = join(root, 'README.md');
const src = readFileSync(readme, 'utf8');
writeFileSync(
  readme,
  src.replace(/<!-- TOPICS:START -->[\s\S]*<!-- TOPICS:END -->/, `<!-- TOPICS:START -->\n${table}\n<!-- TOPICS:END -->`),
);
console.log(`README table updated: ${rows.length} topics, ${total} questions`);
