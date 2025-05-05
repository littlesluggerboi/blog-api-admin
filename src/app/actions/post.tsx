"use server";

import { redirect } from "next/navigation";
import { verifySession } from "../lib/dal";
import {
  PostFormSchema,
  PostFormState,
  UpdatePostFormSchema,
} from "../lib/definitions";

export async function newPost(state: PostFormState, formData: FormData) {
  const user = await verifySession();
  const validateFields = PostFormSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
    is_published: formData.get("is_published"),
  });
  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Invalid field values",
    };
  }
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/posts`, {
      method: "post",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${user.token}`,
      },
      body: new URLSearchParams(validateFields.data),
    });
    if (!res.ok) {
      const data = await res.json();
      console.log(data);
      return { message: "Unexpected problem encountered..." };
    }
    const { message } = await res.json();
    console.log(message);
  } catch (error) {
    console.error(error);
    return { message: "Unexpected problem encountered..." };
  }
  redirect("/posts");
}

export async function updatePost(state: PostFormState, formData: FormData) {
  const user = await verifySession();
  const validateFields = UpdatePostFormSchema.safeParse({
    title: formData.get("title"),
    id: formData.get("id"),
    content: formData.get("content"),
    is_published: formData.get("is_published"),
  });
  if (!validateFields.success) {
    console.log(validateFields.error.flatten().fieldErrors);
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Invalid field values",
    };
  }
  const { id, ...data } = validateFields.data;
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/posts/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${user.token}`,
      },
      body: new URLSearchParams(data),
    });
    if (!res.ok) {
      console.log(res.statusText);
      return { message: "Unexpected problem encountered..." };
    }
    const { message } = await res.json();
    console.log(message);
  } catch (error) {
    console.error(error);
    return { message: "Unexpected problem encountered..." };
  }
  redirect(`/posts/${id}`);
}
