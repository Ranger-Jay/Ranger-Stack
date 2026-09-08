import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";

const read = (path: string) =>
  readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

describe("Ranger Stack policy invariants", () => {
  test("Ranger version is pinned", () => {
    expect(read("RANGER_VERSION").trim()).toBe("0.001");
  });

  test("router template is explicit-only and fail-safe", () => {
    const router = read("SKILL.md.tmpl");
    expect(router).toContain("Never proactively invoke another skill");
    expect(router).toContain("PROACTIVE=true");
    expect(router).toContain("does not override this Ranger rule");
    expect(router).toContain("Default Ranger mission authority is **R1 (Draft)**");
  });

  test("Ranger setup forces privacy-safe defaults", () => {
    const setup = read("bin/ranger-setup");
    const required = [
      'set proactive false',
      'set routing_declined true',
      'set telemetry off',
      'set auto_upgrade false',
      'set update_check false',
      'set checkpoint_mode explicit',
      'set checkpoint_push false',
      'set artifacts_sync_mode off',
      'set artifacts_sync_mode_prompted true',
      'set cross_project_learnings false',
      'set plan_tune_hooks no',
      'set pair_agent off',
      'set transcript_ingest_mode off',
    ];
    for (const invariant of required) {
      expect(setup).toContain(invariant);
    }
  });

  test("authority ladder preserves irreversible-action confirmation", () => {
    const authority = read("docs/ranger-stack/AUTHORITY_LADDER.md");
    expect(authority).toContain("R6 | One-Way");
    expect(authority).toContain("always requires individual explicit confirmation");
    expect(authority).toContain("Scope beats level");
  });

  test("TOKEN SAVER preserves capability-first and insufficient-evidence rules", () => {
    const tokenSaver = read("docs/ranger-stack/TOKEN_SAVER_INTEGRATION.md");
    expect(tokenSaver).toContain("CAPABILITY FIRST → THEN MINIMIZE COST");
    expect(tokenSaver).toContain("INSUFFICIENT COMPARABLE EVIDENCE");
    expect(tokenSaver).toContain("Do not assume the cheapest model should win");
  });
});
