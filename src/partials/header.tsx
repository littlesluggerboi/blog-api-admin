"use client";

import icons from "@/static_resources/icons";
import { useState } from "react";

export default function Header() {
  const [signOut, setSignOut] = useState(false);
  return (
    <div className="shadow-[0_0_2px_rgba(0,0,0,0.25)] gap-24 h-fit p-8 grid grid-cols-[auto_1fr_auto]">
      <div className="flex items-center gap-1 font-heading font-medium">
        <div className="w-6">{icons.get("overview black")}</div>
        <span>Overview</span>
      </div>
      <form className="flex items-center bg-gray-200 gap-2 px-4 rounded-4xl">
        <button className="flex">
          <div className="w-6">{icons.get("magnify")}</div>
        </button>
        <input
          type="text"
          className="font-text mr-4 w-full py-2 focus:outline-none focus:underline px-4"
          placeholder="Search"
        />
      </form>
      <div className="flex items-center font-text relative">
        <span
          className="mr-2 cursor-pointer hover:bg-gray-100 text-center w-8"
          onClick={() => setSignOut(!signOut)}
        >
          {signOut ? "△" : `▽`}
        </span>
        <div className="w-10 h-10 rounded-3xl mr-2 flex justify-center items-center font-heading font-bold text-2xl text-white bg-(--prime-color)">
          A
        </div>
        <span className="text-(--light-color) font-text">Aeron Tayaotao</span>
        {signOut ? (
          <div className="absolute bg-(--prime-color) w-48 left-0 top-12 p-4 rounded-2xl flex flex-col items-center">
            <div className="border w-16 h-16 rounded-4xl mr-2 flex justify-center items-center font-heading font-bold text-3xl text-(--prime-color) bg-white mb-4">
              A
            </div>
            <span className="text-white">Aeron Tayaotao</span>
            <div className="flex w-full gap-4 items-center border-t border-t-white pt-2 mt-4">
              <div className="w-6">{icons.get("logout")}</div>
              <span className="text-white">Logout</span>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
