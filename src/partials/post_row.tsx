"use client";
import Link from "next/link";
import icons from "@/static_resources/icons";
import { Post } from "@/app/lib/definitions";
import { useRouter } from "next/navigation";
import { deletePostAction } from "@/app/actions/delete_actions";
export default function PostRow(props: { post: Post }) {
  const date = new Date(props.post.created_at);
  const router = useRouter();
  return (
    <tr className="hover:bg-gray-200 border-b border-b-gray-300">
      <td className="p-4">
        <Link
          href={`/posts/${props.post.id}`}
          className="font-medium hover:text-(--color-light)"
          title="title"
        >
          {props.post.title}
        </Link>
        <p className="text-xs text-gray-600">
          {props.post.content.substring(0, 110)}
          {props.post.content.length > 110 && "..."}
        </p>
      </td>
      <td className="p-4" title="author">
        <p className="text-sm font-medium">{props.post.author.username}</p>
        <p className="text-xs text-gray-600">{props.post.author.email}</p>
      </td>
      <td className="p-4" title="status">
        {props.post.is_published ? (
          <div className="text-white bg-green-400 w-fit px-2 py-1 text-xs rounded-2xl">
            Published
          </div>
        ) : (
          <div className="text-white bg-red-400 w-fit px-2 py-1 text-xs rounded-2xl">
            Unpublished
          </div>
        )}
      </td>
      <td className="p-4" title="date">
        <p className="text-sm text-gray-600">
          {[date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()].join(
            "-"
          )}
        </p>
      </td>
      <td className="p-4">
        <button
          onClick={() => router.push(`/posts/${props.post.id}`)}
          className="w-5 cursor-pointer mr-2 opacity-60 hover:opacity-100"
        >
          {icons.get("view")}
        </button>
        <button
          onClick={() => router.push(`/posts/${props.post.id}/edit`)}
          className="w-5 cursor-pointer mr-2 opacity-60 hover:opacity-100"
        >
          {icons.get("edit")}
        </button>
        <button
          onClick={async() => {
            const advance = confirm("Are you sure you want to delete post?");
            if (advance) {
              const { success, status, message } = await deletePostAction(
                props.post.id
              );
              if (!success) {
                alert(`${status} | ${message}`);
              } else {
                alert(`Delete action complete`);
                router.push("/posts");
              }
            }
          }}
          title="delete"
          className="w-5 cursor-pointer mr-2 opacity-60 hover:opacity-100"
        >
          {icons.get("delete")}
        </button>
      </td>
    </tr>
  );
}
