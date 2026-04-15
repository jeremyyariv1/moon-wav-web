import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const response = NextResponse.redirect(new URL("/", req.url));
  response.cookies.delete(AUTH_COOKIE);
  return response;
}
