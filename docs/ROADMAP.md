# Atlas OS Roadmap

## Phase 1: Manual Productized Service

Sell and deliver the Atlas Idea-to-Business Sprint manually. Use founder conversations, intake data, and hand-built blueprints to validate customer pain, willingness to pay, and delivery quality.

### Sprint 1 — Foundation ✅

Clean Next.js scaffold with landing, intake, dashboard, and blueprint routes. Mock data only. No persistence.

### Sprint 2 — Intake Persistence ✅

Real intake submission workflow. Founder submits /intake, data is stored in Supabase, app returns a confirmation. No auth, no payments, no AI.

### Sprint 3 — Internal Intake Review ✅

Simple passcode-protected internal page at /admin/submissions. Jacob can view submitted intakes and update status (new → reviewing → accepted → archived) to prepare for the first manual sprint delivery.

### Sprint 4 — Hardened Access or First Paid Workflow Decision (planned)

Either: replace the passcode guard with proper auth (Supabase Auth, NextAuth, or similar) for multi-user internal access. Or: build the first paid workflow step (e.g. blueprint delivery, client-facing status view). Decision should follow the first real customer sprint delivery.

## Phase 2: Client Dashboard

Create a lightweight workspace where clients can view sprint status, submitted intake details, blueprint sections, roadmap tasks, and next actions.

## Phase 3: AI-Generated Blueprint Workflow

Introduce AI-assisted blueprint drafting after the manual workflow is stable. Keep founder review and strategic judgment in the loop.

## Phase 4: Subscription-Based Atlas OS

Package recurring access around execution tracking, strategy updates, automation recommendations, and ongoing operating-system features for entrepreneurs.

## Phase 5: Marketplace / Templates / Automations

Expand into reusable business templates, automation recipes, and marketplace assets once the core operating system has proven repeated customer value.
