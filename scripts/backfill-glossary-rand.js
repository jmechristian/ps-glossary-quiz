#!/usr/bin/env node
/**
 * Backfill GlossaryTerm.rand for existing records.
 * Run after schema deploy (GlossaryTerm.rand + index).
 *
 * Usage:
 *   node scripts/backfill-glossary-rand.js
 *
 * Requires: AWS Amplify configured, amplifyconfiguration.json or aws-exports
 */

const { Amplify } = require("aws-amplify");
const { generateClient } = require("aws-amplify/api");

let config;
try {
  config = require("../src/amplifyconfiguration.json");
} catch {
  try {
    config = require("../src/aws-exports.js");
  } catch {
    console.error("No amplify config found. Run from project root.");
    process.exit(1);
  }
}

Amplify.configure(config);

const client = generateClient();

async function listAllTerms(nextToken = null) {
  const result = await client.graphql({
    query: /* GraphQL */ `
      query ListGlossaryTerms($filter: ModelGlossaryTermFilterInput, $limit: Int, $nextToken: String) {
        listGlossaryTerms(filter: $filter, limit: $limit, nextToken: $nextToken) {
          items {
            id
            term
            rand
          }
          nextToken
        }
      }
    `,
    variables: {
      limit: 100,
      nextToken,
    },
  });
  return result.data.listGlossaryTerms;
}

async function updateTermRand(id, rand) {
  await client.graphql({
    query: /* GraphQL */ `
      mutation UpdateGlossaryTerm($input: UpdateGlossaryTermInput!) {
        updateGlossaryTerm(input: $input) {
          id
          rand
        }
      }
    `,
    variables: {
      input: { id, rand },
    },
  });
}

function randomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

async function main() {
  console.log("Backfilling GlossaryTerm.rand...");
  let total = 0;
  let updated = 0;
  let nextToken = null;

  do {
    const { items, nextToken: nt } = await listAllTerms(nextToken);
    nextToken = nt;
    total += items.length;

    for (const item of items) {
      if (item == null) continue;
      const needsRand = item.rand == null || item.rand === undefined;
      if (needsRand) {
        const rand = randomInt(1e9);
        try {
          await updateTermRand(item.id, rand);
          updated++;
          if (updated % 50 === 0) console.log(`  Updated ${updated} terms...`);
        } catch (err) {
          console.error(`  Failed to update ${item.id}:`, err.message);
        }
      }
    }
  } while (nextToken);

  console.log(`Done. Total: ${total}, Updated: ${updated}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
