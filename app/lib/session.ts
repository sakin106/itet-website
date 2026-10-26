import { cookies } from "next/headers";

export interface SessionPayload {
  userId: string;
  email: string;
  role: string;
}

const SESSION_COOKIE_NAME = "itet_session";

export async function createSession(payload: SessionPayload) {
  const cookieStore = await cookies();
  const sessionData = Buffer.from(JSON.stringify(payload)).toString("base64");

  cookieStore.set(SESSION_COOKIE_NAME, sessionData, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
}

export async function getSession(): Promise<SessionPayload | null> {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(SESSION_COOKIE_NAME);
  if (!sessionCookie?.value) return null;

  try {
    const raw = Buffer.from(sessionCookie.value, "base64").toString("utf-8");
    return JSON.parse(raw) as SessionPayload;
  } catch (error) {
    return null;
  }
}

export async function destroySession() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
}
