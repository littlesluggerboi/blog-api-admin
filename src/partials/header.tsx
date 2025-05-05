"use client";
import { logout } from "@/app/actions/logout";
import { User } from "@/app/lib/definitions";
import icons from "@/static_resources/icons";
import { usePathname } from "next/navigation";
import { useState } from "react";

const pathName = (url: string) => {
  if (url.startsWith("/dashboard")) return "overview";
  else if (url.startsWith("/posts")) return "post";
  else if (url.startsWith("/comments")) return "comment";
  else if (url.startsWith("/users")) return "user";
  else return "";
};

export default function Header(props: { user: User }) {
  const path = pathName(usePathname());
  const [signOut, setSignOut] = useState(false);
  return (
    <div className="shadow-[0_0_2px_rgba(0,0,0,0.25)] gap-24 h-fit px-8 py-4 flex justify-between bg-white">
      <div className="flex items-center gap-1 font-heading">
        <div className="w-6">{icons.get(`${path} black`)}</div>
        <span className="capitalize text-xl font-extralight tracking-wider">{path}</span>
      </div>
      <div className="flex items-center font-text relative">
        <span
          className="mr-2 cursor-pointer hover:bg-gray-100 text-center w-8"
          onClick={() => setSignOut(!signOut)}
        >
          {signOut ? "△" : `▽`}
        </span>
        <div className="capitalize w-10 h-10 rounded-3xl mr-2 flex justify-center items-center font-heading font-bold text-2xl text-white bg-(--prime-color)">
          {props.user.username
            ? props.user.username.charAt(0)
            : props.user.email.charAt(0)}
        </div>
        <span className="text-(--light-color) font-text w-32">
          {props.user.username ? props.user.username : props.user.email}
        </span>
        {signOut ? (
          <div className="absolute bg-(--prime-color) w-48 left-0 top-12 p-4 rounded-2xl flex flex-col items-center">
            <div className="capitalize border w-16 h-16 rounded-4xl mr-2 flex justify-center items-center font-heading font-bold text-3xl text-(--prime-color) bg-white mb-4">
              {props.user.username
                ? props.user.username.charAt(0)
                : props.user.email.charAt(0)}
            </div>
            <span className="text-white">
              {props.user.username ? props.user.username : props.user.email}
            </span>
            <i className="text-white  mb-4 border-b border-b-white">
              {props.user.email}
            </i>
            <button
              onClick={() => logout()}
              className="p-2 cursor-pointer flex w-full gap-4 items-centerpy-2 hover:bg-(--color-light)"
            >
              <div className="w-6">{icons.get("logout")}</div>
              <span className="text-white">Logout</span>
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
