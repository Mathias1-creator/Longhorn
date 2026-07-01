# AGENTS.md

## Project Context

Marketing website for Longhorn Lighting and Electrical, a local electrician business in the San Francisco Bay Area. This is a fully static React + Vite + Tailwind site with no backend — the Contact page uses plain `tel:` / `sms:` / `mailto:` links.

Start with `README.md` for setup and content-editing pointers.

## Key Files

- `src/pages/`: the four routed pages (Home, Services, About, Contact).
- `src/components/`: Header, Footer, Layout, Logo, and the shadcn/ui component library under `src/components/ui/`.
- `public/images/`: all site images, served locally.
- `index.html`: page title, meta description, and font loading.

## Working Notes

- Run `npm run dev` for local development and `npm run build` to verify production builds.
- Business details (phone number, email, license number) appear in several places — search for them across `src/` and `index.html` when updating.
- Run the relevant checks from `package.json` (`lint`, `build`) before finishing code changes.
