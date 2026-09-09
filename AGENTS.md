# Ranger Stack — AI Engineering Workflow

Ranger Stack is an evidence-first, authority-scoped specialist stack for AI-assisted software work.

It is derived from `garrytan/gstack`, but Ranger changes the operating contract around the inherited tools: specialists are explicit-only, authority is bounded, evidence precedes claims, consequential actions require the appropriate human authority, and completed work is independently verified.

## Primary OpenAI workflow

Ranger Stack is provider-neutral, but the primary documented OpenAI coding-host workflow is **Codex**, with **ChatGPT** used for planning, review, coordination, research, and repository work where the relevant connected tools are available.

For a Codex-oriented installation, use the Ranger wrapper rather than invoking the inherited setup directly:

```bash
bash bin/ranger-setup --host codex
```

Then invoke the Ranger control plane explicitly:

```text
/ranger
```

Ask Ranger for the single best specialist when you are unsure which command fits. Ranger recommends one and waits for approval; it does not silently auto-route.

> ChatGPT itself does not require a local slash-skill installation to discuss or operate on Ranger Stack. The slash commands below are the installed specialist interface for supported coding hosts such as Codex.

## Ranger authority model

Every specialist defaults to **R1 Draft** unless the operator grants another level for a defined scope.

| Level | Name | Authority |
|---|---|---|
| **R0** | Observe | Read, inspect, search, benchmark, and run non-mutating diagnostics. |
| **R1** | Draft | R0 plus plans, reviews, specifications, and recommendations. No project mutation. |
| **R2** | Local Edit | R1 plus approved local file edits and validation. |
| **R3** | Commit | R2 plus staging and local Git commits. |
| **R4** | Publish | R3 plus branch push and PR/issue creation or updates within scope. |
| **R5** | Operate | R4 plus specifically authorized merge, deploy, release, or external-system mutation. |
| **R6** | One-Way | Destructive or materially irreversible actions. Each action requires individual explicit confirmation. |

**Scope beats level.** R4 on one repository does not authorize publishing elsewhere. R5 to merge does not automatically authorize deployment. R6 is never inherited from blanket authority.

Examples:

```text
Run /review at R1. Report only.
```

```text
Run /qa at R2 against http://localhost:3000. Fix verified defects locally, but do not commit or push.
```

```text
Ranger authority R4 for this mission: implement the approved issue, test it, commit it, push the branch, and open a PR. Do not merge.
```

## Governing sequence

Use:

**Observe → Evidence → Propose or Execute Within Authority → Verify → Escalate Only When Authority Is Exceeded**

For consequential external actions:

**Claim → Evidence → Human Authority → Execution → Independent Verification**

Never simulate proof.

## Ranger control plane

| Command | Purpose |
|---|---|
| `/ranger` | Select the best specialist when asked, establish mission scope and authority, and enforce Ranger evidence and escalation rules. |

## Ranger v0.001 active core

### Planning

| Invoke | Purpose |
|---|---|
| `/office-hours` | Product interrogation and problem reframing. |
| `/spec` | Draft a precise implementation specification. Filing issues or spawning work requires higher authority. |
| `/plan-ceo-review` | Challenge product scope and strategy without automatic expansion bias. |
| `/plan-eng-review` | Review architecture, data flow, edge cases, failure modes, and test strategy. |

### Engineering and verification

| Invoke | Purpose |
|---|---|
| `/investigate` | Root-cause-first debugging. |
| `/review` | Code review; report-only by default under Ranger. |
| `/qa-only` | Read-only QA and defect reporting. |
| `/qa` | QA with remediation only when R2+ authority is explicit. |
| `/cso` | Security review and threat-oriented audit. |

### Safety

| Invoke | Purpose |
|---|---|
| `/careful` | Raise destructive-command caution. |
| `/freeze` | Restrict edits to an approved directory or scope. |
| `/guard` | Combine command and edit guardrails. |
| `/unfreeze` | Remove a previously established edit freeze when authorized. |

### Multi-model

| Invoke | Purpose |
|---|---|
| `/codex` | Independent OpenAI Codex review, challenge, or consultation. |
| `/benchmark-models` | Compare model capability/cost under TOKEN SAVER doctrine. |

### Continuity

| Invoke | Purpose |
|---|---|
| `/context-save` | Save a durable context checkpoint. |
| `/context-restore` | Restore a prior checkpoint. |
| `/learn` | Store project-specific lessons with provenance and confidence. |
| `/retro` | Produce durable project/hackathon lessons learned. |

