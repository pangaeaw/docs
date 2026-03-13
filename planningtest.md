# Banking Technology Planning Guideline

## Purpose

The Banking Department sticks to a quarterly planning cadence in delivering change on the Banking Tech Products. This repository tracks the delivery and evidence collection process for.

Key changes to become effective with FY 256/27:

- Business Priority briefings are replaced by ongoing product strategy/planning meetings with the Business sponsors
- Product Teams may use different lenght of their incrementgs/sprints
- Items highlighted on the product roadmap must reflect / be mapped into the Big Plan Items, product teams would plan on a much more granular level

Key Elements of the planning process are:
- **Product Roadmaps** — Reflecting discussions with 32 controls (A1 architecture)
- **item 2** — 3 endpoint security controls
Each control has **3 tasks** managed as GitHub Issues:

| Stage | Purpose | Owner |
|:------|:--------|:------|
| **DA** | Confirm scope, review requirements, agree interpretation | Control Owner |
| **Evidence Collection** | Gather and upload evidence artefacts to SharePoint | Control Owner |
| **Evidence Review** | Formal review through 1LoD, 2LoD, and Independent Reviewer | Reviewers |

Each task has a **target date** and is automatically **RAG-rated** based on progress and deadline proximity.

## Roles and Responsibilities

| Role | Responsibilities | Comments |
|:------|:--------|:------|

| **Portfolio Lead** | Maintains the ongoing alignment with Business functions/sponsors on product strategy (3 years view) and roadmap of priorities |  |
| **Product Manager** | Transforms the roadmap of priorities into actionable items in their backlog, refines and analyses tasks within the product team | |
| **Head of Bnkg Tech** | Formal endorsement of the planned deliverables of a quarter. Resolves prioritization conflicts and acts as point of escalation for Business| |
| **Head of AP & I** | Owns the Banking planning process and ensures planning data is up to date| |

## Planning Principles
- Planning item to sit in banking-planning repo with links to other repos
- No effort No sizing required

## Management of Dependencies

- Dependencies are expressed by mentioning the impacted item in comments (insert ID with '#' and issue number)

## Linking to other Planning Processes in GSec

## Suggested Practices

Please specify **Acceptance Criteria** (AC) for all items in the "Add a comment" box. Acceptance criteria are defined as the conditions that must be satisfied for a product, user story, or increment of work to be accepted. Expressed as a set of statements which should be:

**- Clear, so that everyone understands them**
**- Concise, so that there is no ambiguity**
**- Testable or verifiable**
**- Focused on providing customer-delighting results**

Note that conditions are pass/fail. Acceptance criteria are either met or not met; they are never only partially fulfilled. If an planning item is partially done, it needs to be refined/broken down in smaller junks which are then marked either done or open.

> [!NOTE]

> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]

> Urgent info that needs immediate user attention to avoid problems.

 

> [!CAUTION]

> Advises about risks or negative outcomes of certain actions.

 

### Sharepoint References

 

| File type | Store in |

|:----------|:---------|

| Configuration screenshots, scan reports | Evidence/ folder |

| Policy documents, SOPs, background material | Artefacts/ folder |

| Screen recordings + transcript + description | Evidence/ folder |

 

Roadmaps are here:

 




| Tag | Purpose | Example |

|:----|:--------|:--------|

| `NOTE:` | General update, question, or context | `NOTE: Network team confirmed diagram available next week` |

| `DEPENDENCY:` | Waiting on someone or something | `DEPENDENCY: Waiting on Splunk team for log source list` |

| `SHARED:` | Evidence useful to other controls | `SHARED: AD password policy covers 4.1 and 5.1` |

| `TIME:` | Log effort spent on the task | `TIME: 00:02:00 — Updated .docx with firewall evidence` |

| `FINDING:` | Gap identified requiring action (reviewers) | `FINDING: No evidence of quarterly access review` |

| `RESOLVED:` | Confirm a finding has been remediated | `RESOLVED: Access review evidence uploaded` |

| `REVIEW:` | General review observations (reviewers) | `REVIEW: Evidence complete, well-structured` |

 

## Flagging Dependencies

 

If your task is waiting on someone or something, flag it immediately:

 

1. Post a `DEPENDENCY:` comment with what, who, ETA, and impact

2. Set the **Dependency** field on the Project board

3. If completely blocked, set **Status** to Blocked (RAG turns 🔴 Red automatically)



 

 
