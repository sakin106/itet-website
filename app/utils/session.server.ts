import { createCookieSessionStorage, redirect } from "react-router";

const sessionSecret = process.env.SESSION_SECRET || "itetbd-production-secret-key-2026";

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__itet_session",
    secure: process.env.NODE_ENV === "production",
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    httpOnly: true,
  },
});

export async function getSession(request: Request) {
  const cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}

export async function getUserId(request: Request): Promise<string | undefined> {
  const session = await getSession(request);
  const userId = session.get("userId");
  return userId;
}

export async function getUserRole(request: Request): Promise<string | undefined> {
  const session = await getSession(request);
  return session.get("role");
}

export async function createUserSession(
  userId: string,
  role: string,
  redirectTo: string
) {
  const session = await sessionStorage.getSession();
  session.set("userId", userId);
  session.set("role", role);

  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session),
    },
  });
}

export async function logout(request: Request) {
  const session = await getSession(request);
  return redirect("/membership-login", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session),
    },
  });
}
