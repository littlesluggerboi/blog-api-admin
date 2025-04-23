import Graph from "@/partials/graph";
import Header from "@/partials/header";
import Kpis from "@/partials/kpis";
import Navigation from "@/partials/navigation";
import RecentActivities from "@/partials/recent-activities";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="grid grid-rows-[auto_1fr]">
        <Header />
        <div className="bg-gray-100 h-full p-8 gap-8 grid grid-cols-[1fr_auto]">
          <div>
            <Kpis />
            <Graph/>
          </div>
          <RecentActivities />
        </div>
      </div>
    </>
  );
}
