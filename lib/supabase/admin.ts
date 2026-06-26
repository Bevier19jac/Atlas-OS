import { createClient } from "@supabase/supabase-js";

/**
 * Returns a Supabase client using the service_role (secret) key.
 * SERVER-SIDE ONLY — bypasses Row Level Security.
 * Never import this in client components or expose the key to the browser.
 */
export function getSupabaseAdminClient() {
  const url = (process.env.NEXT_PUBLIC_SUPABASE_URL ?? "").replace(/\/+$/, "");
  const secretKey = process.env.SUPABASE_SECRET_KEY ?? "";

  if (!url || !secretKey) {
    throw new Error(
      "Missing Supabase admin environment variables. " +
        "Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SECRET_KEY in .env.local."
    );
  }

  return createClient(url, secretKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
