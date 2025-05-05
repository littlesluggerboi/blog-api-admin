import "server-only";
import { verifySession } from "../dal";
import { Event } from "../definitions";

export const getRecentActivities = async (): Promise<Event[] | string> => {
  try {
    const user = await verifySession();
    const res: Response = await fetch(
      `${process.env.BACKEND_URL}/monitor/recent_activities`,
      {
        signal: AbortSignal.timeout(3000),
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    if(!res.ok){
        throw new Error(res.statusText);
    }
    const recent_activities = (await res.json()).recent_activities;
    return recent_activities;
  } catch (error) {
    console.log(error);
    return "Unavailable";
  }
};
