"use client";

import icons from "@/static_resources/icons";
import { createContext, useContext, useState } from "react";
import PostRow from "./post_row";
import { Post } from "@/app/lib/definitions";
import { useRouter } from "next/navigation";

const dummy: Post[] = [];

const context = createContext(dummy);

export default function PostContext(props: { data: Post[] }) {
  return (
    <context.Provider value={props.data}>
      <Posts />
    </context.Provider>
  );
}

function Posts() {
  const router = useRouter();
  const posts = useContext(context);
  const [filters, setFilters] = useState({ search: "", status: "all" });
  const post = posts.filter((value) => {
    if (filters.status == "published") {
      return (
        value.title.toLowerCase().startsWith(filters.search.toLowerCase()) &&
        value.is_published
      );
    } else if (filters.status == "unpublished") {
      return (
        value.title.toLowerCase().startsWith(filters.search.toLowerCase()) &&
        !value.is_published
      );
    } else {
      return value.title.toLowerCase().startsWith(filters.search.toLowerCase());
    }
  });
  return (
    <div>
      <h2 className="text-2xl font-text font-bold mb-4">Posts</h2>
      <div className="flex justify-between bg-white p-4 rounded-sm items-center shadow">
        <div className="flex gap-2 items-center">
          <span className="font-text font-semibold text-gray-500">
            Status:{" "}
          </span>
          <select
            name="status"
            id="status"
            value={filters.status}
            onChange={(e) => {
              setFilters({ ...filters, status: e.target.value });
            }}
            className="cursor-pointer shadow font-text"
          >
            <option value="all">All</option>
            <option value="published">Published</option>
            <option value="unpublished">Unpublished</option>
          </select>
          <input
            type="text"
            className="font-text shadow px-4 py-2 text"
            placeholder="Search for posts..."
            value={filters.search}
            onChange={(e) => {
              setFilters({ ...filters, search: e.target.value });
            }}
          />
          {(filters.search != "" || filters.status != "all") && (
            <button
              onClick={() => {
                setFilters({ search: "", status: "all" });
              }}
              className="hover:opacity-100 cursor-pointer opacity-60 gap-2 flex items-center font-text"
            >
              <div className="w-4">{icons.get("close")}</div>Clear filters
            </button>
          )}
        </div>
        <button
          onClick={() => {
            router.push("/posts/new");
          }}
          className="cursor-pointer font-medium rounded-sm bg-(--color-light) text-white font-text flex px-4 py-2 items-center hover:bg-(--color-sub) hover:transition-all"
        >
          <div className="w-6">{icons.get("plus")}</div>
          New Post
        </button>
      </div>
      <table className="shadow rounded-sm font-text text-left bg-white table-auto w-full mt-8">
        <thead className="border-b border-b-gray-300">
          <tr className="bg-gray-200">
            <th className="uppercase font-medium text-gray-500 text-sm p-4">Title</th>
            <th className="uppercase font-medium text-gray-500 text-sm p-4">Author</th>
            <th className="uppercase font-medium text-gray-500 text-sm p-4">Status</th>
            <th className="uppercase font-medium text-gray-500 text-sm p-4">Date</th>
            <th className="uppercase font-medium text-gray-500 text-sm p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {post.length == 0 ? (
            <tr className="">
              <td colSpan={5} className="text-center px-8 py-16">
                <div className="w-12 m-auto">{icons.get("file")}</div>
                <span className="py-4 text-sm">No posts found</span>
                <p className="text-sm pt-2 pb-4 text-gray-500">
                  Get started by creating a new posts.
                </p>
                <button
                  title="create post"
                  onClick={() => router.push("/posts/new")}
                  className="m-auto cursor-pointer font-medium rounded-sm bg-(--color-light) text-white font-text flex px-4 py-2 items-center hover:bg-(--color-sub) hover:transition-all"
                >
                  <div className="w-6">{icons.get("plus")}</div>
                  New Post
                </button>
              </td>
            </tr>
          ) : (
            post.map((value) => {
              return <PostRow key={value.id} post={value} />;
            })
          )}
        </tbody>
      </table>
      <p className="font-text text-center m-4 text-sm text-gray-600">
        Showing {post.length} of {posts.length} posts
      </p>
    </div>
  );
}
