# Ranger Stack × TOKEN SAVER

Ranger Stack does not replace TOKEN SAVER. It supplies instrumentation and benchmark plumbing that TOKEN SAVER can use under stricter decision rules.

## Inputs we inherit

### `gstack-context-bill`
Use as the static context-cost instrument for skill/frontmatter/reference overhead. Ranger treats offline deterministic estimates as the default measurement path. Exact external token counting is opt-in and must preserve the egress-receipt requirement.

### `gstack-model-benchmark`
Use as a cross-provider task runner for comparable prompts and implementations. Its output is evidence, not an automatic winner declaration.

### `gstack-evidence` and `gstack-wtree`
Bind benchmark/verification claims to the source/worktree state that produced them so stale evidence is distinguishable from current evidence.

### `gstack-egress`
Preserve an auditable boundary for content sent to external services.

## Ranger decision pipeline

1. Define the task and acceptance criteria.
2. Define the candidate model/provider set.
3. Run genuinely equivalent task instances.
4. Measure deterministic success criteria whenever possible.
5. Record quality, latency, token/context use, tool calls, and cost from a dated pricing/source snapshot.
6. Reject non-comparable runs rather than normalizing incompatible evidence into a fake ranking.
7. Establish the minimum capability threshold.
8. Exclude candidates that fail capability.
9. Only then minimize cost among remaining candidates.
10. Return one of:
   - `START`
   - `ESCALATE`
   - `PREMIUM`
   - `INSUFFICIENT COMPARABLE EVIDENCE`

## Locked TOKEN SAVER rules

- **CAPABILITY FIRST → THEN MINIMIZE COST.**
- Do not assume the cheapest model should win.
- Do not assume OpenAI should win.
- Distinguish vendor/official, third-party hosted, and self-hosted pricing.
- Do not invent a canonical per-token price for open-weight models without a specific hosting context.
- Runtime decisions should use a dated local snapshot such as `model_snapshot.json` and deterministic local calculations when practical.
- A benchmark judge score is not ground truth. Prefer deterministic tests/acceptance oracles; otherwise record judge identity/method and uncertainty.

## Required test classes

TOKEN SAVER/Ranger integration must eventually prove:

- cheap model wins when it is genuinely sufficient;
- cheap model loses when it misses the capability threshold;
- a non-OpenAI candidate can win;
- threshold changes can change the winner;
- candidate-subset changes can change the winner;
- open-weight candidates are excluded from monetary ranking when no canonical host price is defined;
- incomparable evidence returns `INSUFFICIENT COMPARABLE EVIDENCE`;
- stale worktree-bound evidence is not treated as current proof.
