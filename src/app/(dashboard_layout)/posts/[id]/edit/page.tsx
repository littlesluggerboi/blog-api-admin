import PostUpdate from "@/partials/post_update";
import { getPost } from "../getpost";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPost(id);
  return (
    <>
      <title>A Post | Update</title>
      <PostUpdate post={post} />
    </>
  );
}
