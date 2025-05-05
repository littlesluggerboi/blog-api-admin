"use client";
import { deletePostAction } from "@/app/actions/delete_actions";
import { PostAndComments } from "@/app/lib/definitions";
import icons from "@/static_resources/icons";
import { useRouter } from "next/navigation";
import Spinner from "./spinner";

export default function PostDetails(props: { post: PostAndComments }) {
  const router = useRouter();
  return (
    <div>
      <title>{`Post | ${props.post.title}`}</title>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-heading font-medium">
          {props.post.title}
        </h2>
        <div className="font-text flex">
          <button
            className="flex items-center gap-1 py-2 px-4 rounded-md border border-gray-300 bg-white cursor-pointer hover:bg-gray-100 shadow mr-2 text-blue-500"
            onClick={() => router.push(`/posts/${props.post.id}/edit`)}
          >
            <div className="w-5">{icons.get("edit")}</div>
            Edit
          </button>
          <button
            onClick={async () => {
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
            className="flex items-center gap-1 py-2 px-4 rounded-md border border-gray-300 bg-white cursor-pointer hover:bg-gray-100 text-red-500 shadow"
          >
            <span className="w-5">{icons.get("delete")}</span>Delete{" "}
            {false && <Spinner width="18" height="18" />}
          </button>
        </div>
      </div>
      <div className="p-8 bg-white mt-4 rounded-2xl font-text">
        <span className="font-medium">Status:</span>
        <span
          className={`ml-1 mr-3 text-xs py-1 rounded-2xl text-white font-bold px-2 ${
            props.post.is_published ? "bg-green-400" : "bg-red-400"
          }`}
        >
          {props.post.is_published ? "Published" : "Unpublished"}
        </span>
        <span className="font-medium">Author:</span>
        <span className="ml-1 mr-3 text-gray-600">
          {props.post.author.email}
        </span>
        <span className="font-medium">Created:</span>
        <span className="ml-1 mr-3 text-gray-600">May 1, 2023</span>
        <div className="text-lg mt-4 font-light">
          {props.post.content.split("\n").map((value, index) => {
            return (
              <p key={index} className="indent-8 mb-4">
                {value}
              </p>
            );
          })}
        </div>
      </div>
      {props.post.comments.length != 0 && (
        <div className="p-8 font-text bg-white mt-8">
          <h2 className="mb-4 text-lg font-medium">Comments</h2>
          <div className="bg-gray-100 p-4">
          {props.post.comments.map((value) => {
            const date = new Date(value.created_at);
            return (
              <div className="mb-4` flex flex-col" key={value.id}>
                <span className="font-semibold text-gray-700 text-xs">{value.user.email}</span>
                <p className="font-light">{value.comment}</p>
                <span className="font-extralight text-xs">
                  {[
                    date.getUTCFullYear(),
                    date.getUTCMonth(),
                    date.getUTCDate(),
                  ].join("-")}
                </span>
              </div>
            );
          })}
          </div>
        </div>
      )}
    </div>
  );
}