### Delivery

| Invoke | Purpose |
|---|---|
| `/ship` | Delivery workflow with commit, push, PR, merge, release, and deploy separated by authority level. |

The **complete 53-skill KEEP / MODIFY / SKIP catalog and the exact invocation command for every inherited skill are in [`README.md`](README.md)**.

## Evidence infrastructure

Ranger also uses inherited non-slash tooling:

| Tool | Ranger role |
|---|---|
| `gstack-context-bill` | Static context/token bill of materials. |
| `gstack-wtree` | Worktree/source fingerprinting. |
| `gstack-evidence` | Claim-to-evidence binding and freshness checks. |
| `gstack-egress` | Outbound-data receipt/audit boundary. |
| `gstack-issue-guard` | Untrusted issue/PR prompt-injection defense. |
| `gstack-verify-gate` | Optional per-repository verification gate. |
| `gstack-model-benchmark` | Comparable task-run evidence for TOKEN SAVER; not an automatic winner declaration. |

## TOKEN SAVER rule

Model selection follows:

**CAPABILITY FIRST → THEN MINIMIZE COST**

If the available runs are not genuinely comparable, Ranger must return:

```text
INSUFFICIENT COMPARABLE EVIDENCE
```

Do not assume the cheapest model wins. Do not assume OpenAI wins. Distinguish official/vendor pricing from third-party and self-hosted/open-weight pricing.

## Competition and hackathon work

Competition rules outrank workflow convenience and mission authority. Before code-changing work, establish the official event start, deadline/timezone, originality requirements, team/eligibility constraints, repository requirements, required sponsor/tool use, AI-assistance disclosures, and submission artifacts.

`/retro` and `/learn` are the intended durable path for Hackathon Lessons Learned.

## Compatibility note: why some Claude names still exist

Ranger Stack inherits a mature multi-host codebase. Some files, environment variables, test fixtures, and compatibility adapters have **Claude-specific technical names** because upstream supports Claude Code in addition to Codex and other hosts.

Examples include:

- `CLAUDE.md`
- `.claude/`
- `CLAUDE_CONFIG_DIR`
- `CLAUDE_PLUGIN_DATA`
- `ANTHROPIC_API_KEY`
- Claude-specific E2E fixtures and host adapters

These names are **compatibility interfaces, not Ranger branding and not a preferred-provider statement**. They should not be mechanically renamed to `ChatGPT` because doing so could break upstream host detection, tests, paths, or provider-specific integrations.

Public-facing Ranger documentation should use **ChatGPT / Codex** when referring to the OpenAI workflow, and neutral terms such as **AI agent**, **coding host**, or **model provider** when the behavior is provider-independent.

## Upstream compatibility and precedence

Inherited gstack files remain present where runtime/generator compatibility requires them. Presence does not imply Ranger endorsement.

When inherited documentation conflicts with Ranger policy, the Ranger documents govern:

- [`README.md`](README.md)
- [`RANGER_STACK.md`](RANGER_STACK.md)
- [`docs/ranger-stack/AUTHORITY_LADDER.md`](docs/ranger-stack/AUTHORITY_LADDER.md)
- [`docs/ranger-stack/OPERATING_DOCTRINE.md`](docs/ranger-stack/OPERATING_DOCTRINE.md)
- [`docs/ranger-stack/INTAKE_MANIFEST.md`](docs/ranger-stack/INTAKE_MANIFEST.md)
- [`docs/ranger-stack/TOKEN_SAVER_INTEGRATION.md`](docs/ranger-stack/TOKEN_SAVER_INTEGRATION.md)

Inherited wording such as auto-fix, automatic routing, one-command shipping, automatic memory, self-upgrade, issue filing, spawning, pushing, merging, or deploying never overrides Ranger authority.

## Public-project doctrine

Ranger Stack may be used as a public open-source core while private operator-specific playbooks remain outside the repository. Public code should contain reusable engineering doctrine, tests, skills, and compatibility layers—not private project strategy, credentials, personal notes, unpublished competition tactics, or identifying information that is unnecessary to operate the software.

## License and attribution

Ranger Stack is derived from **gstack** by Garry Tan and contributors and retains the upstream MIT license and attribution. Ranger-specific policy, documentation, setup behavior, and integration changes are maintained in this fork.
