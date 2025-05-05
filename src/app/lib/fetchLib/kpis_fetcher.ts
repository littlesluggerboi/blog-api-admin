import "server-only";
import { verifySession } from "../dal";
import { KPI } from "../definitions";
const getCount = async (
  field: string,
  searchParams: URLSearchParams | null
): Promise<{ count: number | string }> => {
  try {
    const user = await verifySession();
    const res: Response = await fetch(
      `${process.env.BACKEND_URL}/${field}/count?${searchParams?.toString()}`,
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
    const count = await res.json();
    return count;
  } catch (error) {
    console.log(error);
    return { count: "Unavailable" };
  }
};

export const getKPIs = async (): Promise<KPI[]> => {
  const postsTotal = await getCount("posts", null);
  const publishedTotal = await getCount(
    "posts",
    new URLSearchParams({ isPublished: "true" })
  );
  const commentsTotal = await getCount("comments", null);
  const usersTotal = await getCount("users", null);
  return [
    { label: "Total Posts", value: postsTotal.count },
    { label: "Published Posts", value: publishedTotal.count },
    { label: "Total Users", value: usersTotal.count },
    { label: "Total Comments", value: commentsTotal.count },
  ];
};
