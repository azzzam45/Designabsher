# Mobile UI Design Absher - Next.js

This is a Next.js 14+ application for Mobile UI Design Absher. The original design is available at [Figma](https://www.figma.com/design/YAwQju73qbiQfvWKLJH2rC/Mobile-UI-Design-Absher).

## Tech Stack

- **Next.js 14+** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library

## Project Structure

```
front/
├── app/                    # Next.js App Router pages and layouts
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── payments/          # Payments route
│   └── driver-license/    # Driver license route
├── components/            # Reusable React components
│   └── ui/               # shadcn/ui components
├── lib/                  # Utility functions
└── public/               # Static assets
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Features

- 📱 Responsive mobile and desktop layouts
- 🎨 Modern UI with Tailwind CSS
- ♿ Accessible components with Radix UI
- 🚀 Optimized with Next.js 14+ App Router
- 📦 Type-safe with TypeScript
