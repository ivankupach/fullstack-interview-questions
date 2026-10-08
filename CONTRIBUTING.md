# Contributing

Every topic lives in its own folder:

```
<topic>/
├── README.md          # questions + answers
└── diagrams/
    ├── <name>.mmd     # Mermaid source (edit this)
    └── <name>.png     # rendered image (generated, committed)
```

## Question format

````markdown
### 12. What is the event loop?

`🟡 Middle` · `#runtime` `#async`

Short, direct answer first (1–3 sentences) — what you'd say in the first 20 seconds of an interview.

Then the deeper explanation: how it works, why, trade-offs, gotchas.

```js
// runnable, minimal example
```

![Event loop](./diagrams/event-loop.png)

> **Follow-up:** what a good interviewer asks next, and a one-line answer.

[↑ Back to top](#table-of-contents)
````

Rules:

- **Levels:** `🟢 Junior`, `🟡 Middle`, `🔴 Senior`.
- **Answer first, detail second.** Open with the short answer; never bury it.
- **Code must be correct and minimal** — runnable where possible, with the language set on the fence.
- **Tables** for comparisons (X vs Y).
- **Diagrams** only where a picture explains better than text (flows, architectures, lifecycles).
- Keep the numbered **Table of contents** at the top in sync with the questions.

## Diagrams

Diagrams are written in [Mermaid](https://mermaid.js.org/) and rendered to PNG so they look the same everywhere (GitHub, IDE preview, PDF export).

```bash
npm install
npm run diagrams              # render new/changed diagrams in all topics
npm run diagrams -- postgres  # one topic
npm run diagrams -- --force   # re-render everything
```

Theme lives in `scripts/mermaid.config.json`. Commit both the `.mmd` and the `.png`.
