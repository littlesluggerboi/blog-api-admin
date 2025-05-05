import PostDetails from "@/partials/post";
import { getPostWithComments } from "./getpost";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPostWithComments(id);
  return <PostDetails post={post} />;
}
