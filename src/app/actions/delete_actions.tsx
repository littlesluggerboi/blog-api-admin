"use server";
import { verifySession } from "../lib/dal";

export async function deletePostAction(id: number) {
  try {
    const user = await verifySession();
    const res = await fetch(`${process.env.BACKEND_URL}/posts/${id}`, {
      signal: AbortSignal.timeout(3000),
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    return {success: res.ok, status: res.status, message: res.statusText}
  } catch (error) {
    console.log(error);
    return {success: false, status: 500, message: "Unexpected Error Occured"}
  }
}

export async function deleteCommentAction(id: number) {
  try {
    const user = await verifySession();
    const res = await fetch(`${process.env.BACKEND_URL}/comments/${id}`, {
      signal: AbortSignal.timeout(3000),
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    return {success: res.ok, status: res.status, message: res.statusText}
  } catch (error) {
    console.log(error);
    return {success: false, status: 500, message: "Unexpected Error Occured"}
  }
}