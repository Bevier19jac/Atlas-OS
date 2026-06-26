# Atlas OS

Atlas OS is an AI-powered operating system for ambitious entrepreneurs. It helps founders turn scattered ideas into executable businesses using AI, automation, and disciplined strategy.

The current foundation is centered on the first paid offer: the Atlas Idea-to-Business Sprint. The sprint turns a messy business idea into a clear concept, target customer, pain statement, first paid offer, revenue model, 30-day execution roadmap, automation opportunities, and a build/no-build recommendation.

## Sprint Status

- **Sprint 1** — Foundation complete. Clean scaffold, mock data, all routes verified.
- **Sprint 2** — Intake persistence complete. Real submission workflow via Supabase.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- React
- Supabase (intake persistence)

## Local Setup

Use `npm.cmd` on Windows because PowerShell may block the regular `npm` shim.

```powershell
npm.cmd install
npm.cmd run dev
```

Open the app at:

```text
http://localhost:3000
```

### Sprint 2: Environment Variables

Before the intake form can persist data, create `.env.local` at the repo root:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-anon-key-here
```

These values are found in your Supabase project under **Project Settings → API**.

See `docs/SUPABASE_SETUP.md` for the full Supabase setup walkthrough including the table SQL and RLS policy.

**Note:** `.env.local` is git-ignored and must never be committed.

## Production Build and Verification

```powershell
npm.cmd run typecheck
npm.cmd run build
npm.cmd audit --omit=dev
```

## Available Routes

- `/` — Landing page for Atlas OS and the Idea-to-Business Sprint
- `/intake` — Intake form for an entrepreneur's business idea (persists to Supabase)
- `/dashboard` — Mock future client workspace
- `/blueprint` — Mock strategy blueprint output

## Current Limitations

- No authentication
- No payments
- No AI API calls
- No client accounts
- No automated blueprint generation
- No admin dashboard for reviewing submissions (use Supabase Table Editor directly)
- No email notifications on submission
