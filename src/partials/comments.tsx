"use client";

import { Comment } from "@/app/lib/definitions";
import icons from "@/static_resources/icons";
import { createContext, useContext, useState } from "react";
import CommentRow from "./comment_row";

const dummy: Comment[] = [];
const context = createContext(dummy);
export default function CommentsContext(props: { comments: Comment[] }) {
  return (
    <context.Provider value={props.comments}>
      <Comments />
    </context.Provider>
  );
}

function Comments() {
  const comments = useContext(context);
  const [search, setSearch] = useState("");
  const comment = comments.filter((value) => {
    return value.comment.toLowerCase().startsWith(search.toLowerCase());
  });
  return (
    <div className="font-text">
      <title>A Blogs | Comments</title>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Comments</h2>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          className="border border-gray-300 shadow px-4 py-2 rounded-sm bg-white"
          placeholder="Seach a comment..."
        />
      </div>
      <table className="shadow rounded-sm font-text text-left bg-white table-auto w-full mt-8">
        <thead className="border-b border-b-gray-300">
          <tr className="bg-gray-200">
            <th className="uppercase font-medium text-gray-500 text-sm p-4">
              Comment
            </th>
            <th className="uppercase font-medium text-gray-500 text-sm p-4">
              Post
            </th>
            <th className="uppercase font-medium text-gray-500 text-sm p-4">
              Author
            </th>
            <th className="uppercase font-medium text-gray-500 text-sm p-4">
              Date
            </th>
            <th className="uppercase font-medium text-gray-500 text-sm p-4">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {comment.length == 0 ? (
            <tr className="">
              <td colSpan={5} className="text-center px-8 py-16">
                <div className="w-12 m-auto">{icons.get("comment gray")}</div>
                <span className="py-4 text-sm">No comments found</span>
                <p className="text-sm pt-2 pb-4 text-gray-500">
                  No comments to display.
                </p>
              </td>
            </tr>
          ) : (
            comment.map((value) => (
              <CommentRow comment={value} key={value.id} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
