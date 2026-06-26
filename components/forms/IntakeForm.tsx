"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const fields = [
  { name: "name", label: "Name", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "businessIdea", label: "Business idea", type: "textarea" },
  { name: "currentStage", label: "Current stage", type: "text" },
  { name: "biggestProblem", label: "Biggest problem", type: "textarea" },
  { name: "targetCustomer", label: "Target customer, if known", type: "text" },
  { name: "desiredOutcome", label: "Desired outcome", type: "text" },
  { name: "budgetTimeline", label: "Budget/timeline", type: "text" },
  { name: "notes", label: "Notes", type: "textarea" },
];

export function IntakeForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    console.log("Atlas intake submission", payload);
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <Card className="mt-10">
      {submitted ? (
        <div className="mb-6 rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-900">
          Intake received. The next step is strategy review and blueprint preparation.
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
                className="rounded-md border border-atlas-line bg-white px-4 py-3 text-base font-normal text-atlas-ink outline-none transition focus:border-atlas-green focus:ring-2 focus:ring-atlas-green/20"
                required={["businessIdea", "biggestProblem"].includes(field.name)}
              />
            ) : (
              <input
                name={field.name}
                type={field.type}
                className="rounded-md border border-atlas-line bg-white px-4 py-3 text-base font-normal text-atlas-ink outline-none transition focus:border-atlas-green focus:ring-2 focus:ring-atlas-green/20"
                required={["name", "email"].includes(field.name)}
              />
            )}
          </label>
        ))}
        <Button type="submit" className="w-full sm:w-fit">
          Submit Intake
        </Button>
      </form>
    </Card>
  );
}
