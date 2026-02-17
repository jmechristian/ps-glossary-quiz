/**
 * GET /api/user - returns current user from Auth0 session.
 * Uses awsUserId stored in session via beforeSessionSaved.
 */

import { NextResponse } from "next/server";
import { auth0 } from "@/lib/auth0";

export async function GET() {
  const session = await auth0.getSession();

  if (!session) {
    return NextResponse.json({ user: null });
  }

  const u = session.user as {
    sub?: string;
    awsUserId?: string;
    awsUserName?: string;
    awsUserPicture?: string | null;
    name?: string;
    picture?: string;
    email?: string;
  };

  return NextResponse.json({
    user: {
      id: u.awsUserId ?? u.sub ?? "",
      name: u.awsUserName ?? u.name ?? "",
      picture: u.awsUserPicture ?? u.picture ?? null,
      email: u.email ?? null,
    },
  });
}
