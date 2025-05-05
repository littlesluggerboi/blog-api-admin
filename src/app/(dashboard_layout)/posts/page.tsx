import { verifySession } from "@/app/lib/dal";
import PostContext from "@/partials/posts";
import { notFound } from "next/navigation";

export default async function Page() {
  const user = await verifySession();
  const res = await fetch(`${process.env.BACKEND_URL}/posts`, {
    signal: AbortSignal.timeout(3000),
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });
  if (res.status == 404) {
    notFound();
  } else if (!res.ok) {
    throw new Error(res.statusText);
  }
  const { posts } = await res.json();
  return (
    <>
      <title>A Blogs | Posts</title>
      <PostContext data={posts} />
    </>
  );
}
