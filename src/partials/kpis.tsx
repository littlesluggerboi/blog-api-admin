import Kpi from "./kpi";

export default function Kpis() {
  return (
    <div className="flex gap-4 flex-wrap justify-between">
      <Kpi label="Total Posts" value={23} />
      <Kpi label="Published Posts" value={21} />
      <Kpi label="Total Comments" value={832} />
      <Kpi label="Total User" value={3} />
    </div>
  );
}
