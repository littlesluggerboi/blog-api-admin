import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decrypt, refreshToken } from "./app/lib/session";

const publicRoutes = ["/", "/login", "/signup"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isPublicRoute = publicRoutes.includes(path);
  const cookie = (await cookies()).get("session")?.value;
  
  const user = await decrypt(cookie);
  if (isPublicRoute && user) {
    await refreshToken();
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  } else if (!isPublicRoute && !user) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
