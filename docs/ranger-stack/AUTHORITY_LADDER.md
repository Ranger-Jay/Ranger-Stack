# Ranger Mission Authority Ladder

Ranger authority is cumulative. A mission granted level `Rn` includes lower levels unless a scope restriction says otherwise.

| Level | Name | Authorized actions |
|---|---|---|
| R0 | Observe | Read, inspect, search, benchmark, run non-mutating diagnostics, gather evidence. |
| R1 | Draft | R0 plus plans, specs, recommendations, patch proposals, review reports, and other non-project artifacts. No project mutation. |
| R2 | Local Edit | R1 plus modify approved local project files and run tests/builds needed to validate them. No Git commit or external mutation. |
| R3 | Commit | R2 plus stage and create local Git commits within the approved mission scope. |
| R4 | Publish | R3 plus push branches and create/update pull requests or issues within the approved repository/project scope. |
| R5 | Operate | R4 plus merge, deploy, release, or mutate external systems when specifically in mission scope. |
| R6 | One-Way | Destructive or materially irreversible actions. Each R6 action requires individual explicit confirmation; a blanket mission grant cannot pre-authorize R6. |

## Default

The default specialist authority is **R1** unless the operator explicitly grants another level.

A mission may grant a higher ceiling in advance, for example:

- `Run /qa at R2` — diagnose and fix locally, but do not commit.
- `Ranger authority R4 for this hackathon mission` — work through edits, commits, branch pushes, and PR updates without repeated approval prompts.

## Mandatory stops

A specialist must stop and request authority when the next required action exceeds the current ceiling.

A specialist must also stop regardless of nominal level when:

- the action is R6;
- the scope is materially ambiguous;
- a competition/rule boundary is uncertain and violation could cause disqualification;
- security-sensitive consequences cannot be verified;
- credentials, production data, or external systems would be affected beyond the stated mission;
- evidence conflicts with the requested action.

## Scope beats level

Authority is both **level** and **scope**. R4 authority for repository A does not authorize publication to repository B. R5 authority to deploy staging does not authorize production deployment.

## Read-only specialists

A specialist classified as read-only remains read-only unless Ranger explicitly provides a remediation mode and the operator grants sufficient authority. In particular, Ranger `/qa-only` never edits project code.
