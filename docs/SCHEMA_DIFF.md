# Backend Deploy Needed: Schema Changes for Glossary Quiz Game

Apply these changes to `amplify/backend/api/awsmain/schema.graphql`, then run:

```bash
amplify push
```

---

## 1. Modify GlossaryTerm (add `rand` field and index)

**Find** (around line 1006):

```graphql
type GlossaryTerm @model @auth(rules: [{ allow: public }]) {
  id: ID!
  term: String! @index(name: "glossaryTermByTerm")
  letter: String! @index(name: "glossaryTermByLetter", sortKeyFields: ["term"])
  definition: String!
  order: Int
  status: String @default(value: "DRAFT")
}
```

**Replace with**:

```graphql
type GlossaryTerm @model @auth(rules: [{ allow: public }]) {
  id: ID!
  term: String! @index(name: "glossaryTermByTerm")
  letter: String! @index(name: "glossaryTermByLetter", sortKeyFields: ["term"])
  definition: String!
  order: Int
  status: String @default(value: "DRAFT")
  rand: Int @index(name: "glossaryTermByRand", sortKeyFields: ["term"])
}
```

---

## 2. Add game models (append to end of schema.graphql)

```graphql
######### GLOSSARY QUIZ GAME #########

enum LeaderboardPeriod {
  DAILY
  WEEKLY
  ALL
}

type UserGameStats @model @auth(rules: [{ allow: public }]) {
  id: ID!
  userID: ID! @index(name: "statsByUser")
  bestStreakAllTime: Int @default(value: "0")
  totalAttempts: Int @default(value: "0")
  totalCorrect: Int @default(value: "0")
  lastPlayedAt: AWSDateTime
}

type LeaderboardEntry @model @auth(rules: [{ allow: public }]) {
  id: ID!
  period: LeaderboardPeriod!
  key: String! @index(name: "lbByKey", sortKeyFields: ["sortKey"])
  sortKey: String!
  userID: ID! @index(name: "lbByUser", sortKeyFields: ["period"])
  displayName: String
  avatarUrl: String
  score: Int!
  updatedAt: AWSDateTime
}

# Optional: for analytics
type AnswerEvent @model @auth(rules: [{ allow: public }]) {
  id: ID!
  userID: ID! @index(name: "eventsByUser", sortKeyFields: ["createdAt"])
  termID: ID! @index(name: "eventsByTerm", sortKeyFields: ["createdAt"])
  correct: Boolean!
  latencyMs: Int
  createdAt: AWSDateTime
}
```

---

## Post-deploy

1. Run `amplify codegen` to regenerate `src/API.ts` and GraphQL operations.
2. Run the backfill script: `node scripts/backfill-glossary-rand.js` (see scripts folder).
