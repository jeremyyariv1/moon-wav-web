import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AUTH_COOKIE, parseToken } from "@/lib/auth";
import LockedLanding from "@/components/LockedLanding";

export default async function Home() {
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_COOKIE)?.value;
  const role = await parseToken(token);
  if (role === "investor") redirect("/investor");
  if (role === "creator") redirect("/creator");
  return <LockedLanding />;
}
