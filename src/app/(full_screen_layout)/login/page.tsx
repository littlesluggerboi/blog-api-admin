"use client";
import { login } from "@/app/actions/login";
import icons from "@/static_resources/icons";
import Link from "next/link";
import { useActionState } from "react";
import Spinner from "@/partials/spinner";

export default function Login() {
  const [state, action, pending] = useActionState(login, undefined);
  return (
    <div className="mx-4 py-24">
      <title>A Blogs | Login</title>
      <div className="flex items-center justify-center">
        <div className="w-24">{icons.get("logo")}</div>
        <h1 className="text-white font-heading text-6xl font-bold">Blogs</h1>
      </div>
      {state?.message && (
        <p className="font-heading text-red-500 text-center text-2xl">
          {state.message}
        </p>
      )}
      <form
        action={action}
        className="grid gap-6 max-w-2xl m-auto mt-8 font-text"
      >
        <div>
          <input
            className="bg-white text-2xl w-full p-4 rounded-sm focus:outline-white focus:outline-offset-4"
            type="email"
            id="email"
            name="email"
            placeholder="Email address"
            autoFocus
            required
          />
          {state?.errors?.email && (
            <p className="text-red-500">* {state.errors.email}</p>
          )}
        </div>
        <div>
          <input
            className="bg-white text-2xl p-4 w-full rounded-sm focus:outline-white focus:outline-offset-4"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />
          {state?.errors?.password && (
            <p className="text-red-500">* {state.errors.password}</p>
          )}
        </div>
        <button className="text-2xl p-4 text-white bg-(--color-light) hover:opacity-90 flex justify-center items-center gap-2">
          Login {pending && <Spinner width="18" height="18" />}
        </button>
        <Link
          href=""
          className="font-semibold text-lg text-center font-text text-(--color-light)"
        >
          Forgot password?
        </Link>
        <p className="text-lg text-center font-text text-white">
          {"Don't have an account?"}{" "}
          <Link href="signup" className="text-(--color-light) font-semibold">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
