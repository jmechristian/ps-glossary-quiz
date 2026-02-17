/**
 * Minimal Amplify config for API_KEY only.
 * Use this to avoid Cognito/Auth initialization.
 */

import fullConfig from "./amplifyconfiguration.json";

export const apiOnlyConfig = {
  API: {
    GraphQL: {
      endpoint: fullConfig.aws_appsync_graphqlEndpoint,
      region: fullConfig.aws_appsync_region,
      defaultAuthMode: "apiKey" as const,
      apiKey: fullConfig.aws_appsync_apiKey,
    },
  },
};
