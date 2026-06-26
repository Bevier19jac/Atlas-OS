# Atlas OS

Atlas OS is an AI-powered operating system for ambitious entrepreneurs. It helps founders turn scattered ideas into executable businesses using AI, automation, and disciplined strategy.

## Sprint Status

- **Sprint 1** — Foundation complete. Clean scaffold, mock data, all routes verified.
- **Sprint 2** — Intake persistence complete. Real submission workflow via Supabase.
- **Sprint 3** — Internal intake review complete. Passcode-protected /admin/submissions with status management.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- React
- Supabase (intake persistence + admin reads)

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

## Environment Variables

Create `.env.local` at the repo root. **Never commit this file.**

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-anon-key
SUPABASE_SECRET_KEY=your-service-role-key
ATLAS_ADMIN_KEY=your-strong-admin-passcode
```

| Variable | Where to find it | Notes |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase → Project Settings → API | Used client and server side |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Supabase → Project Settings → API → anon key | Public intake form only |
| `SUPABASE_SECRET_KEY` | Supabase → Project Settings → API → service_role key | Server-side admin only. Never expose. |
| `ATLAS_ADMIN_KEY` | You choose — use a strong random string | Admin passcode. Never expose. |

See `docs/SUPABASE_SETUP.md` for the full Supabase setup walkthrough.

## Available Routes

- `/` — Landing page
- `/intake` — Public intake form (persists to Supabase)
- `/dashboard` — Mock future client workspace
- `/blueprint` — Mock strategy blueprint output
- `/admin` — Internal admin login (passcode required)
- `/admin/submissions` — Internal intake review and status management

## Production Build and Verification

```powershell
npm.cmd run typecheck
npm.cmd run build
npm.cmd audit --omit=dev
```

## Current Limitations

- Admin access is a single passcode — not suitable for team use
- No customer-facing authentication
- No payments
- No AI API calls
- No automated blueprint generation
- No email notifications
