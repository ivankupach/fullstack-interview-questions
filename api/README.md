# API Design Interview Questions

A collection of API design interview questions with complete answers: REST fundamentals, pagination, versioning, reliability, GraphQL, gRPC, real-time, security and testing. Examples use raw HTTP, TypeScript (Fastify/Express), GraphQL SDL and protobuf.

**Levels:** `🟢 Junior` · `🟡 Middle` · `🔴 Senior`

## Table of contents

**REST and HTTP fundamentals**

1. [What is REST and what are its constraints?](#1-what-is-rest-and-what-are-its-constraints)
2. [How does REST differ from RPC-style APIs and SOAP?](#2-how-does-rest-differ-from-rpc-style-apis-and-soap)
3. [How do you model resources and design URLs?](#3-how-do-you-model-resources-and-design-urls)
4. [How do you model actions that don't fit CRUD (cancel, publish, search)?](#4-how-do-you-model-actions-that-dont-fit-crud-cancel-publish-search)
5. [What are the semantics of HTTP methods (GET, POST, PUT, PATCH, DELETE)?](#5-what-are-the-semantics-of-http-methods-get-post-put-patch-delete)
6. [What is the difference between safe and idempotent methods?](#6-what-is-the-difference-between-safe-and-idempotent-methods)
7. [What are content negotiation and the key HTTP headers in an API?](#7-what-are-content-negotiation-and-the-key-http-headers-in-an-api)
8. [What do the HTTP status code classes mean, and which ones do you use most?](#8-what-do-the-http-status-code-classes-mean-and-which-ones-do-you-use-most)
9. [How do you choose between 400 vs 422, 401 vs 403, 404 vs 410, 409 and 429?](#9-how-do-you-choose-between-400-vs-422-401-vs-403-404-vs-410-409-and-429)
10. [How should errors be formatted? (RFC 9457 problem+json)](#10-how-should-errors-be-formatted-rfc-9457-problemjson)

**Collections: pagination, filtering, sorting, batching**

11. [What is the difference between offset and cursor pagination?](#11-what-is-the-difference-between-offset-and-cursor-pagination)
12. [How do you implement cursor (keyset) pagination?](#12-how-do-you-implement-cursor-keyset-pagination)
13. [How do you design filtering, sorting and sparse fieldsets?](#13-how-do-you-design-filtering-sorting-and-sparse-fieldsets)
14. [How do you design bulk and batch endpoints?](#14-how-do-you-design-bulk-and-batch-endpoints)

**API evolution: versioning, compatibility, contracts**

15. [What are the API versioning strategies and their trade-offs?](#15-what-are-the-api-versioning-strategies-and-their-trade-offs)
16. [What counts as a breaking change, and how do you deprecate an API safely?](#16-what-counts-as-a-breaking-change-and-how-do-you-deprecate-an-api-safely)
17. [What is OpenAPI and what are contract-first vs code-first approaches?](#17-what-is-openapi-and-what-are-contract-first-vs-code-first-approaches)
18. [How do you document an API and generate SDKs?](#18-how-do-you-document-an-api-and-generate-sdks)

**Reliability, concurrency and caching**

19. [How do you implement idempotency keys for POST requests?](#19-how-do-you-implement-idempotency-keys-for-post-requests)
20. [How does optimistic concurrency work with ETag and If-Match?](#20-how-does-optimistic-concurrency-work-with-etag-and-if-match)
21. [How does HTTP caching work for APIs (Cache-Control, ETag, 304)?](#21-how-does-http-caching-work-for-apis-cache-control-etag-304)
22. [How do you design long-running operations (202 + status resource)?](#22-how-do-you-design-long-running-operations-202--status-resource)
23. [How do you handle file uploads in an API?](#23-how-do-you-handle-file-uploads-in-an-api)
24. [How do you design rate limiting, and what headers should you return?](#24-how-do-you-design-rate-limiting-and-what-headers-should-you-return)
25. [How do you make an API observable (request IDs, tracing, metrics)?](#25-how-do-you-make-an-api-observable-request-ids-tracing-metrics)

**CORS and hypermedia**

26. [What is CORS and why does the same-origin policy exist?](#26-what-is-cors-and-why-does-the-same-origin-policy-exist)
27. [How do CORS preflight requests and credentials work in depth?](#27-how-do-cors-preflight-requests-and-credentials-work-in-depth)
28. [What is HATEOAS, the Richardson Maturity Model, and why do few APIs use it?](#28-what-is-hateoas-the-richardson-maturity-model-and-why-do-few-apis-use-it)

**GraphQL**

29. [What is GraphQL? Explain schema, queries, mutations and resolvers.](#29-what-is-graphql-explain-schema-queries-mutations-and-resolvers)
30. [What is the GraphQL N+1 problem and how does DataLoader solve it?](#30-what-is-the-graphql-n1-problem-and-how-does-dataloader-solve-it)
31. [How do you secure a GraphQL API? (depth and complexity limits, introspection, persisted queries)](#31-how-do-you-secure-a-graphql-api-depth-and-complexity-limits-introspection-persisted-queries)
32. [Why is caching hard in GraphQL, and how do you do it?](#32-why-is-caching-hard-in-graphql-and-how-do-you-do-it)
33. [REST vs GraphQL vs gRPC vs tRPC: how do you choose?](#33-rest-vs-graphql-vs-grpc-vs-trpc-how-do-you-choose)

**RPC, real-time and event-driven APIs**

34. [How does gRPC work? (Protobuf, streaming types, HTTP/2)](#34-how-does-grpc-work-protobuf-streaming-types-http2)
35. [WebSockets vs Server-Sent Events vs long polling: when to use which?](#35-websockets-vs-server-sent-events-vs-long-polling-when-to-use-which)
36. [How do you design webhooks reliably and securely?](#36-how-do-you-design-webhooks-reliably-and-securely)

**Architecture and design**

37. [What are an API gateway and the BFF pattern?](#37-what-are-an-api-gateway-and-the-bff-pattern)
38. [Walk through designing a public Orders API end to end.](#38-walk-through-designing-a-public-orders-api-end-to-end)

**API authentication and security**

39. [What are the common ways to authenticate API clients?](#39-what-are-the-common-ways-to-authenticate-api-clients)
40. [How do OAuth2 client credentials and JWT bearer validation work for APIs?](#40-how-do-oauth2-client-credentials-and-jwt-bearer-validation-work-for-apis)
41. [What are mTLS and sender-constrained tokens (DPoP), and when do you use them?](#41-what-are-mtls-and-sender-constrained-tokens-dpop-and-when-do-you-use-them)
42. [What is the OWASP API Security Top 10?](#42-what-is-the-owasp-api-security-top-10)
43. [How do you prevent BOLA and BFLA in practice?](#43-how-do-you-prevent-bola-and-bfla-in-practice)
44. [What is mass assignment (and excessive data exposure) and how do you prevent it?](#44-what-is-mass-assignment-and-excessive-data-exposure-and-how-do-you-prevent-it)
45. [What are the baseline security practices every API should follow?](#45-what-are-the-baseline-security-practices-every-api-should-follow)

**Testing APIs**

46. [How do you test an API? (levels and tools)](#46-how-do-you-test-an-api-levels-and-tools)
47. [What is consumer-driven contract testing, and how do you catch breaking changes in CI?](#47-what-is-consumer-driven-contract-testing-and-how-do-you-catch-breaking-changes-in-ci)

---

## REST and HTTP fundamentals

### 1. What is REST and what are its constraints?

`🟢 Junior` · `#rest` `#fundamentals`

REST (Representational State Transfer) is an architectural style, defined by Roy Fielding in his 2000 dissertation, for networked systems. You model things as **resources** identified by URIs, manipulate them through **representations** (usually JSON) using the uniform HTTP interface, and keep the server **stateless**. An API is only "RESTful" if it respects the constraints below; most "REST APIs" in practice are HTTP+JSON APIs that satisfy most of them.

| Constraint | Meaning | Practical consequence |
|---|---|---|
| Client–server | UI and data storage are separated | Client and server evolve independently |
| Stateless | Each request carries everything needed to process it | Any instance can serve any request; easy horizontal scaling; auth sent on every call |
| Cacheable | Responses declare whether they can be cached | `Cache-Control`, `ETag`, CDN-friendly `GET`s |
| Uniform interface | Resource identification, manipulation via representations, self-descriptive messages, hypermedia (HATEOAS) | Standard verbs/status codes/media types; generic tooling works |
| Layered system | Client cannot tell if it talks to the origin or an intermediary | Gateways, CDNs, proxies, load balancers |
| Code on demand (optional) | Server may ship executable code | Rarely used for APIs (JS in browsers is the closest analogue) |

Statelessness means *no server-side session needed to interpret a request*; it does not mean the server stores nothing (the database is state). Resource state lives on the server; *application/session state* lives on the client.

> **Follow-up:** Is a JSON API over HTTP that uses `POST /getUser` RESTful? No: it tunnels an RPC call through one verb and ignores the uniform interface (resource identity, method semantics, cacheability).

[↑ Back to top](#table-of-contents)

### 2. How does REST differ from RPC-style APIs and SOAP?

`🟢 Junior` · `#rest` `#rpc` `#soap`

REST is **resource-oriented** (nouns + a fixed set of verbs), RPC is **action-oriented** (call a remote function), and SOAP is an XML-based RPC protocol with a strict envelope, WSDL contracts and WS-* extensions.

| | REST | RPC (JSON-RPC, gRPC) | SOAP |
|---|---|---|---|
| Unit | Resource (`/orders/42`) | Procedure (`CreateOrder`) | Operation in a WSDL |
| Format | JSON (any media type) | JSON / Protobuf | XML only |
| Contract | Optional (OpenAPI) | Required (`.proto`, IDL) | Required (WSDL/XSD) |
| HTTP semantics used | Fully (verbs, status, caching) | Mostly ignored (single POST / HTTP/2 streams) | Mostly ignored (POST + SOAP faults) |
| Caching | Native for `GET` | Hard | Hard |
| Typical use | Public APIs, CRUD | Internal service-to-service | Legacy enterprise, banking |

```http
# REST
POST /orders HTTP/1.1
{"items":[{"sku":"A1","qty":2}]}

# RPC style
POST /rpc HTTP/1.1
{"jsonrpc":"2.0","method":"createOrder","params":{"items":[...]},"id":1}
```

Pick RPC when the domain is naturally verbs (`/transfer`, `/send`) or performance/typing matters internally; pick REST when you want broad compatibility, caching and discoverability.

[↑ Back to top](#table-of-contents)

### 3. How do you model resources and design URLs?

`🟢 Junior` · `#rest` `#url-design`

Use **plural nouns** for collections, identify items by ID, express hierarchy only when the child cannot exist without the parent, and let the **HTTP method** carry the verb.

```
GET    /users                  list
POST   /users                  create
GET    /users/42               read
PUT    /users/42               replace
PATCH  /users/42               partial update
DELETE /users/42               delete
GET    /users/42/orders        orders belonging to user 42
GET    /orders/9001            orders are first-class too (don't force /users/42/orders/9001)
```

Guidelines:

- Lowercase, hyphenated (`/order-items`), no trailing slash, no file extensions (use `Accept`).
- **No verbs in paths**: `/getUsers`, `/createOrder` are RPC smells.
- Keep nesting to **one level**; deeper paths couple clients to your internal ownership graph. Give children a top-level route with a filter (`/orders?userId=42`).
- IDs should be opaque and non-guessable where it matters (UUIDv4/v7 or prefixed IDs like `ord_01H...`), never leak sequential counts.
- Query string is for **filtering/sorting/pagination**, path is for **identity**.
- Model *what the client cares about*, not your tables. A `Checkout` resource may span five tables.

[↑ Back to top](#table-of-contents)

### 4. How do you model actions that don't fit CRUD (cancel, publish, search)?

`🟡 Middle` · `#rest` `#url-design`

Prefer modeling the action as **state change on the resource** (`PATCH` a `status`), or as **creating a new sub-resource** that represents the action (`POST /orders/42/cancellations`). If neither is natural, an explicit **controller/action endpoint** (`POST /orders/42/cancel`) is the pragmatic, widely accepted escape hatch.

| Approach | Example | When |
|---|---|---|
| State field | `PATCH /orders/42 {"status":"cancelled"}` | Simple transitions, server validates the state machine |
| Action as resource | `POST /orders/42/cancellations` → `201` | You need history, reason, audit, async result |
| Action endpoint | `POST /orders/42/cancel` | Verb-heavy domains (Stripe: `/payment_intents/{id}/capture`) |
| Search with a big/complex query | `POST /orders/search` | Query too large/sensitive for a URL (`POST` is still safe *semantically* if you document it, but not cacheable by default) |

```http
POST /orders/42/cancellations HTTP/1.1
Content-Type: application/json

{"reason":"customer_request"}

HTTP/1.1 201 Created
Location: /orders/42/cancellations/c_7
```

Rules: always `POST` (not `GET`) for state-changing actions, make them idempotent where possible (see idempotency keys), and return the updated resource or a link to it.

> **Follow-up:** Why not `GET /orders/42/cancel`? `GET` must be safe; crawlers, prefetchers and link scanners would cancel orders.

[↑ Back to top](#table-of-contents)

### 5. What are the semantics of HTTP methods (GET, POST, PUT, PATCH, DELETE)?

`🟢 Junior` · `#http` `#methods`

Each method has defined semantics in RFC 9110: `GET` reads, `POST` creates/processes, `PUT` fully replaces, `PATCH` partially modifies, `DELETE` removes.

| Method | Purpose | Body | Safe | Idempotent | Cacheable |
|---|---|---|---|---|---|
| GET | Retrieve | No | Yes | Yes | Yes |
| HEAD | `GET` without body | No | Yes | Yes | Yes |
| OPTIONS | Capabilities / CORS preflight | No | Yes | Yes | No |
| POST | Create / process / non-idempotent action | Yes | No | **No** | Rarely |
| PUT | Replace (or create at a known URI) | Yes | No | Yes | No |
| PATCH | Partial update (RFC 5789) | Yes | No | **Not guaranteed** | No |
| DELETE | Remove | Optional/ignored | No | Yes | No |

**PUT vs PATCH vs POST**

```http
PUT /users/42            # whole representation; omitted fields are reset/removed
{"name":"Ana","email":"ana@x.com","role":"admin"}

PATCH /users/42          # JSON Merge Patch (RFC 7396): only listed fields change, null deletes
Content-Type: application/merge-patch+json
{"name":"Ana M."}

PATCH /users/42          # JSON Patch (RFC 6902): explicit operations
Content-Type: application/json-patch+json
[{"op":"replace","path":"/name","value":"Ana M."}]

POST /users              # server chooses the ID
```

Return `201 Created` + `Location` for creation, `200`/`204` for updates, `204` for deletes. `PATCH` is idempotent only if the patch is (setting a field is; "increment by 1" is not).

[↑ Back to top](#table-of-contents)

### 6. What is the difference between safe and idempotent methods?

`🟢 Junior` · `#http` `#idempotency`

**Safe** means the request does not change server state (read-only semantics). **Idempotent** means making the same request *N* times has the same *effect on the server* as making it once. Every safe method is idempotent; not every idempotent method is safe (`PUT`, `DELETE`).

- Safe: `GET`, `HEAD`, `OPTIONS`, `TRACE`.
- Idempotent: the safe ones + `PUT`, `DELETE`.
- Neither: `POST`, `PATCH` (unless designed otherwise).

Idempotency is about **server state, not the response**: the first `DELETE /orders/1` returns `204`, the second may return `404`; state is identical ("order 1 does not exist"), so it is still idempotent.

Why it matters: clients, proxies and HTTP libraries **automatically retry** idempotent requests after a network failure, because it is harmless. Retrying a `POST /payments` blindly can double-charge, which is why you need [idempotency keys](#19-how-do-you-implement-idempotency-keys-for-post-requests).

```ts
// Counter-example: PUT that is NOT idempotent by implementation
app.put("/counter", (req, res) => { counter++; res.sendStatus(204); }); // wrong
// Correct: PUT sets a value
app.put("/counter", (req, res) => { counter = req.body.value; res.sendStatus(204); });
```

> **Follow-up:** "Safe" does not mean "no side effects at all": logging, metrics and cache fills are fine; the client just isn't *responsible* for state changes.

[↑ Back to top](#table-of-contents)

### 7. What are content negotiation and the key HTTP headers in an API?

`🟢 Junior` · `#http` `#headers`

Content negotiation lets the client say what it **sends** (`Content-Type`) and what it **accepts** (`Accept`); the server picks a representation or replies `406`/`415`.

| Header | Direction | Use |
|---|---|---|
| `Content-Type` | both | Media type of the body (`application/json`) |
| `Accept` | request | Preferred response types, with `q` weights; also used for media-type versioning |
| `Accept-Language`, `Accept-Encoding` | request | Locale, compression (`gzip`, `br`) |
| `Authorization` | request | Credentials (`Bearer <token>`) |
| `Location` | response | URL of the created resource (`201`) or operation (`202`) |
| `ETag` / `If-Match` / `If-None-Match` | both | Validation and optimistic concurrency |
| `Cache-Control`, `Vary` | response | Caching rules |
| `Retry-After` | response | When to retry (`429`, `503`, `202`) |
| `Link` | response | Pagination/relations (RFC 8288) |
| `Allow` | response | Methods supported (`405`) |

```http
GET /reports/7 HTTP/1.1
Accept: application/json, text/csv;q=0.5
Accept-Encoding: br, gzip

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Content-Encoding: br
Vary: Accept, Accept-Encoding
```

Always set `Vary` for headers that change the representation, otherwise caches serve the wrong variant. Return `415 Unsupported Media Type` when the request `Content-Type` is unsupported and `406 Not Acceptable` when you cannot satisfy `Accept`.

[↑ Back to top](#table-of-contents)

### 8. What do the HTTP status code classes mean, and which ones do you use most?

`🟢 Junior` · `#http` `#status-codes`

`1xx` informational, `2xx` success, `3xx` redirection/caching, `4xx` the **client** made a mistake, `5xx` the **server** failed.

| Code | Name | Typical use |
|---|---|---|
| 200 | OK | Successful `GET`/`PUT`/`PATCH` with body |
| 201 | Created | `POST` created a resource; send `Location` |
| 202 | Accepted | Work queued, not finished |
| 204 | No Content | Success, nothing to return (`DELETE`, `PUT`) |
| 301/308 | Moved Permanently | Permanent redirect (`308` preserves the method) |
| 304 | Not Modified | Conditional `GET` hit |
| 400 | Bad Request | Malformed request |
| 401 | Unauthorized | Missing/invalid credentials (really "unauthenticated") |
| 403 | Forbidden | Authenticated but not allowed |
| 404 | Not Found | Resource doesn't exist |
| 405 | Method Not Allowed | Send `Allow` header |
| 409 | Conflict | State conflict (duplicate, version) |
| 422 | Unprocessable Content | Well-formed but semantically invalid |
| 429 | Too Many Requests | Rate limited; send `Retry-After` |
| 500 | Internal Server Error | Unhandled bug |
| 502/503/504 | Bad Gateway / Unavailable / Gateway Timeout | Upstream/overload problems |

Golden rules: never return `200` with `{"error": ...}` for failures; never leak stack traces in `5xx`; `4xx` should be fixable by the client, `5xx` should not be.

[↑ Back to top](#table-of-contents)

### 9. How do you choose between 400 vs 422, 401 vs 403, 404 vs 410, 409 and 429?

`🟡 Middle` · `#http` `#status-codes`

Pick the code that tells the client **what to do next**: fix the request (400/422), authenticate (401), give up/ask for access (403), stop retrying (404/410), resolve a state clash (409), or slow down (429).

| Pair | Rule |
|---|---|
| **400 vs 422** | `400`: the request can't be parsed or is structurally wrong (invalid JSON, wrong types, missing header). `422`: syntax is fine but **business/semantic validation** fails (`email` already malformed domain, `endDate < startDate`). Many teams use only `400` (GitHub uses `422` for validation); consistency matters more. Fastify/Zod validation errors are commonly `400`. |
| **401 vs 403** | `401`: *not authenticated* (no/expired/invalid token); **must** include `WWW-Authenticate`. `403`: authenticated, but lacks permission; re-authenticating won't help. |
| **404 vs 403** | To avoid leaking existence of resources the caller may not see, return `404` for "not yours" (GitHub does for private repos). |
| **404 vs 410** | `404`: not found (maybe never existed). `410 Gone`: existed and was intentionally removed permanently, useful for sunsetted endpoints/deleted content. |
| **409 vs 412** | `409`: state conflict (unique constraint, wrong workflow state). `412`: an explicit precondition (`If-Match`) failed. |
| **429** | Rate limit/quota exceeded; include `Retry-After`. `503` is for server overload, not per-client limits. |
| **204 vs 404 on DELETE** | Repeated `DELETE`: `204` (idempotent success) or `404`; document either. |

```http
HTTP/1.1 401 Unauthorized
WWW-Authenticate: Bearer error="invalid_token", error_description="The token expired"

HTTP/1.1 429 Too Many Requests
Retry-After: 30
```

Also: `413 Content Too Large` (payload cap), `415` (bad `Content-Type`), `428 Precondition Required` (you require `If-Match`), `423 Locked`.

[↑ Back to top](#table-of-contents)

### 10. How should errors be formatted? (RFC 9457 problem+json)

`🟡 Middle` · `#errors` `#rfc9457`

Use **Problem Details for HTTP APIs** (RFC 9457, which obsoletes RFC 7807): a JSON object with media type `application/problem+json` and a standard set of members, so every client can parse errors the same way.

Standard members: `type` (URI identifying the problem class, default `about:blank`), `title` (short, stable summary), `status` (HTTP code), `detail` (occurrence-specific explanation), `instance` (URI of this occurrence). You may add **extension members**; RFC 9457 specifically uses them for things like `errors` lists, a `trace_id`, or `retry_after`.

```http
HTTP/1.1 422 Unprocessable Content
Content-Type: application/problem+json

{
  "type": "https://api.example.com/problems/validation-error",
  "title": "Your request is not valid.",
  "status": 422,
  "detail": "2 fields failed validation.",
  "instance": "/orders",
  "trace_id": "4bf92f3577b34da6a3ce929d0e0e4736",
  "errors": [
    { "pointer": "/items/0/qty", "detail": "must be >= 1" },
    { "pointer": "/email", "detail": "must be a valid email" }
  ]
}
```

```ts
// Fastify error handler producing problem+json
app.setErrorHandler((err, req, reply) => {
  const status = err.statusCode ?? 500;
  reply
    .status(status)
    .type("application/problem+json")
    .send({
      type: status >= 500 ? "about:blank" : `https://api.example.com/problems/${err.code ?? "error"}`,
      title: status >= 500 ? "Internal Server Error" : err.message,
      status,
      instance: req.url,
      trace_id: req.id,
    });
});
```

Best practices: the `type` URI should be dereferenceable documentation; clients should switch on `type`, not on `title`/`detail` strings; never include stack traces or SQL in `detail`; keep `status` equal to the real HTTP status; always provide a correlation/trace ID.

[↑ Back to top](#table-of-contents)

## Collections: pagination, filtering, sorting, batching

### 11. What is the difference between offset and cursor pagination?

`🟢 Junior` · `#pagination`

**Offset** (`?page=3&limit=20` / `?offset=40&limit=20`) skips N rows; simple and allows jumping to any page, but slow for deep pages and unstable when data changes. **Cursor** (`?cursor=abc&limit=20`) continues *after the last item seen*; stable and fast at any depth, but you can't jump to page 50.

| | Offset | Cursor / keyset |
|---|---|---|
| SQL | `LIMIT 20 OFFSET 40` | `WHERE (created_at, id) < (:c, :i) ... LIMIT 20` |
| Cost on deep pages | O(offset): DB reads and discards rows | O(limit) with an index |
| Concurrent inserts/deletes | Items duplicated or skipped between pages | Stable |
| Random page access / "page 5 of 20" | Yes | No |
| Total count | Easy (but `COUNT(*)` costs) | Optional / expensive |
| Best for | Admin tables, small datasets | Feeds, infinite scroll, large/real-time datasets, public APIs |

```http
GET /orders?limit=2 HTTP/1.1

HTTP/1.1 200 OK
Link: </orders?limit=2&cursor=eyJ0IjoiMjAyNi0wMS0wMVQxMDowMDowMFoiLCJpIjo5fQ>; rel="next"

{
  "data": [{ "id": 10 }, { "id": 9 }],
  "next_cursor": "eyJ0IjoiMjAyNi0wMS0wMVQxMDowMDowMFoiLCJpIjo5fQ",
  "has_more": true
}
```

[↑ Back to top](#table-of-contents)

### 12. How do you implement cursor (keyset) pagination?

`🟡 Middle` · `#pagination` `#sql` `#typescript`

Sort by a **unique, indexed, deterministic key** (e.g. `(created_at DESC, id DESC)`), fetch `limit + 1` rows to know whether there is a next page, and encode the last row's sort key as an opaque cursor. The next query uses a **row-value comparison** instead of `OFFSET`.

![Cursor pagination flow](./diagrams/cursor-pagination.png)

```ts
import { Pool } from "pg";
const pool = new Pool();

type Cursor = { t: string; i: number };
const encode = (c: Cursor) => Buffer.from(JSON.stringify(c)).toString("base64url");
const decode = (s: string): Cursor => JSON.parse(Buffer.from(s, "base64url").toString());

app.get("/orders", async (req, reply) => {
  const limit = Math.min(Number(req.query.limit) || 20, 100);
  const cursor = req.query.cursor ? decode(req.query.cursor) : null;

  // index: CREATE INDEX ON orders (created_at DESC, id DESC);
  const { rows } = cursor
    ? await pool.query(
        `SELECT id, created_at, total FROM orders
         WHERE (created_at, id) < ($1, $2)
         ORDER BY created_at DESC, id DESC LIMIT $3`,
        [cursor.t, cursor.i, limit + 1],
      )
    : await pool.query(
        `SELECT id, created_at, total FROM orders
         ORDER BY created_at DESC, id DESC LIMIT $1`,
        [limit + 1],
      );

  const hasMore = rows.length > limit;
  const data = hasMore ? rows.slice(0, limit) : rows;
  const last = data.at(-1);
  return {
    data,
    has_more: hasMore,
    next_cursor: hasMore && last ? encode({ t: last.created_at.toISOString(), i: last.id }) : null,
  };
});
```

Details that interviewers probe:

- The sort key **must be unique** (add `id` as tie-breaker), otherwise rows with equal timestamps are skipped.
- Mixed sort directions break row-value comparison; use `OR` expansion or one direction.
- Treat the cursor as **opaque** (base64, optionally HMAC-signed/encrypted) so clients cannot depend on or tamper with it, and you can change its content later.
- Validate cursors; return `400` for garbage.
- Row-value comparison `(a,b) < (x,y)` is supported by PostgreSQL/MySQL and uses a composite index; SQL Server needs the expanded form `a < x OR (a = x AND b < y)`.
- Backward paging = flip the comparison and order, then reverse the result.

> **Follow-up:** How do you give a `total_count`? Separate optional endpoint/param (`?include=total`) or approximate stats; exact `COUNT(*)` on big tables is expensive.

[↑ Back to top](#table-of-contents)

### 13. How do you design filtering, sorting and sparse fieldsets?

`🟡 Middle` · `#filtering` `#sorting` `#rest`

Keep them as **query parameters on the collection**, whitelist every field, and document the grammar. Never pass raw user input into SQL/ORM operators.

```http
GET /orders?status=paid,shipped&created_at[gte]=2026-01-01&total[lt]=500
            &sort=-created_at,total&fields=id,status,total&limit=20
GET /orders?include=customer,items        # relationship expansion (JSON:API / Stripe "expand")
GET /orders?q=ivan                         # full-text search
```

| Concern | Convention | Notes |
|---|---|---|
| Equality filter | `?status=paid` | Multi-value via comma or repeated key |
| Range | `?price[gte]=10` or `?price_min=10` | Pick one style |
| Sort | `?sort=-created_at,name` | `-` = descending |
| Sparse fields | `?fields=id,name` / `fields[orders]=id` (JSON:API) | Reduces payload; also a cache-key multiplier |
| Expansion | `?include=customer` / `?expand=customer` | Avoid N+1 server-side |
| Complex queries | Filter DSL (`filter=status eq 'paid'`, OData) or `POST /orders/search` | Only if you really need it |

```ts
const SORTABLE = new Set(["created_at", "total"]);
function parseSort(sort = "-created_at") {
  return sort.split(",").map((f) => {
    const dir = f.startsWith("-") ? "DESC" : "ASC";
    const col = f.replace(/^-/, "");
    if (!SORTABLE.has(col)) throw httpError(400, `Cannot sort by ${col}`);
    return `${col} ${dir}`; // column is whitelisted, safe to interpolate
  });
}
```

Pitfalls: unindexed filters causing table scans (restrict filters to indexed columns), unbounded `limit`, filter-injection (`$where` style operators in Mongo), and sort instability without a tie-breaker.

[↑ Back to top](#table-of-contents)

### 14. How do you design bulk and batch endpoints?

`🟡 Middle` · `#batch` `#rest`

Prefer **collection-level endpoints** that accept an array, define clear **atomicity** (all-or-nothing vs partial success), cap the size, and return **per-item results**.

```http
POST /orders:batch HTTP/1.1          # or POST /orders/bulk
Content-Type: application/json
Idempotency-Key: 9b2c...

{"items":[{"sku":"A1","qty":1},{"sku":"B2","qty":0}]}

HTTP/1.1 207 Multi-Status
Content-Type: application/json

{"results":[
  {"index":0,"status":201,"id":"ord_1"},
  {"index":1,"status":422,"error":{"type":"https://api.example.com/problems/validation","detail":"qty must be >= 1"}}
]}
```

| Strategy | Response | Trade-off |
|---|---|---|
| All-or-nothing (transaction) | `200/201` or a single `4xx` | Simple for clients; one bad item fails everything |
| Partial success | `207 Multi-Status` (WebDAV, widely borrowed) or `200` with per-item status | Clients must inspect every item; retries must be per-item |
| Async bulk | `202` + operation resource | Very large batches, see [long-running operations](#22-how-do-you-design-long-running-operations-202--status-resource) |

Rules: enforce a **max batch size** (e.g. 100) and payload size, keep **item order** in the response (or return client-supplied `ref` IDs), make the whole call idempotent, and count each item toward rate limits/cost. Alternatives: HTTP/2 multiplexing makes many small requests cheap, GraphQL aliases, or a generic `/batch` endpoint (Google-style) which is harder to authorize, cache and rate-limit.

[↑ Back to top](#table-of-contents)

## API evolution: versioning, compatibility, contracts

### 15. What are the API versioning strategies and their trade-offs?

`🟡 Middle` · `#versioning`

Version only when you must make a **breaking change**; additive changes shouldn't need a new version. The main options are URL path, custom header/query, and media-type versioning.

| Strategy | Example | Pros | Cons |
|---|---|---|---|
| URL path | `/v2/orders` | Obvious, cacheable, easy routing/docs/curl, easy to deprecate per version | "Not RESTful" purists (URI should identify a resource, not a version); clients must change URLs |
| Query param | `/orders?version=2` | Easy to add | Messy cache keys, optional-param pitfalls |
| Custom header | `API-Version: 2026-03-01` | Clean URLs | Hidden, harder to test in browser, must `Vary` |
| Media type | `Accept: application/vnd.acme.v2+json` | Most "correct" (version the representation) | Harder tooling/docs; poor DX |
| Date-based | `Stripe-Version: 2024-06-20` | Fine-grained, account pinned to a version, gradual upgrades | Needs a transformation layer in the server |
| No versioning (evolution) | Additive changes only, GraphQL-style deprecation | Least overhead | Needs strong discipline and tooling |

```http
GET /v2/orders/9 HTTP/1.1
GET /orders/9 HTTP/1.1
Accept: application/vnd.acme+json; version=2
```

Practical advice: **path-based major versions** (`v1`, `v2`) are the most common and a defensible default; keep the number of live versions small (≤2); share code between versions via adapters/transformers at the edge rather than forking services; and communicate version lifecycle in docs and headers (see next question).

> **Follow-up:** How does Stripe avoid `v2` rewrites? Each account is pinned to the date version of its first request; the server applies "version change" transformations to responses, so old integrations keep working.

[↑ Back to top](#table-of-contents)

### 16. What counts as a breaking change, and how do you deprecate an API safely?

`🔴 Senior` · `#versioning` `#deprecation` `#compatibility`

**Backward compatible** = existing clients keep working without changes. You can add; you can't remove, rename, or tighten. Deprecation is a managed process: announce, signal in-band, measure usage, sunset, remove.

| Safe (non-breaking) | Breaking |
|---|---|
| Add a new endpoint | Remove/rename an endpoint, field or enum value |
| Add an **optional** request field/param | Make an optional field **required**, or tighten validation (shorter max length) |
| Add a response field | Change a field's type, format or meaning (`price` cents to dollars) |
| Add a new optional header | Change default behavior, sort order, pagination size |
| Loosen validation | Change status code/error shape that clients branch on |
| Add enum values *only if clients are told to tolerate unknown values* | Change auth scheme, URL structure, rate limits drastically |

Robustness principle for clients: **tolerant reader** (ignore unknown fields, tolerate unknown enum values). Document that explicitly, otherwise adding a field *is* breaking for strict clients.

Deprecation signals (all in-band, machine-readable):

```http
HTTP/1.1 200 OK
Deprecation: @1767225600                      ; RFC 9745 (structured-field date, Unix seconds)
Sunset: Wed, 31 Dec 2026 23:59:59 GMT         ; RFC 8594
Link: <https://docs.example.com/migrate-v2>; rel="deprecation"; type="text/html"
Link: <https://api.example.com/v2/orders>; rel="successor-version"
```

Process:

1. Ship the replacement first; publish a migration guide and changelog.
2. Add `Deprecation`/`Sunset` headers and mark the operation `deprecated: true` in OpenAPI.
3. **Measure** per-client usage (API key/client ID); contact the heavy users directly.
4. Brownouts (scheduled short outages) shortly before the sunset to flush out stragglers.
5. After the sunset date return `410 Gone` with a problem+json pointing to the migration docs.
6. Enforce in CI with a breaking-change detector (e.g. `oasdiff`) on the OpenAPI diff.

[↑ Back to top](#table-of-contents)

### 17. What is OpenAPI and what are contract-first vs code-first approaches?

`🔴 Senior` · `#openapi` `#contracts`

OpenAPI (OAS) is the standard, language-agnostic description of an HTTP API (paths, operations, schemas, auth) in YAML/JSON. As of this writing the latest published version is **OpenAPI 3.2.0** (September 2025), which is backward compatible with 3.1; 3.1 aligns its schemas with JSON Schema 2020-12, while 3.0 used an adapted subset. **Contract-first** = write the spec first and generate/validate code from it; **code-first** = write code and generate the spec from annotations/types.

```yaml
openapi: 3.1.0
info: { title: Orders API, version: 1.4.0 }
paths:
  /orders/{id}:
    get:
      operationId: getOrder
      parameters:
        - { name: id, in: path, required: true, schema: { type: string } }
      responses:
        "200":
          description: OK
          content:
            application/json:
              schema: { $ref: "#/components/schemas/Order" }
        "404":
          description: Not found
          content:
            application/problem+json:
              schema: { $ref: "#/components/schemas/Problem" }
components:
  schemas:
    Order:
      type: object
      required: [id, status]
      properties:
        id: { type: string }
        status: { type: string, enum: [pending, paid, shipped] }
    Problem:
      type: object
      properties: { type: { type: string }, title: { type: string }, status: { type: integer } }
```

| | Contract-first | Code-first |
|---|---|---|
| Source of truth | The spec (reviewed in PRs) | The code (Fastify schemas, NestJS decorators, tsoa, zod-to-openapi) |
| Strengths | Design review before coding, parallel frontend/backend work, mocks, consistent style via linters | Spec never drifts from code, low ceremony, great for TS-heavy teams |
| Weaknesses | Code can drift unless validated at runtime/in tests | Spec quality depends on annotations; design is an afterthought, accidental breaking changes |
| Good for | Public APIs, multi-team, partners | Internal services, rapid iteration |

Making either approach safe: **validate requests/responses against the schema at runtime or in tests**, lint with Spectral, diff specs in CI for breaking changes, and generate clients/types from the same spec.

```ts
// Code-first with Fastify: the JSON Schema is validation AND documentation
app.get("/orders/:id", {
  schema: {
    params: { type: "object", properties: { id: { type: "string" } }, required: ["id"] },
    response: { 200: { $ref: "Order#" } },
  },
}, handler); // @fastify/swagger turns the schemas into an OpenAPI document
```

[↑ Back to top](#table-of-contents)

### 18. How do you document an API and generate SDKs?

`🟡 Middle` · `#openapi` `#docs` `#sdk`

Treat the **OpenAPI document as the artifact** and derive everything else from it: reference docs, SDKs, mocks, tests.

- **Reference docs:** Swagger UI, Redoc, Scalar, Stoplight; plus hand-written guides (auth, pagination, errors, idempotency, rate limits, webhooks) and a changelog. Reference alone is not enough; "getting started in 5 minutes" matters more.
- **Examples** in the spec (`example`/`examples`) for every request/response, including errors; copy-pasteable `curl`.
- **SDK/client generation:** `openapi-typescript` (types only) + `openapi-fetch`, Orval (React Query/axios clients), OpenAPI Generator (many languages), commercial generators (Speakeasy, Fern, Stainless) that produce idiomatic, retrying, paginating SDKs.
- **Mock servers:** Prism, for frontend work before the backend exists.
- **Quality gates:** Spectral lint rules (naming, required descriptions, error shapes), `oasdiff` for breaking changes, example validation.

```bash
npx openapi-typescript ./openapi.yaml -o ./src/api-types.d.ts
```

```ts
import createClient from "openapi-fetch";
import type { paths } from "./api-types";

const api = createClient<paths>({ baseUrl: "https://api.example.com" });
const { data, error } = await api.GET("/orders/{id}", { params: { path: { id: "ord_1" } } });
// data is typed as Order, error as Problem
```

Generated SDK tips: make `operationId`s stable and meaningful (they become method names), tag operations, keep schemas named and reusable (`$ref`), and version the SDK with semver tied to the API spec.

[↑ Back to top](#table-of-contents)

## Reliability, concurrency and caching

### 19. How do you implement idempotency keys for POST requests?

`🟡 Middle` · `#idempotency` `#reliability` `#payments`

The client sends a unique `Idempotency-Key` header with each logical operation. The server stores the **first result under that key** and **replays it** for retries, so a timeout-and-retry can never create a duplicate charge/order.

![Idempotency key flow](./diagrams/idempotency-key-flow.png)

```http
POST /payments HTTP/1.1
Idempotency-Key: 8e03978e-40d5-43e8-bc93-6894a57f9324
Content-Type: application/json

{"amount": 4200, "currency": "EUR", "customer": "cus_1"}
```

Design rules (this mirrors what Stripe-style APIs do; the header itself is still an IETF draft, `draft-ietf-httpapi-idempotency-key-header`, so check its status before citing it as a standard):

1. **Key is client-generated** (UUIDv4), scoped per client/tenant, kept for a TTL (e.g. 24h).
2. **Atomically claim the key** before doing work (unique constraint / `SET NX`), otherwise two concurrent retries both run.
3. Store a **fingerprint of the request** (hash of method+path+body). Same key + different payload → `422` (the draft suggests `422`); it is a client bug.
4. Same key while the first is **still running** → `409 Conflict` (the draft says `409`) with `Retry-After`.
5. Finished → return the **stored status and body** exactly (and mark with a header like `Idempotent-Replayed: true`).
6. Don't cache `5xx` that happened *before* side effects started; allow retry. Cache outcomes of completed (including `4xx` validation) attempts.
7. The business write and the stored response should commit in **one transaction** (or use an outbox) so you never record "done" without the effect.

```ts
import { createHash } from "node:crypto";

app.post("/payments", async (req, reply) => {
  const key = req.headers["idempotency-key"] as string | undefined;
  if (!key) return reply.status(400).send({ title: "Idempotency-Key header required" });

  const hash = createHash("sha256").update(JSON.stringify(req.body)).digest("hex");

  // INSERT ... ON CONFLICT DO NOTHING; unique (client_id, key)
  const claimed = await db.query(
    `INSERT INTO idempotency_keys (client_id, key, request_hash, state)
     VALUES ($1,$2,$3,'in_progress') ON CONFLICT DO NOTHING RETURNING 1`,
    [req.client.id, key, hash],
  );

  if (claimed.rowCount === 0) {
    const { rows: [row] } = await db.query(
      `SELECT * FROM idempotency_keys WHERE client_id=$1 AND key=$2`, [req.client.id, key]);
    if (row.request_hash !== hash) return reply.status(422).send({ title: "Key reused with different payload" });
    if (row.state === "in_progress") return reply.status(409).header("Retry-After", "2").send({ title: "Request in progress" });
    return reply.status(row.status).header("Idempotent-Replayed", "true").send(row.response);
  }

  const result = await chargeCard(req.body);            // the side effect
  await db.query(
    `UPDATE idempotency_keys SET state='done', status=201, response=$3 WHERE client_id=$1 AND key=$2`,
    [req.client.id, key, result]);
  return reply.status(201).send(result);
});
```

Caveat: a crash between `chargeCard` and the `UPDATE` leaves the key `in_progress`. Handle with recovery (lock timeout + pass the key to the downstream provider, which should itself be idempotent) or do both in one DB transaction when the effect is local.

> **Follow-up:** Isn't `PUT` already idempotent? Yes, which is why idempotency keys are for `POST`/`PATCH`; an alternative is letting the client choose the ID: `PUT /payments/{client-uuid}`.

[↑ Back to top](#table-of-contents)

### 20. How does optimistic concurrency work with ETag and If-Match?

`🟡 Middle` · `#concurrency` `#etag` `#http`

The server returns a version tag (`ETag`) with each representation. To update, the client sends it back in `If-Match`; if the resource changed in the meantime the server responds `412 Precondition Failed`, preventing **lost updates** without locks.

![ETag conditional request flow](./diagrams/etag-conditional-request.png)

```http
GET /documents/7 HTTP/1.1

HTTP/1.1 200 OK
ETag: "v5"

PUT /documents/7 HTTP/1.1
If-Match: "v5"
{"title":"New"}

HTTP/1.1 412 Precondition Failed          # someone else already moved it to v6
```

```ts
app.put("/documents/:id", async (req, reply) => {
  const ifMatch = req.headers["if-match"];
  if (!ifMatch) return reply.status(428).send({ title: "If-Match required" }); // Precondition Required

  const version = Number(ifMatch.replace(/"/g, "").replace(/^v/, ""));
  const res = await db.query(
    `UPDATE documents SET title=$1, version=version+1
     WHERE id=$2 AND version=$3 RETURNING version`,
    [req.body.title, req.params.id, version],
  );
  if (res.rowCount === 0) return reply.status(412).send({ title: "Document was modified" });
  return reply.header("ETag", `"v${res.rows[0].version}"`).send({ ok: true });
});
```

- ETag sources: a version column / `updated_at`, or a hash of the body. Use a **strong** validator (`"abc"`) for concurrency control; weak (`W/"abc"`) is only for caching.
- `If-None-Match` + `GET` = conditional read (`304`); `If-Match` + `PUT/PATCH/DELETE` = conditional write.
- Also works for **create-if-absent**: `If-None-Match: *` on `PUT`.
- Alternative: a `version` field in the body (common in JSON-only APIs), but headers keep it generic.

> **Follow-up:** Optimistic vs pessimistic? Optimistic assumes conflicts are rare and detects them at write time; pessimistic locks (`SELECT ... FOR UPDATE`) hold resources and don't fit stateless HTTP well.

[↑ Back to top](#table-of-contents)

### 21. How does HTTP caching work for APIs (Cache-Control, ETag, 304)?

`🟡 Middle` · `#caching` `#http` `#performance`

Responses can be reused by browsers, CDNs and proxies according to `Cache-Control` (freshness) and validators like `ETag`/`Last-Modified` (revalidation). Fresh → served without contacting the origin; stale → revalidated with a conditional request, and a `304 Not Modified` saves the body transfer. (Semantics: RFC 9111.)

| Directive | Meaning |
|---|---|
| `max-age=60` | Fresh for 60 s (any cache) |
| `s-maxage=300` | Same, for **shared** caches (CDN) only |
| `public` / `private` | Shared caches may / may not store it (`private` for per-user data) |
| `no-cache` | May be stored, but **must revalidate** before reuse |
| `no-store` | Never store (sensitive data) |
| `must-revalidate` | Don't serve stale once expired |
| `stale-while-revalidate=30` / `stale-if-error=600` | Serve stale while refreshing / on origin errors (RFC 5861) |
| `immutable` | Never changes during freshness lifetime |

```http
GET /products/9 HTTP/1.1

HTTP/1.1 200 OK
Cache-Control: public, max-age=60, stale-while-revalidate=30
ETag: "a1b2"
Vary: Accept-Encoding

GET /products/9 HTTP/1.1
If-None-Match: "a1b2"

HTTP/1.1 304 Not Modified
Cache-Control: public, max-age=60
ETag: "a1b2"
```

```ts
import { createHash } from "node:crypto";
app.get("/products/:id", async (req, reply) => {
  const product = await getProduct(req.params.id);
  const etag = `"${createHash("sha1").update(JSON.stringify(product)).digest("base64url")}"`;
  if (req.headers["if-none-match"] === etag) return reply.status(304).send();
  return reply.header("ETag", etag).header("Cache-Control", "public, max-age=60").send(product);
});
```

Gotchas: authenticated responses default to `private`/`no-store` in your policy (an `Authorization` header makes shared caches cautious, but be explicit); use `Vary: Authorization, Accept-Language` when the representation varies; `POST` responses are rarely cached; `no-cache` does **not** mean "don't cache" (that's `no-store`); a CDN cache key must include the query string; invalidate via short TTLs, surrogate keys/purge APIs, or versioned URLs.

[↑ Back to top](#table-of-contents)

### 22. How do you design long-running operations (202 + status resource)?

`🟡 Middle` · `#async` `#rest` `#operations`

Don't hold the HTTP connection open. Accept the request, return **`202 Accepted`** with a `Location` pointing to an **operation (status) resource**, process in the background, and let the client poll (or be notified by webhook).

![Async long-running operation](./diagrams/async-long-running-operation.png)

```http
POST /reports HTTP/1.1
{"range":"2026-Q1"}

HTTP/1.1 202 Accepted
Location: /operations/42
Retry-After: 5

GET /operations/42
HTTP/1.1 200 OK
{"id":"42","status":"running","progress":0.4}

GET /operations/42
HTTP/1.1 303 See Other                 # finished: redirect to the result
Location: /reports/9
```

Design notes:

- States: `pending → running → succeeded | failed | cancelled`; on failure return a problem+json object in the operation (`error`).
- Honor `Retry-After`; clients should use backoff; allow cancel with `DELETE /operations/42`.
- Operation resources have a **TTL**, and need auth scoped to the creator.
- Make the initial `POST` idempotent (idempotency key) so a retry doesn't enqueue twice.
- Push alternatives: webhooks (callback URL in the request), SSE/WebSocket for progress.
- Google AIP-151 "Operation" and Microsoft's `Operation-Location` pattern are well-known variants.

```ts
app.post("/reports", async (req, reply) => {
  const op = await createOperation({ type: "report", input: req.body });
  await queue.add("report", { opId: op.id });
  return reply.status(202).header("Location", `/operations/${op.id}`).header("Retry-After", "5").send({ id: op.id, status: "pending" });
});
```

[↑ Back to top](#table-of-contents)

### 23. How do you handle file uploads in an API?

`🟡 Middle` · `#uploads` `#rest`

For small files use `multipart/form-data` or a raw body; for large files **don't proxy bytes through your API**: issue a **pre-signed URL** so the client uploads directly to object storage (S3/GCS), then confirm. For unreliable networks use **resumable/chunked** uploads.

| Approach | How | Use |
|---|---|---|
| `multipart/form-data` | One request with file(s) + fields | Small files (avatars, documents), forms |
| Raw body (`PUT /files/{id}` with `Content-Type`) | Stream the bytes | Simple, API-to-API |
| Pre-signed URL | `POST /uploads` → `{url, fields}`, client `PUT`s to S3, then `POST /uploads/{id}/complete` | Large files, offloads bandwidth/CPU |
| Resumable | tus protocol, S3 multipart upload, GCS resumable sessions | Huge files, flaky mobile |
| Base64 in JSON | `{"file":"..."}` | Avoid: +33% size, memory heavy |

```ts
// Fastify + @fastify/multipart: stream with limits, never buffer big files in memory
import multipart from "@fastify/multipart";
import { pipeline } from "node:stream/promises";
import { createWriteStream } from "node:fs";

await app.register(multipart, { limits: { fileSize: 10 * 1024 * 1024, files: 1 } });

app.post("/avatars", async (req, reply) => {
  const file = await req.file();
  if (!file) return reply.status(400).send({ title: "file required" });
  if (!["image/png", "image/jpeg"].includes(file.mimetype)) return reply.status(415).send({ title: "Unsupported type" });
  await pipeline(file.file, createWriteStream(`/tmp/${crypto.randomUUID()}`)); // real code: object storage
  if (file.file.truncated) return reply.status(413).send({ title: "File too large" });
  return reply.status(201).send({ ok: true });
});
```

Security: enforce size limits (`413`) at the proxy and app, validate the real content (magic bytes), not just the client-sent `Content-Type`/filename, generate your own storage names (path traversal), store outside the web root, scan for malware, serve downloads with `Content-Disposition` and a safe `Content-Type`, and use short-lived signed URLs with constrained size/type.

[↑ Back to top](#table-of-contents)

### 24. How do you design rate limiting, and what headers should you return?

`🔴 Senior` · `#rate-limiting` `#reliability` `#http`

Rate limiting protects availability and fairness. Pick an algorithm, key it by client identity (API key/user/IP/tenant, plus per-endpoint cost), enforce it at the gateway or in shared state (Redis), return **`429 Too Many Requests`** with `Retry-After`, and tell clients their remaining budget.

| Algorithm | Behaviour | Trade-off |
|---|---|---|
| Fixed window | N per calendar window | Simple; allows 2x burst at window edges |
| Sliding window log | Timestamps of every request | Exact; memory heavy |
| Sliding window counter | Weighted blend of two windows | Good accuracy, cheap |
| Token bucket | Tokens refill at rate r, capacity b | Allows bursts; most popular (Stripe, AWS) |
| Leaky bucket | Constant outflow rate | Smooths traffic; queueing |
| Concurrency limit | Max in-flight requests | Protects expensive endpoints |

```http
HTTP/1.1 429 Too Many Requests
Retry-After: 30
RateLimit-Policy: "default";q=100;w=60
RateLimit: "default";r=0;t=30
Content-Type: application/problem+json

{"type":"https://api.example.com/problems/rate-limit","title":"Rate limit exceeded","status":429}
```

Headers: `Retry-After` is standard (RFC 9110). The **`RateLimit` / `RateLimit-Policy`** fields are an IETF draft (`draft-ietf-httpapi-ratelimit-headers`, still evolving, earlier drafts used `RateLimit-Limit/Remaining/Reset`), while the de-facto `X-RateLimit-Limit/Remaining/Reset` (GitHub, many others) is widespread. Pick one, document it, and keep it consistent.

```ts
// Atomic token bucket in Redis (Lua) - avoids read-modify-write races
const script = `
local k=KEYS[1]; local rate=tonumber(ARGV[1]); local cap=tonumber(ARGV[2]); local now=tonumber(ARGV[3])
local d=redis.call('HMGET',k,'tokens','ts'); local tokens=tonumber(d[1]) or cap; local ts=tonumber(d[2]) or now
tokens=math.min(cap, tokens+(now-ts)*rate)
local ok=0; if tokens>=1 then tokens=tokens-1; ok=1 end
redis.call('HSET',k,'tokens',tokens,'ts',now); redis.call('PEXPIRE',k,math.ceil(cap/rate)*2)
return {ok, math.floor(tokens)}`;
// rate = tokens per ms; call with redis.eval(script, 1, `rl:${clientId}`, rate, cap, Date.now())
```

Senior-level considerations: limit per **tenant and per user** and per expensive operation (cost-based, e.g. GraphQL complexity), use `429` for client limits and `503` for overload (load shedding), apply limits **before** auth-expensive work (but also after auth for per-user), fail open vs closed when Redis is down, protect login/OTP endpoints with stricter limits, and make clients back off with jitter.

[↑ Back to top](#table-of-contents)

### 25. How do you make an API observable (request IDs, tracing, metrics)?

`🔴 Senior` · `#observability` `#operations`

Give every request an **ID** and propagate it everywhere: accept an incoming one (or generate it), put it in every log line, forward it downstream, and **return it to the client** so support can find the exact request.

- **Correlation:** `X-Request-ID` (convention) and the W3C **Trace Context** headers `traceparent`/`tracestate` for distributed tracing (OpenTelemetry).
- **Logs:** structured JSON with `request_id`, `trace_id`, route template (`/orders/:id`, not the raw URL), status, latency, client ID; never log secrets/PII/tokens.
- **Metrics (RED):** **R**ate, **E**rrors, **D**uration, labeled by method, route template and status class; use histograms for latency (p50/p95/p99). Avoid high-cardinality labels (user IDs, raw paths).
- **SLOs:** define availability/latency objectives per API and alert on error-budget burn rather than on single spikes.
- **Return IDs:** in a response header and in problem+json (`trace_id`).

```ts
import { randomUUID } from "node:crypto";
app.addHook("onRequest", async (req, reply) => {
  const id = (req.headers["x-request-id"] as string) ?? randomUUID();
  req.id = id; // Fastify also supports genReqId
  reply.header("X-Request-ID", id);
});
app.addHook("onResponse", async (req, reply) => {
  req.log.info({ route: req.routeOptions.url, status: reply.statusCode, ms: reply.elapsedTime }, "request");
});
```

Also expose health endpoints (`/healthz` liveness, `/readyz` readiness), and audit logs for security-relevant actions.

[↑ Back to top](#table-of-contents)

## CORS and hypermedia

### 26. What is CORS and why does the same-origin policy exist?

`🟢 Junior` · `#cors` `#browser` `#security`

The **same-origin policy** stops JavaScript on one origin (scheme + host + port) from **reading** responses of another origin, so a malicious page can't read your bank data using your cookies. **CORS** (Cross-Origin Resource Sharing) is the mechanism by which a server **opts in** to letting specific other origins read its responses, via `Access-Control-*` response headers.

Key facts:

- CORS is enforced **by the browser** only. `curl`, servers and mobile apps ignore it, so it is **not an access-control or auth mechanism**.
- The request is usually *still sent* (for simple requests); CORS decides whether JS can read the response. That is why CORS does not protect against CSRF; use `SameSite` cookies / CSRF tokens.
- `https://app.example.com` and `https://api.example.com` are different origins; so are `http` vs `https` and different ports.
- Typical error: "No 'Access-Control-Allow-Origin' header is present" → server must send it.

```ts
import cors from "@fastify/cors";
await app.register(cors, {
  origin: ["https://app.example.com"],   // allowlist, don't reflect arbitrary Origin
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Authorization", "Content-Type"],
  credentials: true,
  maxAge: 600,
});
```

Not every cross-origin call needs a CORS setup if you **proxy** through the same origin (Next.js rewrites, reverse proxy), which is often the simplest fix.

[↑ Back to top](#table-of-contents)

### 27. How do CORS preflight requests and credentials work in depth?

`🟡 Middle` · `#cors` `#browser` `#security`

A request is **simple** (no preflight) only if the method is `GET`/`HEAD`/`POST`, headers are limited to the CORS-safelisted ones, and `Content-Type` is `text/plain`, `multipart/form-data` or `application/x-www-form-urlencoded`. Anything else (JSON bodies, `Authorization`, `PUT/PATCH/DELETE`, custom headers) triggers a **preflight**: an automatic `OPTIONS` request asking permission first.

![CORS preflight sequence](./diagrams/cors-preflight.png)

```http
OPTIONS /orders/1 HTTP/1.1
Origin: https://app.example.com
Access-Control-Request-Method: PUT
Access-Control-Request-Headers: authorization, content-type

HTTP/1.1 204 No Content
Access-Control-Allow-Origin: https://app.example.com
Access-Control-Allow-Methods: GET, PUT, PATCH, DELETE
Access-Control-Allow-Headers: authorization, content-type
Access-Control-Allow-Credentials: true
Access-Control-Max-Age: 600
Vary: Origin
```

| Header | Role |
|---|---|
| `Access-Control-Allow-Origin` | One origin or `*` |
| `Access-Control-Allow-Methods` / `-Headers` | Permitted methods/headers (preflight response) |
| `Access-Control-Allow-Credentials: true` | Allow cookies/HTTP auth/client certs |
| `Access-Control-Expose-Headers` | Response headers JS may read beyond the safelisted ones (`ETag`, `Location`, `RateLimit-*`) |
| `Access-Control-Max-Age` | Preflight cache (browsers cap it, e.g. Chromium 2 h) |

**Credentials rules:** the client must opt in (`fetch(url, { credentials: "include" })`), and then the server **cannot use `*`** for `Allow-Origin` (nor wildcards for `Allow-Headers`/`Allow-Methods`/`Expose-Headers`); it must echo a specific allowlisted origin and send `Allow-Credentials: true`. When you echo origins dynamically, always add `Vary: Origin`, otherwise a CDN may serve one origin's headers to another.

Common pitfalls:

- Handling `OPTIONS` **after** the auth middleware → preflight gets `401` and fails (preflights carry no credentials).
- Reflecting any `Origin` with credentials = full cross-site data theft.
- Redirects on preflight requests are not allowed.
- Error responses (`4xx/5xx`) without CORS headers show up in the browser as a generic CORS error, hiding the real problem.
- `null` origin allowlisted (sandboxed iframes, `file://`) is dangerous.

> **Follow-up:** How do cookies interact? Third-party cookies also need `SameSite=None; Secure`, and browsers increasingly restrict third-party cookies; prefer same-site setups or bearer tokens.

[↑ Back to top](#table-of-contents)

### 28. What is HATEOAS, the Richardson Maturity Model, and why do few APIs use it?

`🔴 Senior` · `#rest` `#hateoas`

HATEOAS (Hypermedia As The Engine Of Application State) means responses include **links and available actions**, so clients navigate the API by following links rather than hard-coding URLs. Fielding considers it mandatory for REST; the Richardson Maturity Model grades APIs: level 0 (one endpoint/RPC), 1 (resources), 2 (HTTP verbs + status codes), **3 (hypermedia controls)**. Most "REST" APIs stop at level 2.

```json
{
  "id": "ord_42",
  "status": "pending",
  "total": 4200,
  "_links": {
    "self":   { "href": "/orders/42" },
    "cancel": { "href": "/orders/42/cancellations", "method": "POST" },
    "pay":    { "href": "/orders/42/payments", "method": "POST" },
    "items":  { "href": "/orders/42/items" }
  }
}
```

Benefits: server can change URLs and workflow, clients only show actions the state allows (a `cancel` link disappears once shipped), good for pagination (`Link: rel="next"`). Formats: HAL, JSON:API, Siren, Hydra/JSON-LD, Collection+JSON.

Why adoption is low: clients are still written against a **fixed human-readable workflow**; generic hypermedia clients never materialized; there's no standard for describing the *semantics* of a link to a machine; it increases payload size; OpenAPI/SDK codegen is built around fixed endpoints; and teams get most of the practical value from simple conventions. Where it does stick: pagination links, `Location` headers, `_links` in HAL/GitHub-style APIs, and state-dependent action lists in workflow-heavy domains (payments, order management).

[↑ Back to top](#table-of-contents)

## GraphQL

### 29. What is GraphQL? Explain schema, queries, mutations and resolvers.

`🟢 Junior` · `#graphql`

GraphQL is a query language and runtime where the client asks for **exactly the fields it needs** from a **single endpoint** (usually `POST /graphql`), against a **strongly typed schema**. The server executes the query by calling a **resolver** function for each field.

```graphql
# Schema (SDL)
type Query {
  user(id: ID!): User
  posts(first: Int = 10, after: String): PostConnection!
}
type Mutation {
  createPost(input: CreatePostInput!): Post!
}
type Subscription {
  postCreated: Post!
}
type User  { id: ID!, name: String!, posts: [Post!]! }
type Post  { id: ID!, title: String!, author: User! }
input CreatePostInput { title: String!, body: String! }
```

```graphql
# Query: client picks fields
query { user(id: "1") { name posts { title } } }
```

```ts
// Resolvers (Apollo Server / graphql-yoga style)
const resolvers = {
  Query: {
    user: (_root, { id }, ctx) => ctx.db.users.findById(id),
  },
  User: {
    posts: (user, _args, ctx) => ctx.db.posts.findByAuthor(user.id), // runs per User
  },
  Mutation: {
    createPost: (_root, { input }, ctx) => ctx.db.posts.create({ ...input, authorId: ctx.user.id }),
  },
};
```

Resolver signature: `(parent, args, context, info)`. Operations: **query** (read, fields may run in parallel), **mutation** (write, top-level fields run serially), **subscription** (push over WebSocket/SSE). Benefits: no over/under-fetching, one round trip, typed schema + introspection → tooling; the schema evolves by adding fields and `@deprecated`. Costs: caching, N+1, query-cost control, error handling (HTTP `200` with an `errors` array and partial `data`), file uploads and learning curve.

[↑ Back to top](#table-of-contents)

### 30. What is the GraphQL N+1 problem and how does DataLoader solve it?

`🟡 Middle` · `#graphql` `#performance` `#dataloader`

Because each field resolves independently, `posts { author { name } }` runs 1 query for posts and then **one query per post** for its author: 1 + N. **DataLoader** collects all `load(key)` calls made in the same tick of the event loop, issues **one batched query** (`WHERE id IN (...)`), and memoizes results per request.

![GraphQL N+1 vs DataLoader](./diagrams/graphql-n-plus-one-dataloader.png)

```ts
import DataLoader from "dataloader";

// The batch function MUST return an array the same length and order as `ids`
const batchUsers = async (ids: readonly number[]) => {
  const rows = await db.query("SELECT * FROM users WHERE id = ANY($1)", [ids]);
  const byId = new Map(rows.map((u) => [u.id, u]));
  return ids.map((id) => byId.get(id) ?? new Error(`User ${id} not found`));
};

// Create loaders PER REQUEST (they cache; sharing across users leaks data and stale values)
export const createContext = ({ req }) => ({
  user: req.user,
  loaders: { user: new DataLoader(batchUsers) },
});

const resolvers = {
  Post: { author: (post, _a, ctx) => ctx.loaders.user.load(post.authorId) },
};
```

Key points:

- Batching relies on **same-tick coalescing** (`process.nextTick`/microtask scheduling); resolvers must call `load` without awaiting something unrelated first.
- The per-request cache also de-duplicates identical keys.
- For one-to-many (`User.posts`) make a loader keyed by `userId` returning arrays, grouped in the batch function.
- Other fixes: join-based resolvers using `info` (look-ahead) to select columns, ORM eager loading, Prisma's built-in batching of `findUnique`, or schema-level tools (Hasura/PostGraphile compile queries to SQL).
- Detect it: tracing (Apollo/OpenTelemetry), query logs showing repeated near-identical statements.

> **Follow-up:** Does DataLoader fix authorization? No: batching must still apply per-object permissions; and never put a user-specific loader in global scope.

[↑ Back to top](#table-of-contents)

### 31. How do you secure a GraphQL API? (depth and complexity limits, introspection, persisted queries)

`🔴 Senior` · `#graphql` `#security`

A single flexible endpoint means clients can craft **expensive queries** (deeply nested, huge lists, aliases to repeat work, batching). Defend in layers: authenticate, authorize in the **resolvers/domain layer**, bound query cost, and restrict *which* queries can run.

| Threat | Mitigation |
|---|---|
| Deeply nested queries (`user { friends { friends { ... } } }`) | **Depth limit** (e.g. `graphql-depth-limit`, `@escape.tech/graphql-armor`) |
| Wide/expensive queries, alias fan-out | **Complexity/cost analysis** (assign cost per field × list size, reject > budget; rate-limit by cost, not request count) |
| Huge page sizes | Require `first`/`last`, cap at e.g. 100 |
| Batched operations / alias abuse (brute-force `login` x1000 in one request) | Limit aliases and batch size; rate limit sensitive mutations |
| Schema discovery | Disable introspection and field suggestions in production for private APIs (not a real control for public ones) |
| Arbitrary queries from attackers | **Persisted queries / allowlist**: only pre-registered operation hashes are executable |
| Authorization gaps (field-level) | Check permissions in every resolver or via directive/middleware; never trust the client to omit fields |
| Large payload/DoS | Body size limit, query timeout, parser token limits |
| CSRF on `GET`/form content types | Require `application/json` or a custom header; `GET` only for queries |
| Error leakage | Mask internal errors (`formatError`) |

```graphql
# Persisted query: client sends only the hash (Apollo APQ convention)
# POST /graphql
{"extensions":{"persistedQuery":{"version":1,"sha256Hash":"ecf4edb46db40b5132295c0291d62fb65d6759a9eedfa4d5d612dd5ec54a6b38"}},"variables":{"id":"1"}}
```

Two flavors: **APQ** (Automatic Persisted Queries, a bandwidth/caching optimization; any client can register a query so it is *not* a security allowlist) and **registered/allowlisted persisted queries** built at CI time (the real security control for first-party clients, the server rejects unknown hashes).

```ts
import depthLimit from "graphql-depth-limit";
const server = new ApolloServer({
  typeDefs, resolvers,
  validationRules: [depthLimit(8)],
  introspection: process.env.NODE_ENV !== "production",
});
```

[↑ Back to top](#table-of-contents)

### 32. Why is caching hard in GraphQL, and how do you do it?

`🟡 Middle` · `#graphql` `#caching` `#performance`

REST caches per URL with HTTP semantics. GraphQL typically sends **`POST /graphql` to one URL** with a varying body, so HTTP/CDN caching doesn't apply by default, and each response is a **mix of entities** with different freshness and permissions.

Strategies:

1. **Persisted queries + `GET`**: `GET /graphql?extensions={"persistedQuery":{...}}&variables=...` makes responses cacheable by URL in a CDN; use `Cache-Control` derived from the shortest `maxAge` of the fields (Apollo `@cacheControl(maxAge: 60)` hints, `scope: PRIVATE` for user data).
2. **Client normalized cache**: Apollo Client/urql/Relay store entities by `__typename:id`, so a mutation result updates every view; requires every type to expose a stable `id`.
3. **Server-side resolver/entity caching**: Redis in front of data sources, DataLoader per-request caching, full-response cache keyed by (query hash, variables, user scope).
4. **HTTP status caveat**: errors still return `200`; only cache responses without `errors`.
5. **Split the schema**: public, cacheable queries vs personalized ones; Relay-style global object IDs (`node(id:)`).

```graphql
type Product @cacheControl(maxAge: 300) {
  id: ID!
  name: String!
  stock: Int! @cacheControl(maxAge: 5)
  myWishlistState: Boolean! @cacheControl(maxAge: 0, scope: PRIVATE)
}
```

Invalidation remains the hard part: use TTLs, mutation-driven cache updates (`cache.modify`), or subscriptions/CDN purge by surrogate key.

[↑ Back to top](#table-of-contents)

### 33. REST vs GraphQL vs gRPC vs tRPC: how do you choose?

`🔴 Senior` · `#architecture` `#graphql` `#grpc` `#trpc`

Choose by **who the consumers are**: public/third-party → REST (+OpenAPI); many diverse frontends with varying data needs → GraphQL; internal service-to-service with strict contracts and performance needs → gRPC; a single TypeScript monorepo with front and back owned by one team → tRPC.

| | REST | GraphQL | gRPC | tRPC |
|---|---|---|---|---|
| Transport | HTTP/1.1–3 | HTTP (usually POST) | HTTP/2 | HTTP (+ WS for subscriptions) |
| Payload | JSON (any) | JSON | Protobuf (binary) | JSON |
| Contract | OpenAPI (optional) | SDL schema (required) | `.proto` (required) | TypeScript types (no schema file) |
| Typing across the wire | Via codegen | Via codegen | Via codegen | **Inferred**, no codegen |
| Fetching | Fixed responses; over/under-fetch | Client-shaped | Fixed messages | Fixed procedures |
| Streaming | SSE/WebSocket (separate) | Subscriptions | **Native** (4 modes) | Subscriptions |
| HTTP caching | **Excellent** | Hard | Not applicable | Limited |
| Browser support | Native | Native | Needs gRPC-Web/Connect proxy | Native |
| Language support | Any | Any | Any (strong) | **TypeScript only** |
| Learning curve / tooling | Lowest | Medium | Medium | Low (for TS teams) |
| Best for | Public APIs, CRUD, partner integrations | BFF for web+mobile, complex graphs | Microservices, low latency, streaming | Full-stack TS apps (Next.js) |

```ts
// tRPC: types flow from server to client with no schema or codegen
import { initTRPC } from "@trpc/server";
import { z } from "zod";
const t = initTRPC.create();
export const appRouter = t.router({
  getUser: t.procedure.input(z.object({ id: z.string() })).query(({ input }) => ({ id: input.id, name: "Ana" })),
  createUser: t.procedure.input(z.object({ name: z.string() })).mutation(({ input }) => ({ id: "1", ...input })),
});
export type AppRouter = typeof appRouter;   // client imports ONLY this type
```

Mixed architectures are normal: gRPC between services, a gateway/BFF exposing GraphQL or REST to clients, public REST for partners. Don't pick GraphQL just to avoid versioning and don't pick gRPC for browser-facing public APIs.

[↑ Back to top](#table-of-contents)

## RPC, real-time and event-driven APIs

### 34. How does gRPC work? (Protobuf, streaming types, HTTP/2)

`🟡 Middle` · `#grpc` `#protobuf` `#http2`

gRPC is an RPC framework where you define services and messages in **Protocol Buffers** (`.proto`), generate client/server code, and call remote methods over **HTTP/2** with binary-encoded messages. HTTP/2 supplies multiplexed streams over one connection, header compression, and bidirectional streaming.

```protobuf
syntax = "proto3";
package orders.v1;

service OrderService {
  rpc GetOrder (GetOrderRequest) returns (Order);                       // unary
  rpc ListOrders (ListOrdersRequest) returns (stream Order);            // server streaming
  rpc UploadItems (stream Item) returns (UploadSummary);                // client streaming
  rpc Chat (stream ChatMessage) returns (stream ChatMessage);           // bidirectional
}

message GetOrderRequest { string id = 1; }
message Order {
  string id = 1;
  Status status = 2;
  repeated Item items = 3;
  reserved 4;                 // never reuse removed field numbers
  reserved "legacy_total";
  enum Status { STATUS_UNSPECIFIED = 0; PENDING = 1; PAID = 2; }
}
message Item { string sku = 1; int32 qty = 2; }
```

| Aspect | Notes |
|---|---|
| Streaming | Unary, server-stream, client-stream, bidi; one TCP connection, many streams |
| Evolution | Field **numbers** are the wire contract: add fields freely, never renumber/retype, `reserved` removed ones; unknown fields are preserved/ignored |
| Errors | gRPC status codes (`NOT_FOUND`, `INVALID_ARGUMENT`, `DEADLINE_EXCEEDED`, `UNAVAILABLE`...) + rich `google.rpc.Status` details |
| Deadlines | Client sets a deadline that propagates across the call chain; cancel propagates too |
| Metadata | Headers/trailers (auth tokens, trace IDs); interceptors = middleware |
| Load balancing | Long-lived HTTP/2 connections defeat L4 balancing; use client-side LB, xDS/mesh or an L7 proxy |
| Browsers | Can't use raw gRPC (no trailer/HTTP/2 control): use **gRPC-Web** or **Connect** |
| Debugging | Binary: use `grpcurl`, reflection, Buf tooling |

Pros: fast, small payloads, strict typed contracts, polyglot codegen, streaming. Cons: not human-readable, no native browser/HTTP caching story, harder public-API story, extra tooling (`buf` for lint/breaking-change checks).

[↑ Back to top](#table-of-contents)

### 35. WebSockets vs Server-Sent Events vs long polling: when to use which?

`🟡 Middle` · `#realtime` `#websocket` `#sse`

Use **SSE** for one-way server→client streams (notifications, live feeds), **WebSockets** for low-latency two-way communication (chat, games, collaborative editing), and **long polling** as a fallback where neither works.

![Long polling vs SSE vs WebSocket](./diagrams/websocket-vs-sse.png)

| | Long polling | SSE (`EventSource`) | WebSocket |
|---|---|---|---|
| Direction | Server→client (simulated) | Server→client | Full duplex |
| Protocol | Plain HTTP | HTTP, `text/event-stream` | `Upgrade` to WS (RFC 6455) |
| Data | Anything | UTF-8 text events | Text + binary |
| Reconnect | Manual | **Automatic** with `Last-Event-ID` | Manual (libraries like Socket.IO add it) |
| Proxies/firewalls/HTTP/2 | Trivial | Friendly (plain HTTP; multiplexed on HTTP/2) | Sometimes blocked; separate connection |
| Browser auth | Normal headers | `EventSource` can't set headers (cookies or fetch-based clients) | Can't set headers in browser API (use cookie or a one-time ticket in the URL/first message) |
| Scaling | Many short requests | Many long-lived connections | Many long-lived stateful connections |
| Overhead | Highest | Low | Lowest per message |

```ts
// SSE with Fastify (raw response)
app.get("/events", (req, reply) => {
  reply.raw.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });
  const send = (id: number, data: unknown) =>
    reply.raw.write(`id: ${id}\nevent: order\ndata: ${JSON.stringify(data)}\n\n`);
  const timer = setInterval(() => send(Date.now(), { ping: true }), 15_000);
  req.raw.on("close", () => clearInterval(timer));
});
```

```ts
// WebSocket client
const ws = new WebSocket("wss://api.example.com/stream");
ws.onmessage = (e) => console.log(JSON.parse(e.data));
ws.onclose = () => setTimeout(reconnect, backoffWithJitter());
```

Production concerns for any long-lived connection: heartbeats/pings to detect dead peers and keep proxies from idling out, **sticky sessions or a pub/sub backplane** (Redis, NATS, Kafka) to fan out across nodes, backpressure and per-connection limits, authentication at connect time plus re-validation on token expiry, and graceful reconnect with resume (last event ID).

[↑ Back to top](#table-of-contents)

### 36. How do you design webhooks reliably and securely?

`🔴 Senior` · `#webhooks` `#events` `#security`

Webhooks are **HTTP callbacks**: when something happens, your system POSTs an event to a URL the consumer registered. Because the network is unreliable, design for **at-least-once delivery, retries, signatures, idempotent consumers, and observability**.

![Webhook delivery](./diagrams/webhook-delivery.png)

```http
POST /hooks/billing HTTP/1.1
Content-Type: application/json
Webhook-Id: evt_01HV...
Webhook-Timestamp: 1767225600
Webhook-Signature: v1,K5oZfzN95Z9UVu1EsfQmfVNQhnkZ2pj9o9NDN/H/pI4=

{"id":"evt_01HV...","type":"invoice.paid","created":1767225600,"data":{"invoice_id":"inv_9"}}
```

(The header names above follow the "Standard Webhooks" convention; Stripe uses `Stripe-Signature`, GitHub `X-Hub-Signature-256`. Pick one scheme and document it.)

**Provider side**
- Event envelope: unique `id`, `type`, `created`, API version; either a **thin** payload (IDs; consumer fetches fresh state, avoids stale/ordering issues) or a **fat** one.
- **Sign** `timestamp + "." + rawBody` with HMAC-SHA256 using a per-endpoint secret; support secret rotation (two active secrets).
- Deliver asynchronously from a queue, 2xx = ack, short timeout (5-10 s), **exponential backoff with jitter** for hours-days, then dead-letter and disable the endpoint with notification; provide a **replay/redeliver** UI/API and delivery logs.
- Don't promise ordering; include timestamps/sequence numbers. Protect against SSRF when users supply URLs (block private IPs, resolve DNS carefully, no redirects).

**Consumer side**

```ts
import { createHmac, timingSafeEqual } from "node:crypto";

app.post("/hooks/billing", { config: { rawBody: true } }, async (req, reply) => {
  const ts = Number(req.headers["webhook-timestamp"]);
  if (Math.abs(Date.now() / 1000 - ts) > 300) return reply.status(400).send(); // replay window

  const expected = createHmac("sha256", process.env.WEBHOOK_SECRET!)
    .update(`${ts}.${req.rawBody}`)          // sign the RAW bytes, not re-serialized JSON
    .digest();
  const given = Buffer.from(String(req.headers["webhook-signature"]).split(",")[1], "base64");
  if (given.length !== expected.length || !timingSafeEqual(given, expected)) return reply.status(401).send();

  if (await seen(req.body.id)) return reply.status(200).send();   // dedupe by event id
  await queue.add("process-event", req.body);                     // ack fast, process async
  return reply.status(200).send();
});
```

> **Follow-up:** Webhooks vs polling vs streaming? Webhooks are cheap for rare events but need a public endpoint and retry handling; polling is simpler for consumers; SSE/WebSocket/queues suit high-volume or low-latency feeds.

[↑ Back to top](#table-of-contents)

## Architecture and design

### 37. What are an API gateway and the BFF pattern?

`🔴 Senior` · `#gateway` `#bff` `#architecture`

An **API gateway** is the single entry point in front of your services: it handles cross-cutting concerns (TLS termination, authentication, rate limiting, routing, caching, logging) so services don't each reimplement them. A **BFF (Backend For Frontend)** is a dedicated backend per client type (web, mobile, partner) that **aggregates and shapes** downstream calls for that client's needs.

![API gateway and BFF architecture](./diagrams/api-gateway-bff.png)

| | API Gateway | BFF |
|---|---|---|
| Purpose | Edge policy + routing | Client-specific API/composition |
| Logic | Generic, config-driven | Client-specific business-light logic |
| Typical tech | Kong, Envoy, NGINX, AWS API Gateway, Apigee, Traefik | Node/Fastify/Next.js route handlers, GraphQL server |
| Owner | Platform team | Frontend team of that client |

Gateway responsibilities: authN (validate JWT/API key), coarse authZ, rate limits/quotas, request/response transformation, protocol translation (REST ↔ gRPC), canary routing, observability, WAF integration. Don't put **business logic** in it.

BFF benefits: tailor payload size per device (mobile gets fewer fields), reduce round trips (aggregate 5 service calls into one), isolate frontend release cycles, keep tokens server-side (the browser holds only a session cookie: the "token-handler" pattern). Risks: duplicated logic across BFFs, a new hop (latency/failure mode), and a distributed monolith if BFFs call each other. Alternatives: GraphQL federation as a shared BFF, or a service mesh for east-west traffic.

Avoid making the gateway a single point of failure (run it HA, keep it stateless, keep config as code) and avoid long chains of synchronous calls (timeouts, circuit breakers, bulkheads).

[↑ Back to top](#table-of-contents)

### 38. Walk through designing a public Orders API end to end.

`🔴 Senior` · `#design` `#rest` `#architecture`

Start with consumers and use cases, then walk the checklist: resources, contract, errors, pagination, concurrency/idempotency, security, limits, evolution, observability, docs.

1. **Resources:** `/orders`, `/orders/{id}`, `/orders/{id}/items`, `/customers/{id}`; actions as sub-resources (`POST /orders/{id}/cancellations`). IDs are opaque prefixed strings (`ord_...`).
2. **Contract:** OpenAPI 3.1 spec reviewed in PRs; JSON; ISO 8601 UTC timestamps; money as **integer minor units + currency** (never floats); enums documented as extensible.
3. **Writes:** `POST /orders` requires an `Idempotency-Key`; returns `201` + `Location`; updates via `PATCH` with `If-Match`; state transitions validated by a state machine (`409` on invalid transitions).
4. **Reads:** cursor pagination with `limit` cap, `?status=`, `?created[gte]=`, `?sort=-created_at`, `?expand=customer`; `ETag` + `Cache-Control: private`.
5. **Errors:** RFC 9457 problem+json with stable `type` URIs and trace ID.
6. **Security:** OAuth2 client credentials for server clients (scopes `orders:read`, `orders:write`), per-object authorization (tenant check on every query), TLS only, input validation, max body size, no sensitive data in URLs.
7. **Limits:** token-bucket rate limit per client with `429` + `Retry-After`; per-endpoint cost; payload caps.
8. **Async & events:** `POST /exports` → `202` + operation; webhooks for `order.paid`/`order.shipped` with signatures and retries.
9. **Evolution:** `/v1` major version, additive-only changes, `Deprecation`/`Sunset` headers, changelog, breaking-change check in CI.
10. **Ops:** request IDs, RED metrics, SLOs, audit log, health endpoints; sandbox environment with test API keys; SDKs generated from the spec.

```http
POST /v1/orders HTTP/1.1
Authorization: Bearer eyJ...
Idempotency-Key: 2c1b...
Content-Type: application/json

{"customer_id":"cus_1","items":[{"sku":"A1","qty":2}],"currency":"EUR"}

HTTP/1.1 201 Created
Location: /v1/orders/ord_9
ETag: "1"
{"id":"ord_9","status":"pending","total":{"amount":4200,"currency":"EUR"},"created_at":"2026-10-08T10:00:00Z"}
```

Interviewers look for **trade-off narration** (why cursor over offset, why 409 vs 422, what you'd defer) and for noticing failure modes (retries, partial failure, abuse, upgrades), not for an exhaustive endpoint list.

[↑ Back to top](#table-of-contents)

## API authentication and security

### 39. What are the common ways to authenticate API clients?

`🟢 Junior` · `#auth` `#security`

Authentication answers "who is calling?" (authorization answers "what may they do?"). Common schemes: **API keys**, **HTTP Basic**, **bearer tokens** (OAuth2 access tokens / JWT), **session cookies** (browsers), and **mutual TLS** (service-to-service).

| Method | How | Good for | Weaknesses |
|---|---|---|---|
| API key | `X-API-Key: sk_live_...` or `Authorization: Bearer sk_...` | Identifying server-side apps/projects, simple partner APIs | Long-lived bearer secret, no user context/scopes unless you add them; never put in URLs or client-side code |
| HTTP Basic | `Authorization: Basic base64(user:pass)` | Internal tools, key-as-username pattern (Stripe) | Sends the secret each request; TLS mandatory |
| OAuth2 bearer token | `Authorization: Bearer <access_token>` | User-delegated access, scopes, short-lived tokens | Complexity; needs an authorization server |
| JWT access token | Self-contained signed token validated locally | Stateless validation across services | Hard to revoke before expiry; payload is only encoded, not encrypted |
| Session cookie | `Cookie: sid=...` (`HttpOnly; Secure; SameSite`) | First-party browser apps | CSRF; not for third-party API consumers |
| mTLS | Client presents an X.509 certificate | Service-to-service, high-assurance B2B | Certificate lifecycle/ops |

```http
GET /v1/orders HTTP/1.1
Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjEifQ...
```

Basics: always use **HTTPS**; keys should be revocable, rotatable, scoped, stored **hashed** server-side (show once at creation), prefixed (`sk_live_`) so secret scanners can detect leaks; `401` with `WWW-Authenticate` when missing/invalid.

[↑ Back to top](#table-of-contents)

### 40. How do OAuth2 client credentials and JWT bearer validation work for APIs?

`🟡 Middle` · `#oauth2` `#jwt` `#auth`

The **client credentials grant** (RFC 6749 §4.4) is for machine-to-machine calls: the client authenticates to the authorization server with its own credentials and gets a short-lived **access token**; the API validates that token on every request. No user is involved (for user-delegated access use Authorization Code + PKCE).

```http
POST /oauth/token HTTP/1.1
Host: auth.example.com
Authorization: Basic base64(client_id:client_secret)
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials&scope=orders:read

HTTP/1.1 200 OK
{"access_token":"eyJ...","token_type":"Bearer","expires_in":3600,"scope":"orders:read"}
```

The resource server must validate a JWT access token (profile: RFC 9068):

1. Verify the **signature** against the issuer's public keys (JWKS, selected by `kid`; cache keys, refresh on unknown `kid`).
2. Enforce an **algorithm allowlist** (e.g. `RS256`/`ES256`); never accept `alg: none` or let the token choose HMAC with a public key.
3. Check `iss` (expected issuer), `aud` (**this API**), `exp`/`nbf` (with small clock skew), and required `scope`/`roles`.
4. Authorize per route/object using scopes and claims; `403` with `error="insufficient_scope"` when scope is missing.

```ts
import { createRemoteJWKSet, jwtVerify } from "jose";

const JWKS = createRemoteJWKSet(new URL("https://auth.example.com/.well-known/jwks.json"));

app.addHook("preHandler", async (req, reply) => {
  const token = req.headers.authorization?.replace(/^Bearer /, "");
  if (!token) return reply.status(401).header("WWW-Authenticate", "Bearer").send();
  try {
    const { payload } = await jwtVerify(token, JWKS, {
      issuer: "https://auth.example.com/",
      audience: "https://api.example.com",
      algorithms: ["RS256"],
    });
    if (!String(payload.scope).split(" ").includes("orders:read"))
      return reply.status(403).header("WWW-Authenticate", 'Bearer error="insufficient_scope"').send();
    req.auth = payload;
  } catch {
    return reply.status(401).header("WWW-Authenticate", 'Bearer error="invalid_token"').send();
  }
});
```

Trade-offs: self-contained JWTs avoid a lookup per request but can't be revoked before expiry; keep lifetimes short (minutes), use **opaque tokens + introspection** (RFC 7662) when instant revocation matters, and cache the introspection result briefly. Never store JWTs in `localStorage` for browsers if XSS is a concern; keep secrets out of the token.

[↑ Back to top](#table-of-contents)

### 41. What are mTLS and sender-constrained tokens (DPoP), and when do you use them?

`🔴 Senior` · `#mtls` `#oauth2` `#security`

A plain bearer token works for **whoever holds it**: if it leaks (logs, proxy, XSS) it can be replayed. **Sender-constrained tokens** bind the token to a key the client proves possession of, so a stolen token is useless on its own. The two OAuth mechanisms are **mTLS** (RFC 8705) and **DPoP** (RFC 9449).

| | mTLS | DPoP | Plain bearer |
|---|---|---|---|
| Proof of possession | TLS client certificate | Per-request signed JWT (`DPoP` header) from a client-held key | None |
| Token binding | `cnf.x5t#S256` (cert thumbprint) in token | `cnf.jkt` (JWK thumbprint) in token | None |
| Layer | Transport | Application | n/a |
| Best for | Service-to-service, B2B, regulated/open banking (FAPI) | Public clients (SPAs, mobile) that can't hold certs | Low/medium risk |
| Ops cost | PKI: issuance, rotation, revocation; terminate TLS carefully (proxies must forward cert info) | Key management in client, replay-cache (`jti`) on server | Lowest |

**mTLS mechanics:** both sides present certificates during the TLS handshake; the server validates the client cert chain; identity comes from the cert subject/SAN (SPIFFE IDs in meshes). Service meshes (Istio, Linkerd) automate certificate issuance and rotation for east-west traffic.

```nginx
# NGINX terminating mTLS and passing identity to the app
ssl_client_certificate /etc/ssl/ca.pem;
ssl_verify_client on;
proxy_set_header X-Client-Cert-DN $ssl_client_s_dn;   # trust only from your proxy; strip inbound copies
```

```http
# DPoP-bound request
GET /orders HTTP/1.1
Authorization: DPoP eyJ...access token with cnf.jkt...
DPoP: eyJ0eXAiOiJkcG9wK2p3dCIsImFsZyI6IkVTMjU2IiwiandrIjp7...   # JWT signed with the client key: htm, htu, iat, jti, ath
```

Use cases: payments/open banking, high-value admin APIs, zero-trust internal networks. Also rely on short token lifetimes and TLS everywhere; mTLS authenticates the *client*, not the *user*, so combine it with token-based authorization.

[↑ Back to top](#table-of-contents)

### 42. What is the OWASP API Security Top 10?

`🟡 Middle` · `#security` `#owasp`

It is OWASP's ranking of the most critical API-specific risks. The latest edition I'm aware of is **2023** (check owasp.org for newer ones). Authorization failures dominate the list.

| # | Risk | One-line fix |
|---|---|---|
| API1 | **Broken Object Level Authorization (BOLA)** | Check ownership/permission for **every object ID** the client supplies |
| API2 | Broken Authentication | Strong token handling, rate-limit login, MFA, no weak/long-lived secrets |
| API3 | **Broken Object Property Level Authorization** | Allowlist readable/writable properties (covers excessive data exposure + mass assignment) |
| API4 | Unrestricted Resource Consumption | Rate limits, quotas, pagination caps, timeouts, cost limits |
| API5 | **Broken Function Level Authorization (BFLA)** | Deny by default; enforce role checks per function/route (admin endpoints) |
| API6 | Unrestricted Access to Sensitive Business Flows | Bot/abuse protection on flows like purchase, signup, coupon redemption |
| API7 | Server-Side Request Forgery (SSRF) | Allowlist outbound hosts, block internal ranges, no blind URL fetch |
| API8 | Security Misconfiguration | Hardened defaults, no verbose errors, correct CORS/headers, patched stacks |
| API9 | Improper Inventory Management | Track all versions/hosts/environments, retire old versions, no forgotten shadow/debug APIs |
| API10 | Unsafe Consumption of APIs | Validate and sanitize data from third-party APIs as untrusted input |

Interview framing: most breaches aren't injection but **missing authorization** (BOLA/BFLA) because frameworks authenticate for you but can't know your ownership rules. Controls that scale: central authorization layer/policies, tenant-scoped queries, automated tests per endpoint with two users, an API inventory generated from OpenAPI/gateway traffic, and dependency/secret scanning.

[↑ Back to top](#table-of-contents)

### 43. How do you prevent BOLA and BFLA in practice?

`🔴 Senior` · `#security` `#authorization` `#owasp`

**BOLA/IDOR**: `GET /orders/1002` works for user A even though order 1002 belongs to B. **BFLA**: a regular user can call `DELETE /admin/users/5` because only the UI hides the button. Fix by enforcing authorization **server-side on every request, close to the data**, deny by default.

```ts
// BAD: trusts the ID
app.get("/orders/:id", async (req) => db.orders.findById(req.params.id));

// GOOD 1: scope the query by the authenticated principal/tenant (can't even load others' rows)
app.get("/orders/:id", async (req, reply) => {
  const order = await db.query(
    "SELECT * FROM orders WHERE id = $1 AND tenant_id = $2 AND (owner_id = $3 OR $4)",
    [req.params.id, req.auth.tenantId, req.auth.sub, req.auth.roles.includes("support")],
  );
  if (!order.rows[0]) return reply.status(404).send(); // 404, not 403: don't confirm existence
  return order.rows[0];
});

// GOOD 2: function-level check, deny by default via route config
app.delete("/admin/users/:id", { preHandler: requireRole("admin") }, handler);
```

Defense in depth:

- **Centralize** authorization (policy engine: Casbin, OPA/Cedar, or a domain-layer `can(user, action, resource)`), don't sprinkle ad-hoc `if`s.
- **Row-level security** in the database (PostgreSQL RLS with `SET app.tenant_id`) as a backstop for multi-tenancy.
- Take identity from the **token**, never from the request body/params (`userId` in the JSON is client-controlled).
- Non-guessable IDs (UUIDs) reduce enumeration but are **not** authorization.
- Check authorization for **nested/related objects** and for bulk/batch endpoints, GraphQL fields, exports, file downloads and webhooks.
- Test: for each endpoint, automated tests authenticating as user A, accessing B's objects, expecting `403/404`; plus a role matrix test; log denials and alert on enumeration patterns.

> **Follow-up:** `403` or `404`? `404` hides existence from unauthorized users, `403` is more transparent for debugging; choose per sensitivity and stay consistent.

[↑ Back to top](#table-of-contents)

### 44. What is mass assignment (and excessive data exposure) and how do you prevent it?

`🟡 Middle` · `#security` `#owasp` `#validation`

**Mass assignment** happens when you bind the request body directly onto a model/ORM object, letting clients set fields they shouldn't (`role`, `isAdmin`, `balance`, `tenantId`). **Excessive data exposure** is the mirror image: serializing the whole DB row so the response leaks `passwordHash`, internal flags or other users' data. OWASP merged both into API3:2023 (Broken Object Property Level Authorization).

```ts
// VULNERABLE: spreads whatever the client sends
app.patch("/users/me", async (req) => {
  return db.users.update(req.auth.sub, req.body);       // {"role":"admin"} -> privilege escalation
});

// SAFE: explicit allowlisted input schema (reject/strip unknown keys) + explicit output DTO
import { z } from "zod";
const UpdateMe = z.object({ name: z.string().min(1).max(100), avatarUrl: z.string().url().optional() }).strict();

app.patch("/users/me", async (req, reply) => {
  const parsed = UpdateMe.safeParse(req.body);
  if (!parsed.success) return reply.status(400).send({ title: "Invalid body", errors: parsed.error.issues });
  const user = await db.users.update(req.auth.sub, parsed.data);
  return { id: user.id, name: user.name, avatarUrl: user.avatarUrl };   // never return the raw row
});
```

Prevention checklist: separate DTOs for input and output; **allowlist** (not blocklist) properties; `.strict()`/`additionalProperties: false`/`removeAdditional` in JSON Schema validators; per-role writable fields (admins can set `role`, users cannot); response serialization schemas (Fastify's `response` schema strips unlisted fields); never expose DB models directly; review `PATCH`/`PUT` handlers and GraphQL input types; tests posting forbidden fields.

[↑ Back to top](#table-of-contents)

### 45. What are the baseline security practices every API should follow?

`🟢 Junior` · `#security` `#validation` `#basics`

Treat all input as hostile and expose the minimum. Minimum bar: TLS, authentication, authorization, validation, limits, safe errors, and logging.

- **HTTPS everywhere** (HSTS), modern TLS; no secrets/tokens in URLs (they leak into logs, `Referer`, history) → use headers or bodies.
- **Validate input** at the edge against a schema (type, length, range, format, enum): JSON Schema/Zod/Valibot; reject unknown fields; validate path/query params too.
- **Use parameterized queries** / ORM to prevent SQL injection; avoid passing user input to shells, `eval`, templates, or NoSQL operators.
- **Limit** body size, array sizes, page size, request time, and rate per client.
- **Output encoding/serialization:** explicit response schemas; correct `Content-Type`; `X-Content-Type-Options: nosniff`.
- **Errors:** generic messages to clients, details in logs; same response for "user not found" vs "wrong password".
- **Security headers** for browser-facing responses (`Strict-Transport-Security`, `Cache-Control: no-store` for sensitive data, CSP for HTML), and a strict CORS allowlist.
- **Secrets & keys** in a secret manager, rotated, never in the repo or client code; API keys stored hashed.
- **Least privilege:** scoped tokens, DB users with minimal grants.
- **Audit & monitor:** log auth failures/denials, alert on anomalies, keep dependencies updated.

```ts
import Fastify from "fastify";
import helmet from "@fastify/helmet";
import rateLimit from "@fastify/rate-limit";

const app = Fastify({ bodyLimit: 1_000_000, logger: true });   // 1 MB body cap
await app.register(helmet);
await app.register(rateLimit, { max: 100, timeWindow: "1 minute" });
```

[↑ Back to top](#table-of-contents)

## Testing APIs

### 46. How do you test an API? (levels and tools)

`🟡 Middle` · `#testing` `#api`

Use a pyramid: many fast **unit tests** of handlers/domain logic, **integration tests** that exercise the real HTTP stack and a real database (e.g. via Testcontainers), a smaller set of **contract tests** at service boundaries, and a handful of **end-to-end/smoke tests** against deployed environments. Add **schema-based and security tests** on top.

| Level | What it verifies | Tools |
|---|---|---|
| Unit | Validators, mappers, domain rules | Vitest/Jest |
| Integration (in-process HTTP) | Routing, middleware, validation, status codes, DB | Fastify `app.inject()`, Supertest, Testcontainers |
| Contract | Consumer/provider agree on shapes | Pact, OpenAPI validators (Dredd, Prism proxy, `jest-openapi`) |
| Property/fuzz | Spec conformance on generated inputs | Schemathesis, RESTler |
| E2E/smoke | Real deployment works | Playwright API testing, k6 checks, Postman/Newman |
| Non-functional | Load, rate-limit, security | k6, Artillery, OWASP ZAP |

```ts
import { test, expect } from "vitest";
import { buildApp } from "../src/app";

test("POST /orders is idempotent", async () => {
  const app = await buildApp();
  const req = { method: "POST", url: "/orders", headers: { "idempotency-key": "k1", authorization: "Bearer test" }, payload: { sku: "A1", qty: 1 } } as const;

  const a = await app.inject(req);
  const b = await app.inject(req);

  expect(a.statusCode).toBe(201);
  expect(b.statusCode).toBe(201);
  expect(b.json().id).toBe(a.json().id);        // same order, not a duplicate
  expect(b.headers["idempotent-replayed"]).toBe("true");
});

test("user cannot read another user's order (BOLA)", async () => {
  const app = await buildApp();
  const res = await app.inject({ method: "GET", url: "/orders/ord_of_user_b", headers: { authorization: "Bearer user-a" } });
  expect(res.statusCode).toBe(404);
});
```

Test the **unhappy paths**: validation errors, missing/expired auth, wrong permissions, conflicts (`409`/`412`), rate limiting, pagination boundaries, large payloads, timeouts and retries. Keep tests deterministic (fixed clocks, seeded data, isolated DB per test run) and run the OpenAPI lint/diff in CI.

[↑ Back to top](#table-of-contents)

### 47. What is consumer-driven contract testing, and how do you catch breaking changes in CI?

`🔴 Senior` · `#testing` `#contracts` `#ci`

In **consumer-driven contract testing (CDC)**, each consumer records the requests it makes and the response *shape it actually relies on* (a **pact**); the provider replays those contracts in its own CI to prove it still satisfies every consumer. It catches breaking changes without spinning up the whole system, unlike slow, flaky end-to-end tests.

Flow with Pact:

1. Consumer tests run against a Pact **mock provider** and generate a contract file (JSON).
2. The contract is published to a **Pact Broker/PactFlow** with the consumer version and branch.
3. Provider CI **verifies** all relevant pacts against the real provider (with provider-state setup, e.g. "order 42 exists").
4. `can-i-deploy` asks the broker whether this version is compatible with what's in production before releasing.

```ts
// Consumer test (Pact JS, V3 API)
import { PactV3, MatchersV3 } from "@pact-foundation/pact";
const { like } = MatchersV3;

const pact = new PactV3({ consumer: "web-app", provider: "orders-api" });

it("gets an order", async () => {
  pact
    .given("order ord_1 exists")
    .uponReceiving("a request for order ord_1")
    .withRequest({ method: "GET", path: "/orders/ord_1" })
    .willRespondWith({ status: 200, body: like({ id: "ord_1", status: "paid", total: 4200 }) });

  await pact.executeTest(async (mock) => {
    const order = await new OrdersClient(mock.url).get("ord_1");
    expect(order.status).toBe("paid");
  });
});
```

| Approach | Source of truth | Catches | Cost |
|---|---|---|---|
| Consumer-driven (Pact) | What consumers use | Breaking *only what's used*, safe to remove unused fields | Needs consumer buy-in; works best for known/internal consumers |
| Provider-driven spec (OpenAPI) | The published spec | Any change that violates the spec | Doesn't know actual usage; good for public APIs |
| Bi-directional | Consumer mocks vs provider OpenAPI | Mismatch between both | Less setup (PactFlow feature) |
| Spec diff (`oasdiff`, `buf breaking` for protobuf) | Previous vs new spec | Removed fields, narrowed types, new required params | Cheap static check in every PR |

Layer them: **spec diff on every PR** (fast gate), **schema/response validation** in integration tests (so code matches the spec), **CDC for internal consumers**, and **usage analytics** (which clients call which fields/versions) to decide when deprecation is safe. For public APIs where you can't know all consumers, the spec + strict compatibility rules ([Q16](#16-what-counts-as-a-breaking-change-and-how-do-you-deprecate-an-api-safely)) are your contract.

[↑ Back to top](#table-of-contents)

