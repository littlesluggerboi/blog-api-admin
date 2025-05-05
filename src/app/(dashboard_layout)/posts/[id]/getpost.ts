import "server-only";
import { notFound } from "next/navigation";
import { verifySession } from "@/app/lib/dal";
import { Post, PostAndComments } from "@/app/lib/definitions";
export const getPost = async (id: string | undefined): Promise<Post> => {
  if (!id || isNaN(parseInt(id))) {
    notFound();
  }
  const post_id = parseInt(id);
  const user = await verifySession();
  const res = await fetch(`${process.env.BACKEND_URL}/posts/${post_id}`, {
    signal: AbortSignal.timeout(3000),
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
    method: "get",
  });
  if (res.status == 404) {
    notFound();
  }
  const { post } = await res.json();
  return post;
};

export const getPostWithComments = async (
  id: string | undefined
): Promise<PostAndComments> => {
  if (!id || isNaN(parseInt(id))) {
    notFound();
  }
  const post_id = parseInt(id);
  const user = await verifySession();
  const res = await fetch(
    `${process.env.BACKEND_URL}/posts/${post_id}?comments=${true}`,
    {
      signal: AbortSignal.timeout(3000),
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
      method: "get",
    }
  );
  if (res.status == 404) {
    notFound();
  }
  const { post } = await res.json();
  return post;
};
