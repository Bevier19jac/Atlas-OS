"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const fields = [
  { name: "name", label: "Name", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "business_idea", label: "Business idea", type: "textarea" },
  { name: "current_stage", label: "Current stage", type: "text" },
  { name: "biggest_problem", label: "Biggest problem", type: "textarea" },
  { name: "target_customer", label: "Target customer, if known", type: "text" },
  { name: "desired_outcome", label: "Desired outcome", type: "text" },
  { name: "budget_timeline", label: "Budget/timeline", type: "text" },
  { name: "notes", label: "Notes", type: "textarea" },
];

const REQUIRED_FIELDS = ["name", "email", "business_idea"];

type SubmitState = "idle" | "loading" | "success" | "error";

export function IntakeForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("loading");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    const payload: Record<string, string> = {};
    for (const [key, value] of formData.entries()) {
      if (typeof value === "string" && value.trim()) {
        payload[key] = value.trim();
      }
    }

    try {
      const response = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        setErrorMessage(result.error ?? "Something went wrong. Please try again.");
        setSubmitState("error");
        return;
      }

      setSubmitState("success");
      event.currentTarget.reset();
    } catch {
      setErrorMessage("Could not reach the server. Please check your connection and try again.");
      setSubmitState("error");
    }
  }

  if (submitState === "success") {
    return (
      <Card className="mt-10">
        <div className="rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-900">
          Intake received. The next step is strategy review and blueprint preparation.
        </div>
      </Card>
    );
  }

  return (
    <Card className="mt-10">
      {submitState === "error" && errorMessage ? (
        <div className="mb-6 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-900">
          {errorMessage}
        </div>
      ) : null}
      <form onSubmit={handleSubmit} className="grid gap-5">
        {fields.map((field) => (
          <label key={field.name} className="grid gap-2 text-sm font-semibold text-atlas-ink">
            {field.label}
            {field.type === "textarea" ? (
              <textarea
                name={field.name}
                rows={4}
                disabled={submitState === "loading"}
                className="rounded-md border border-atlas-line bg-white px-4 py-3 text-base font-normal text-atlas-ink outline-none transition focus:border-atlas-green focus:ring-2 focus:ring-atlas-green/20 disabled:opacity-50"
                required={REQUIRED_FIELDS.includes(field.name)}
              />
            ) : (
              <input
                name={field.name}
                type={field.type}
                disabled={submitState === "loading"}
                className="rounded-md border border-atlas-line bg-white px-4 py-3 text-base font-normal text-atlas-ink outline-none transition focus:border-atlas-green focus:ring-2 focus:ring-atlas-green/20 disabled:opacity-50"
                required={REQUIRED_FIELDS.includes(field.name)}
              />
            )}
          </label>
        ))}
        <Button type="submit" className="w-full sm:w-fit" disabled={submitState === "loading"}>
          {submitState === "loading" ? "Submitting…" : "Submit Intake"}
        </Button>
      </form>
    </Card>
  );
}
