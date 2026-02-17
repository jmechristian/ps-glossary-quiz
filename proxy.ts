/**
 * Next.js 16 proxy for Auth0 middleware.
 * Handles auth routes: /auth/login, /auth/logout, /auth/callback.
 */

import { auth0 } from "./lib/auth0";

export async function proxy(request: Request) {
  return await auth0.middleware(request);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
