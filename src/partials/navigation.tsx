"use client";
import icons from "@/static_resources/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navigation() {
  const pathname = usePathname();
  return (
    <header className="w-2xs bg-[#011e27] text-white">
      <nav className="max-w-5xl mx-auto pt-4 flex flex-col h-full">
        <Link
          href="/"
          className="font-heading font-bold text-3xl flex items-center gap-1 border-b border-b-(--prime-color) py-4 px-2"
        >
          <div className="w-16">{icons.get("logo")}</div>
          <span className="">Blogs</span>
        </Link>
        <Link
          href="/"
          className={`flex [&.active]:bg-[linear-gradient(to_right,#FFF_2%,#007092_2%,#003f52)] hover:bg-[linear-gradient(to_right,#FFF_2%,#007092_2%,#003f52)] items-center gap-1 p-4 border-b border-b-[#092831] font-heading text-xl font-semibold ${
            pathname.startsWith("/dashboard") ? "active" : ""
          }`}
        >
          <div className="w-8">{icons.get("overview")}</div>
          <span>Overview</span>
        </Link>
        <Link
          href="/posts"
          className={`flex [&.active]:bg-[linear-gradient(to_right,#FFF_2%,#007092_2%,#003f52)] hover:bg-[linear-gradient(to_right,#FFF_2%,#007092_2%,#003f52)] items-center gap-1 p-4 border-b border-b-[#092831] font-heading text-xl font-semibold ${
            pathname.startsWith("/posts") ? "active" : ""
          }`}
        >
          <div className="w-8">{icons.get("post")}</div>
          <span>Posts</span>
        </Link>
        <Link
          href="/comments"
          className={`flex [&.active]:bg-[linear-gradient(to_right,#FFF_2%,#007092_2%,#003f52)] hover:bg-[linear-gradient(to_right,#FFF_2%,#007092_2%,#003f52)] items-center gap-1 p-4 border-b border-b-[#092831] font-heading text-xl font-semibold ${
            pathname.startsWith("/comments") ? "active" : ""
          }`}
        >
          <div className="w-8">{icons.get("comment")}</div>
          <span>Comments</span>
        </Link>
        <Link
          href="/users"
          className={`flex [&.active]:bg-[linear-gradient(to_right,#FFF_2%,#007092_2%,#003f52)] hover:bg-[linear-gradient(to_right,#FFF_2%,#007092_2%,#003f52)] items-center gap-1 p-4 border-b border-b-[#092831] font-heading text-xl font-semibold ${
            pathname.startsWith("/users") ? "active" : ""
          }`}
        >
          <div className="w-8">{icons.get("user")}</div>
          <span>Users</span>
        </Link>

        <a
          href=""
          target="_blank"
          className={`mt-auto flex [&.active]:bg-[linear-gradient(to_right,#FFF_2%,#007092_2%,#003f52)] hover:bg-[linear-gradient(to_right,#FFF_2%,#007092_2%,#003f52)] items-center gap-4 justify-between p-4 border-y border-y-[#092831] font-heading text-2xl font-semibold `}
        >
          <span>Blogs Website</span>
          <div className="w-8">{icons.get("new window")}</div>
        </a>
      </nav>
    </header>
  );
}
