import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE, makeToken, verifyPassword, type Role } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const body = (await req.json().catch(() => null)) as
    | { role?: Role; password?: string }
    | null;
  const role = body?.role;
  const password = body?.password;

  if ((role !== "investor" && role !== "creator") || !password) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (!verifyPassword(role, password)) {
    return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
  }

  const token = await makeToken(role);
  const response = NextResponse.json({ ok: true, role });
  response.cookies.set(AUTH_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });
  return response;
}
