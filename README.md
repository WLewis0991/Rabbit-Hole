<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/rabbitHole-ff4500?style=for-the-badge&logo=rabbit&logoColor=white">
    <img alt="rabbitHole" src="https://img.shields.io/badge/rabbitHole-ff4500?style=for-the-badge&logo=rabbit&logoColor=white" width="200">
  </picture>
</p>

<p align="center">
  <strong>A tag-based discussion platform built with Next.js 16, Neon Postgres, and shadcn/ui.</strong><br>
  Sort posts by Hot/New/Top, filter by tags, vote, and comment in threaded discussions.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.2-black?logo=next.js&style=flat-square" alt="Next.js 16">
  <img src="https://img.shields.io/badge/React-19-149eca?logo=react&style=flat-square" alt="React 19">
  <img src="https://img.shields.io/badge/Tailwind-v4-06b6d4?logo=tailwindcss&style=flat-square" alt="Tailwind v4">
  <img src="https://img.shields.io/badge/Prisma-7-2d3748?logo=prisma&style=flat-square" alt="Prisma 7">
  <img src="https://img.shields.io/badge/Neon-00e599?logo=neon&style=flat-square" alt="Neon">
  <img src="https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&style=flat-square" alt="TypeScript">
</p>

---

## Features

- **Tag-based organization** — posts are categorized by tags instead of subreddits; filter the feed by tag
- **Smart feed sorting** — Hot (score + comment count), New (chronological), Top (highest score)
- **Threaded comments** — nested replies with OP badges, sorted chronologically
- **Voting system** — polymorphic upvote/downvote for both posts and comments; toggle to retract
- **Neon Auth** — seamless authentication via Neon's built-in auth provider (sign-in, sign-up, sessions)
- **Three themes** — dark, light, and retro (80s CRT terminal green phosphor); persisted to localStorage
- **Responsive layout** — sticky navbar, collapsible sidebar, mobile-aware
- **Seed script** — populate the database with 20 curated posts, threaded comments, and votes for demo/testing

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **UI Library** | [React 19](https://react.dev/) (Server Components, Server Actions) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) (base-nova) |
| **Database** | [Neon Postgres](https://neon.tech/) via [Prisma 7](https://www.prisma.io/) |
| **Auth** | [Neon Auth](https://neon.tech/docs/guides/neon-auth) (built-in auth provider) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |

## Getting Started

### Prerequisites

- Node.js 20+
- A [Neon](https://neon.tech/) account with a Postgres database
- Neon Auth enabled on your Neon project

### 1. Clone and install

```bash
git clone https://github.com/your-username/rabbit-hole.git
cd rabbit-hole
npm install
```

### 2. Set environment variables

Copy `.env.example` to `.env` and fill in your Neon credentials:

```bash
cp .env.example .env
```

| Variable | Description |
|---|---|
| `DATABASE_URL` | Your Neon Postgres connection string |
| `NEON_AUTH_BASE_URL` | Your Neon Auth base URL |
| `NEON_AUTH_COOKIE_SECRET` | Secret for signing auth session cookies |

### 3. Push the schema and seed data

```bash
npm run db:push
npm run db:seed
```

The seed script populates 6 demo authors, 5 tags, 20 curated posts, threaded comments, and votes. Append `SEED_EXTRA=N` for additional procedural posts, or use `SEED_FORCE=1` to re-seed from scratch.

### 4. Start the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
├── (core)/                  # Main app route group
│   ├── page.tsx             # Home feed (Hot/New/Top + tag filter)
│   ├── layout.tsx           # Navbar + sidebar layout
│   ├── post/[id]/page.tsx   # Single post with threaded comments
│   └── submit/page.tsx      # Create a new post
├── api/auth/[...path]/      # Neon Auth API handler
├── auth/[pathname]/         # Sign-in / sign-up pages
├── globals.css              # Tailwind v4 + theme variables
└── layout.tsx               # Root layout (fonts, providers)

components/
├── feed/                    # Post cards, vote buttons, sort tabs
├── layout/                  # Navbar, sidebar, tags, theme toggle
├── post/                    # Comment composer, comment tree, submit form
└── ui/                      # shadcn/ui primitives (button, card, input, etc.)

lib/
├── actions/                 # Server actions (create post, vote, comment)
├── db/                      # Prisma queries, user profile management
├── auth.ts                  # Neon Auth client + session helpers
├── comment-tree.ts          # Flat list → nested tree builder
├── types.ts                 # Shared TypeScript types
└── utils.ts                 # cn() utility

providers/                   # React context providers (auth, theme)
prisma/schema.prisma         # Database schema
scripts/seed.ts              # Database seed script
```

## Database Schema

```
UserProfile → id, username
Tag         → slug, label, hashColor
Post        → id, authorId, title, body, createdAt
PostTag     → postId, tagSlug  (M:N join)
Comment     → id, postId, authorId, parentId (nullable), body, createdAt
Vote        → userId, targetType, targetId, value  (polymorphic)
```

Votes use a composite primary key `(userId, targetType, targetId)` to enforce one vote per user per target. Comments use an adjacency list (`parentId`) for threading.

## Coming Soon

- **User profiles** — dedicated profile pages with post history, comment history, and karma
- **Notifications** — in-app notifications for replies, upvotes, and mentions
- **Image uploads** — attach images to posts and comments via direct upload or URL embedding

## Contributing

1. Fork the repo and create a branch from `main`
2. Run `npm install` to install dependencies
3. Make your changes
4. Run `npm run lint` to check for issues
5. Open a pull request

## License

MIT
