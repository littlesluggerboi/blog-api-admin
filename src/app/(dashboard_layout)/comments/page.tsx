import { verifySession } from "@/app/lib/dal";
import CommentsContext from "@/partials/comments";
import { notFound } from "next/navigation";

export default async function Comments() {
  const user = await verifySession();
  const res = await fetch(`${process.env.BACKEND_URL}/comments`, {
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
  const { comments } = await res.json();
  return (
    <>
      <title>A Blogs | Comments</title>
      <CommentsContext comments={comments} />
    </>
  );
}
