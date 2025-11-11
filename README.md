# Oregon DECA Prep Kits

A modern, professional Next.js application providing comprehensive preparation resources for Oregon DECA members across all five clusters.

## Features

- 🎯 **5 DECA Clusters**: Business Administration, Entrepreneurship, Finance, Hospitality & Tourism, Marketing
- 📹 **Embedded YouTube Videos**: Roleplay examples for each cluster
- 📄 **PDF Cheat Sheets**: One-page reference guides
- 🎭 **Interactive Roleplays**: HTML-based practice scenarios
- 📝 **Practice Tests**: Multiple choice questions with answer keys
- 🃏 **Interactive Flashcards**: Quizlet-style flashcards with flip animations and keyboard navigation
- 🌓 **Dark/Light Mode**: Modern theme toggle
- 📱 **Responsive Design**: Mobile-first, works on all devices

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── clusters/[clusterId]/
│   │   ├── page.tsx          # Cluster detail page
│   │   ├── roleplays/        # HTML roleplay files
│   │   └── tests/            # HTML test files
│   ├── layout.tsx            # Root layout with theme provider
│   ├── page.tsx              # Homepage
│   └── globals.css           # Global styles
├── components/
│   ├── flashcards.tsx        # Interactive flashcard component
│   ├── theme-toggle.tsx      # Dark/light mode toggle
│   ├── theme-provider.tsx    # Theme context provider
│   └── ui/                   # Shadcn UI components
├── data/
│   ├── clusters.ts           # Cluster definitions
│   └── flashcards.ts        # Flashcard data (easy to update!)
└── public/
    └── clusters/            # PDF files and static assets
```

## Customization

### Adding Flashcards

Edit `data/flashcards.ts` to add or modify flashcards for any cluster:

```typescript
"business-administration": [
  {
    id: "1",
    term: "Your Term",
    definition: "Your Definition",
  },
  // Add more cards...
]
```

### Adding YouTube Videos

Edit `data/clusters.ts` and add a `videoId` to any cluster:

```typescript
{
  id: "business-administration",
  name: "Business Administration",
  videoId: "YOUR_YOUTUBE_VIDEO_ID", // Add this
  // ...
}
```

### Adding Roleplays and Tests

Simply add HTML files to:

- `app/clusters/[clusterId]/roleplays/` for roleplays
- `app/clusters/[clusterId]/tests/` for tests

Then update the arrays in `app/clusters/[clusterId]/page.tsx` to reference them.

### Adding PDF Cheat Sheets

Place PDF files in `public/clusters/[clusterId]/cheat-sheet.pdf` and they'll be automatically linked.

## Deployment

This project is optimized for Vercel deployment:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy!

The project will automatically build and deploy.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Shadcn UI** / **Radix UI**
- **next-themes** (Dark mode)
- **Lucide React** (Icons)

## License

Built for Oregon DECA © 2024
