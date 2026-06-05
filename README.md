# Karan Portfolio

Software developer portfolio built with React, Vite, Tailwind CSS, Framer Motion, and Three.js.

## Features

- Responsive portfolio sections for about, experience, skills, projects, certifications, and contact.
- 3D hero/contact visuals powered by React Three Fiber.
- SEO-ready metadata, Open Graph/Twitter preview image, JSON-LD, manifest, and robots file.
- EmailJS-powered contact form using Vite environment variables.

## Local Setup

```bash
npm install
npm run dev
```

Open the local URL shown by Vite, usually `http://127.0.0.1:5173/`.

## Environment Variables

Create a `.env` file from `.env.example`:

```bash
cp .env.example .env
```

Required for the contact form:

```env
VITE_APP_EMAILJS_SERVICE_ID=
VITE_APP_EMAILJS_TEMPLATE_ID=
VITE_APP_EMAILJS_PUBLIC_KEY=
VITE_APP_EMAILJS_TO_EMAIL=
```

For Vercel, add the same variables in `Project Settings > Environment Variables`.

## Build

```bash
npm run build
npm run preview
```

## Deploy To Vercel

1. Push this repository to GitHub.
2. Import the GitHub repository in Vercel.
3. Vercel should detect Vite automatically.
4. Use `npm run build` as the build command and `dist` as the output directory.
5. Add the EmailJS environment variables if the contact form should work in production.

After deployment, update `public/robots.txt` with the live sitemap URL if you add a sitemap later.
