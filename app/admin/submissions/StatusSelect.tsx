"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { updateStatusAction } from "./actions";

const STATUS_OPTIONS = [
  { value: "new", label: "New" },
  { value: "reviewing", label: "Reviewing" },
  { value: "accepted", label: "Accepted" },
  { value: "archived", label: "Archived" },
];

const STATUS_COLORS: Record<string, string> = {
  new: "bg-blue-50 text-blue-800 border-blue-200",
  reviewing: "bg-amber-50 text-amber-800 border-amber-200",
  accepted: "bg-emerald-50 text-emerald-800 border-emerald-200",
  archived: "bg-gray-100 text-gray-500 border-gray-200",
};

type StatusSelectProps = {
  id: string;
  currentStatus: string;
};

export function StatusSelect({ id, currentStatus }: StatusSelectProps) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const newStatus = e.target.value;
    startTransition(async () => {
      try {
        await updateStatusAction(id, newStatus);
      } catch {
        // Status update failed — refresh to restore correct state
      } finally {
        router.refresh();
      }
    });
  }

  const colorClass =
    STATUS_COLORS[currentStatus] ?? "bg-gray-100 text-gray-500 border-gray-200";

  return (
    <select
      defaultValue={currentStatus}
      disabled={isPending}
      onChange={handleChange}
      className={`rounded-md border px-3 py-1.5 text-xs font-semibold uppercase tracking-wide outline-none transition disabled:opacity-50 cursor-pointer ${colorClass}`}
    >
      {STATUS_OPTIONS.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
