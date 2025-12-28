import Card from "@/components/Card";

export default function Dashboard() {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card title="Partidas">
        <p className="text-2xl font-bold">—</p>
      </Card>

      <Card title="Gols">
        <p className="text-2xl font-bold">—</p>
      </Card>

      <Card title="Assists">
        <p className="text-2xl font-bold">—</p>
      </Card>
    </div>
  );
}
