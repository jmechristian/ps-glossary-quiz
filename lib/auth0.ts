/**
 * Auth0 client with beforeSessionSaved hook to wire AWS user.
 * Uses getOrCreateAWSUser on callback, stores awsUserId in session.
 *
 * Base URL: APP_BASE_URL (local) or VERCEL_URL (Vercel) or localhost:3000
 */

import { Auth0Client } from "@auth0/nextjs-auth0/server";
import { getOrCreateAWSUser } from "./awsUser";

const appBaseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : (process.env.APP_BASE_URL || "http://localhost:3001");

export const auth0 = new Auth0Client({
  appBaseUrl,
  async beforeSessionSaved(session, _idToken) {
    const email = session.user?.email;
    const name = session.user?.name;
    const picture = session.user?.picture ?? null;

    if (!email || !name) {
      return session;
    }

    try {
      const awsUser = await getOrCreateAWSUser(email, name, picture);
      return {
        ...session,
        user: {
          ...session.user,
          awsUserId: awsUser.id,
          awsUserName: awsUser.name,
          awsUserPicture: awsUser.picture ?? null,
        },
      };
    } catch {
      return session;
    }
  },
});
