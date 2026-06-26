# Sprint 2: Intake Persistence

## Sprint Objective

Turn the Atlas intake form from a demo form into a real submission workflow. A founder submits an idea through /intake, Atlas stores the submission in Supabase, and the app returns a clear confirmation.

## Scope

- Install and configure `@supabase/supabase-js`.
- Create a Supabase client helper using only the publishable (anon) key.
- Create `app/api/intake/route.ts` — a server-side POST endpoint that validates fields and inserts the submission into Supabase.
- Update `IntakeForm.tsx` to submit to the real API with loading, success, and error states.
- Add `IntakeSubmission` and `IntakeSubmissionInput` types to `types/atlas.ts`.
- Create `.env.example` with required environment variable placeholders.
- Add `docs/SUPABASE_SETUP.md` with SQL table definition and RLS policy instructions.
- Update `README.md` with Sprint 2 setup notes.
- Update `docs/ROADMAP.md` to reflect Sprint 2 scope accurately.

## Out of Scope

- Authentication.
- Stripe or payments.
- AI API calls.
- Admin dashboard for reviewing submissions.
- Email notifications on submission.
- Automated blueprint generation.
- Sprint 3 or any future sprint work.
- `service_role` key usage.
- Public SELECT policy on intake_submissions.

## Acceptance Criteria

- `/intake` renders without errors.
- Submitting a valid intake creates a row in the `intake_submissions` Supabase table.
- Missing required fields (name, email, business idea) return a validation error message.
- An invalid email format returns a validation error message.
- A success confirmation message appears after a valid submission.
- The form does not redirect on success.
- `/`, `/dashboard`, and `/blueprint` continue to render without errors.
- TypeScript compile (`typecheck`) passes with no errors.
- Production build (`build`) completes successfully.
- `npm audit --omit=dev` reports no critical vulnerabilities.

## Supabase Setup Steps (manual)

See `docs/SUPABASE_SETUP.md` for the full setup walkthrough including:

1. Create a Supabase project.
2. Copy project URL and anon key into `.env.local`.
3. Run the `intake_submissions` table SQL in the Supabase SQL Editor.
4. Enable Row Level Security.
5. Apply the anon insert policy.
6. Verify no SELECT policy exists for anon users.

## Verification Checklist

- [ ] `.env.local` is present with valid `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`.
- [ ] `intake_submissions` table exists in Supabase with all required columns.
- [ ] Row Level Security is enabled on the table.
- [ ] Anon insert policy is active.
- [ ] `npm.cmd run typecheck` passes.
- [ ] `npm.cmd run build` passes.
- [ ] `npm.cmd audit --omit=dev` passes.
- [ ] `/intake` renders.
- [ ] Submitting valid data inserts a row in Supabase.
- [ ] Missing required fields show an error message.
- [ ] Success message appears after valid submission.
- [ ] `/`, `/dashboard`, `/blueprint` render without errors.

## Known Limitations

- No email notification is sent on submission.
- No admin interface exists to view submissions (they are readable directly in the Supabase Table Editor).
- No duplicate submission detection.
- The form does not redirect to a dedicated confirmation page after submission.
- No rate limiting on the API route.
- Supabase environment variables must be configured manually before the submission workflow is functional.
