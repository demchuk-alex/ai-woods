# AI Woods - Engineering Diary

A developer's journal exploring the dense, evolving forest of modern coding. This blog serves as a personal engineering diary and technical journal, documenting experiences with various development approaches, including vibe coding.

## Features

- Static site generation with Next.js 14
- Markdown content with MDX support for interactive examples
- Modern, forest-themed design with:
  - Custom color scheme inspired by woodland aesthetics
  - Elegant typography using Fraunces for headings and Inter for body text
  - Responsive layout with card-based design
- Dark/Light theme support with carefully crafted color palettes
- Interactive post previews with hover effects
- Organized content sections:
  - Recent Posts showcase
  - Complete post archive with compact view
- Responsive design optimized for all devices
- Built with TypeScript for type safety

## Content Structure

The blog content is organized in `/_posts` as Markdown files with front matter support. Each post can include:
- Title and excerpt
- Cover image
- Author information
- Publication date
- Rich content with code highlighting
- Interactive MDX components

## Development

To start the development server:

```bash
bun run dev
```

## Build Static Site

To build the static site:

```bash
bun run export
```

This generates the static files in the `out` directory.

## Local Testing

To test the static build locally:

```bash
bun run serve
```

This will start a local server at http://localhost:3000.

## Technologies

- Next.js 14
- Tailwind CSS
- MDX for interactive content
- TypeScript
- Bun
- shadcn/ui components
- Custom theme system

## Design Philosophy

The blog's design draws inspiration from forest aesthetics, creating a calm and focused reading environment. The color scheme uses carefully selected grey-green tones that work harmoniously in both light and dark modes, complemented by mint accents for interactive elements.

Typography choices enhance readability while adding character:
- Fraunces (serif) for headings
- Inter (sans-serif) for body text
- JetBrains Mono for code blocks

The layout prioritizes content clarity with:
- Compact, efficient spacing
- Clear visual hierarchy
- Smooth interactions
- Responsive design that adapts to any screen size

---

Made with ❤️ by Alex Demchuk as a vibe coding demonstration
