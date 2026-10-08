# DevOps Interview Questions

Questions for fullstack engineers who ship and run what they build: Linux and networking, Docker, Kubernetes, CI/CD, infrastructure as code, cloud, observability, reliability and cost. Each answer opens with the 20-second version, then goes deeper with real configs.

**Levels:** `🟢 Junior` · `🟡 Middle` · `🔴 Senior`

## Table of contents

**Linux and Networking Essentials**

1. [What is the difference between a process and a thread, and how do signals work?](#1-what-is-the-difference-between-a-process-and-a-thread-and-how-do-signals-work)
2. [What are file descriptors and what causes "too many open files"?](#2-what-are-file-descriptors-and-what-causes-too-many-open-files)
3. [What happens when you type a URL and the browser resolves DNS?](#3-what-happens-when-you-type-a-url-and-the-browser-resolves-dns)
4. [How do the TCP and TLS handshakes work?](#4-how-do-the-tcp-and-tls-handshakes-work)
5. [What is the difference between L4 and L7 load balancers?](#5-what-is-the-difference-between-l4-and-l7-load-balancers)
6. [What is a reverse proxy and how do you configure Nginx as one?](#6-what-is-a-reverse-proxy-and-how-do-you-configure-nginx-as-one)

**Docker**

7. [What is the difference between a Docker image and a container?](#7-what-is-the-difference-between-a-docker-image-and-a-container)
8. [How do Docker image layers and build caching work?](#8-how-do-docker-image-layers-and-build-caching-work)
9. [What are multi-stage builds? Show a production Dockerfile for a Node.js app.](#9-what-are-multi-stage-builds-show-a-production-dockerfile-for-a-nodejs-app)
10. [What is `.dockerignore` and why does it matter?](#10-what-is-dockerignore-and-why-does-it-matter)
11. [Alpine vs slim vs distroless vs scratch: how do you choose a base image?](#11-alpine-vs-slim-vs-distroless-vs-scratch-how-do-you-choose-a-base-image)
12. [Why and how should containers run as non-root?](#12-why-and-how-should-containers-run-as-non-root)
13. [Why does PID 1 matter in containers and how do you handle signals and graceful shutdown?](#13-why-does-pid-1-matter-in-containers-and-how-do-you-handle-signals-and-graceful-shutdown)
14. [What are Docker volumes, bind mounts and tmpfs mounts?](#14-what-are-docker-volumes-bind-mounts-and-tmpfs-mounts)
15. [How does Docker networking work?](#15-how-does-docker-networking-work)
16. [How do you use Docker Compose for a multi-service app?](#16-how-do-you-use-docker-compose-for-a-multi-service-app)

**Kubernetes**

17. [What are the main Kubernetes components, and what are Pods and Deployments?](#17-what-are-the-main-kubernetes-components-and-what-are-pods-and-deployments)
18. [What are the Kubernetes Service types?](#18-what-are-the-kubernetes-service-types)
19. [Ingress vs Gateway API: how does a request reach a Pod, and what is the status of Ingress NGINX?](#19-ingress-vs-gateway-api-how-does-a-request-reach-a-pod-and-what-is-the-status-of-ingress-nginx)
20. [How do ConfigMaps and Secrets work, and are Secrets actually secret?](#20-how-do-configmaps-and-secrets-work-and-are-secrets-actually-secret)
21. [Explain liveness, readiness and startup probes.](#21-explain-liveness-readiness-and-startup-probes)
22. [How do resource requests and limits work, and what is OOMKilled?](#22-how-do-resource-requests-and-limits-work-and-what-is-oomkilled)
23. [How does the Horizontal Pod Autoscaler work?](#23-how-does-the-horizontal-pod-autoscaler-work)
24. [How do rolling updates work and how do you get zero-downtime deploys?](#24-how-do-rolling-updates-work-and-how-do-you-get-zero-downtime-deploys)
25. [When do you use a StatefulSet instead of a Deployment?](#25-when-do-you-use-a-statefulset-instead-of-a-deployment)
26. [How do namespaces, RBAC and NetworkPolicies isolate workloads?](#26-how-do-namespaces-rbac-and-networkpolicies-isolate-workloads)
27. [A Pod is in CrashLoopBackOff. How do you debug it?](#27-a-pod-is-in-crashloopbackoff-how-do-you-debug-it)

**CI/CD**

28. [What are the stages of a CI/CD pipeline?](#28-what-are-the-stages-of-a-cicd-pipeline)
29. [Write a GitHub Actions workflow that tests, builds an image and deploys.](#29-write-a-github-actions-workflow-that-tests-builds-an-image-and-deploys)
30. [How do caching, artifacts, secrets and environments work in CI?](#30-how-do-caching-artifacts-secrets-and-environments-work-in-ci)
31. [Trunk-based development vs GitFlow: which branching strategy and why?](#31-trunk-based-development-vs-gitflow-which-branching-strategy-and-why)

**Deployment Strategies**

32. [Compare rolling, blue-green and canary deployments.](#32-compare-rolling-blue-green-and-canary-deployments)
33. [How do feature flags and expand/contract migrations enable safe releases?](#33-how-do-feature-flags-and-expandcontract-migrations-enable-safe-releases)

**Infrastructure as Code and GitOps**

34. [How do Terraform state, plan/apply, modules and drift work?](#34-how-do-terraform-state-planapply-modules-and-drift-work)
35. [Terraform vs OpenTofu vs Pulumi vs CloudFormation: how do you choose?](#35-terraform-vs-opentofu-vs-pulumi-vs-cloudformation-how-do-you-choose)
36. [What is GitOps and how does Argo CD work?](#36-what-is-gitops-and-how-does-argo-cd-work)

**Cloud Fundamentals**

37. [Explain VPCs, subnets and security groups.](#37-explain-vpcs-subnets-and-security-groups)
38. [What does least-privilege IAM mean in practice?](#38-what-does-least-privilege-iam-mean-in-practice)
39. [Serverless vs containers vs VMs, and managed services vs self-hosting: how do you decide?](#39-serverless-vs-containers-vs-vms-and-managed-services-vs-self-hosting-how-do-you-decide)
40. [What is a CDN and how do you configure caching correctly?](#40-what-is-a-cdn-and-how-do-you-configure-caching-correctly)

**Observability**

41. [What are logs, metrics and traces, and how do they differ?](#41-what-are-logs-metrics-and-traces-and-how-do-they-differ)
42. [How do OpenTelemetry, Prometheus and Grafana fit together?](#42-how-do-opentelemetry-prometheus-and-grafana-fit-together)
43. [What are the RED and USE methods, and what are SLIs, SLOs and error budgets?](#43-what-are-the-red-and-use-methods-and-what-are-slis-slos-and-error-budgets)
44. [What makes a good alert, and how do you avoid alert fatigue?](#44-what-makes-a-good-alert-and-how-do-you-avoid-alert-fatigue)

**Secrets Management**

45. [How should secrets be managed: Vault, cloud secret managers and SOPS?](#45-how-should-secrets-be-managed-vault-cloud-secret-managers-and-sops)

**Scaling and Reliability**

46. [Vertical vs horizontal scaling: what is the difference and what do you scale first?](#46-vertical-vs-horizontal-scaling-what-is-the-difference-and-what-do-you-scale-first)
47. [What are RPO and RTO, and how do you design backups and disaster recovery?](#47-what-are-rpo-and-rto-and-how-do-you-design-backups-and-disaster-recovery)
48. [How do you run incident response and write a blameless postmortem?](#48-how-do-you-run-incident-response-and-write-a-blameless-postmortem)
49. [How do you reduce cloud costs without hurting reliability?](#49-how-do-you-reduce-cloud-costs-without-hurting-reliability)

## Linux and Networking Essentials

### 1. What is the difference between a process and a thread, and how do signals work?

`🟢 Junior` · `#linux` `#processes`

A **process** is an isolated program instance with its own memory space and file descriptor table; **threads** share one process's memory and run concurrently inside it. **Signals** are asynchronous notifications the kernel (or another process) sends to a process: `SIGTERM` asks it to exit gracefully, `SIGKILL` kills it unconditionally.

| Signal | Number | Catchable? | Typical use |
|---|---|---|---|
| `SIGTERM` | 15 | Yes | Polite shutdown (what `docker stop` and Kubernetes send first) |
| `SIGINT` | 2 | Yes | Ctrl+C |
| `SIGHUP` | 1 | Yes | Terminal closed; many daemons reload config |
| `SIGKILL` | 9 | **No** | Force kill; no cleanup runs |
| `SIGSTOP` | 19 | **No** | Pause process |

```bash
ps aux --sort=-%mem | head          # biggest memory users
kill -TERM 1234                     # ask politely
kill -9 1234                        # last resort: no handlers, no flushing, no lock release
pstree -p 1234                      # process tree
```

A Node.js process handles signals with `process.on('SIGTERM', ...)`. Node itself is single-threaded for JS but uses a libuv thread pool and `worker_threads`. A **zombie** is a child that exited but whose parent never called `wait()`; it holds only a PID table entry. An **orphan** is reparented to PID 1.

> **Follow-up:** Why shouldn't you `kill -9` first? It skips graceful shutdown: in-flight requests are dropped, connections are not closed, temp files and locks leak.

[↑ Back to top](#table-of-contents)

### 2. What are file descriptors and what causes "too many open files"?

`🟡 Middle` · `#linux` `#limits`

A **file descriptor (FD)** is a small integer a process uses to refer to an open file, socket, pipe or device. In Unix "everything is a file", so each TCP connection consumes an FD. "Too many open files" (`EMFILE`) means the process hit its per-process limit (`ulimit -n`), usually due to a connection or file handle leak, or a high-concurrency server with a low limit.

```bash
ulimit -n                            # soft limit for this shell (often 1024)
ls /proc/<pid>/fd | wc -l            # FDs currently open by a process
lsof -p <pid> | awk '{print $5}' | sort | uniq -c   # by type (REG, IPv4, ...)
cat /proc/sys/fs/file-max            # system-wide ceiling
```

Raise limits where the process is started, not in a random shell:

```ini
# systemd unit
[Service]
LimitNOFILE=65535
```

```yaml
# docker compose
services:
  api:
    ulimits:
      nofile: { soft: 65535, hard: 65535 }
```

Raising the limit hides leaks. If the FD count grows monotonically under constant load, you have a leak: unclosed streams, HTTP clients without keep-alive reuse, DB pools created per request.

> **Follow-up:** What are ephemeral ports? Outbound connections use a local port from `net.ipv4.ip_local_port_range` (about 28k by default); exhausting them (many `TIME_WAIT` sockets to one destination) is a separate failure mode from FD limits.

[↑ Back to top](#table-of-contents)

### 3. What happens when you type a URL and the browser resolves DNS?

`🟢 Junior` · `#networking` `#dns`

The OS asks a **recursive resolver** (ISP, `8.8.8.8`, or the cluster DNS), which walks the hierarchy root, TLD, then the domain's **authoritative nameserver**, gets the record, and caches it for its **TTL**. The browser then connects to the returned IP.

![DNS resolution](./diagrams/dns-resolution.png)

Key record types:

| Record | Purpose | Example |
|---|---|---|
| `A` / `AAAA` | Name to IPv4 / IPv6 | `api.example.com A 203.0.113.10` |
| `CNAME` | Alias to another name (not allowed at the zone apex) | `www CNAME example.com.` |
| `MX` | Mail servers | |
| `TXT` | SPF, DKIM, domain verification | |
| `NS` | Delegates a zone to nameservers | |
| `ALIAS`/`ANAME` | Provider-specific apex alias | |

```bash
dig +short api.example.com
dig +trace api.example.com           # walk root -> TLD -> authoritative
dig @1.1.1.1 api.example.com A       # query a specific resolver
```

Operational gotchas: lowering TTL **before** a migration (not during), negative caching (`NXDOMAIN` is cached too), and in Kubernetes the `ndots:5` default makes short names trigger several search-domain lookups, which can add latency for external hostnames (use a trailing dot or lower `ndots`).

> **Follow-up:** "DNS is why my deploy didn't switch over." Clients and resolvers cache for the old TTL; you cannot force them to refresh, which is why blue-green via load balancer beats DNS cutover.

[↑ Back to top](#table-of-contents)

### 4. How do the TCP and TLS handshakes work?

`🟡 Middle` · `#networking` `#tls`

TCP uses a **3-way handshake** (SYN, SYN-ACK, ACK) to establish a reliable connection: one round trip. **TLS** then negotiates a cipher suite and keys and authenticates the server via its certificate. TLS 1.3 needs one extra round trip (TLS 1.2 needed two), and supports 0-RTT resumption.

![TLS handshake](./diagrams/tls-handshake.png)

What each side proves:

- **ClientHello** carries supported versions/ciphers, a key share (ECDHE) and **SNI** (the hostname, so one IP can serve many certificates).
- The server replies with its key share and certificate; both derive the same session keys (forward secrecy: a stolen private key can't decrypt recorded traffic).
- The client validates: chain up to a trusted CA, hostname matches SAN, not expired/revoked.
- **mTLS** additionally makes the client present a certificate (service meshes use this for service identity).

```bash
curl -v https://example.com 2>&1 | grep -E 'TLS|subject|issuer|expire'
openssl s_client -connect example.com:443 -servername example.com </dev/null | openssl x509 -noout -dates -issuer
```

Cost: new connection = 1 RTT (TCP) + 1 RTT (TLS 1.3) before the first byte. This is why **keep-alive**, connection pools, HTTP/2 multiplexing and TLS session resumption matter. HTTP/3 (QUIC) merges transport and crypto handshakes over UDP.

Common production failures: expired certificates (automate with cert-manager/ACME), missing intermediate certificate in the served chain, SNI not sent by old clients, clock skew.

> **Follow-up:** Where should TLS terminate? At the load balancer/ingress (simpler certs, L7 routing) or end to end/passthrough (compliance, mTLS to pods). Many setups terminate at the edge and re-encrypt to the backend.

[↑ Back to top](#table-of-contents)

### 5. What is the difference between L4 and L7 load balancers?

`🔴 Senior` · `#networking` `#load-balancing`

An **L4** load balancer routes TCP/UDP connections by IP and port without reading the payload: very fast, protocol-agnostic. An **L7** load balancer terminates the connection, parses HTTP (host, path, headers, cookies, gRPC) and routes per request: smarter, a bit more overhead.

| | L4 (transport) | L7 (application) |
|---|---|---|
| Sees | IP, port, protocol | URL, headers, cookies, method |
| TLS | Passthrough (or terminate on some) | Terminates, can re-encrypt |
| Routing | Per connection | Per request (path/host/header routing) |
| Extras | Static IPs, preserve client IP, millions of conns | WAF, rate limiting, redirects, retries, canary weights, auth |
| Examples | AWS NLB, GCP TCP/UDP LB, HAProxy `mode tcp`, IPVS | AWS ALB, Nginx, Envoy, Traefik, HAProxy `mode http` |
| Long-lived conns (WebSocket, gRPC) | Balanced per connection only | Balanced per request/stream (gRPC needs L7 or client-side LB) |

Algorithms: round robin, least connections, weighted, IP/consistent hash (session affinity). Always configure **health checks** so dead backends are removed, and **connection draining** (deregistration delay) so in-flight requests finish.

Gotcha: HTTP/2 and gRPC multiplex many requests on one long TCP connection, so an L4 balancer sends all traffic of one client to a single pod. In Kubernetes, a plain ClusterIP Service has exactly this problem for gRPC; use an L7 proxy, a headless service with client-side balancing, or a mesh.

> **Follow-up:** How do you see the real client IP behind an L7 balancer? Via `X-Forwarded-For` / the `Forwarded` header (trust only your own proxies) or PROXY protocol on L4.

[↑ Back to top](#table-of-contents)

### 6. What is a reverse proxy and how do you configure Nginx as one?

`🟡 Middle` · `#nginx` `#proxy`

A **reverse proxy** sits in front of your app servers and forwards client requests to them, adding TLS termination, compression, caching, rate limiting, static file serving and load balancing. A forward proxy, by contrast, sits in front of clients.

```nginx
upstream api {
    least_conn;
    server 10.0.1.10:3000 max_fails=3 fail_timeout=10s;
    server 10.0.1.11:3000;
    keepalive 32;                       # reuse upstream connections
}

limit_req_zone $binary_remote_addr zone=perip:10m rate=10r/s;

server {
    listen 443 ssl;
    http2 on;
    server_name app.example.com;

    ssl_certificate     /etc/ssl/app.crt;
    ssl_certificate_key /etc/ssl/app.key;
    ssl_protocols       TLSv1.2 TLSv1.3;

    gzip on;
    gzip_types text/css application/javascript application/json;

    location /static/ {
        root /var/www;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    location /api/ {
        limit_req zone=perip burst=20 nodelay;
        proxy_pass http://api;
        proxy_http_version 1.1;
        proxy_set_header Connection "";                 # needed for upstream keepalive
        proxy_set_header Host              $host;
        proxy_set_header X-Real-IP         $remote_addr;
        proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_read_timeout 60s;
    }

    location /ws/ {                                      # WebSockets
        proxy_pass http://api;
        proxy_http_version 1.1;
        proxy_set_header Upgrade    $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_read_timeout 3600s;
    }
}

server {                                                 # redirect HTTP -> HTTPS
    listen 80;
    server_name app.example.com;
    return 301 https://$host$request_uri;
}
```

Gotchas: `proxy_pass` with a trailing URI changes path rewriting; the default `proxy_read_timeout` (60s) kills long requests; app must trust `X-Forwarded-*` only from the proxy (`app.set('trust proxy', 1)` in Express); validate config with `nginx -t` before `nginx -s reload` (reload is graceful).

> **Follow-up:** Nginx vs HAProxy vs Envoy? Nginx is a web server plus proxy, HAProxy a very efficient L4/L7 balancer, Envoy has rich dynamic config (xDS), observability and gRPC support, and is the data plane for many meshes and Gateway API implementations.

[↑ Back to top](#table-of-contents)

## Docker

### 7. What is the difference between a Docker image and a container?

`🟢 Junior` · `#docker`

An **image** is an immutable, layered, read-only template (filesystem + metadata such as `CMD`, env, exposed ports). A **container** is a running (or stopped) instance of an image: the image layers plus a thin writable layer, isolated using Linux **namespaces** (pid, net, mnt, ...) and limited with **cgroups** (CPU, memory). Containers share the host kernel, unlike VMs.

| | Container | Virtual machine |
|---|---|---|
| Isolation | Namespaces + cgroups on shared kernel | Hypervisor, own kernel |
| Startup | Milliseconds to seconds | Seconds to minutes |
| Size | MBs | GBs |
| Security boundary | Weaker (kernel shared) | Stronger |

```bash
docker build -t myapp:1.4.2 .
docker run -d --name api -p 3000:3000 --restart unless-stopped myapp:1.4.2
docker ps -a ; docker logs -f api ; docker exec -it api sh
docker stop api && docker rm api      # container is disposable; image remains
```

The writable layer disappears with the container, so anything worth keeping must go in a **volume** or external service. Images are identified by name:tag and by immutable **digest** (`myapp@sha256:...`); tags are mutable pointers, so pin digests for reproducible production deploys.

> **Follow-up:** Is Docker the only runtime? No. Images follow the OCI spec; Kubernetes uses containerd or CRI-O directly, and tools like Podman and BuildKit build the same images.

[↑ Back to top](#table-of-contents)

### 8. How do Docker image layers and build caching work?

`🟡 Middle` · `#docker` `#build`

Each Dockerfile instruction that changes the filesystem (`RUN`, `COPY`, `ADD`) creates a **layer**. Layers are content-addressed and cached: if an instruction and all layers before it are unchanged, Docker reuses the cached layer. **The first changed layer invalidates every layer after it**, so order instructions from least to most frequently changing.

![Layer cache ordering](./diagrams/docker-layer-caching.png)

```dockerfile
# Good: dependency manifest first, source last
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build
```

Techniques:

- **BuildKit cache mounts** keep package manager caches across builds without bloating layers:
  ```dockerfile
  RUN --mount=type=cache,target=/root/.npm npm ci
  ```
- Combine commands that create and delete files in one `RUN` (deleting in a later layer does not shrink the image; the data stays in the earlier layer).
- Never put secrets in `ENV`/`ARG`/`COPY`: they remain in layer history. Use `RUN --mount=type=secret,id=npmrc,target=/root/.npmrc`.
- In CI the runner is ephemeral, so export the cache: `docker buildx build --cache-from type=gha --cache-to type=gha,mode=max`.

```bash
docker history myapp:1.4.2           # layers and sizes
docker buildx build --progress=plain .   # see CACHED steps
```

> **Follow-up:** Why does `RUN apt-get update` in its own layer cause stale packages? The cached layer is reused forever; always chain `apt-get update && apt-get install -y ...` in one `RUN`.

[↑ Back to top](#table-of-contents)

### 9. What are multi-stage builds? Show a production Dockerfile for a Node.js app.

`🟡 Middle` · `#docker` `#node`

A **multi-stage build** uses several `FROM` stages in one Dockerfile and copies only the needed artifacts into a minimal final stage. Build tools, dev dependencies and source never reach production: smaller image, smaller attack surface, faster pulls.

![Multi-stage build](./diagrams/docker-multi-stage.png)

```dockerfile
# syntax=docker/dockerfile:1

# ---- deps: all dependencies (cached while lockfile is unchanged)
FROM node:24-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm npm ci

# ---- build: compile TypeScript
FROM deps AS build
COPY tsconfig.json ./
COPY src ./src
RUN npm run build

# ---- prod-deps: production dependencies only
FROM node:24-alpine AS prod-deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm npm ci --omit=dev

# ---- runtime: minimal, non-root, no shell
FROM gcr.io/distroless/nodejs24-debian13:nonroot AS runtime
WORKDIR /app
ENV NODE_ENV=production
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build     /app/dist         ./dist
COPY package.json ./
EXPOSE 3000
# distroless node image's ENTRYPOINT is already `node`; node is PID 1 and receives SIGTERM
CMD ["dist/server.js"]
```

```bash
docker build -t myapp:1.4.2 .
docker build --target build -t myapp:test .    # build only up to a stage (e.g. run tests in CI)
```

Notes: use exec-form `CMD` (JSON array) so no shell wraps the process; `npm ci` is reproducible from the lockfile (unlike `npm install`); Next.js users enable `output: 'standalone'` and copy `.next/standalone` plus `.next/static`. Pin base images by digest in production and rebuild regularly for CVE patches.

> **Follow-up:** How do you debug a distroless container with no shell? Use the `:debug` tag (busybox shell), `kubectl debug` with an ephemeral container, or `docker run --pid=container:<id>` with a tools image.

[↑ Back to top](#table-of-contents)

### 10. What is `.dockerignore` and why does it matter?

`🟢 Junior` · `#docker`

`.dockerignore` lists files excluded from the **build context** (the directory sent to the Docker daemon). It makes builds faster, avoids invalidating the cache with irrelevant changes, and keeps secrets out of images.

```gitignore
node_modules
npm-debug.log
dist
.next
coverage
.git
.github
.env
.env.*
!.env.example
*.pem
Dockerfile*
docker-compose*.yml
README.md
.vscode
```

Why each matters:

- `node_modules`: otherwise the host's (possibly wrong-OS, e.g. macOS native binaries) modules overwrite the container's via `COPY . .`.
- `.git` and `.env`: huge and sensitive; `COPY . .` would bake secrets into a layer anyone with the image can read.
- Build artifacts and logs: any change to them invalidates the `COPY . .` layer cache.

Without it, `docker build` can send gigabytes of context first ("Sending build context to Docker daemon ...").

[↑ Back to top](#table-of-contents)

### 11. Alpine vs slim vs distroless vs scratch: how do you choose a base image?

`🟡 Middle` · `#docker` `#security`

Choose the smallest image that still lets you build, run and debug. For Node, `node:24-alpine` or `-slim` for build stages and **distroless** (or slim) for runtime is a solid default.

| Base | Size (Node) | libc | Shell/pkg mgr | Pros | Cons |
|---|---|---|---|---|---|
| `node:24` (Debian full) | ~1 GB | glibc | yes | Everything included | Large, many CVEs |
| `node:24-slim` | ~200 MB | glibc | yes | Compatible, moderate size | Larger than alpine |
| `node:24-alpine` | ~150 MB | **musl** | yes (apk) | Small | musl quirks: native modules (sharp, bcrypt, prebuilt binaries), DNS and perf differences |
| `distroless/nodejs` | ~130 MB | glibc | **none** | Minimal attack surface, no shell | Harder to debug; no `apk`/`apt` |
| `scratch` | 0 | none | none | Smallest | Only for static binaries (Go/Rust) |

Guidance: if a dependency ships glibc-only prebuilt binaries, avoid Alpine; scan images (Trivy, Grype, Docker Scout) in CI; rebuild on a schedule to pick up patched base layers; pin tags or digests. "Smaller" is a security and pull-time win, but not a substitute for scanning and non-root.

[↑ Back to top](#table-of-contents)

### 12. Why and how should containers run as non-root?

`🟡 Middle` · `#docker` `#security`

By default container processes run as root (UID 0). If an attacker escapes the app, root in the container makes a kernel/runtime breakout far easier and lets them modify files and mounted volumes. Run as an unprivileged user and drop capabilities.

```dockerfile
# Alpine/Debian images: the node image ships a "node" user (uid 1000)
USER node
COPY --chown=node:node --from=build /app/dist ./dist

# distroless: use the :nonroot tag (uid 65532)
```

Kubernetes enforces this declaratively:

```yaml
securityContext:                      # pod level
  runAsNonRoot: true
  runAsUser: 10001
  fsGroup: 10001                      # volume ownership
containers:
  - name: api
    securityContext:
      allowPrivilegeEscalation: false
      readOnlyRootFilesystem: true    # write only to mounted emptyDir/tmp
      capabilities: { drop: ["ALL"] }
      seccompProfile: { type: RuntimeDefault }
```

Gotchas: non-root can't bind ports below 1024 (use 3000/8080 and map in the Service); a read-only root filesystem breaks apps that write to `/tmp` or cache dirs (mount an `emptyDir`); file permissions on volumes (`fsGroup`). Pod Security Admission's `restricted` profile requires these settings. Rootless Docker/Podman and user namespaces add another layer on the host side.

[↑ Back to top](#table-of-contents)

### 13. Why does PID 1 matter in containers and how do you handle signals and graceful shutdown?

`🔴 Senior` · `#docker` `#signals` `#nodejs`

The first process in a container is PID 1. The kernel treats PID 1 specially: **signals without an explicit handler are ignored** (no default action for SIGTERM), and PID 1 is responsible for reaping zombie children. So an app that doesn't install a SIGTERM handler won't exit on `docker stop`; Docker waits 10s and then sends SIGKILL, dropping in-flight requests.

Common causes and fixes:

| Problem | Cause | Fix |
|---|---|---|
| App ignores SIGTERM | Running via shell form `CMD npm start` so `sh` is PID 1 and doesn't forward signals; `npm` also doesn't forward | Exec form `CMD ["node","dist/server.js"]`, not `npm start` |
| Zombies accumulate | PID 1 doesn't `wait()` | `docker run --init` / `init: true` / `tini` or `dumb-init` as entrypoint |
| Killed after 10s | No handler | Handle SIGTERM, close server |

Graceful shutdown in Node.js:

```js
const server = app.listen(3000);
let shuttingDown = false;

async function shutdown(signal) {
  if (shuttingDown) return;
  shuttingDown = true;
  console.log(`${signal} received, draining`);
  server.close(async () => {          // stop accepting, wait for in-flight requests
    await db.end();                   // close pools, flush logs/queues
    process.exit(0);
  });
  setTimeout(() => process.exit(1), 25_000).unref();   // hard cap < terminationGracePeriodSeconds
}
process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT',  () => shutdown('SIGINT'));
```

In Kubernetes the sequence is: pod marked Terminating, endpoints removal propagates **in parallel** with `preStop` hook and SIGTERM, then SIGKILL after `terminationGracePeriodSeconds` (default 30). Because load balancers/ingress may still send traffic for a few seconds, add a short `preStop` sleep and make readiness fail on shutdown:

```yaml
lifecycle:
  preStop:
    sleep: { seconds: 5 }              # built-in action: works in distroless (no shell/sleep binary needed)
terminationGracePeriodSeconds: 40
```

> **Follow-up:** Keep-alive connections: `server.close()` won't finish while idle keep-alive sockets stay open; call `server.closeIdleConnections()` (Node 18.2+) or `closeAllConnections()` after the grace period.

[↑ Back to top](#table-of-contents)

### 14. What are Docker volumes, bind mounts and tmpfs mounts?

`🟢 Junior` · `#docker` `#storage`

Container filesystems are ephemeral. To persist or share data, mount storage: **volumes** (managed by Docker), **bind mounts** (host path), or **tmpfs** (RAM only).

| Type | Where data lives | Use for |
|---|---|---|
| Named volume | `/var/lib/docker/volumes/...`, managed by Docker | Databases, uploads; portable, works with volume drivers |
| Bind mount | Any host path | Dev: live-reload source code, config files |
| tmpfs | Memory | Secrets/scratch data that must not hit disk |

```bash
docker run -v pgdata:/var/lib/postgresql/data postgres:17          # named volume
docker run -v "$PWD/src:/app/src" myapp:dev                         # bind mount
docker run --tmpfs /tmp:rw,size=64m myapp                           # tmpfs
docker run --read-only --tmpfs /tmp myapp                           # read-only root fs
docker volume ls ; docker volume inspect pgdata
```

Deleting a container does not delete named volumes (`docker compose down -v` does). Back volumes up explicitly. In Kubernetes the equivalents are `emptyDir`, `hostPath` (avoid), and **PersistentVolumeClaims**.

[↑ Back to top](#table-of-contents)

### 15. How does Docker networking work?

`🟡 Middle` · `#docker` `#networking`

Containers attach to virtual networks. The default **bridge** network gives each container a private IP and NATs outbound traffic; containers on a **user-defined bridge** resolve each other by name via Docker's embedded DNS (the default `bridge` does not). Ports are exposed to the outside only with `-p host:container`.

| Driver | Behavior |
|---|---|
| `bridge` | Private network on one host (default) |
| `host` | Shares host network stack; no isolation, no port mapping (Linux) |
| `none` | No networking |
| `overlay` | Multi-host (Swarm) |
| `macvlan` | Container gets its own MAC/IP on the LAN |

```bash
docker network create backend
docker run -d --network backend --name db postgres:17
docker run -d --network backend -p 3000:3000 -e DATABASE_URL=postgres://db:5432/app api
```

Rules of thumb: inside a container `localhost` is the container itself, not the host or other containers (use the service name; `host.docker.internal` for the host); `EXPOSE` is documentation only; publish DB ports to `127.0.0.1:5432:5432` rather than `0.0.0.0` on servers (Docker's published ports bypass `ufw` rules because it edits iptables directly); put frontend and backend on separate networks so the DB isn't reachable from the proxy.

[↑ Back to top](#table-of-contents)

### 16. How do you use Docker Compose for a multi-service app?

`🟢 Junior` · `#docker` `#compose`

**Docker Compose** describes a multi-container application (services, networks, volumes) in one YAML file so `docker compose up` brings up the whole stack. Great for local development and small single-host deployments; not an orchestrator for fleets.

```yaml
# compose.yaml  (the top-level `version:` key is obsolete in Compose v2)
services:
  api:
    build:
      context: .
      target: build                  # dev: stop at build stage
    command: npm run dev
    ports: ["3000:3000"]
    environment:
      DATABASE_URL: postgres://app:app@db:5432/app
      REDIS_URL: redis://cache:6379
    env_file: [.env]
    volumes:
      - ./src:/app/src               # live reload
    depends_on:
      db:    { condition: service_healthy }
      cache: { condition: service_started }
    restart: unless-stopped

  db:
    image: postgres:17
    environment:
      POSTGRES_USER: app
      POSTGRES_PASSWORD: app
      POSTGRES_DB: app
    volumes: [pgdata:/var/lib/postgresql/data]
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U app -d app"]
      interval: 5s
      timeout: 3s
      retries: 10

  cache:
    image: redis:7-alpine

volumes:
  pgdata:
```

```bash
docker compose up -d --build
docker compose logs -f api
docker compose exec db psql -U app
docker compose down            # keep volumes;  down -v removes them
```

`depends_on` only orders startup; use `condition: service_healthy` plus a healthcheck so the API doesn't start before Postgres accepts connections. Use `profiles`, multiple files (`-f compose.yaml -f compose.prod.yaml`) or `compose.override.yaml` for environment differences. Compose does not do rolling updates, autoscaling or self-healing across hosts: that is where Kubernetes or a managed container service comes in.

[↑ Back to top](#table-of-contents)
## Kubernetes

### 17. What are the main Kubernetes components, and what are Pods and Deployments?

`🟢 Junior` · `#kubernetes`

Kubernetes is a declarative orchestrator: you describe the **desired state** in YAML and controllers continuously reconcile reality toward it. A **Pod** is the smallest deployable unit (one or more containers sharing network namespace and volumes). A **Deployment** manages a ReplicaSet of identical Pods and gives you rolling updates, rollbacks and self-healing.

**Control plane:** `kube-apiserver` (the only entry point, stores state in **etcd**), `kube-scheduler` (assigns Pods to nodes by requests, affinity, taints), `kube-controller-manager` (Deployment, ReplicaSet, Node controllers...). **Each node:** `kubelet` (runs Pods via the container runtime such as containerd), `kube-proxy` (or an eBPF CNI) implementing Service routing.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api
  labels: { app: api }
spec:
  replicas: 3
  selector:
    matchLabels: { app: api }
  template:
    metadata:
      labels: { app: api }
    spec:
      containers:
        - name: api
          image: registry.example.com/api:1.4.2
          ports: [{ containerPort: 3000 }]
```

![Kubernetes architecture](./diagrams/k8s-architecture.png)

```bash
kubectl apply -f deployment.yaml
kubectl get pods -l app=api -o wide
kubectl rollout status deploy/api
kubectl rollout undo deploy/api          # roll back to previous ReplicaSet
kubectl scale deploy/api --replicas=5
```

Pods are **ephemeral**: they get new IPs and are replaced, never repaired. That's why you talk to them through Services, and why state belongs outside the Pod. Never run bare Pods in production (nothing recreates them if the node dies).

> **Follow-up:** What happens on `kubectl apply`? API server validates and persists to etcd; the Deployment controller creates a ReplicaSet; the ReplicaSet controller creates Pods; the scheduler binds them to nodes; kubelets pull images and start containers.

[↑ Back to top](#table-of-contents)

### 18. What are the Kubernetes Service types?

`🟢 Junior` · `#kubernetes` `#networking`

A **Service** gives a set of Pods (selected by labels) a stable virtual IP and DNS name, and load-balances across the *ready* ones.

| Type | Reachable from | Notes |
|---|---|---|
| `ClusterIP` (default) | Inside the cluster | `api.<ns>.svc.cluster.local` |
| `NodePort` | Node IP:30000-32767 | Rarely used directly in production |
| `LoadBalancer` | Internet/VPC via a cloud LB | One cloud LB per Service (cost) |
| `ExternalName` | In-cluster alias | Returns a CNAME to an external host |
| Headless (`clusterIP: None`) | In-cluster | DNS returns Pod IPs directly; used by StatefulSets, client-side LB, gRPC |

```yaml
apiVersion: v1
kind: Service
metadata:
  name: api
spec:
  selector: { app: api }
  ports:
    - port: 80            # Service port
      targetPort: 3000    # container port
```

Common bug: selector labels don't match the Pod labels, so the Service has no endpoints (`kubectl get endpointslices -l kubernetes.io/service-name=api`). Pods failing readiness are removed from endpoints. To expose many HTTP services behind one load balancer, use an Ingress or Gateway (next question) instead of one `LoadBalancer` per service.

[↑ Back to top](#table-of-contents)

### 19. Ingress vs Gateway API: how does a request reach a Pod, and what is the status of Ingress NGINX?

`🔴 Senior` · `#kubernetes` `#ingress` `#gateway-api`

An **Ingress** is an L7 routing resource (host/path to Service) implemented by an **ingress controller**. **Gateway API** is its more expressive, role-oriented successor (`GatewayClass`, `Gateway`, `HTTPRoute`, plus `GRPCRoute`, `TLSRoute`...). Note that the community **Ingress NGINX** controller (`kubernetes/ingress-nginx`) **was retired**: the Kubernetes Steering and Security Response Committees announced its retirement for March 2026, maintenance ended then, and the GitHub repository is now archived. There are no further releases, bug fixes or security patches, so existing installs are running unmaintained software on the cluster edge. **Migrate to Gateway API or another maintained controller** (Traefik, Envoy-based, cloud-native, or F5's separate NGINX Ingress Controller, which is a different project).

![Request path](./diagrams/k8s-request-path.png)

```yaml
# Ingress (older, still widely used; behavior depends on the controller + annotations)
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: web
spec:
  ingressClassName: nginx
  tls: [{ hosts: [app.example.com], secretName: app-tls }]
  rules:
    - host: app.example.com
      http:
        paths:
          - { path: /api, pathType: Prefix, backend: { service: { name: api, port: { number: 80 } } } }
```

```yaml
# Gateway API (GA v1 resources)
apiVersion: gateway.networking.k8s.io/v1
kind: Gateway
metadata: { name: public, namespace: infra }
spec:
  gatewayClassName: my-gateway-class     # provided by your implementation
  listeners:
    - name: https
      port: 443
      protocol: HTTPS
      hostname: app.example.com
      tls: { mode: Terminate, certificateRefs: [{ name: app-tls }] }
      allowedRoutes: { namespaces: { from: All } }
---
apiVersion: gateway.networking.k8s.io/v1
kind: HTTPRoute
metadata: { name: api, namespace: shop }
spec:
  parentRefs: [{ name: public, namespace: infra }]
  hostnames: [app.example.com]
  rules:
    - matches: [{ path: { type: PathPrefix, value: /api } }]
      backendRefs:
        - { name: api-stable, port: 80, weight: 90 }
        - { name: api-canary, port: 80, weight: 10 }   # native traffic splitting
```

| | Ingress | Gateway API |
|---|---|---|
| Features like rewrites, canary, headers | Controller-specific annotations | Part of the spec (filters, weights, header matches) |
| Roles | One object | Infra owner (Gateway) vs app team (HTTPRoute) |
| Cross-namespace | Awkward | Explicit with `ReferenceGrant` |
| Protocols | HTTP(S) | HTTP, gRPC, TLS, TCP, UDP routes |
| Status | Frozen API (no new features); the Ingress NGINX controller is retired | Active development |

Request path: DNS resolves to the cloud load balancer, which forwards to the gateway/ingress controller pods; the controller matches host/path and proxies to a Pod IP (often directly, via EndpointSlices) or through the Service's ClusterIP, where kube-proxy/eBPF picks a ready Pod.

> **Follow-up:** How do you migrate? Run both side by side, convert resources (the `ingress2gateway` tool helps), shift DNS or weights gradually, and re-implement annotation behavior as Gateway API filters or implementation policies.

[↑ Back to top](#table-of-contents)

### 20. How do ConfigMaps and Secrets work, and are Secrets actually secret?

`🟢 Junior` · `#kubernetes` `#config`

**ConfigMaps** hold non-sensitive config; **Secrets** hold sensitive values. Both are injected as env vars or mounted files, decoupling config from the image. Secrets are only **base64-encoded, not encrypted**, by default.

```yaml
apiVersion: v1
kind: ConfigMap
metadata: { name: api-config }
data:
  LOG_LEVEL: info
  FEATURE_X: "true"
---
apiVersion: v1
kind: Secret
metadata: { name: api-secrets }
type: Opaque
stringData:                      # plain text here; stored base64
  DATABASE_URL: postgres://app:s3cret@db:5432/app
---
apiVersion: apps/v1
kind: Deployment
metadata: { name: api }
spec:
  selector: { matchLabels: { app: api } }
  template:
    metadata: { labels: { app: api } }
    spec:
      containers:
        - name: api
          image: registry.example.com/api:1.4.2
          envFrom:
            - configMapRef: { name: api-config }
          env:
            - name: DATABASE_URL
              valueFrom: { secretKeyRef: { name: api-secrets, key: DATABASE_URL } }
          volumeMounts:
            - { name: certs, mountPath: /etc/certs, readOnly: true }
      volumes:
        - name: certs
          secret: { secretName: api-tls }
```

Facts worth knowing:

- Env vars are read at container start; **changing a ConfigMap/Secret does not restart Pods**. Mounted files update eventually (not for `subPath` mounts). Common pattern: hash the config into a Pod annotation (Helm `checksum/config`) to trigger a rollout.
- Protect Secrets with **encryption at rest** for etcd (or KMS provider), tight RBAC on `get/list secrets`, and prefer external secret managers (see the secrets question).
- Don't commit Secret YAML to Git; use Sealed Secrets, SOPS or External Secrets Operator.
- Max size is 1 MiB. `immutable: true` protects against accidental edits and reduces API server load.

[↑ Back to top](#table-of-contents)

### 21. Explain liveness, readiness and startup probes.

`🟡 Middle` · `#kubernetes` `#reliability`

Probes let the kubelet check container health. **Readiness**: "send me traffic?" (failing removes the Pod from Service endpoints, no restart). **Liveness**: "am I stuck?" (failing restarts the container). **Startup**: "have I finished booting?" (disables the other two until it succeeds, protecting slow starters).

```yaml
containers:
  - name: api
    image: registry.example.com/api:1.4.2
    ports: [{ containerPort: 3000 }]
    startupProbe:                     # up to 30 x 5s = 150s to boot
      httpGet: { path: /healthz, port: 3000 }
      periodSeconds: 5
      failureThreshold: 30
    readinessProbe:
      httpGet: { path: /ready, port: 3000 }
      periodSeconds: 5
      timeoutSeconds: 2
      failureThreshold: 3
    livenessProbe:
      httpGet: { path: /healthz, port: 3000 }
      periodSeconds: 10
      timeoutSeconds: 2
      failureThreshold: 3
```

```js
// Express: liveness is cheap and dependency-free; readiness checks what you need to serve
app.get('/healthz', (_req, res) => res.sendStatus(200));
app.get('/ready', async (_req, res) => {
  try { await db.query('SELECT 1'); res.sendStatus(shuttingDown ? 503 : 200); }
  catch { res.sendStatus(503); }
});
```

Pitfalls:

- **Liveness checking dependencies** (DB, downstream API): when the DB hiccups, every Pod restarts at once, turning an outage into a cascading failure. Keep liveness local.
- Too-aggressive timeouts under load cause restart loops exactly when you need capacity.
- No readiness probe means traffic hits Pods that are still booting during rolling updates.
- Other probe types: `tcpSocket`, `exec`, `grpc`.

> **Follow-up:** Readiness failing for all Pods? The Service has zero endpoints and returns errors; consider whether a shared dependency belongs in readiness at all (often use degraded responses instead).

[↑ Back to top](#table-of-contents)

### 22. How do resource requests and limits work, and what is OOMKilled?

`🟡 Middle` · `#kubernetes` `#resources`

**Requests** are what the scheduler reserves for a Pod (used for placement); **limits** are the hard ceiling enforced by cgroups. Exceeding the **memory limit** gets the container killed (**OOMKilled**, exit code 137); exceeding the **CPU limit** only **throttles** it.

```yaml
resources:
  requests: { cpu: 250m, memory: 256Mi }
  limits:   { memory: 512Mi }          # many teams omit CPU limits to avoid throttling
```

| Requests vs limits | QoS class | Eviction priority |
|---|---|---|
| requests = limits for all containers | `Guaranteed` | Last to be evicted |
| requests < limits (or only requests) | `Burstable` | Middle |
| none set | `BestEffort` | First |

Diagnosing OOMKilled:

```bash
kubectl describe pod api-abc | grep -A5 'Last State'   # Reason: OOMKilled, Exit Code: 137
kubectl top pod --containers                           # needs metrics-server
```

Causes: real memory leak, limit too low, Node.js heap larger than the container limit. Node's V8 default heap is derived from available memory but is not guaranteed to fit under the cgroup limit; set `--max-old-space-size` to roughly 70-75% of the limit (e.g. `NODE_OPTIONS=--max-old-space-size=384` for 512Mi) and leave room for buffers and native memory.

Guidelines: set memory request = limit (memory is not compressible), size requests from observed p95 usage, use a `LimitRange`/`ResourceQuota` per namespace, and consider VPA in recommendation mode. If requests are too high you waste money; too low and the node overcommits and evicts Pods.

> **Follow-up:** Why is high CPU limit throttling an issue even when the node is idle? CFS quota enforces per 100ms period; bursty single-threaded apps can be throttled mid-request, raising tail latency.

[↑ Back to top](#table-of-contents)

### 23. How does the Horizontal Pod Autoscaler work?

`🟡 Middle` · `#kubernetes` `#scaling`

The **HPA** periodically (default every 15s) compares a metric (CPU utilization relative to *requests*, memory, or custom/external metrics such as queue depth or RPS) to a target and adjusts the replica count: `desired = ceil(current * currentMetric / targetMetric)`.

```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata: { name: api }
spec:
  scaleTargetRef: { apiVersion: apps/v1, kind: Deployment, name: api }
  minReplicas: 3
  maxReplicas: 20
  metrics:
    - type: Resource
      resource:
        name: cpu
        target: { type: Utilization, averageUtilization: 65 }
  behavior:
    scaleUp:
      policies: [{ type: Percent, value: 100, periodSeconds: 60 }]
    scaleDown:
      stabilizationWindowSeconds: 300     # avoid flapping
```

Requirements and gotchas:

- CPU utilization is a **percentage of the request**, so pods need `resources.requests.cpu`; metrics-server must be installed.
- Don't also set `replicas:` in the Deployment manifest under GitOps, or each sync resets the count.
- HPA scales Pods, not nodes: pair it with **Cluster Autoscaler** or **Karpenter** so pending Pods get new nodes.
- CPU is a poor signal for I/O-bound or queue workers; use **KEDA** (event-driven, scales on Kafka lag, SQS depth, cron, can scale to zero) or custom metrics.
- Slow-starting Pods (large images, cold caches) mean scaling reacts late: keep headroom, lower the target, or use predictive/scheduled scaling.
- **VPA** adjusts requests/limits (vertical); don't let HPA and VPA both act on CPU for the same workload.

[↑ Back to top](#table-of-contents)

### 24. How do rolling updates work and how do you get zero-downtime deploys?

`🟡 Middle` · `#kubernetes` `#deployments`

A Deployment's default `RollingUpdate` strategy creates new-version Pods and removes old ones gradually, bounded by `maxSurge` (extra Pods allowed) and `maxUnavailable` (Pods that may be down). Zero downtime also needs working **readiness probes**, **graceful shutdown**, and enough replicas.

```yaml
spec:
  replicas: 4
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 25%
      maxUnavailable: 0          # never drop below desired capacity
  minReadySeconds: 10
  revisionHistoryLimit: 5
  template:
    spec:
      terminationGracePeriodSeconds: 40
      containers:
        - name: api
          readinessProbe: { httpGet: { path: /ready, port: 3000 }, periodSeconds: 5 }
          lifecycle:
            preStop: { sleep: { seconds: 5 } }
```

Checklist for no dropped requests: readiness probe on every container; handle SIGTERM and drain (see the PID 1 question); `preStop` delay so endpoint removal propagates; a `PodDisruptionBudget` so node drains don't take down too many replicas:

```yaml
apiVersion: policy/v1
kind: PodDisruptionBudget
metadata: { name: api }
spec:
  minAvailable: 2
  selector: { matchLabels: { app: api } }
```

```bash
kubectl set image deploy/api api=registry.example.com/api:1.4.3
kubectl rollout status deploy/api --timeout=5m
kubectl rollout history deploy/api
kubectl rollout undo deploy/api --to-revision=3
```

Also: **database migrations** must be backward compatible because old and new versions run simultaneously (see the feature flag question); `Recreate` strategy (stop all, then start) is for apps that can't run two versions at once but causes downtime. A stuck rollout (`ProgressDeadlineExceeded`) leaves old Pods serving, which is a safe failure mode.

[↑ Back to top](#table-of-contents)

### 25. When do you use a StatefulSet instead of a Deployment?

`🔴 Senior` · `#kubernetes` `#stateful`

Use a **StatefulSet** when each replica needs a **stable identity** (`db-0`, `db-1`), **stable network name** (via a headless Service) and **its own persistent volume** that follows it across reschedules: databases, Kafka, Zookeeper, Elasticsearch. Deployments treat Pods as interchangeable and ephemeral.

| | Deployment | StatefulSet |
|---|---|---|
| Pod names | Random suffix | Ordinal (`app-0`, `app-1`) |
| Storage | Shared or none | `volumeClaimTemplates`: one PVC per Pod |
| Start/stop order | Parallel | Ordered (configurable via `podManagementPolicy`) |
| DNS | Via Service only | Per-Pod: `app-0.app.ns.svc` |
| Updates | Rolling | Rolling by ordinal, with `partition` for staged updates |

```yaml
apiVersion: apps/v1
kind: StatefulSet
metadata: { name: redis }
spec:
  serviceName: redis            # headless Service
  replicas: 3
  selector: { matchLabels: { app: redis } }
  template:
    metadata: { labels: { app: redis } }
    spec:
      containers:
        - name: redis
          image: redis:7-alpine
          volumeMounts: [{ name: data, mountPath: /data }]
  volumeClaimTemplates:
    - metadata: { name: data }
      spec:
        accessModes: [ReadWriteOnce]
        storageClassName: gp3
        resources: { requests: { storage: 10Gi } }
```

A StatefulSet gives identity and storage, **not** replication, backups or failover; that logic lives in the application or an **operator** (CloudNativePG, Strimzi). Deleting a StatefulSet doesn't delete its PVCs by default (data safety). Honest advice for most teams: run production databases on a **managed service** (RDS, Cloud SQL) rather than in-cluster, unless you have the operational maturity.

[↑ Back to top](#table-of-contents)

### 26. How do namespaces, RBAC and NetworkPolicies isolate workloads?

`🔴 Senior` · `#kubernetes` `#security`

**Namespaces** partition a cluster into logical scopes for names, quotas and RBAC. They are not a security boundary by themselves: pods in different namespaces can talk to each other by default, so combine them with **RBAC**, **NetworkPolicy**, **ResourceQuota** and Pod Security Admission labels.

```yaml
# Least-privilege RBAC: CI deployer can only manage Deployments in one namespace
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata: { name: deployer, namespace: shop }
rules:
  - apiGroups: ["apps"]
    resources: ["deployments"]
    verbs: ["get", "list", "patch", "update"]
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata: { name: ci-deployer, namespace: shop }
subjects: [{ kind: ServiceAccount, name: ci, namespace: shop }]
roleRef: { apiGroup: rbac.authorization.k8s.io, kind: Role, name: deployer }
---
# Default deny, then allow only what's needed (requires a CNI that enforces policies)
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata: { name: default-deny-ingress, namespace: shop }
spec:
  podSelector: {}
  policyTypes: [Ingress]
---
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata: { name: allow-gateway-to-api, namespace: shop }
spec:
  podSelector: { matchLabels: { app: api } }
  ingress:
    - from:
        - namespaceSelector: { matchLabels: { kubernetes.io/metadata.name: infra } }
      ports: [{ port: 3000 }]
```

Other controls: `ResourceQuota`/`LimitRange` to stop one team starving others, a dedicated **ServiceAccount per workload** (with `automountServiceAccountToken: false` when unused), namespace labels `pod-security.kubernetes.io/enforce: restricted`, and `kubectl auth can-i --list --as system:serviceaccount:shop:ci` to audit. Multi-tenant hard isolation (untrusted tenants) usually means separate clusters or sandboxed runtimes.

[↑ Back to top](#table-of-contents)

### 27. A Pod is in CrashLoopBackOff. How do you debug it?

`🟡 Middle` · `#kubernetes` `#debugging`

`CrashLoopBackOff` means the container starts, exits, and kubelet restarts it with exponentially increasing delay (10s, 20s ... capped at 5 min). The question is always "why did it exit?": read the previous container's logs and the exit code.

```bash
kubectl get pod api-7d9f -o wide
kubectl describe pod api-7d9f           # Events, Last State, Exit Code, probe failures
kubectl logs api-7d9f --previous        # logs of the crashed instance (not the new one)
kubectl logs api-7d9f -c api --previous --tail=100
kubectl get events --sort-by=.lastTimestamp -n shop
kubectl get pod api-7d9f -o jsonpath='{.status.containerStatuses[0].lastState}'
```

| Signal | Likely cause |
|---|---|
| Exit 1 / stack trace in logs | App error: missing env var, bad config, can't reach DB at boot |
| Exit 137, `OOMKilled` | Memory limit too low or leak |
| Exit 137 without OOM, probe failures in events | Liveness probe killing a slow-starting app: add a startup probe |
| Exit 127 / 126 | Command not found / not executable (wrong `CMD`, shell script lacking `+x`, Windows line endings) |
| Exit 0 but restarts | Process finished: container must keep a foreground process |
| `ImagePullBackOff` (different state) | Wrong tag, missing `imagePullSecrets`, registry auth |
| `CreateContainerConfigError` | Referenced ConfigMap/Secret/key doesn't exist |

Next steps: reproduce locally with the same image and env (`docker run`); override the command to keep the pod alive and poke around (`kubectl debug pod/api-7d9f -it --copy-to=api-debug --container=api -- sh`, or an ephemeral container: `kubectl debug -it api-7d9f --image=busybox --target=api`); check the node (`kubectl describe node`) for pressure or eviction; check recent changes (`kubectl rollout history`, Git) and roll back first if it's a production incident, investigate second.

[↑ Back to top](#table-of-contents)
## CI/CD

### 28. What are the stages of a CI/CD pipeline?

`🟢 Junior` · `#cicd`

**Continuous Integration** automatically builds and tests every change; **Continuous Delivery** keeps the main branch always releasable (deploy is a button); **Continuous Deployment** ships every passing change to production automatically.

![CI/CD pipeline](./diagrams/cicd-pipeline.png)

| Stage | What runs | Fail-fast tip |
|---|---|---|
| Lint / typecheck | ESLint, `tsc --noEmit`, formatting | Cheapest checks first |
| Test | Unit, then integration (with service containers), then E2E | Parallelize and shard |
| Build | Compile, build a **single immutable image** tagged with the commit SHA | Build once, promote the same artifact through environments |
| Security | Dependency audit, SAST, secret scan, image scan (Trivy) | Block on high/critical only |
| Publish | Push image to a registry; sign/attest (cosign, SLSA provenance) | |
| Deploy | Staging, smoke tests, then production (manual approval or automatic) | Same deploy mechanism in every env |
| Verify | Smoke tests, health checks, SLO watch; automatic rollback | |

Principles: **build once, deploy many** (don't rebuild per environment; inject config at runtime), keep pipelines under about 10 minutes for the PR feedback loop, make them deterministic (lockfiles, pinned versions), treat pipeline definitions as code, and keep the main branch green. Flaky tests are a production issue for your delivery speed; quarantine and fix them.

[↑ Back to top](#table-of-contents)

### 29. Write a GitHub Actions workflow that tests, builds an image and deploys.

`🟡 Middle` · `#cicd` `#github-actions`

A workflow is YAML in `.github/workflows/`, triggered by events, made of **jobs** (run on runners, in parallel unless `needs:`) composed of **steps**.

```yaml
name: ci-cd
on:
  push: { branches: [main] }
  pull_request:

concurrency:                              # cancel superseded runs per branch/PR
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: ${{ github.event_name == 'pull_request' }}

permissions:                              # least privilege for GITHUB_TOKEN
  contents: read

jobs:
  test:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:17
        env: { POSTGRES_PASSWORD: postgres }
        ports: ["5432:5432"]
        options: >-
          --health-cmd "pg_isready -U postgres" --health-interval 5s
          --health-timeout 5s --health-retries 10
    steps:
      - uses: actions/checkout@v7
      - uses: actions/setup-node@v7
        with:
          node-version: 24
          cache: npm                       # caches ~/.npm keyed on package-lock.json
      - run: npm ci
      - run: npm run lint && npm run typecheck
      - run: npm test
        env:
          DATABASE_URL: postgres://postgres:postgres@localhost:5432/postgres

  build:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write
    outputs:
      tag: ${{ steps.meta.outputs.version }}
    steps:
      - uses: actions/checkout@v7
      - uses: docker/setup-buildx-action@v4
      - uses: docker/login-action@v4
        with:
          registry: ghcr.io
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}
      - id: meta
        uses: docker/metadata-action@v6
        with:
          images: ghcr.io/${{ github.repository }}
          tags: type=sha,format=long
      - uses: docker/build-push-action@v7
        with:
          context: .
          push: true
          tags: ${{ steps.meta.outputs.tags }}
          cache-from: type=gha
          cache-to: type=gha,mode=max

  deploy-staging:
    needs: build
    runs-on: ubuntu-latest
    environment: staging
    steps:
      - run: echo "deploy ${{ needs.build.outputs.tag }} to staging"   # e.g. helm upgrade / kubectl / GitOps commit

  deploy-production:
    needs: deploy-staging
    runs-on: ubuntu-latest
    environment: production                # protection rules: required reviewers, wait timer
    permissions:
      id-token: write                      # OIDC: short-lived cloud credentials, no static keys
      contents: read
    steps:
      - uses: aws-actions/configure-aws-credentials@v6
        with:
          role-to-assume: arn:aws:iam::123456789012:role/gh-deploy-prod
          aws-region: eu-west-1
      - run: echo "deploy to production"
```

Notes: pin third-party actions to a **commit SHA** for supply-chain safety (tags are mutable) and let Dependabot/Renovate update them; the major versions above were the latest at the time of writing, so check the Marketplace/release pages; never run untrusted PR code with secrets (`pull_request_target` pitfalls); use `workflow_dispatch` for manual runs and `needs`/`if` for gating. Reusable workflows (`workflow_call`) and composite actions remove copy-paste across repos.

[↑ Back to top](#table-of-contents)

### 30. How do caching, artifacts, secrets and environments work in CI?

`🟡 Middle` · `#cicd` `#github-actions` `#secrets`

**Caches** speed up repeated work (dependencies, build caches) and are best-effort: keyed, can be evicted, never required for correctness. **Artifacts** pass build outputs between jobs or keep them for download (coverage, reports, bundles). **Secrets** and **environments** control sensitive values and who may deploy where.

```yaml
# Dependency cache with an explicit key (setup-node's `cache:` does this automatically)
- uses: actions/cache@v6
  with:
    path: ~/.npm
    key: npm-${{ runner.os }}-${{ hashFiles('**/package-lock.json') }}
    restore-keys: npm-${{ runner.os }}-

# Artifact: produced in one job, consumed in another
- uses: actions/upload-artifact@v7
  with: { name: dist, path: dist/, retention-days: 7 }
# in a later job:
- uses: actions/download-artifact@v8
  with: { name: dist }
```

| Concept | Scope | Notes |
|---|---|---|
| Cache | Per repo, branch-scoped restore rules | Key on lockfile hash; size limits and eviction apply |
| Artifact | Per workflow run | Short retention; for outputs you need, not speedups |
| Repository / org secrets | All workflows | Masked in logs; not available to PRs from forks |
| **Environment** secrets and rules | Jobs with `environment:` | Required reviewers, wait timers, branch restrictions |
| **OIDC** | Job gets a signed JWT | Cloud IAM trusts `repo:org/repo:environment:production`: no long-lived keys to leak or rotate |

Best practices: prefer **OIDC federation** over stored cloud keys; scope `permissions:` per job; never `echo` secrets (masking is by exact string and breaks on transformed values); don't pass secrets as build args; separate staging and production secrets via environments; for self-hosted runners remember they persist state between jobs unless ephemeral.

> **Follow-up:** Cache poisoning risk? A cache written by a compromised PR job can be restored by a privileged workflow if keys overlap; keep caches for untrusted code separate and don't restore them in release jobs.

[↑ Back to top](#table-of-contents)

### 31. Trunk-based development vs GitFlow: which branching strategy and why?

`🟡 Middle` · `#cicd` `#git`

**Trunk-based development** (TBD): everyone integrates small changes into `main` at least daily (short-lived branches under a day or two), incomplete work hides behind **feature flags**, and `main` is always releasable. **GitFlow** uses long-lived `develop`, `release/*`, `hotfix/*` branches, suited to versioned, scheduled releases.

| | Trunk-based | GitFlow |
|---|---|---|
| Branch lifetime | Hours to a day or two | Days to weeks |
| Merge pain | Small, frequent | Large, painful integrations |
| Release | Continuous, from `main` (or release tags/branches cut from trunk) | Scheduled from `release/*` |
| Needs | Strong CI, feature flags, fast tests | Less automation, more process |
| Fits | Web apps, SaaS, continuous delivery | Mobile apps, on-prem/versioned products with multiple supported versions |
| DORA research | Correlates with higher deployment frequency and lower lead time | |

How to make TBD safe: required status checks and code review on PRs, merge queues, small PRs, flags with an expiry owner (remove them), `main` protected from direct pushes, automatic rollback. Release branches can still exist under TBD for patching an old version; they're cut from trunk, never merged back.

> **Follow-up:** Squash vs merge vs rebase? Squash gives one revertible commit per PR (clean history, easy revert); keep PRs small so squash doesn't hide too much.

[↑ Back to top](#table-of-contents)

## Deployment Strategies

### 32. Compare rolling, blue-green and canary deployments.

`🟡 Middle` · `#deployment` `#release`

**Rolling** replaces instances gradually; **blue-green** runs a full second environment and switches traffic atomically; **canary** sends a small, increasing share of real traffic to the new version and promotes based on metrics.

![Blue-green vs canary](./diagrams/blue-green-canary.png)

| | Rolling | Blue-green | Canary |
|---|---|---|---|
| Extra capacity | Small (surge) | **2x** during switch | Small |
| Rollback | Slow (roll back again) | **Instant** (flip back) | Fast (set weight to 0) |
| Blast radius | Grows as rollout proceeds | All users at the flip | **Small, controlled** |
| Both versions live | Yes, briefly | Briefly (pre-switch testing) | Yes, for the whole analysis |
| DB changes | Must be compatible | Must be compatible (or shared DB) | Must be compatible |
| Complexity | Lowest (Kubernetes default) | Medium | Highest (needs traffic splitting + metrics) |

Canary needs a router with weights (Gateway API `weight`, Istio/Linkerd, AWS ALB weighted target groups, Nginx `split_clients`) and automated analysis: **Argo Rollouts** or **Flagger** compare error rate and latency to the baseline and auto-promote or roll back.

```yaml
# Argo Rollouts canary (replaces Deployment)
apiVersion: argoproj.io/v1alpha1
kind: Rollout
metadata: { name: api }
spec:
  replicas: 5
  selector: { matchLabels: { app: api } }
  template:
    metadata: { labels: { app: api } }
    spec:
      containers: [{ name: api, image: registry.example.com/api:1.4.3 }]
  strategy:
    canary:
      steps:
        - setWeight: 5
        - pause: { duration: 5m }
        - setWeight: 25
        - pause: { duration: 10m }
        - setWeight: 50
        - pause: { duration: 10m }
```

Choose: rolling for most services; blue-green when you need instant rollback and can afford duplicate capacity; canary for high-traffic or high-risk services. Pick sticky routing or consistent hashing if users must not flip between versions.

> **Follow-up:** What do you gate promotion on? The golden signals compared to baseline: 5xx rate, p95/p99 latency, saturation, plus business metrics (checkout conversion).

[↑ Back to top](#table-of-contents)

### 33. How do feature flags and expand/contract migrations enable safe releases?

`🔴 Senior` · `#deployment` `#feature-flags` `#database`

**Feature flags** decouple *deploy* (code on servers) from *release* (users see it): ship dark, enable for staff, then 1% to 100%, with an instant kill switch. Database changes must use **expand/contract** so old and new app versions can both run against the schema during any rollout or rollback.

```ts
// Server-side flag evaluation with a stable per-user bucket
function isEnabled(flag: string, userId: string, rollout: number): boolean {
  const hash = crypto.createHash('sha1').update(`${flag}:${userId}`).digest().readUInt32BE(0);
  return (hash % 100) < rollout;        // same user always gets same answer
}
```

Flag types and lifecycle: **release flags** (short-lived, delete after rollout), **ops flags/kill switches** (long-lived), **experiment flags** (A/B), **permission flags** (entitlements). Risks: flag debt (stale code paths), combinatorial testing, evaluation latency, and an unavailable flag service (always define safe defaults and cache locally). Tools: LaunchDarkly, Unleash, GrowthBook, PostHog, OpenFeature as a vendor-neutral SDK.

**Expand/contract** example: renaming `users.name` to `full_name` without downtime:

1. **Expand**: add nullable `full_name`; deploy code that writes both columns and reads the old.
2. **Backfill** in batches (not one giant `UPDATE` holding locks).
3. **Migrate reads** to `full_name` (behind a flag if desired); verify.
4. **Contract**: stop writing `name`, then drop it in a later release.

```sql
ALTER TABLE users ADD COLUMN full_name text;                       -- fast, no rewrite
CREATE INDEX CONCURRENTLY idx_users_full_name ON users (full_name); -- Postgres: no write lock
-- later: ALTER TABLE users DROP COLUMN name;
```

Dangerous in a single step: renaming/dropping columns, adding `NOT NULL` without default on big tables, non-concurrent index creation, changing types with rewrites. Run migrations as a separate pipeline step or Kubernetes Job before the rollout, not from every app replica at boot.

[↑ Back to top](#table-of-contents)

## Infrastructure as Code and GitOps

### 34. How do Terraform state, plan/apply, modules and drift work?

`🟡 Middle` · `#terraform` `#iac`

**Terraform** declaratively describes infrastructure in HCL. `terraform plan` diffs your config against the **state** (its record of what it manages) and real resources; `apply` executes the diff. State must be **remote and locked** so teams don't corrupt it.

```hcl
terraform {
  required_version = ">= 1.10"
  required_providers {
    aws = { source = "hashicorp/aws", version = "~> 6.0" }
  }
  backend "s3" {
    bucket       = "acme-tf-state"
    key          = "prod/network/terraform.tfstate"
    region       = "eu-west-1"
    encrypt      = true
    use_lockfile = true          # native S3 locking (older setups used a DynamoDB table)
  }
}

provider "aws" { region = "eu-west-1" }

variable "env"  { type = string }

module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "~> 6.0"
  name    = "app-${var.env}"
  cidr    = "10.0.0.0/16"
  azs             = ["eu-west-1a", "eu-west-1b"]
  private_subnets = ["10.0.1.0/24", "10.0.2.0/24"]
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24"]
  enable_nat_gateway = true
}

resource "aws_s3_bucket" "uploads" {
  bucket = "acme-uploads-${var.env}"
  lifecycle { prevent_destroy = true }
}

output "bucket_arn" { value = aws_s3_bucket.uploads.arn }
```

```bash
terraform init
terraform fmt -check && terraform validate
terraform plan -out=tfplan        # review; in CI, post the plan to the PR
terraform apply tfplan            # applies exactly what was reviewed
terraform plan -refresh-only      # detect drift without changing anything
terraform import aws_s3_bucket.uploads acme-uploads-prod   # adopt existing resource
```

Key ideas:

- **State** contains resource IDs and often **secrets in plaintext**: encrypt the backend, restrict access, never commit it.
- **Drift** = reality diverged from code (someone clicked in the console). Detect with scheduled `plan`, fix by apply or by updating code; restrict console write access.
- **Modules** are reusable parameterized units; version them, keep them small and opinionated.
- Split state per environment/layer (network, data, app) to limit blast radius and plan time; use `moved {}` blocks to refactor without destroy/recreate.
- Pin provider versions and commit `.terraform.lock.hcl`.
- Review the plan for `destroy` and `replace` (forces new resource) actions: those cause outages and data loss.

> **Follow-up:** `count` vs `for_each`? `count` indexes by position (removing item 0 shifts the others and recreates resources); `for_each` keys by stable string, which is safer.

[↑ Back to top](#table-of-contents)

### 35. Terraform vs OpenTofu vs Pulumi vs CloudFormation: how do you choose?

`🔴 Senior` · `#iac` `#terraform`

All describe infrastructure as code. Choose by cloud scope, team skills, licensing and ecosystem rather than hype: **Terraform/OpenTofu** for multi-cloud with the largest provider ecosystem, **Pulumi** when you want real programming languages, **CloudFormation/CDK** when you're all-in on AWS.

| | Terraform | OpenTofu | Pulumi | CloudFormation (+CDK) |
|---|---|---|---|---|
| Language | HCL | HCL (drop-in compatible fork) | TypeScript, Python, Go, C#, Java | YAML/JSON; CDK in TS/Python/etc. |
| Clouds | Thousands of providers | Same registry ecosystem | Many (bridges Terraform providers) | AWS only |
| State | Self-managed remote backend or HCP Terraform | Same, plus built-in state encryption | Pulumi Cloud or self-managed backend | Managed by AWS (stacks) |
| License | Source-available BUSL (HashiCorp, since 2023) | MPL 2.0, Linux Foundation | Apache 2.0 | n/a (service) |
| Strengths | Mature, huge community, readable plans | Open governance, same workflow | Loops, functions, unit tests, real abstractions | Native AWS integration, automatic rollback |
| Weaknesses | License concerns for some, limited logic | Smaller vendor backing | Smaller ecosystem, "too much power" | Verbose, slow, AWS lock-in |

```ts
// Pulumi (TypeScript): same bucket, with a loop that HCL would need for_each to do
import * as aws from "@pulumi/aws";
for (const env of ["dev", "prod"]) {
  new aws.s3.Bucket(`uploads-${env}`, { bucket: `acme-uploads-${env}` });
}
```

Decision guide: team of app developers who prefer TypeScript and test infra with Jest? Pulumi or CDK. Ops-leaning team, multi-cloud, hiring pool matters? Terraform or OpenTofu. Check licensing posture with legal if you embed Terraform in a product. Whatever you pick: remote state with locking, PR-based plan/apply, policy-as-code (OPA/Sentinel/Checkov), small modules, no console changes. Verify current versions and licensing terms before committing; both projects move quickly.

[↑ Back to top](#table-of-contents)

### 36. What is GitOps and how does Argo CD work?

`🟡 Middle` · `#gitops` `#argocd`

**GitOps** makes Git the single source of truth for the desired state of your deployments: a controller **inside the cluster pulls** from Git and reconciles the cluster to match, instead of CI pushing with cluster credentials. **Argo CD** (and Flux) implement this.

![GitOps loop](./diagrams/gitops-loop.png)

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: api-prod
  namespace: argocd
spec:
  project: default
  source:
    repoURL: https://github.com/acme/deploy-config.git
    targetRevision: main
    path: apps/api/overlays/prod          # Kustomize or Helm chart path
  destination:
    server: https://kubernetes.default.svc
    namespace: shop
  syncPolicy:
    automated:
      prune: true          # delete resources removed from Git
      selfHeal: true       # revert manual kubectl edits (drift)
    syncOptions: [CreateNamespace=true]
```

Flow: CI builds and pushes the image, then commits the new tag to the **config repo** (or an image-updater does); Argo CD detects the diff between Git and the live state and syncs; a revert in Git is the rollback.

| | Push (CI runs `kubectl`/`helm`) | Pull (GitOps) |
|---|---|---|
| Cluster credentials | Stored in CI (high-value target) | Stay inside the cluster |
| Drift | Undetected until next deploy | Continuously detected and healed |
| Audit | CI logs | Git history + PR reviews |
| Rollback | Re-run pipeline | `git revert` |

Practicalities: separate **app repo** and **config repo**; use Kustomize overlays or Helm values per environment; **ApplicationSets** generate Applications for many clusters/environments; keep secrets out of Git in plain text (SOPS, Sealed Secrets, External Secrets); use sync waves and hooks for ordering (migrations); pair with **Argo Rollouts** for canary.

> **Follow-up:** HPA and GitOps conflict? If the manifest hard-codes `replicas`, Argo CD's selfHeal fights the HPA; omit `replicas` or configure `ignoreDifferences` for it.

[↑ Back to top](#table-of-contents)

## Cloud Fundamentals

### 37. Explain VPCs, subnets and security groups.

`🟡 Middle` · `#cloud` `#networking` `#aws`

A **VPC** is your private, isolated virtual network in a cloud region with a CIDR range. It's divided into **subnets** per availability zone: **public** subnets have a route to an Internet Gateway; **private** subnets reach the internet only outbound via a **NAT gateway**. **Security groups** are stateful virtual firewalls attached to resources (ENIs).

```
VPC 10.0.0.0/16
├── public-a  10.0.101.0/24  (route 0.0.0.0/0 -> Internet Gateway)  ALB, NAT GW
├── public-b  10.0.102.0/24
├── private-a 10.0.1.0/24    (route 0.0.0.0/0 -> NAT GW)            app, Kubernetes nodes
├── private-b 10.0.2.0/24
└── data-a/b  10.0.201.0/24  (no internet route)                    RDS, ElastiCache
```

| | Security group | Network ACL |
|---|---|---|
| Level | Instance/ENI | Subnet |
| State | **Stateful** (return traffic auto-allowed) | Stateless (allow both directions) |
| Rules | Allow only | Allow and deny, ordered |
| Typical use | Primary control | Coarse extra guard |

```hcl
resource "aws_security_group" "db" {
  name   = "db"
  vpc_id = module.vpc.vpc_id
  ingress {
    description     = "Postgres from app tier only"
    from_port       = 5432
    to_port         = 5432
    protocol        = "tcp"
    security_groups = [aws_security_group.app.id]   # reference a group, not a CIDR
  }
}
```

Design principles: at least two AZs; databases and app servers in **private** subnets, only load balancers in public; size CIDRs generously (Kubernetes pods can eat IPs; overlapping ranges block peering); use **VPC endpoints** (S3, ECR, Secrets Manager) to avoid NAT data charges and keep traffic private; NAT gateways cost per hour and per GB, a common surprise bill; reach private resources via SSM Session Manager or a VPN instead of public SSH. Equivalent concepts exist on GCP (VPC, firewall rules) and Azure (VNet, NSGs).

[↑ Back to top](#table-of-contents)

### 38. What does least-privilege IAM mean in practice?

`🔴 Senior` · `#cloud` `#iam` `#security`

Grant each identity only the actions it needs, on only the resources it needs, under only the conditions it needs, and prefer **temporary credentials from roles** over long-lived keys. Start from zero permissions and add, rather than starting broad and trying to remove.

```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Sid": "UploadsReadWriteOwnPrefix",
    "Effect": "Allow",
    "Action": ["s3:GetObject", "s3:PutObject"],
    "Resource": "arn:aws:s3:::acme-uploads-prod/app/*",
    "Condition": { "Bool": { "aws:SecureTransport": "true" } }
  }]
}
```

Practices:

- **Roles, not users:** workloads assume roles (EC2 instance profile, ECS task role, **IRSA / EKS Pod Identity** for pods, GitHub OIDC for CI). No access keys in env files.
- **No wildcards** like `Action: "*"` or `Resource: "*"` except where unavoidable (some list/describe APIs); avoid `iam:PassRole` on `*` (a classic privilege escalation).
- **Separate roles** per service and per environment; separate accounts for prod vs non-prod (the account is the strongest boundary).
- **Guardrails:** Service Control Policies (SCPs) / organization policies and **permission boundaries** cap what anyone can grant.
- **Evidence-based tightening:** IAM Access Analyzer, last-accessed data and CloudTrail to find unused permissions and generate policies.
- Humans: SSO with MFA, short sessions, break-glass process; audit everything.
- Policy evaluation: explicit **Deny** beats Allow; default is implicit deny.

> **Follow-up:** How do you debug "AccessDenied"? Read the denied action and ARN from the error/CloudTrail event, check identity policy, resource policy (bucket policy, KMS key policy), SCPs and permission boundaries; all must permit.

[↑ Back to top](#table-of-contents)

### 39. Serverless vs containers vs VMs, and managed services vs self-hosting: how do you decide?

`🔴 Senior` · `#cloud` `#architecture`

Default to the **most managed option that meets your needs** and move down the stack only when constraints (cost at scale, latency, runtime limits, portability) force you to. Your scarcest resource is usually engineering attention, not compute.

| | Functions (Lambda, Cloud Functions) | Serverless containers (Cloud Run, ECS Fargate) | Kubernetes (EKS/GKE) | VMs (EC2) |
|---|---|---|---|---|
| Ops burden | Lowest | Low | High | Medium-high |
| Scaling | Automatic, to zero | Automatic, to zero (Cloud Run) | HPA + node autoscaling | Auto Scaling Groups |
| Cold starts | Yes | Some | No | No |
| Limits | Time, memory, payload, concurrency | Fewer | Few | None |
| Pricing | Per invocation/ms | Per vCPU-second | Pay for nodes | Pay for instances |
| Best for | Event handlers, spiky/low traffic, glue | HTTP services, APIs, workers | Many services, custom networking, platform teams | Legacy, special hardware, long-lived stateful |

Serverless trade-offs: pay-per-use and no servers to patch, but cold starts, per-request cost that overtakes a steady container at high constant load, vendor-specific triggers (lock-in), harder local testing, DB connection exhaustion (use RDS Proxy/pooling), execution limits (15 minutes on Lambda), and distributed-tracing overhead.

**Managed vs self-hosted** (Postgres, Redis, Kafka, search): managed services (RDS/Aurora, ElastiCache, MSK, OpenSearch) buy backups, patching, failover and monitoring at a 1.5-3x price premium; self-host when you need unsupported extensions or settings, or the bill at scale justifies a dedicated team. Never self-host a stateful database "for cost" without pricing your on-call time and failure risk.

Also consider: egress costs, data residency, exit strategy (use open standards: containers, Postgres, S3-compatible APIs), and **Kubernetes only when its capabilities pay for its complexity**; a team with five services rarely needs it.

[↑ Back to top](#table-of-contents)

### 40. What is a CDN and how do you configure caching correctly?

`🟢 Junior` · `#cloud` `#cdn` `#caching`

A **CDN** is a global network of edge servers that cache and serve content near users, cutting latency and origin load, absorbing traffic spikes and DDoS, and terminating TLS at the edge. Origin servers control behavior with `Cache-Control` headers.

| Content | Header | Why |
|---|---|---|
| Hashed assets (`app.3f9a1c.js`) | `Cache-Control: public, max-age=31536000, immutable` | Filename changes when content changes |
| HTML pages | `Cache-Control: public, max-age=0, s-maxage=60, stale-while-revalidate=300` | Short shared-cache TTL, serve stale while refreshing |
| Authenticated/personal | `Cache-Control: private, no-store` | Must never be cached by a shared cache |
| API GET with public data | `s-maxage=30` + `Vary: Accept-Encoding` | Cache briefly at edge |

Practices: **cache-bust by filename**, not by purging; purge/invalidate only for HTML or emergencies (invalidations are slow and sometimes billed); set the cache key correctly (don't include random cookies or tracking query params, or the hit ratio collapses); use `Vary` sparingly; **origin shield** (a middle caching tier) reduces origin load; a CDN in front of the app also gives WAF, rate limiting, bot filtering and image optimization. Examples: CloudFront, Cloudflare, Fastly, Akamai.

Pitfall: caching a response containing `Set-Cookie` or personalized content and serving it to everyone (a data leak). Verify with `curl -I` and the `Age` / `X-Cache` / `CF-Cache-Status` headers.

[↑ Back to top](#table-of-contents)

## Observability

### 41. What are logs, metrics and traces, and how do they differ?

`🟢 Junior` · `#observability`

The three pillars answer different questions: **metrics** tell you *that* something is wrong (aggregated numbers over time), **traces** tell you *where* (a request's path across services), **logs** tell you *why* (detailed event records).

| | Metrics | Logs | Traces |
|---|---|---|---|
| Data | Numeric time series | Timestamped events | Spans forming a tree per request |
| Cost | Cheap, fixed by cardinality | Grows with volume | Grows with traffic (sample) |
| Best for | Dashboards, alerting, SLOs | Debugging specifics, audit | Latency analysis, dependency maps |
| Example | `http_requests_total{status="500"}` | `{"level":"error","orderId":"o_1","msg":"payment failed"}` | `POST /checkout` -> `payments-svc` (800ms) -> `stripe` (750ms) |

Good practices: **structured JSON logs** with a request/trace ID so you can pivot from a trace to its logs; log to stdout and let the platform collect (12-factor); don't log secrets/PII; avoid **high-cardinality metric labels** (user IDs, URLs with IDs) which explode storage; use correct log levels; sample traces (head or tail-based sampling keeps errors and slow requests).

```js
// pino: structured logs with correlation id
const log = pino({ level: process.env.LOG_LEVEL ?? 'info' });
app.use((req, _res, next) => { req.log = log.child({ reqId: req.headers['x-request-id'] }); next(); });
req.log.error({ orderId, err }, 'payment failed');
```

A fourth signal is rising: **profiles** (continuous profiling), and **RUM/frontend** telemetry for the browser side of the experience.

[↑ Back to top](#table-of-contents)

### 42. How do OpenTelemetry, Prometheus and Grafana fit together?

`🟡 Middle` · `#observability` `#opentelemetry` `#prometheus`

**OpenTelemetry (OTel)** is the vendor-neutral standard for generating and shipping telemetry (SDKs, the OTLP protocol, the Collector). **Prometheus** scrapes and stores metrics and evaluates alert rules; **Grafana** visualizes data from many backends (Prometheus, Loki for logs, Tempo for traces). Instrument once with OTel, choose backends freely.

![Observability pipeline](./diagrams/observability-pipeline.png)

Node.js auto-instrumentation (HTTP, Express, pg, Redis, fetch) with no code changes:

```bash
npm i @opentelemetry/api @opentelemetry/auto-instrumentations-node
export OTEL_SERVICE_NAME=api
export OTEL_EXPORTER_OTLP_ENDPOINT=http://otel-collector:4318
export OTEL_TRACES_SAMPLER=parentbased_traceidratio
export OTEL_TRACES_SAMPLER_ARG=0.1
node --require @opentelemetry/auto-instrumentations-node/register dist/server.js
```

Collector pipeline (receive, process, export):

```yaml
receivers:
  otlp: { protocols: { http: {}, grpc: {} } }
processors:
  memory_limiter: { check_interval: 1s, limit_mib: 400 }
  batch: {}
exporters:
  otlphttp/tempo: { endpoint: http://tempo:4318 }
  prometheusremotewrite: { endpoint: http://prometheus:9090/api/v1/write }
service:
  pipelines:
    traces:  { receivers: [otlp], processors: [memory_limiter, batch], exporters: [otlphttp/tempo] }
    metrics: { receivers: [otlp], processors: [memory_limiter, batch], exporters: [prometheusremotewrite] }
```

Prometheus is **pull-based**: it scrapes `/metrics` from targets (discovered via Kubernetes service discovery); metric types are counter, gauge, histogram, summary. Useful PromQL:

```promql
# Request rate per route
sum by (route) (rate(http_requests_total[5m]))

# Error ratio
sum(rate(http_requests_total{status=~"5.."}[5m])) / sum(rate(http_requests_total[5m]))

# p95 latency from a histogram
histogram_quantile(0.95, sum by (le) (rate(http_request_duration_seconds_bucket[5m])))
```

`rate()` is for counters (never graph a raw counter); histogram buckets must be chosen around your SLO threshold. The Collector adds batching, retries, sampling and redaction centrally so apps stay simple. Prometheus is not long-term storage; use Thanos, Mimir or a managed service for retention and HA.

> **Follow-up:** Pull vs push? Pull gives easy target-health (`up`) and central control; short-lived jobs use the Pushgateway or OTLP push.

[↑ Back to top](#table-of-contents)

### 43. What are the RED and USE methods, and what are SLIs, SLOs and error budgets?

`🔴 Senior` · `#observability` `#sre`

**RED** (for services): **R**ate, **E**rrors, **D**uration of requests. **USE** (for resources like CPU, disk, network): **U**tilization, **S**aturation, **E**rrors. Google's **four golden signals** are latency, traffic, errors, saturation. An **SLI** is a measured indicator, an **SLO** is the target for it, and the **error budget** is the allowed unreliability (`1 - SLO`) you can spend on releases and risk.

| Term | Definition | Example |
|---|---|---|
| SLI | Ratio of good events to valid events | % of requests under 300ms and not 5xx |
| SLO | Target over a window | 99.9% over 30 days |
| SLA | Contract with consequences (credits) | Looser than the SLO |
| Error budget | `100% - SLO` | 0.1% of 30 days = about 43 minutes of full downtime equivalent |

```promql
# SLI: availability over 30d
1 - (
  sum(increase(http_requests_total{status=~"5.."}[30d]))
  / sum(increase(http_requests_total[30d]))
)
```

How budgets drive decisions: budget remaining means ship faster; budget exhausted means freeze risky changes and spend time on reliability. This turns the product-vs-stability argument into data. Choose SLIs users feel (success rate, latency at the load balancer or from the client), not CPU. 100% is the wrong target: it's infinitely expensive and blocks all change.

**Burn-rate alerting** pages on how fast the budget is being consumed: e.g. page when a 1h and 5m window both burn at 14.4x (2% of a 30-day budget in an hour), ticket at slow burns (3x over 6h/30m). This beats raw threshold alerts: fewer false pages, faster detection of real impact.

> **Follow-up:** How many nines? 99.9% = 43.8 min/month, 99.99% = 4.4 min/month; each extra nine roughly 10x the cost, and your SLO can't exceed your dependencies' combined availability.

[↑ Back to top](#table-of-contents)

### 44. What makes a good alert, and how do you avoid alert fatigue?

`🔴 Senior` · `#observability` `#alerting` `#oncall`

Page a human only for conditions that are **urgent, actionable and user-impacting**. Everything else is a ticket, a dashboard or nothing. Alert on **symptoms** (users see errors/slowness), not causes (CPU at 80%); use causes for diagnosis dashboards.

```yaml
# Prometheus alerting rule (symptom-based, with `for` and a runbook)
groups:
  - name: api-slo
    rules:
      - alert: ApiHighErrorRate
        expr: |
          sum(rate(http_requests_total{job="api",status=~"5.."}[5m]))
            / sum(rate(http_requests_total{job="api"}[5m])) > 0.02
        for: 10m
        labels: { severity: page, team: backend }
        annotations:
          summary: "API 5xx ratio above 2% for 10m"
          runbook_url: https://wiki.example.com/runbooks/api-5xx
          dashboard: https://grafana.example.com/d/api
```

Checklist for each alert: Does it need action *now*? Is there a runbook? Does it have an owner? Is the threshold tied to an SLO? Is it deduplicated and grouped (**Alertmanager** grouping, inhibition so a node-down alert silences its pod alerts, routing by severity and team)? Use `for:` to avoid flapping on blips, and multi-window burn rates.

Anti-patterns: alerting on every metric, alerts nobody acts on (delete them), no ownership, paging at 3am for a single failed retryable job, alerting on a dependency you can't fix without context. Track **alert quality** (percent actionable, pages per on-call shift, time to acknowledge) and review noisy alerts weekly. Sustainable on-call: follow-the-sun or rotations of enough people, compensation, and the rule that repeated manual fixes become automation.

[↑ Back to top](#table-of-contents)

## Secrets Management

### 45. How should secrets be managed: Vault, cloud secret managers and SOPS?

`🔴 Senior` · `#secrets` `#security`

Secrets must never live in Git, images or plain environment files; store them in a dedicated system with **access control, audit, rotation** and, ideally, **short-lived dynamic credentials**. Choose by operational weight: a cloud secret manager for most teams, **Vault** when you need dynamic secrets and multi-cloud, **SOPS** for encrypted-in-Git workflows.

| Option | What it is | Strengths | Trade-offs |
|---|---|---|---|
| AWS Secrets Manager / SSM Parameter Store, GCP Secret Manager, Azure Key Vault | Managed secret stores with IAM access and KMS encryption | No servers, native IAM, rotation (Secrets Manager + Lambda), audit via CloudTrail | Cloud-specific; per-secret/per-call cost |
| HashiCorp Vault / OpenBao | Self-run secrets platform | **Dynamic secrets** (DB creds created per lease and revoked), PKI, transit encryption, multi-cloud | You operate it (HA, unseal, upgrades) |
| SOPS (+ age/KMS) | Encrypts values inside YAML/JSON files committed to Git | GitOps-friendly, diffable, no runtime service | Key management and rotation are on you; secrets still end up as K8s Secrets at runtime |
| Sealed Secrets | Encrypt with cluster's public key; controller decrypts | Simple in-cluster GitOps | Tied to one cluster's key |
| External Secrets Operator / CSI driver | Syncs from a cloud store into K8s Secrets/volumes | Single source of truth outside the cluster | Another controller to run |

```yaml
# External Secrets Operator: pull from AWS Secrets Manager into a K8s Secret
apiVersion: external-secrets.io/v1
kind: ExternalSecret
metadata: { name: api-db, namespace: shop }
spec:
  refreshInterval: 1h
  secretStoreRef: { name: aws-secrets, kind: ClusterSecretStore }
  target: { name: api-db }
  data:
    - secretKey: DATABASE_URL
      remoteRef: { key: prod/api/database-url }
```

```bash
# SOPS: encrypt only values; commit the file
sops --encrypt --age age1xyz... secrets.yaml > secrets.enc.yaml
sops --decrypt secrets.enc.yaml | kubectl apply -f -
```

Principles: **rotate** (automate; design apps to reload or restart on change), **least privilege** per workload, **never log** secrets, prefer **identity over secrets** (IAM roles/OIDC/workload identity instead of API keys wherever possible), scan for leaks (gitleaks, GitHub secret scanning with push protection), and have a **leak runbook**: if a secret hit Git, rotate it first; deleting the commit is not enough because history, forks and caches keep it.

> **Follow-up:** Env vars vs mounted files? Env vars leak via crash dumps, `docker inspect`, `/proc/<pid>/environ` and child processes; files with tight permissions (tmpfs) and reload-on-change are safer, but both are readable by anything with the container's access.

[↑ Back to top](#table-of-contents)

## Scaling and Reliability

### 46. Vertical vs horizontal scaling: what is the difference and what do you scale first?

`🟢 Junior` · `#scaling`

**Vertical scaling** (scale up) gives one machine more CPU/RAM; **horizontal scaling** (scale out) adds more machines/instances behind a load balancer. Vertical is simple but capped and has a single point of failure; horizontal is elastic and resilient but requires the app to be **stateless** or to share state.

| | Vertical | Horizontal |
|---|---|---|
| Effort | Resize and restart | Needs LB, stateless design |
| Limit | Largest instance | Practically unlimited |
| Availability | Single point of failure, often downtime to resize | Survives instance loss |
| Cost curve | Super-linear at the top | Linear |
| Good for | Databases (primary), quick wins | Web/API tiers, workers |

Making an app horizontally scalable: store sessions in Redis or signed JWT cookies (not in memory); put uploads in object storage, not local disk; use a queue for background work; make jobs idempotent; use health checks. Autoscale on the right signal (CPU, request rate, queue depth) with min replicas for availability, max for budget, and cooldowns to avoid flapping.

Scaling order of thumb: measure first, then fix the bottleneck: profile and add indexes, cache (Redis/CDN), scale the stateless tier horizontally, add **read replicas**, then partition/shard the database. The database is almost always the hard part; stateless tiers are easy.

[↑ Back to top](#table-of-contents)

### 47. What are RPO and RTO, and how do you design backups and disaster recovery?

`🔴 Senior` · `#reliability` `#backup` `#dr`

**RPO** (Recovery Point Objective) is how much data you can afford to lose, measured in time (RPO 5 min means restore to within 5 minutes before the failure). **RTO** (Recovery Time Objective) is how long you can be down. Both are business decisions that dictate cost: lower values need more infrastructure.

| DR strategy | RTO | RPO | Cost | How |
|---|---|---|---|---|
| Backup and restore | Hours | Hours | $ | Backups copied to another region; rebuild with IaC |
| Pilot light | Tens of minutes | Minutes | $$ | Data replicated, minimal core running, scale up on disaster |
| Warm standby | Minutes | Seconds-minutes | $$$ | Scaled-down full copy always running |
| Multi-region active-active | Near zero | Near zero | $$$$ | Both serve traffic; hard data consistency problems |

Concrete practices:

- **3-2-1 rule**: 3 copies, 2 media/types, 1 off-site (other region/account). Make backups **immutable** (S3 Object Lock, separate account) to survive ransomware or a compromised admin.
- Databases: automated snapshots plus **point-in-time recovery** (WAL archiving) for low RPO; test restoring to a new instance.
- **A backup you haven't restored is not a backup.** Schedule restore drills, measure the real RTO, and automate the runbook.
- Rebuild from code: IaC + GitOps means infrastructure is reproducible; only *data* needs backups. Keep IaC state and secrets recoverable too.
- Replication is not backup: a `DROP TABLE` or corruption replicates instantly to replicas.
- Define dependencies: DNS, identity provider, CI/CD and registry also need a DR story (can you deploy if your CI is down?).

```bash
# Postgres point-in-time recovery sketch (managed services expose this as a restore-to-time option)
aws rds restore-db-instance-to-point-in-time \
  --source-db-instance-identifier prod-db \
  --target-db-instance-identifier prod-db-restore \
  --restore-time 2026-10-08T09:55:00Z
```

> **Follow-up:** Multi-AZ vs multi-region? Multi-AZ protects against a datacenter failure with automatic failover (high availability); multi-region protects against a whole-region outage or logical disasters at much higher cost and complexity.

[↑ Back to top](#table-of-contents)

### 48. How do you run incident response and write a blameless postmortem?

`🔴 Senior` · `#incident-response` `#sre`

During an incident the goal is to **stop user impact fast** (mitigate, then diagnose): roll back, flip a flag, scale up, fail over. Root cause comes after. Afterwards, a **blameless postmortem** finds the systemic causes and produces tracked action items.

Incident process:

1. **Detect and declare**: alert or report; declare an incident with a severity (SEV1-3) in a dedicated channel.
2. **Roles**: **Incident Commander** (coordinates, decides, doesn't debug), **Ops/Tech lead** (hands on keyboard), **Communications lead** (status page, stakeholders), a scribe keeping a timeline.
3. **Mitigate first**: the last deploy/flag/config change is the usual suspect: `kubectl rollout undo`, disable the flag, revert. Use runbooks. Prefer reversible actions.
4. **Communicate** on a fixed cadence (every 15-30 min), even with "no update".
5. **Resolve and hand off**; schedule the postmortem within a few days.

Postmortem template:

```markdown
# Incident 2026-10-08: Checkout 5xx for 38 minutes (SEV2)
**Impact:** 12% of checkout requests failed; ~340 orders delayed
**Detection:** Burn-rate alert after 6 min. **Time to mitigate:** 38 min
## Timeline (UTC)
09:02 Deploy 1.4.3 started ... 09:08 alert ... 09:40 rollback complete
## Root cause and contributing factors
Migration locked `orders` table; readiness probe passed while DB queries timed out
## What went well / what went poorly / where we got lucky
## Action items (owner, priority, due)
- Run migrations as pre-deploy job with lock_timeout (alice, P1, 10-15)
- Add DB latency to readiness check / SLO alert (bob, P2, 10-22)
```

Blameless means asking "how did our system allow a reasonable person to do this?", not "who did it?". Aim for few but real action items that get tracked to completion; look for detection and recovery gaps as well as the trigger. Metrics: MTTD, MTTR, change failure rate, incident count by cause (DORA metrics). Practice with game days and chaos experiments.

[↑ Back to top](#table-of-contents)

### 49. How do you reduce cloud costs without hurting reliability?

`🔴 Senior` · `#cost` `#finops`

**Measure, attribute, then optimize** the biggest items first. Typical order of impact: eliminate waste, right-size, commit to discounts, then architectural changes.

| Lever | Actions | Typical caveat |
|---|---|---|
| Visibility | Tag/label everything by team/service/env; cost reports; budgets and anomaly alerts (AWS Cost Explorer/Budgets, Kubecost/OpenCost) | Untagged spend is unowned spend |
| Eliminate waste | Delete idle instances, unattached volumes, old snapshots, unused load balancers/IPs; shut down dev/staging at night and weekends | Automate with schedules |
| Right-size | Compare requests/limits and instance sizes to actual p95 usage; VPA recommendations; Graviton/ARM instances (often 20-40% cheaper per unit work) | Test performance on ARM images |
| Pricing models | Savings Plans/Reserved Instances/committed use for steady baseline; **Spot** for stateless/fault-tolerant workloads | Spot can be reclaimed: need graceful shutdown and diversification |
| Autoscaling | HPA + Karpenter/Cluster Autoscaler, scale to zero for dev, KEDA | Don't scale below availability needs |
| Storage | S3 lifecycle rules to infrequent-access/Glacier, gp3 over gp2, expire logs | Retrieval fees |
| Data transfer | VPC endpoints, CDN, keep chatty services in the same AZ, avoid cross-region traffic, NAT gateway egress | Egress is often the surprise |
| Observability spend | Sample traces, drop noisy debug logs, limit metric cardinality, shorter retention for high-volume data | Keep what you need for incidents |
| Architecture | Cache, batching, serverless for spiky loads, managed services vs on-call cost | Rewrite only where the savings justify |

```yaml
# Kubernetes: run fault-tolerant workers on Spot nodes
tolerations: [{ key: "karpenter.sh/capacity-type", operator: "Equal", value: "spot", effect: "NoSchedule" }]
```

Remember total cost of ownership: engineer hours, on-call load and outage risk usually outweigh a 10% infra saving; don't trade away redundancy (multi-AZ) or backups to save money. Make cost a first-class metric (cost per request/tenant) reviewed regularly, and give teams visibility into their own spend.

> **Follow-up:** Surprise bill checklist: NAT gateway data processing, cross-AZ/region transfer, log ingestion, orphaned resources, runaway autoscaling or a retry storm.

[↑ Back to top](#table-of-contents)
