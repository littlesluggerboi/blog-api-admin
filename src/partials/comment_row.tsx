"use client";
import { Comment } from "@/app/lib/definitions";
import Link from "next/link";
import icons from "@/static_resources/icons";
import { useRouter } from "next/navigation";
import { deleteCommentAction } from "@/app/actions/delete_actions";

export default function CommentRow(props: { comment: Comment }) {
  const date = new Date(props.comment.created_at);
  const router = useRouter();
  return (
    <tr className="hover:bg-gray-200 border-b border-b-gray-300">
      <td className="p-4 max-w-2xl" title="comment">
        {props.comment.comment.substring(0, 110)}
        {props.comment.comment.length > 110 && "..."}
      </td>
      <td className="p-4">
        <Link
          className="cursor-pointer text-blue-400 hover:text-blue-700"
          href={`/posts/${props.comment.post_id}`}
        >
          Post#{props.comment.post_id}
        </Link>
      </td>
      <td className="p-4" title="author">
        <p className="text-sm font-medium">{props.comment.user.username}</p>
        <p className="text-xs text-gray-600">{props.comment.user.email}</p>
      </td>
      <td className="p-4">
        <p className="text-sm text-gray-600">
          {[date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()].join(
            "-"
          )}
        </p>
      </td>
      <td className="p-4">
        <button
          onClick={() => router.push(`/posts/${props.comment.post_id}`)}
          title="view"
          className="w-5 cursor-pointer mr-2 opacity-60 hover:opacity-100"
        >
          {icons.get("view")}
        </button>
        <button
          onClick={async () => {
            const advance = confirm("Are you sure you want to delete this comment?");
            if (advance) {
              const { success, status, message } = await deleteCommentAction(
                props.comment.id
              );
              if (!success) {
                alert(`${status} | ${message}`);
              } else {
                alert(`Delete action complete`);
                router.push("/comments");
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
