# Anuska Gupta Portfolio

A responsive, data-driven portfolio for Anuska Gupta, an AI and Data Science Engineer focused on practical machine learning, data applications, and software development.

## Features

- Responsive single-page portfolio with semantic sections
- Persistent dark and light themes with system preference detection
- Active section navigation and responsive mobile menu
- Animated hero role text and scroll-triggered card reveals
- Filterable project showcase with project detail modal
- Experience timeline, achievements, and certificate links
- Accessible contact form that prepares an email draft through the visitor's email client
- Local resume and certificate assets
- SEO metadata and reduced-motion support

The contact form does not use a server or third-party email service. It opens a prefilled `mailto:` draft and clearly tells the visitor that no server-side submission is configured.

## Technology stack

- React
- Vite
- Framer Motion
- Lucide React
- React Type Animation
- ESLint

## Project structure

```text
src/
  components/       Reusable portfolio sections
  data/             Profile, skills, projects, experience, and credentials
  assets/           Images used by the interface
  App.jsx           Page composition and theme state
  index.css         Design system and responsive styling
public/
  certificates/    Resume and certificate PDFs
```

## Getting started

Requirements: Node.js 20 or newer and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Development commands

```bash
npm run dev       # Start the Vite development server
npm run lint      # Run ESLint
npm run build     # Create a production build
npm run preview   # Preview the production build locally
```

## Updating portfolio content

Portfolio content is separated from the UI:

- Edit `src/data/profile.js` for identity, links, location, and resume path.
- Edit `src/data/skills.js` to add or remove skill groups.
- Edit `src/data/projects.js` to add projects, categories, technology tags, descriptions, links, and detail bullets.
- Edit `src/data/experience.js` to update roles, technologies, and responsibilities.
- Edit `src/data/achievements.js` and `src/data/certificates.js` for credentials.

Keep local PDF files in `public/certificates/` and use paths beginning with `/certificates/`.

## Deployment on Vercel

1. Push the repository to GitHub.
2. Import the repository in Vercel.
3. Use the default Vite settings:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy.

The project is a static Vite application and does not require environment variables or a backend.
