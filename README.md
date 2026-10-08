# Fullstack Interview Questions

Interview questions for fullstack engineers, each with a **complete answer**: a short answer first, then the deeper explanation, working code, comparison tables and diagrams.

Every question is tagged by level:

- `🟢 Junior`: fundamentals you should know cold
- `🟡 Middle`: how things work under the hood, common trade-offs
- `🔴 Senior`: production experience, architecture, failure modes

## Topics

<!-- TOPICS:START -->
| Topic | Covers | Questions | 🟢 / 🟡 / 🔴 | Diagrams |
| --- | --- | ---: | :---: | ---: |
| [Frontend](./frontend/README.md) | HTML, CSS, browser internals, web performance, accessibility | 48 | 14 / 24 / 10 | 7 |
| [JavaScript](./javascript/README.md) | Closures, event loop, prototypes, async, implement-it-yourself | 48 | 15 / 21 / 12 | 7 |
| [TypeScript](./typescript/README.md) | Generics, narrowing, conditional & mapped types, tsconfig | 43 | 10 / 19 / 14 | 4 |
| [React](./react/README.md) | Hooks, rendering, concurrent features, React 19, performance | 47 | 16 / 21 / 10 | 7 |
| [Next.js](./nextjs/README.md) | App Router, Server Components, caching, Server Actions | 42 | 10 / 18 / 14 | 8 |
| [Backend](./backend/README.md) | Auth, caching, queues, concurrency, rate limiting, architecture | 46 | 13 / 20 / 13 | 9 |
| [Node.js](./nodejs/README.md) | Event loop, libuv, streams, workers, production Node | 46 | 12 / 21 / 13 | 7 |
| [Databases](./databases/README.md) | SQL, transactions, isolation, indexes, replication, NoSQL | 46 | 12 / 21 / 13 | 9 |
| [PostgreSQL](./postgres/README.md) | MVCC, vacuum, EXPLAIN, index types, locking, replication | 50 | 11 / 23 / 16 | 8 |
| [API Design](./api/README.md) | REST, GraphQL, gRPC, pagination, idempotency, versioning | 47 | 12 / 22 / 13 | 9 |
| [DevOps](./devops/README.md) | Docker, Kubernetes, CI/CD, IaC, observability | 49 | 13 / 21 / 15 | 10 |
| [Microservices](./microservices/README.md) | DDD, sagas, outbox, Kafka, resilience patterns | 42 | 8 / 20 / 14 | 10 |
| [System Design](./system-design/README.md) | Concepts + case studies with architecture diagrams | 32 | 1 / 16 / 15 | 18 |
| [Web Security](./security/README.md) | OWASP, XSS, CSRF, SSRF, auth & session security | 47 | 13 / 20 / 14 | 9 |
| [Testing](./testing/README.md) | Unit/integration/e2e, RTL, Playwright, mocking, flaky tests | 41 | 11 / 19 / 11 | 6 |
| **Total** | | **674** | | |
<!-- TOPICS:END -->

## How to use this repo

- **Preparing for an interview:** read the short answer first and try to say the rest out loud before you read it. The `> Follow-up:` lines show where an interviewer usually goes next.
- **Running an interview:** pick questions by level. The follow-ups are useful for probing depth.
- **Learning:** the diagrams and code samples are meant to stand on their own, so skim them first.

## Diagrams

Diagrams are written in [Mermaid](https://mermaid.js.org/) (`<topic>/diagrams/*.mmd`) and rendered to PNG with [mermaid-cli](https://github.com/mermaid-js/mermaid-cli):

```bash
npm install
npm run diagrams    # render new or changed diagrams
npm run readme      # refresh the topics table above
```

## Contributing

Found a mistake or have a better answer? PRs are welcome. See [CONTRIBUTING.md](./CONTRIBUTING.md) for the question format.

## License

[MIT](./LICENSE)
