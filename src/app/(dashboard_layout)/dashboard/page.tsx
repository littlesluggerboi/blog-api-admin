"use server";
import { getKPIs } from "@/app/lib/fetchLib/kpis_fetcher";
import { getPostStats } from "@/app/lib/fetchLib/posts_stats_fetcher";
import { getRecentActivities } from "@/app/lib/fetchLib/recent_fetcher";
import Graph from "@/partials/graph";
import Kpis from "@/partials/kpis";
import RecentActivities from "@/partials/recent-activities";


export default async function Home() {
  const kpis = await getKPIs();
  const recent_activities = await getRecentActivities();
  let stats = await getPostStats();
  if(Array.isArray(stats)){
    stats = stats.reverse();
  }
  return (
    <>
      <title>A Blogs | Dashboard</title>
      <div>
        <Kpis kpis={kpis} />
        <Graph data={stats}/>
      </div>
      <RecentActivities recent_activities={recent_activities} />
    </>
  );
}
