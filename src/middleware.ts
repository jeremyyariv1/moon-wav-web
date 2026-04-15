import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE, parseToken } from "@/lib/auth";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get(AUTH_COOKIE)?.value;
  const role = await parseToken(token);

  if (pathname.startsWith("/investor") && role !== "investor") {
    return NextResponse.redirect(new URL("/", req.url));
  }
  if (pathname.startsWith("/creator") && role !== "creator") {
    return NextResponse.redirect(new URL("/", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/investor/:path*", "/creator/:path*"],
};
