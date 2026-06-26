import { NextRequest, NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase/client";
import type { IntakeSubmissionInput } from "@/types/atlas";

const MAX_NAME = 120;
const MAX_EMAIL = 254;
const MAX_TEXT = 2000;

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
  ) {
    console.error("[intake] Supabase environment variables are not configured.");
    return NextResponse.json(
      { error: "Service is not configured. Please contact support." },
      { status: 503 }
    );
  }

  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const business_idea =
    typeof body.business_idea === "string" ? body.business_idea.trim() : "";

  const errors: string[] = [];

  if (!name) errors.push("Name is required.");
  else if (name.length > MAX_NAME)
    errors.push(`Name must be ${MAX_NAME} characters or fewer.`);

  if (!email) errors.push("Email is required.");
  else if (email.length > MAX_EMAIL)
    errors.push("Email address is too long.");
  else if (!isValidEmail(email))
    errors.push("A valid email address is required.");

  if (!business_idea) errors.push("Business idea is required.");
  else if (business_idea.length > MAX_TEXT)
    errors.push(`Business idea must be ${MAX_TEXT} characters or fewer.`);

  if (errors.length > 0) {
    return NextResponse.json({ error: errors.join(" ") }, { status: 422 });
  }

  function optionalText(value: unknown): string | null {
    if (typeof value !== "string") return null;
    const trimmed = value.trim();
    return trimmed.length > 0 ? trimmed.slice(0, MAX_TEXT) : null;
  }

  const submission: IntakeSubmissionInput = {
    name,
    email,
    business_idea,
    current_stage: optionalText(body.current_stage) ?? undefined,
    biggest_problem: optionalText(body.biggest_problem) ?? undefined,
    target_customer: optionalText(body.target_customer) ?? undefined,
    desired_outcome: optionalText(body.desired_outcome) ?? undefined,
    budget_timeline: optionalText(body.budget_timeline) ?? undefined,
    notes: optionalText(body.notes) ?? undefined,
  };

  const supabase = getSupabaseClient();

  const { data, error } = await supabase
    .from("intake_submissions")
    .insert(submission)
    .select("id")
    .single();

  if (error) {
    console.error("[intake] Supabase insert error:", error.code, error.message);
    return NextResponse.json(
      { error: "Submission could not be saved. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true, id: data.id }, { status: 201 });
}

export function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
