import { createClient } from "@supabase/supabase-js";

/**
 * Returns a Supabase client initialised with the publishable (anon) key.
 * Called at request time so the build succeeds without .env.local present.
 * The route handler checks for missing env vars before calling this.
 */
export function getSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;
  return createClient(url, key);
}
