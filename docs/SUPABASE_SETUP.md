# Supabase Setup — Atlas OS

## 1. Create a Supabase project

Go to https://supabase.com and create a new project. Copy the project URL and anon (publishable) key.

## 2. Add environment variables

Create `.env.local` at the root of the repo (never commit this file):

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-anon-key-here
```

These values are found in your Supabase dashboard under **Project Settings → API**.

## 3. Create the intake_submissions table

Run the following SQL in the **Supabase SQL Editor**:

```sql
create table intake_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  name text not null,
  email text not null,
  business_idea text not null,
  current_stage text,
  biggest_problem text,
  target_customer text,
  desired_outcome text,
  budget_timeline text,
  notes text,
  status text default 'new'
);
```

## 4. Enable Row Level Security

```sql
alter table intake_submissions enable row level security;
```

## 5. Grant insert privilege to anon role

RLS policies and table-level grants are separate layers. The `anon` role needs an explicit
privilege grant before RLS is even evaluated.

```sql
grant insert on table intake_submissions to anon;
```

## 6. Add anon insert policy

Allow anyone (unauthenticated) to submit an intake. No read access is granted.

```sql
create policy "Allow anon intake submissions"
  on intake_submissions
  for insert
  to anon
  with check (true);
```

**Important:** Do not add a public SELECT policy. Submissions are write-only from the public side.

## 7. Verify setup

After running the SQL, confirm:
- The `intake_submissions` table exists with all columns.
- Row Level Security is enabled (the RLS badge appears in the Table Editor).
- The insert policy is active.
- No SELECT policy exists for anon users.

## 8. Grant privileges to service_role (Sprint 3 — Admin review)

The `service_role` key bypasses RLS *policies* but still requires table-level PostgreSQL
grants. Run the following in the **Supabase SQL Editor**:

```sql
grant select, update on table public.intake_submissions to service_role;
```

This allows the server-side admin client (used at `/admin/submissions`) to read and
update intake records. Without this, Supabase returns `42501 permission denied`.

## 9. Notes on key usage

- The **publishable key** (`NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`) is used only for the
  public intake form. It is safe to expose in the browser when RLS is enabled.
- The **service_role key** (`SUPABASE_SECRET_KEY`) is used only server-side in
  `lib/supabase/admin.ts`. It bypasses RLS and must never be sent to the browser.
  Use the **Legacy → service_role** key (the long `eyJ...` JWT) — not the new `sb_secret_*`
  format, which does not correctly bypass RLS with `supabase-js` 2.x.
