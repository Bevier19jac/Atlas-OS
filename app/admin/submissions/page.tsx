import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";
import type { IntakeSubmission } from "@/types/atlas";
import { logoutAction } from "../actions";
import { StatusSelect } from "./StatusSelect";

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function Field({
  label,
  value,
}: {
  label: string;
  value: string | null | undefined;
}) {
  if (!value) return null;
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
        {label}
      </dt>
      <dd className="mt-1 text-sm text-atlas-ink">{value}</dd>
    </div>
  );
}

export default async function AdminSubmissionsPage() {
  const authenticated = await isAdminAuthenticated();
  if (!authenticated) redirect("/admin");

  let submissions: IntakeSubmission[] = [];
  let fetchError = false;

  try {
    const supabase = getSupabaseAdminClient();
    const { data, error } = await supabase
      .from("intake_submissions")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("[admin] Fetch error:", error.code, error.message);
      fetchError = true;
    } else {
      submissions = (data ?? []) as IntakeSubmission[];
    }
  } catch {
    fetchError = true;
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Page header */}
      <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-atlas-green">
            Atlas OS — Internal
          </p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-atlas-ink">
            Intake Review
          </h1>
        </div>
        <form action={logoutAction}>
          <button
            type="submit"
            className="text-sm font-medium text-slate-500 underline underline-offset-2 transition hover:text-atlas-ink"
          >
            Logout
          </button>
        </form>
      </div>

      {/* Content */}
      {fetchError ? (
        <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">
          Could not load submissions. Check{" "}
          <code className="font-mono">SUPABASE_SECRET_KEY</code> configuration
          and server logs.
        </div>
      ) : submissions.length === 0 ? (
        <p className="text-sm text-slate-500">No submissions yet.</p>
      ) : (
        <div className="grid gap-6">
          <p className="text-sm text-slate-500">
            {submissions.length} submission
            {submissions.length !== 1 ? "s" : ""} — newest first
          </p>

          {submissions.map((s) => (
            <div
              key={s.id}
              className="rounded-md border border-atlas-line bg-white p-6 shadow-soft"
            >
              {/* Card header */}
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-base font-semibold text-atlas-ink">
                    {s.name}
                  </p>
                  <p className="text-sm text-slate-500">{s.email}</p>
                  <p className="mt-1 text-xs text-slate-400">
                    {formatDate(s.created_at)}
                  </p>
                </div>
                <StatusSelect id={s.id} currentStatus={s.status} />
              </div>

              {/* Fields */}
              <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                <Field label="Business idea" value={s.business_idea} />
                <Field label="Current stage" value={s.current_stage} />
                <Field label="Biggest problem" value={s.biggest_problem} />
                <Field label="Target customer" value={s.target_customer} />
                <Field label="Desired outcome" value={s.desired_outcome} />
                <Field label="Budget / timeline" value={s.budget_timeline} />
                {s.notes ? (
                  <div className="sm:col-span-2">
                    <Field label="Notes" value={s.notes} />
                  </div>
                ) : null}
              </dl>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
