# Sprint 3: Internal Intake Review Workflow

## Sprint Objective

Create a safe internal workflow for reviewing submitted intake records and updating their status so Jacob can prepare the first manual Atlas Idea-to-Business Sprint.

## Scope

- Server-only Supabase admin client using the service_role key (`SUPABASE_SECRET_KEY`).
- HttpOnly cookie-based admin session guard (`ATLAS_ADMIN_KEY`).
- `/admin` — passcode login page (server component + server action).
- `/admin/submissions` — protected internal review page listing all intake submissions.
- Status update per submission: new → reviewing → accepted → archived.
- Logout button that clears the admin session cookie.
- Updated `.env.example` with Sprint 3 variables.

## Out of Scope

- Customer-facing authentication.
- Stripe or payments.
- AI API calls.
- Email notifications.
- Full admin dashboard (charts, analytics, search/filter).
- Sprint 4 work.

## Security Model

Sprint 3 uses a simple server-side passcode guard — appropriate for an internal single-operator tool.

- `ATLAS_ADMIN_KEY` — a strong secret string set only in `.env.local`. Never starts with `NEXT_PUBLIC_`. Never sent to the browser.
- `SUPABASE_SECRET_KEY` — the Supabase service_role key. Never starts with `NEXT_PUBLIC_`. Bypasses RLS for server-side admin reads/writes. Never logged or exposed in responses.
- On login, a `atlas_admin_session` HttpOnly cookie is set containing the admin key value. The browser cannot read this cookie via JavaScript.
- Every admin route and action re-validates the cookie server-side before proceeding.
- The public intake flow (`/intake`) continues to use the publishable key and is not affected.

**Limitations of this model:** Not suitable for multi-user admin access or production hardening. Sprint 4 should replace this with proper auth (e.g. NextAuth or Supabase Auth with role-based policies).

## Environment Variables

Add these to `.env.local` (never commit this file):

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-anon-key
SUPABASE_SECRET_KEY=your-service-role-key
ATLAS_ADMIN_KEY=your-strong-passcode-here
```

- `SUPABASE_SECRET_KEY` — found in Supabase dashboard → **Project Settings → API → service_role** key. Keep this private.
- `ATLAS_ADMIN_KEY` — choose a strong random string (e.g. 32+ characters). This is your admin passcode.

## Manual Setup Steps

1. Add `SUPABASE_SECRET_KEY` and `ATLAS_ADMIN_KEY` to `.env.local`.
2. No Supabase SQL changes required — the service_role key bypasses RLS.
3. Restart the dev server: `npm.cmd run dev`.
4. Visit `/admin`, enter your passcode.
5. Confirm `/admin/submissions` loads your intake records.

## Acceptance Criteria

- [ ] `/admin` renders a passcode form.
- [ ] Wrong passcode shows an error and does not grant access.
- [ ] Correct passcode sets an HttpOnly cookie and redirects to `/admin/submissions`.
- [ ] `/admin/submissions` shows all intake submissions sorted newest first.
- [ ] Each submission displays: name, email, created_at, business_idea, current_stage, biggest_problem, target_customer, desired_outcome, budget_timeline, status.
- [ ] Status can be updated (new → reviewing → accepted → archived) and persists in Supabase.
- [ ] Logout clears the session and redirects to `/admin`.
- [ ] Accessing `/admin/submissions` without a session redirects to `/admin`.
- [ ] `SUPABASE_SECRET_KEY` and `ATLAS_ADMIN_KEY` are never exposed to the browser.
- [ ] `/intake`, `/`, `/dashboard`, `/blueprint` continue to work.
- [ ] `npm.cmd run typecheck` passes.
- [ ] `npm.cmd run build` passes.

## Known Limitations

- Single-user passcode only — not suitable for team access.
- No brute-force protection on the login form.
- Session cookie expires after 8 hours (requires re-login).
- No audit log of status changes.
- No search or filter on the submissions list.
- The admin passcode is stored as plaintext in the session cookie (acceptable for single-operator internal use; Sprint 4 should replace with proper auth).
