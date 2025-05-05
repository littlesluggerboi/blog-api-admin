import { KPI } from "@/app/lib/definitions";
import Kpi from "./kpi";

export default function Kpis(props: { kpis: KPI[] }) {
  return (
    <div className="flex gap-4 flex-wrap justify-between">
      {props.kpis.map((val, index) => {
        return <Kpi key={index} label={val.label} value={val.value} />;
      })}
    </div>
  );
}
