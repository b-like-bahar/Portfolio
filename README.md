# Portfolio Website

This is my newest portfolio website built with Next.js, featuring a blog powered by Sanity CMS. Hope you Enjoy it!

## Tech Stack

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Sanity CMS** - Content management for blog
- **Framer Motion** - Animations

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Installation

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

## Sanity CMS

The blog is managed through Sanity CMS. After schema changes, deploy to remote Studio:

```bash
pnpm cms:schema:deploy
```

Generate TypeScript types from schema:

```bash
pnpm cms:typegen:all
```

## Project Structure

```
app/
  ├── page.tsx          # Home page
  └── blog/             # Blog pages
components/              # React components
cms/
  └── schemaTypes/      # Sanity schema definitions
lib/
  └── sanity/           # Sanity client, queries, types
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier
- `pnpm cms:schema:deploy` - Deploy Sanity schema changes

## Color Palette

- Primary background: `#0B0F14`
- Secondary background: `#111827`
- Accent: `#8B8CF6`
- Primary text: `#E5E7EB`
- Muted text: `#9CA3AF`
