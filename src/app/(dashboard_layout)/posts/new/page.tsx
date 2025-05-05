"use client";

import { newPost } from "@/app/actions/post";
import Spinner from "@/partials/spinner";
import { useRouter } from "next/navigation";
import { useActionState } from "react";

export default function Page() {
  const router = useRouter();
  const [state, action, pending] = useActionState(newPost, undefined);
  return (
    <>
      <title>A Blogs | New Post</title>
      <div className="bg-white font-text rounded-2xl shadow h-fit">
        <div className="bg-(--color-light) p-8 border-b-gray-300 border-b shadow rounded-t-2xl ">
          <h1 className="text-2xl  text-white ">Create New Post</h1>
          {state?.message && (
            <p className="text-red-400 font-bold">{state.message}</p>
          )}
        </div>
        <form action={action} className="p-8">
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
            required
          ></textarea>
          <input
            className="mt-6"
            type="checkbox"
            id="is_published"
            name="is_published"
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
              onClick={() => router.push("/posts")}
            >
              Cancel
            </button>
            <button
              className="items-center shadow py-2 px-4 cursor-pointer border border-gray-200 rounded-md bg-(--color-light) text-white hover:bg-(--color-sub) flex gap-2"
              type="submit"
            >
              Create Post {pending && <Spinner width="12" height="12" />}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
