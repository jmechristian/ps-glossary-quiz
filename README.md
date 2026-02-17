# Glossary Streak

A Duolingo-like vocab streak quiz using React, Next.js, and AWS Amplify Gen 1 (AppSync + DynamoDB).

## How to Run

### 1. Install dependencies

```bash
npm install
```

### 2. Backend deploy (when ready)

Apply the schema changes from `docs/SCHEMA_DIFF.md` to `amplify/backend/api/awsmain/schema.graphql`, then:

```bash
amplify push
```

### 3. Regenerate GraphQL types (after schema deploy)

```bash
amplify codegen
```

### 4. Backfill GlossaryTerm.rand (after schema deploy)

```bash
node scripts/backfill-glossary-rand.js
```

### 5. Auth0 (optional)

Add `.env.local` with:

```
AUTH0_DOMAIN=your-tenant.us.auth0.com
AUTH0_CLIENT_ID=...
AUTH0_CLIENT_SECRET=...
AUTH0_SECRET=...   # e.g. openssl rand -hex 32
APP_BASE_URL=http://localhost:3000
```

In Auth0 Dashboard → Application → URLs:
- **Allowed Callback URLs**: `http://localhost:3000/auth/callback`
- **Allowed Logout URLs**: `http://localhost:3000`

### 6. Run the app

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  page.tsx          # Home (start, stats)
  play/page.tsx     # Game loop
  leaderboard/page.tsx
  profile/page.tsx
components/
  BoardPath.tsx     # Virtualized path markers
  FlashcardPrompt.tsx
  ChoiceButtons.tsx
  TimerRing.tsx
  ResultToast.tsx
  LottieBurst.tsx
  StreakHUD.tsx
lib/
  gameStore.ts      # Zustand session state
  gameApi.ts        # AppSync / terms / stats / leaderboard
  auth.tsx          # Auth context (fetches from /api/user)
  auth0.ts          # Auth0Client + beforeSessionSaved
  awsUser.ts        # getOrCreateAWSUser
  randomTerms.ts
  distractors.ts
  leaderboard.ts
  timeKeys.ts
  stopwords.ts
src/
  graphql/          # Amplify generated + game operations
  API.ts            # Amplify codegen types
  amplifyconfiguration.json
docs/
  SCHEMA_DIFF.md    # Backend schema changes
scripts/
  backfill-glossary-rand.js
```

## MVP notes

- **Auth**: Auth0 login → get/create AWS User by email → session stores awsUserId for stats/leaderboard.
- **Term selection**: Uses `listGlossaryTerms` until `glossaryTermsByRandAndTerm` exists (requires schema deploy).
- **Stats / leaderboard**: Writes to UserGameStats and LeaderboardEntry (requires schema deploy). Persistence fails gracefully until then.
