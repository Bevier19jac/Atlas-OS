"use server";

import { isAdminAuthenticated } from "@/lib/admin-auth";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";
import type { AdminIntakeStatus } from "@/types/atlas";

const VALID_STATUSES: AdminIntakeStatus[] = [
  "new",
  "reviewing",
  "accepted",
  "archived",
];

export async function updateStatusAction(
  id: string,
  status: string
): Promise<void> {
  const authenticated = await isAdminAuthenticated();
  if (!authenticated) {
    throw new Error("Unauthorized.");
  }

  if (!VALID_STATUSES.includes(status as AdminIntakeStatus)) {
    throw new Error("Invalid status value.");
  }

  const supabase = getSupabaseAdminClient();
  const { error } = await supabase
    .from("intake_submissions")
    .update({ status })
    .eq("id", id);

  if (error) {
    console.error("[admin] Status update error:", error.code, error.message);
    throw new Error("Failed to update status.");
  }
}
