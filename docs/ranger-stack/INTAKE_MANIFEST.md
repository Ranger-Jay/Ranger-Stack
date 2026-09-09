# Ranger Stack v0.001 Intake Manifest

This manifest is the approved classification of the 53 documented upstream gstack skills at the v1.81.0.0 anchor.

- **KEEP** — carry the methodology substantially intact, subject to Ranger global authority rules.
- **MODIFY** — capability is valuable, but Ranger must change defaults, authority, or workflow semantics before treating it as fully native.
- **SKIP** — do not include in the Ranger v0.001 active core.

## KEEP — 17

| Skill | Ranger disposition |
|---|---|
| `/plan-eng-review` | Keep architecture/data-flow/failure-mode review. |
| `/investigate` | Keep root-cause-first debugging discipline. |
| `/qa-only` | Keep as Ranger's default read-only QA mode. |
| `/health` | Keep bounded code-health checks. |
| `/benchmark` | Keep evidence-based web performance benchmarking. |
| `/canary` | Keep post-deploy observation/verification. |
| `/cso` | Keep security review and finding verification. |
| `/devex-review` | Keep live developer-experience validation. |
| `/diagram` | Keep offline diagram generation. |
| `/document-generate` | Keep bounded docs-from-code workflow. |
| `/context-save` | Keep session handoff/checkpoint capability. |
| `/context-restore` | Keep continuation/reincarnation capability. |
| `/codex` | Keep independent cross-model second opinion. |
| `/careful` | Keep destructive-command safety primitive. |
| `/freeze` | Keep edit-scope boundary primitive. |
| `/guard` | Keep command + edit guard. |
| `/unfreeze` | Keep boundary-release companion. |

## MODIFY — 24

| Skill | Required Ranger modification |
|---|---|
| `/office-hours` | Optional product interrogation; no mandatory entry point or silent canonization. |
| `/spec` | Separate spec drafting from issue creation/agent spawning by authority level. |
| `/plan-ceo-review` | Remove implicit expansion bias; scope remains an operator decision. |
| `/plan-design-review` | Propose plan amendments; do not silently rewrite approved canon. |
| `/plan-devex-review` | Compress question-heavy workflow; prefer evidence over interrogation. |
| `/autoplan` | Orchestrate selected reviewers but do not auto-resolve judgment calls; consolidate decision gates. |
| `/review` | Default report-only; fixes require edit authority. |
| `/qa` | Separate observe, remediate, commit, and publish authority. |
| `/landing-report` | Generalize from upstream workspace/version assumptions to branches, PRs, agents, and workstreams. |
| `/design-consultation` | Preserve research/design-system value but operate under Ranger design doctrine. |
| `/design-review` | Default audit-only; remediation requires authority. |
| `/design-shotgun` | Keep divergent exploration; disable automatic taste-memory behavior. |
| `/browse` | Default to read/observe; external mutation requires authority. |
| `/scrape` | Add provenance, source URL, capture date, and confidence to extracted records. |
| `/skillify` | Promotion to reusable skill requires context-budget check and explicit approval. |
| `/open-gstack-browser` | Keep fallback browser path; remove automatic model-routing/cookie assumptions. |
| `/ship` | Split test/review/evidence, commit, push, PR, release metadata by authority level. |
| `/land-and-deploy` | Separate merge, deploy, and post-deploy verification into explicit authority gates. |
| `/setup-deploy` | Discovery may be read-only; config writes require local-edit authority. |
| `/document-release` | Generate documentation diff first; apply only within authority. |
| `/gstack-upgrade` | Replace self-update semantics with Ranger upstream-audit workflow. |
| `/learn` | Store project-specific lessons with provenance/confidence; no unscoped behavioral memory. |
| `/retro` | Convert into Project/Hackathon Lessons Learned pipeline. |
| `/benchmark-models` | Add capability thresholds, comparable-evidence gate, cost-after-capability, and `INSUFFICIENT COMPARABLE EVIDENCE`. |

## SKIP — 12

| Skill | Ranger v0.001 reason |
|---|---|
| `/plan-tune` | Automatic question suppression/answering pushes toward implicit authority. |
| `/design-html` | Upstream-specific architecture and redundant web implementation path. |
| `/make-pdf` | Redundant capability for Ranger's current use; avoid context/runtime bloat. |
| `/setup-browser-cookies` | Credential/session import increases attack surface. |
| `/pair-agent` | Remote browser tunneling/agent bridge is unnecessary for v0.001. |
| `/setup-gbrain` | Additional memory backend not needed in v0.001. |
| `/sync-gbrain` | Cross-machine brain sync not needed in v0.001. |
| `/ios-qa` | Native iOS subsystem deferred. |
| `/ios-fix` | Native iOS subsystem deferred. |
| `/ios-design-review` | Native iOS subsystem deferred. |
| `/ios-clean` | Native iOS subsystem deferred. |
| `/ios-sync` | Native iOS subsystem deferred. |

## Ranger v0.001 active core

The initial operating core is intentionally smaller than the inherited repository:

### Planning
`/office-hours`, `/spec`, `/plan-ceo-review`, `/plan-eng-review`

### Engineering
`/investigate`, `/review`, `/qa-only`, Ranger-modified `/qa`, `/cso`

### Evidence infrastructure
`gstack-context-bill`, `gstack-wtree`, `gstack-evidence`, `gstack-egress`, `gstack-issue-guard`

### Safety
`/careful`, `/freeze`, `/guard`, `/unfreeze`

### Multi-model
`/codex`, Ranger-modified `/benchmark-models`

### Continuity
`/context-save`, `/context-restore`, Ranger-modified `/learn`, Ranger-modified `/retro`

### Delivery
Ranger-modified `/ship`

## Activation rule

Presence in the inherited repository does not imply Ranger endorsement. Only the active core above is treated as Ranger v0.001 operational surface. Optional upstream capabilities remain available for future audit but are not automatically invoked.
