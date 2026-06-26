"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ADMIN_COOKIE_NAME, ADMIN_COOKIE_MAX_AGE } from "@/lib/admin-auth";

export async function loginAction(formData: FormData) {
  const passcode =
    typeof formData.get("passcode") === "string"
      ? (formData.get("passcode") as string).trim()
      : "";

  const adminKey = process.env.ATLAS_ADMIN_KEY;

  if (!adminKey || !passcode || passcode !== adminKey) {
    redirect("/admin?error=1");
  }

  const cookieStore = await cookies();
  cookieStore.set(ADMIN_COOKIE_NAME, adminKey, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: ADMIN_COOKIE_MAX_AGE,
  });

  redirect("/admin/submissions");
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_COOKIE_NAME);
  redirect("/admin");
}
