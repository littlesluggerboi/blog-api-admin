"use client";

import { Post } from "@/app/lib/definitions";
import { useRouter } from "next/navigation";
import { useActionState, useState } from "react";
import Spinner from "./spinner";
import { updatePost } from "@/app/actions/post";

export default function PostUpdate(props: { post: Post }) {
  const [form, setForm] = useState({ ...props.post });
  const [state, action, pending] = useActionState(updatePost, undefined)
  const router = useRouter();

  return (
    <div className="bg-white font-text rounded-2xl shadow h-fit">
      <div className="bg-(--color-light) p-8 border-b-gray-300 border-b shadow rounded-t-2xl ">
        <h1 className="text-2xl  text-white ">Update Post</h1>
        {state?.message && (
            <p className="text-red-400 font-bold">{state.message}</p>
          )}
      </div>
      <form action={action} className="p-8">
        <input type="number" id="id" name="id" defaultValue={props.post.id} className="hidden"/>
        <label
          htmlFor="title"
          className="block text-(--color-light) tracking-wider font-medium"
        >
          Title
        </label>
        {state?.errors?.title && (
            <p className="text-red-600">* {state.errors.title}</p>
          )}
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Post title"
          className="shadow border-gray-200 border py-2 px-4 rounded-sm w-full"
          value={form.title}
          onChange={(e) => {
            setForm({ ...form, title: e.target.value });
          }}
          required
        />
        <label
          htmlFor="content"
          className="mt-6 block text-(--color-light) tracking-wider font-medium"
        >
          Content
        </label>
        {state?.errors?.content && (
            <p className="text-red-600">* {state.errors.content}</p>
          )}
        <textarea
          name="content"
          id="content"
          placeholder="Write the content of your blog."
          className="shadow border-gray-200 border p-4 rounded-sm w-full resize-none"
          rows={12}
          value={form.content}
          onChange={(e) => {
            setForm({ ...form, content: e.target.value});
          }}
          required
        ></textarea>
        <input
          className="mt-6"
          type="checkbox"
          id="is_published"
          name="is_published"
          checked={form.is_published}
          onChange={() =>
            setForm({ ...form, is_published: !form.is_published })
          }
        />
        <label htmlFor="is_published" className="ml-2">
          Publish post?
        </label>
        {state?.errors?.is_published && (
            <p className="text-red-600">* {state.errors.is_published}</p>
          )}
        <div className="flex justify-end mt-6 gap-4">
          <button
            className="shadow py-2 px-4 cursor-pointer border border-gray-200 rounded-md hover:bg-gray-200"
            type="button"
            onClick={() => router.push(`/posts/${props.post.id}`)}
          >
            Cancel
          </button>
          <button
            className="items-center shadow py-2 px-4 cursor-pointer border border-gray-200 rounded-md bg-(--color-light) text-white hover:bg-(--color-sub) flex gap-2"
            type="submit"
          >
            Update Post {pending && <Spinner width="12" height="12" />}
          </button>
        </div>
      </form>
    </div>
  );
}
