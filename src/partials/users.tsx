"use client";

import { Profile } from "@/app/lib/definitions";
import { createContext, useContext, useState } from "react";
import icons from "@/static_resources/icons";
import UserRow from "./user_row";

const dummy: Profile[] = [];
const context = createContext(dummy);
export default function UsersContext(props: { users: Profile[] }) {
  return (
    <context.Provider value={props.users}>
      <Users />
    </context.Provider>
  );
}

function Users() {
  const [search, setSearch] = useState("");
  const users = useContext(context);
  const user = users.filter((value) => {
    return (
      value.email.toLowerCase().startsWith(search.toLowerCase()) ||
      value.username?.toLocaleLowerCase().startsWith(search.toLowerCase())
    );
  });
  console.log(user);
  return (
    <div className="font-text">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Users</h2>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          className="border border-gray-300 shadow px-4 py-2 rounded-sm bg-white"
          placeholder="Seach a user..."
        />
      </div>
      <table className="shadow rounded-sm font-text text-left bg-white table-auto w-full mt-8">
        <thead className="border-b border-b-gray-300">
          <tr className="bg-gray-200">
            <th className="uppercase font-medium text-gray-500 text-sm p-4">
              User
            </th>
            <th className="uppercase font-medium text-gray-500 text-sm p-4">
              Role
            </th>
            <th className="uppercase font-medium text-gray-500 text-sm p-4">
              Posts
            </th>
            <th className="uppercase font-medium text-gray-500 text-sm p-4">
              Joined
            </th>
          </tr>
        </thead>
        <tbody>
          {user.length == 0 ? (
            <tr className="">
              <td colSpan={5} className="text-center px-8 py-16">
                <div className="w-12 m-auto">{icons.get("user gray")}</div>
                <span className="py-4 text-sm">No users found</span>
                <p className="text-sm pt-2 pb-4 text-gray-500">
                  No users to display.
                </p>
              </td>
            </tr>
          ) : (
            user.map((value) => <UserRow user={value} key={value.id} />)
          )}
        </tbody>
      </table>
    </div>
  );
}
