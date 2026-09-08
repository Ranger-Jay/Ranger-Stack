# Ranger Stack

**Evidence-first, authority-scoped engineering specialists for AI-assisted software work.**

Ranger Stack is a curated fork of [garrytan/gstack](https://github.com/garrytan/gstack). It keeps the strongest planning, engineering, QA, security, evidence, continuity, and delivery machinery from upstream while changing the operating model around it:

> **Observe → Evidence → Propose or Execute Within Authority → Verify → Escalate Only When Authority Is Exceeded**

For externally consequential work:

> **Claim → Evidence → Human Authority → Execution → Independent Verification**

Ranger Stack is designed for operators who want capable AI agents without silent scope expansion, automatic publishing, hidden cross-project learning, cost-blind model selection, or simulated proof.

**Current Ranger release:** `0.001`  
**Audited upstream anchor:** gstack `v1.81.0.0` at `0530392821c277b95e5cd65aa9d9fda4248718b2`

---

## What Ranger changes

Ranger Stack adds a policy and verification layer on top of the inherited gstack toolchain.

- **Explicit-only specialist routing.** A specialist is invoked because the operator names it or explicitly approves a recommendation. Similarity to a trigger is not permission to run it.
- **R0–R6 authority.** Read-only work, edits, commits, publishing, operations, and irreversible actions are separate authority levels. Scope always beats level.
- **Evidence before claims.** Work should be bound to current source state when practical, and execution should be independently verified.
- **No simulated proof.** A plausible result is not a verified result.
- **Capability first, cost second.** Model selection should use genuinely comparable evidence before optimizing price.
- **Privacy-safe defaults.** Telemetry, artifact sync, automatic upgrades, checkpoint push, cross-project learning, transcript ingestion, remote pairing, and related outbound behavior are disabled by Ranger setup unless deliberately enabled.
- **Competition-safe operation.** Event start, deadline, eligibility, originality, disclosure, and submission rules outrank convenience.
- **Upstream compatibility without automatic endorsement.** Inherited skills remain physically present where runtime/generator compatibility requires them. Ranger's intake manifest defines which are active, modified, or parked.

The canonical policy documents are in [`docs/ranger-stack/`](docs/ranger-stack/).

---

## Install

### Requirements

- Git
- Bun 1.x
- A supported AI coding host from the inherited gstack ecosystem
- Node.js where required by the selected host/workflow

### Recommended installation

Ranger currently preserves the inherited `gstack` runtime path for compatibility. Install the repository into that location, then run the Ranger wrapper instead of upstream `./setup` directly.

```bash
git clone --single-branch https://github.com/Ranger-Jay/Ranger-Stack.git ~/.claude/skills/gstack
cd ~/.claude/skills/gstack
./bin/ranger-setup
```

After setup, invoke the Ranger control plane explicitly:

```text
/ranger
```

Or state the mission and authority directly, for example:

```text
Ranger authority R2 for this mission. Run /qa on http://localhost:3000 and remediate only verified defects in the approved project files.
```

Ranger setup deliberately reasserts its safe defaults both before and after inherited setup logic runs.

---

## The authority ladder

Every specialist invocation defaults to **R1 Draft** unless the operator grants a different level for a defined scope.

| Level | Name | Permitted work |
|---|---|---|
| **R0** | Observe | Read, inspect, search, benchmark, and run non-mutating diagnostics/evidence collection. |
| **R1** | Draft | R0 plus plans, specifications, reviews, recommendations, and proposed changes. No project mutation. |
| **R2** | Local Edit | R1 plus edits and tests inside the approved local project scope. |
| **R3** | Commit | R2 plus staging and local Git commits. |
| **R4** | Publish | R3 plus pushing branches and creating/updating PRs or issues in the approved scope. |
| **R5** | Operate | R4 plus specifically authorized merge, deploy, release, or other external-system mutation. |
| **R6** | One-Way | Destructive or materially irreversible action. **Always requires individual explicit confirmation.** Blanket authority never supplies R6. |

Examples:

```text
Run /review at R1. Report only.
```

```text
Run /qa at R2 against http://localhost:3000. You may fix verified defects locally, but do not commit or push.
```

```text
Ranger authority R4 for this mission: implement the approved issue, test it, commit it, push the branch, and open a PR. Do not merge.
```

**Scope beats level.** R4 for one branch does not authorize publishing unrelated work. R5 does not imply R6.

---

## Status vocabulary

Ranger uses explicit evidence states so plans and demonstrations do not masquerade as completed work.

- `OBSERVED` — directly inspected in the current evidence set.
- `REPRODUCED` — independently reproduced under stated conditions.
- `PROPOSED` — a bounded change or action has been drafted but not authorized/executed.
- `AUTHORIZED` — the required human authority has been granted for the stated scope.
- `EXECUTED` — the authorized mutation was performed.
- `VERIFIED` — post-execution evidence independently confirms the intended result.
- `BLOCKED` — progress cannot continue safely or correctly with current authority/evidence.
- `INSUFFICIENT COMPARABLE EVIDENCE` — a ranking or model choice cannot be defended apples-to-apples.

---

## Quick start

A conservative engineering flow:

```text
/ranger
/office-hours
/plan-eng-review
/review
/qa-only
/ship
```

Under Ranger, that sequence does **not** mean every command may mutate or publish. Authority still governs each step. A practical version is:

1. `/office-hours` at R1 to interrogate the problem.
2. `/plan-eng-review` at R1 to pressure-test architecture and failure modes.
3. Implement at R2 or R3 only after scope is approved.
4. `/review` at R1 for report-only review unless edit authority is explicitly granted.
5. `/qa-only` at R0/R1 for read-only verification, or `/qa` at R2 when remediation is authorized.
6. `/ship` only with the authority needed for the requested delivery boundary. Commit, push, PR, merge, deploy, and release are not treated as one implicit permission bundle.

---

# Skill catalog and exact invocation commands

Ranger v0.001 audits **53 inherited skills** into three classes:

- **KEEP** — accepted substantially as inherited.
- **MODIFY** — useful, but Ranger applies an authority, evidence, scope, privacy, or cost overlay.
- **SKIP** — physically present for compatibility where necessary, but not in the v0.001 operational surface.

The command shown in the **Invoke** column is the exact slash command to type.

## KEEP — 17 skills

| Invoke | Specialist / purpose | Ranger use |
|---|---|---|
| **`/plan-eng-review`** | Engineering architecture review | Architecture, data flow, edge cases, test strategy, failure modes. |
| **`/investigate`** | Root-cause debugging | Evidence-first diagnosis before fixes. |
| **`/qa-only`** | Read-only QA | Exercise behavior and report defects without remediation. |
| **`/health`** | Project/system health | Inspect health signals and surface risks. |
| **`/benchmark`** | Performance benchmarking | Measure current behavior before optimization claims. |
| **`/canary`** | Canary verification | Bounded health/rollout verification where applicable. |
| **`/cso`** | Security review | Security audit and threat-oriented review. |
| **`/devex-review`** | Developer-experience audit | Test onboarding, docs, workflows, and developer friction. |
| **`/diagram`** | Technical diagrams | Produce architecture/process diagrams from evidence and plans. |
| **`/document-generate`** | Documentation generation | Generate bounded project documentation. |
| **`/context-save`** | Context checkpoint | Save durable project/session context. |
| **`/context-restore`** | Context restoration | Restore a prior explicit context checkpoint. |
| **`/codex`** | Codex specialist handoff | Use Codex for a bounded task when explicitly invoked. |
| **`/careful`** | Caution mode | Raise mutation discipline for sensitive work. |
| **`/freeze`** | Freeze mutations | Establish a no-change boundary. |
| **`/guard`** | Guarded operation | Add explicit protective constraints around work. |
| **`/unfreeze`** | End freeze | Remove a previously established freeze when authorized. |

## MODIFY — 24 skills

These commands remain useful, but Ranger changes their operating contract.

| Invoke | Specialist / purpose | Ranger v0.001 overlay |
|---|---|---|
| **`/office-hours`** | Product interrogation | Optional product discovery; recommendations do not automatically become canon. |
| **`/spec`** | Specification drafting | Drafting is separate from filing issues or spawning agents; external mutations require authority. |
| **`/plan-ceo-review`** | Product/CEO review | Challenge scope without default expansion bias. |
| **`/plan-design-review`** | Design-plan review | Propose design amendments; do not silently rewrite approved canon. |
| **`/plan-devex-review`** | DX planning review | Prefer compact, evidence-driven review over mandatory giant questionnaires. |
| **`/autoplan`** | Multi-reviewer planning | Use selected reviewers and reconcile results; never replace operator judgment automatically. |
| **`/review`** | Code review | **REPORT is the default.** Fixes require edit authority. |
| **`/qa`** | QA with remediation capability | Separate OBSERVE from REMEDIATE. Fix/commit/publish are authority-gated. |
| **`/landing-report`** | Workstream/landing dashboard | Generic branch, PR, agent, and workstream status reporting. |
| **`/design-consultation`** | Design-system consultation | Use Ranger design discipline and preserve approved constraints. |
| **`/design-review`** | UI/design audit and fixes | Audit-only by default; code/design fixes require authority. |
| **`/design-shotgun`** | Divergent design exploration | Exploration only; automatic taste-memory promotion is disabled. |
| **`/browse`** | Browser interaction | READ/OBSERVE by default; form submissions and other mutations require authority. |
| **`/scrape`** | Structured web extraction | Record provenance, date, source, and confidence for extracted claims. |
| **`/skillify`** | Convert patterns into reusable skills | Promotion requires explicit approval plus context/token-budget review. |
| **`/open-gstack-browser`** | Open inherited browser runtime | Preserve Windows fallback; do not assume cookies or auto-route models. |
| **`/ship`** | Delivery workflow | Tests/review/evidence are separate from commit, push, PR, merge, release, and deploy authority. |
| **`/land-and-deploy`** | Merge/deploy workflow | Merge and deployment are separate **R5** gates. No silent bundling. |
| **`/setup-deploy`** | Deployment setup | Detection/read-only inspection is safe; configuration writes require edit/operation authority. |
| **`/document-release`** | Release documentation | Produce the docs diff first; apply only with edit authority. |
| **`/gstack-upgrade`** | Upstream update workflow | Ranger replaces blind self-update with an upstream audit and deliberate intake decision. |
| **`/learn`** | Durable project learning | Project-specific learning with provenance/confidence; hidden cross-project learning is disabled. |
| **`/retro`** | Retrospective | Feeds durable Hackathon/Postmortem Lessons Learned with provenance and confidence. |
| **`/benchmark-models`** | Model comparison | Uses TOKEN SAVER doctrine: capability first, then cost, only from comparable evidence. |

## SKIP in v0.001 — 12 skills

These commands may remain physically present because Ranger preserves upstream generator/runtime compatibility. They are **not endorsed for normal Ranger v0.001 operation**.

| Invoke | Why parked |
|---|---|
| **`/plan-tune`** | Automatic plan-tuning hooks are outside the v0.001 controlled surface. |
| **`/design-html`** | Parked pending Ranger-specific design/output policy. |
| **`/make-pdf`** | Parked pending a deliberate artifact-generation contract. |
| **`/setup-browser-cookies`** | Cookie/session import has privacy and trust implications; parked. |
| **`/pair-agent`** | Remote/pair-agent behavior is disabled by Ranger defaults. |
| **`/setup-gbrain`** | External brain setup is outside v0.001. |
| **`/sync-gbrain`** | Cross-system brain synchronization is outside v0.001. |
| **`/ios-qa`** | iOS-specific lane not part of the v0.001 operational core. |
| **`/ios-fix`** | iOS-specific remediation lane parked. |
| **`/ios-design-review`** | iOS-specific design lane parked. |
| **`/ios-clean`** | iOS cleanup lane parked. |
| **`/ios-sync`** | iOS synchronization lane parked. |

### Ranger control-plane command

Ranger also adds its own explicit selector and authority gate:

| Invoke | Purpose |
|---|---|
| **`/ranger`** | Select the single best specialist when asked, establish mission scope/authority, and enforce Ranger's evidence and escalation rules. |

Example:

```text
/ranger
```

Then:

```text
Which Ranger specialist is best for investigating this production failure? Recommend one only; do not invoke it yet.
```

Ranger will recommend the best fit and wait for approval rather than auto-routing.

---

## Standalone evidence and infrastructure tools

Not every useful component is a slash command. Ranger v0.001 also classifies inherited infrastructure:

| Tool | Ranger status | Role |
|---|---|---|
| `gstack-context-bill` | KEEP | Static context/token bill of materials. |
| `gstack-wtree` | KEEP | Worktree/source fingerprinting for evidence freshness. |
| `gstack-evidence` | KEEP | Claim-to-evidence binding and freshness checks. |
| `gstack-egress` | KEEP | Outbound-data/egress audit boundary. |
| `gstack-issue-guard` | KEEP | Untrusted issue/PR prompt-injection defense. |
| `gstack-verify-gate` | KEEP, opt-in | Verification gate with explicit per-repository trust. |
| `gstack-model-benchmark` | MODIFY | Task benchmark evidence source for TOKEN SAVER; benchmark output is not an automatic winner declaration. |
| `gstack-code-intelligence` | SKIP v0.001 | Parked for later intake. |
| `gstack-taste-update` | SKIP v0.001 | Automatic taste-memory update is outside Ranger policy. |

---

## TOKEN SAVER integration doctrine

Ranger does not equate "cheapest" with "best." Model selection follows:

> **CAPABILITY FIRST → THEN MINIMIZE COST**

A START / ESCALATE / PREMIUM recommendation should be produced only from genuinely comparable, task-specific evidence. If the evidence is not comparable, Ranger should return:

```text
INSUFFICIENT COMPARABLE EVIDENCE
```

The policy also distinguishes official/vendor pricing, third-party hosting, and self-hosted/open-weight models. Ranger does not invent a canonical per-token price for a model that does not have one.

Relevant evidence tools include `gstack-context-bill`, `gstack-model-benchmark`, `gstack-evidence`, `gstack-wtree`, and `gstack-egress`.

---

## Recommended workflows

### Investigate a bug without changing anything

```text
Ranger authority R0 for this mission.
/investigate
```

### Review a branch without auto-fixing

```text
Run /review at R1. Report findings only. Do not edit files.
```

### QA and locally remediate verified defects

```text
Ranger authority R2 for this mission.
/qa http://localhost:3000
```

### Security audit

```text
Run /cso at R1. Produce findings and evidence; do not mutate the project.
```

### Plan, implement, push, and open a PR — but do not merge

```text
Ranger authority R4 for this mission.
/plan-eng-review
```

After the plan is approved, implement within the approved scope, verify it, commit, push, and open the PR. R4 still does not authorize merge or deploy.

### Merge or deploy

Use an explicit R5 instruction naming the operation and scope:

```text
Ranger authority R5: merge PR #42 after verifying the approved final head and required CI checks. Do not deploy.
```

### One-way/destructive action

R6 is never inferred. The individual destructive action must be explicitly confirmed when reached.

---

## Ranger-safe setup defaults

`bin/ranger-setup` reasserts the following inherited configuration defaults:

- proactive routing: `false`
- routing declined state: `true`
- telemetry: `off`
- automatic upgrades: `false`
- automatic update checks: `false`
- checkpoint mode: `explicit`
- checkpoint push: `false`
- artifact sync: `off`
- artifact-sync prompt state: already handled
- cross-project learnings: `false`
- plan-tune hooks: `no`
- pair agent: `off`
- founder resources: `false`
- question tuning: `false`
- team mode: `false`
- transcript ingestion: `off`

These defaults are policy, not a claim that every inherited component has been removed. Ranger intentionally preserves compatibility while constraining what is active and authorized.

---

## Evidence-first engineering

Ranger's core rule is simple:

> **Never simulate proof.**

A review can be `PROPOSED`. A browser observation can be `OBSERVED`. A sandbox can establish `REPRODUCED`. A human can make a change `AUTHORIZED`. Execution can make it `EXECUTED`. Only independent post-change evidence should make the recovery `VERIFIED`.

Where practical, verification should be tied to the exact worktree, commit, artifact, or environment being claimed. Stale evidence from a different source state is not current proof.

---

## Hackathons and competition work

Ranger is intended to be safe for deadline-critical competition work, but competition rules are authoritative. Before implementation begins, establish and preserve:

- official event start boundary;
- deadline and timezone;
- originality/new-work requirements;
- team and eligibility constraints;
- public/private repository requirements;
- AI-assistance disclosure requirements;
- sponsor/tool-use requirements;
- submission artifacts and demo limits.

A high authority level does not authorize violating competition rules.

`/retro` and `/learn` are the intended path for durable **Hackathon Lessons Learned**: what worked, what failed, bottlenecks, judging/rules discoveries, tooling/environment lessons, workflow improvements, and reusable tactics.

---

## Repository map

| Path | Purpose |
|---|---|
| [`RANGER_STACK.md`](RANGER_STACK.md) | Ranger Stack overview and compatibility decisions. |
| [`RANGER_VERSION`](RANGER_VERSION) | Ranger release version. |
| [`ranger/SKILL.md`](ranger/SKILL.md) | Generated Ranger control-plane skill. |
| [`ranger/SKILL.md.tmpl`](ranger/SKILL.md.tmpl) | Source template for the Ranger skill. |
| [`docs/ranger-stack/AUTHORITY_LADDER.md`](docs/ranger-stack/AUTHORITY_LADDER.md) | Canonical R0–R6 definitions. |
| [`docs/ranger-stack/OPERATING_DOCTRINE.md`](docs/ranger-stack/OPERATING_DOCTRINE.md) | Evidence, authority, verification, privacy, and competition doctrine. |
| [`docs/ranger-stack/INTAKE_MANIFEST.md`](docs/ranger-stack/INTAKE_MANIFEST.md) | Full KEEP / MODIFY / SKIP intake decision. |
| [`docs/ranger-stack/TOKEN_SAVER_INTEGRATION.md`](docs/ranger-stack/TOKEN_SAVER_INTEGRATION.md) | Model-selection and comparable-evidence contract. |
| [`docs/ranger-stack/UPSTREAM_ANCHOR.md`](docs/ranger-stack/UPSTREAM_ANCHOR.md) | Audited upstream provenance. |
| [`bin/ranger-setup`](bin/ranger-setup) | Ranger-safe setup wrapper. |
| [`test/ranger-policy.test.ts`](test/ranger-policy.test.ts) | Ranger policy invariants. |

---

## CI and verification

Ranger keeps upstream verification gates rather than bypassing them.

The fork's secretless PR lanes use GitHub-hosted runners:

- Workflow Lint
- Skill Docs Freshness
- Quality Gate
- Linux Free Tests
- Windows Free Tests

Provider-backed E2E remains available by deliberate/manual invocation instead of automatically spending provider credits on every Ranger PR.

Generated skill docs are treated as generated artifacts: edit the source templates, regenerate, and require the freshness gate to prove the tracked output is current.

---

## Upstream updates

Do not blindly fast-forward Ranger Stack to a new gstack release.

Use `/gstack-upgrade` under Ranger's modified contract:

```text
/gstack-upgrade
```

The desired process is:

1. identify the new upstream release/commit;
2. inspect the upstream diff since the current audited anchor;
3. classify new/changed skills and infrastructure;
4. identify policy conflicts, new outbound behavior, new mutation paths, and new dependencies;
5. decide KEEP / MODIFY / SKIP deliberately;
6. run Ranger and inherited verification before updating the Ranger anchor.

---

## License and attribution

Ranger Stack is derived from **gstack** by Garry Tan and contributors and retains the upstream MIT license and attribution. Ranger-specific policy, documentation, setup behavior, and integration changes are maintained in this fork.

Upstream project: <https://github.com/garrytan/gstack>

Ranger Stack does not imply that upstream authors endorse Ranger's policy choices, and inherited file presence does not imply Ranger endorsement of every inherited workflow.

---

## v0.001 design goal

Ranger v0.001 is intentionally conservative. The goal is not to rewrite gstack. The goal is to establish a trustworthy operating membrane around a strong specialist toolkit:

**explicit routing, bounded authority, evidence before claims, independent verification, privacy-safe defaults, and capability-aware cost discipline.**
