export type Role = "investor" | "creator";

export const AUTH_COOKIE = "mw_auth";

// TODO: move AUTH_SECRET + passwords to env vars before deploying beyond local dev
const AUTH_SECRET = "moonwav-dev-secret-rotate-on-launch";
const PASSWORDS: Record<Role, string> = {
  investor: "password1",
  creator: "password1",
};

export function verifyPassword(role: Role, password: string): boolean {
  const expected = PASSWORDS[role];
  if (!expected || password.length !== expected.length) return false;
  let diff = 0;
  for (let i = 0; i < expected.length; i++) {
    diff |= expected.charCodeAt(i) ^ password.charCodeAt(i);
  }
  return diff === 0;
}

async function hmac(value: string): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(AUTH_SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(value));
  const bytes = new Uint8Array(signature);
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export async function makeToken(role: Role): Promise<string> {
  const sig = await hmac(role);
  return `${role}.${sig}`;
}

export async function parseToken(token: string | undefined): Promise<Role | null> {
  if (!token) return null;
  const [role, sig] = token.split(".");
  if (!role || !sig) return null;
  if (role !== "investor" && role !== "creator") return null;
  const expected = await hmac(role);
  if (expected !== sig) return null;
  return role;
}
