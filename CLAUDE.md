# CLAUDE.md

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.

# Caye Group Project Context

## Who I Am
I am a technical founder with 20+ years of application security experience,
specializing in DevSecOps and CI/CD pipeline security. This is my flagship
product. Treat me as a peer — use correct security terminology, skip
basic explanations, and push back if you see a better approach.

## What Caye Group Is
Caye Group is an AI security consulting practice and SaaS platform. The
flagship tool is a Next.js 14 application that uses the Anthropic Claude API
to generate AI security risk assessment reports for SMBs. The core value
proposition is translating enterprise AppSec thinking into decisions a
non-technical business owner can act on.

## Brand
Company name: Caye Group
Domain: cayegroup.ai
Slogan: AI is already in your business. We make sure security is too.

## Tech Stack
- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- Anthropic Claude API
- Deployed on Vercel (planned)

## Code Standards
- Clean, auditable code — this is a security product, the codebase
  should reflect that
- No insecure defaults, ever
- Secrets via environment variables only — never hardcoded, never logged
- Be conservative with dependencies — flag anything that adds supply
  chain risk
- Prefer explicit over clever

## Folder Structure
- app/ — Next.js pages and routes
- components/ — reusable UI components
- lib/ — API logic and utilities
- types/ — TypeScript type definitions

## What to Watch For
- Flag any pattern that would be embarrassing in a security product
- Challenge me if I am designing for a CISO instead of an SMB owner
- Remind me when conversion and clarity matter more than technical
  completeness
- Do not over-abstract early — we are still in scaffold phase