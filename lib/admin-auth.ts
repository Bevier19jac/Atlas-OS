import { cookies } from "next/headers";

export const ADMIN_COOKIE_NAME = "atlas_admin_session";
export const ADMIN_COOKIE_MAX_AGE = 60 * 60 * 8; // 8 hours

/**
 * Checks the HttpOnly admin session cookie server-side.
 * Use only in server components and server actions — never in client components.
 */
export async function isAdminAuthenticated(): Promise<boolean> {
  const adminKey = process.env.ATLAS_ADMIN_KEY;
  if (!adminKey) return false;

  const cookieStore = await cookies();
  const session = cookieStore.get(ADMIN_COOKIE_NAME);
  return typeof session?.value === "string" && session.value === adminKey;
}
