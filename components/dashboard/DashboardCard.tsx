import { Card } from "@/components/ui/Card";
import type { DashboardCardData } from "@/types/atlas";

type DashboardCardProps = {
  card: DashboardCardData;
};

export function DashboardCard({ card }: DashboardCardProps) {
  return (
    <Card>
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-atlas-green">
        {card.status}
      </p>
      <h2 className="mt-3 text-xl font-semibold text-atlas-ink">{card.title}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-700">{card.description}</p>
      <p className="mt-5 text-sm font-semibold text-atlas-amber">{card.metric}</p>
    </Card>
  );
}
