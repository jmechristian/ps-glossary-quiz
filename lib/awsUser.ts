/**
 * Get or create AWS User by email.
 * Used during Auth0 callback to link Auth0 identity to AppSync/DynamoDB User.
 */

import { generateClient } from "aws-amplify/api";
import { Amplify } from "aws-amplify";
import { apiOnlyConfig } from "@/src/amplify-config-api-only";
import { usersByEmail } from "@/src/graphql/queries";
import { createUser } from "@/src/graphql/mutations";

Amplify.configure(apiOnlyConfig);

const client = generateClient();

export type AWSUser = {
  id: string;
  name: string;
  email: string;
  picture: string | null;
};

/**
 * Look up user by email; if not found, create one.
 * Returns { id, name, email, picture }.
 */
export async function getOrCreateAWSUser(
  email: string,
  name: string,
  picture?: string | null
): Promise<AWSUser> {
  const existing = await client.graphql({
    query: usersByEmail,
    variables: { email, limit: 1 },
  });

  const items =
    (existing as { data?: { usersByEmail?: { items?: Array<{ id: string; name?: string | null; email?: string; picture?: string | null }> } } })
      ?.data?.usersByEmail?.items ?? [];

  if (items.length > 0) {
    const u = items[0]!;
    return {
      id: u.id,
      name: u.name ?? name,
      email: u.email ?? email,
      picture: u.picture ?? null,
    };
  }

  const create = await client.graphql({
    query: createUser,
    variables: {
      input: { name, email, picture: picture ?? undefined },
    },
  });

  const created =
    (create as { data?: { createUser?: { id: string; name?: string | null; email?: string; picture?: string | null } } })
      ?.data?.createUser;

  if (!created) {
    throw new Error("Failed to create user");
  }

  return {
    id: created.id,
    name: created.name ?? name,
    email: created.email ?? email,
    picture: created.picture ?? null,
  };
}
