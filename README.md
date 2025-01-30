# 🚀 Byte by Byte

A modern, responsive portfolio and blogging platform built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations and transitions powered by Framer Motion.

## ✨ Features

- **Blazing Fast Performance**: Built on Next.js 15 with server-side rendering and static generation
- **Type-Safe Development**: Fully typed with TypeScript for robust code quality
- **Modern Styling**: Tailwind CSS for utility-first styling with dark mode support
- **Smooth Animations**: Framer Motion for buttery-smooth page transitions and UI interactions
- **Responsive Design**: Looks great on all devices, from mobile to desktop
- **Blog Platform**: Write and share your thoughts with Markdown support
- **Portfolio Showcase**: Highlight your projects with rich media support and animated reveals
- **SEO Optimized**: Built-in SEO best practices for better visibility

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Vercel
- **Content**: MDX for blog posts
- **Version Control**: Git

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/Jayant-Verma/byte-by-byte.git
cd blogs
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
├── src/               # Source directory
│   ├── app/           # Next.js app directory (routing)
│   ├── components/    # Reusable UI components
│   ├── context/       # Light/Dark Theme context
│   ├── lib/           # Utility functions and helpers
│   ├── types/         # TypeScript type definitions
│   └── posts/         # Blog content
├── public/            # Static assets
│   ├── icons          # Icons used
│   └── projects/      # Images used to display projects
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json      # TypeScript configuration
└── package.json       # Project dependencies and scripts
```

## 🎨 Animation Examples

### Page Transitions

```typescript
// components/PageTransition.tsx
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export const PageTransition = ({ children }) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageVariants}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);
```

### Scroll Animations

```typescript
// components/ScrollReveal.tsx
import { motion } from 'framer-motion';

export const ScrollReveal = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);
```

## 📝 Adding Content

### Blog Posts

1. Create a new markdown file in `src/posts`
2. Add frontmatter for metadata:
```md
---
title: My Amazing Post
date: '2025-01-30'
description: A brief description of your post
tags: ['nextjs', 'typescript', 'web-development']
---
```

### Portfolio Projects

1. Add project details in `components/Projects.tsx`
2. Include project images in `public/projects`

## 🎨 Customization

1. Modify `tailwind.config.js` to customize your design tokens
2. Update `config/site.ts` for site-wide configuration
3. Customize components in the `components` directory

## 📱 Progressive Web App

This project is PWA-ready! Users can install it as a standalone application on their devices.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## 📧 Contact

Linkedin - [jayantverma](https://www.linkedin.com/in/jayantverma007/)

Email: [jayantverma8533@gmail.com](mailto:jayantverma8533@gmail.com)

---
