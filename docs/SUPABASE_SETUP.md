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

## 8. Notes on key usage

- The app uses `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` (the anon key) only.
- Never use the `service_role` key in this app. It bypasses RLS and exposes all data.
- The anon key combined with RLS is the correct pattern for public intake submissions.
