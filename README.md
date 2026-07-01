# LONGHORN LIGHTING AND ELECTRICAL

Marketing website for Longhorn Lighting and Electrical — Brad Long, licensed & bonded electrician (Lic #1122626) serving San Francisco, Marin, the East Bay, and nearby Peninsula areas.

Built with React, Vite, and Tailwind CSS. The site is fully static — no backend required. All images are served locally from `public/images/`.

## Pages

- **Home** (`src/pages/Home.jsx`) — hero, value cards, service areas
- **Services** (`src/pages/Services.jsx`) — EV chargers, panel upgrades, lighting/remodels, repairs & smart devices
- **About** (`src/pages/About.jsx`) — Brad's background and credentials
- **Contact** (`src/pages/Contact.jsx`) — call / text / email links

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the dev server:

   ```bash
   npm run dev
   ```

   Open the local URL printed by Vite.

## Build for Production

```bash
npm run build
```

The production site is output to `dist/` and can be deployed to any static host (Netlify, Vercel, GitHub Pages, etc.).

Preview the production build locally with:

```bash
npm run preview
```

## Editing Content

- Business phone, email, and hours: `src/pages/Contact.jsx`
- Services and their descriptions: `src/pages/Services.jsx`
- Images: replace files in `public/images/` (keep the same filenames, or update the paths referenced in `src/pages/*.jsx` and `src/components/Logo.jsx`)
- Page titles / SEO metadata: `index.html`
