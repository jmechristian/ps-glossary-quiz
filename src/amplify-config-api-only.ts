/**
 * Minimal Amplify config for API_KEY only.
 * Use this to avoid Cognito/Auth initialization.
 *
 * Required env vars (amplifyconfiguration.json is gitignored, so use env for deploy):
 *   NEXT_PUBLIC_APPSYNC_GRAPHQL_ENDPOINT
 *   NEXT_PUBLIC_APPSYNC_REGION
 *   NEXT_PUBLIC_APPSYNC_API_KEY
 *
 * Local dev: copy from amplifyconfiguration.json into .env.local
 */

const endpoint = process.env.NEXT_PUBLIC_APPSYNC_GRAPHQL_ENDPOINT;
const region = process.env.NEXT_PUBLIC_APPSYNC_REGION;
const apiKey = process.env.NEXT_PUBLIC_APPSYNC_API_KEY;

if (!endpoint || !region || !apiKey) {
  throw new Error(
    "Amplify config missing. Set NEXT_PUBLIC_APPSYNC_GRAPHQL_ENDPOINT, NEXT_PUBLIC_APPSYNC_REGION, and NEXT_PUBLIC_APPSYNC_API_KEY in .env.local (or your deploy platform's env vars)."
  );
}

export const apiOnlyConfig = {
  API: {
    GraphQL: {
      endpoint,
      region,
      defaultAuthMode: "apiKey" as const,
      apiKey,
    },
  },
};
