import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { loginAction } from "./actions";

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const authenticated = await isAdminAuthenticated();
  if (authenticated) redirect("/admin/submissions");

  const params = await searchParams;
  const hasError = params.error === "1";

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-atlas-green">
          Atlas OS — Internal
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-atlas-ink">
          Internal Access
        </h1>
        <p className="mt-3 text-base text-slate-600">
          Enter your admin passcode to access the intake review.
        </p>

        {hasError && (
          <div className="mt-6 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-900">
            Invalid passcode. Try again.
          </div>
        )}

        <form action={loginAction} className="mt-8 grid gap-5">
          <label className="grid gap-2 text-sm font-semibold text-atlas-ink">
            Passcode
            <input
              name="passcode"
              type="password"
              autoComplete="current-password"
              required
              className="rounded-md border border-atlas-line bg-white px-4 py-3 text-base font-normal text-atlas-ink outline-none transition focus:border-atlas-green focus:ring-2 focus:ring-atlas-green/20"
            />
          </label>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md bg-atlas-green px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#286b58] focus:outline-none focus:ring-2 focus:ring-atlas-green focus:ring-offset-2"
          >
            Enter
          </button>
        </form>
      </div>
    </section>
  );
}
