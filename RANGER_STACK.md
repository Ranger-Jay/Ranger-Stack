# Ranger Stack

Ranger Stack is an evidence-first, authority-scoped engineering specialist stack derived from gstack.

**Ranger version:** `0.001`  
**Upstream anchor:** gstack `v1.81.0.0` at `0530392821c277b95e5cd65aa9d9fda4248718b2`

## What is different

Ranger Stack does not use proactive specialist routing. Specialists are explicitly invoked and operate under a mission authority ceiling (R0–R6).

The governing sequence is:

**Observe → Evidence → Propose or Execute Within Authority → Verify → Escalate Only When Authority Is Exceeded**

For externally consequential work:

**Claim → Evidence → Human Authority → Execution → Independent Verification**

## Install

Use the Ranger wrapper rather than the inherited setup entry point:

```bash
bash bin/ranger-setup
```

Pass normal inherited setup flags through the wrapper, for example:

```bash
bash bin/ranger-setup --host codex --model gpt-5.6-sol
```

The wrapper forces Ranger-safe defaults before and after inherited setup:

- proactive routing off;
- routing injection declined;
- telemetry off;
- artifact sync off and artifact-sync prompting treated as already handled;
- automatic upgrades and update checks off;
- checkpoint mode explicit and checkpoint push off;
- cross-project learning off;
- plan-tune hooks off;
- remote/pair-agent mode off;
- founder-resource injection off;
- question tuning off;
- team mode off;
- transcript ingestion off.

## Operator use

Invoke `/ranger` when you want the Ranger selector/policy context, or invoke an approved specialist directly with an authority level, for example:

```text
Run /qa at R2.
```

or:

```text
Ranger authority R4 for this hackathon mission. Run /investigate, then /review and /ship as needed. Do not exceed R4.
```

Default authority is R1. Scope always beats level. Merge/deploy/release operations require explicit R5 authority, and destructive or materially irreversible R6 actions always require individual confirmation.

The complete skill inventory and the exact slash command for every audited skill are documented in [`README.md`](README.md).

## Governance

- Operating doctrine: `docs/ranger-stack/OPERATING_DOCTRINE.md`
- Authority ladder: `docs/ranger-stack/AUTHORITY_LADDER.md`
- Approved skill audit: `docs/ranger-stack/INTAKE_MANIFEST.md`
- TOKEN SAVER integration: `docs/ranger-stack/TOKEN_SAVER_INTEGRATION.md`
- Upstream anchor: `docs/ranger-stack/UPSTREAM_ANCHOR.md`

Inherited skills remain physically present in v0.001 to avoid breaking upstream generators/runtime dependencies. Presence does not imply Ranger endorsement; the intake manifest defines the active surface.

## Upstream policy

Ranger Stack never blindly self-updates from gstack. Upstream changes must be reviewed and selectively incorporated through a Ranger upstream audit.

Inherited code remains subject to its upstream MIT license and attribution.