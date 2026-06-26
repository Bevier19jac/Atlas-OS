import { Card } from "@/components/ui/Card";

type BlueprintSectionProps = {
  title: string;
  body: string;
};

export function BlueprintSection({ title, body }: BlueprintSectionProps) {
  return (
    <Card>
      <h2 className="text-xl font-semibold text-atlas-ink">{title}</h2>
      <p className="mt-3 text-base leading-7 text-slate-700">{body}</p>
    </Card>
  );
}
