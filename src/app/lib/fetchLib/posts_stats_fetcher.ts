import "server-only";
import { verifySession } from "../dal";
import { GraphData } from "../definitions";

export const getPostStats = async (): Promise<GraphData[] | string> => {
  try {
    const user = await verifySession();
    const res: Response = await fetch(
      `${process.env.BACKEND_URL}/monitor/post_stats?days=6`,
      {
        signal: AbortSignal.timeout(3000),
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const { stats } = await res.json();
    const posts: GraphData[] = stats.map(
      (val: { date: string; published: number; posts: number }) => {
        const date = new Date(val.date);
        return {
          name: [
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate(),
          ].join("-"),
          total: val.posts,
          published: val.published,
        };
      }
    );
    return posts;
  } catch (error) {
    console.log(error);
    return "Unavailable";
  }
};
