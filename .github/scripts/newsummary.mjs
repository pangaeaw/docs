import { Octokit } from "@octokit/rest";
import { writeFileSync } from "fs";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");

// ── 1. Fetch all open issues (paginated) ────────────────────────────────────
let issues = [];
let page = 1;

while (true) {
  const { data } = await octokit.rest.issues.listForRepo({
    owner,
    repo,
    state: "open",
    per_page: 100,
    page,
  });
  if (data.length === 0) break;
  issues = issues.concat(data.filter(i => !i.pull_request));
  page++;
}

console.log(`Total open issues fetched: ${issues.length}`);

// ── 2. Parse DEPENDENCY: and SPENT: lines from each issue ───────────────────
const dependencyRows = [];
const spentRows      = [];

for (const issue of issues) {
  const body     = issue.body || "";
  const issueRef = `[#${issue.number} ${issue.title}](${issue.html_url})`;

  if (!body.trim()) continue;

  // Reset regex per iteration by recreating them (avoids lastIndex drift)
  const depMatches   = [...body.matchAll(/^DEPENDENCY\s*:\s*(.+)$/gim)];
  const spentMatches = [...body.matchAll(/^SPENT\s*:\s*(.+)$/gim)];

  for (const match of depMatches) {
    dependencyRows.push({
      issue:  issueRef,
      number: issue.number,
      value:  match[1].trim(),
    });
  }

  for (const match of spentMatches) {
    spentRows.push({
      issue:  issueRef,
      number: issue.number,
      value:  match[1].trim(),
    });
  }
}

console.log(`DEPENDENCY entries found: ${dependencyRows.length}`);
console.log(`SPENT entries found: ${spentRows.length}`);

// ── 3. Build timestamp (Europe/Zurich — CET/CEST) ───────────────────────────
const now = new Date();

const tzLabel = now.toLocaleString("en-GB", {
  timeZone: "Europe/Zurich",
  timeZoneName: "short",
}).split(" ").pop();

const dateStr = now.toLocaleString("en-GB", {
  timeZone: "Europe/Zurich",
  year:     "numeric",
  month:    "2-digit",
  day:      "2-digit",
  hour:     "2-digit",
  minute:   "2-digit",
  hour12:   false,
}).replace(",", "") + ` ${tzLabel}`;

// ── 4. Build DEPENDENCY table ────────────────────────────────────────────────
const depTable = dependencyRows.length > 0
  ? [
      "| Issue | Dependency |",
      "|-------|------------|",
      ...dependencyRows
        .sort((a, b) => a.number - b.number)
        .map(r => `| ${r.issue} | ${r.value} |`),
    ].join("\n")
  : "_No DEPENDENCY entries found in open issues._";

// ── 5. Build SPENT table ─────────────────────────────────────────────────────
const spentTable = spentRows.length > 0
  ? [
      "| Issue | Spent |",
      "|-------|-------|",
      ...spentRows
        .sort((a, b) => a.number - b.number)
        .map(r => `| ${r.issue} | ${r.value} |`),
    ].join("\n")
  : "_No SPENT entries found in open issues._";

// ── 6. Compose and write newsummary.md ──────────────────────────────────────
const content = [
  `# Issue Summary`,
  ``,
  `_Last updated: ${dateStr} — ${issues.length} open issue(s) scanned._`,
  ``,
  `---`,
  ``,
  `## Dependencies`,
  ``,
  depTable,
  ``,
  `---`,
  ``,
  `## Spent`,
  ``,
  spentTable,
  ``,
].join("\n");

writeFileSync("newsummary.md", content, "utf8");
console.log("newsummary.md written successfully.");
