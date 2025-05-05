"use client";

import { Profile } from "@/app/lib/definitions";

export default function UserRow(props: { user: Profile }) {
    const date = new Date(props.user.created_at)
  return (
    <tr className="hover:bg-gray-200 border-b border-b-gray-300">
      <td className="p-4 flex items-center gap-2">
        <div className="w-5 h-5 uppercase font-heading bg-(--color-light) flex text-white justify-center items-center p-6 rounded-4xl text-2xl">
          {props.user.email.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-medium">{props.user.username}</p>
          <p className="text-xs text-gray-600">{props.user.email}</p>
        </div>
      </td>
      <td className="p-4">
        <span>{props.user.role}</span>
      </td>
      <td className="p-4">{props.user.posts}</td>
      <td className="p-4"><p className="text-sm text-gray-600">
          {[date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()].join(
            "-"
          )}
        </p></td>
    </tr>
  );
}
