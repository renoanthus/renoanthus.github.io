# renoanthus.github.io

Personal portfolio of **Reno Anthus**, Full Stack Web Developer and Backend Engineer from Pontianak, Indonesia.

Live: [renoanthus.github.io](https://renoanthus.github.io)

## Stack

- [Astro 5](https://astro.build) (static output)
- [Tailwind CSS v4](https://tailwindcss.com)
- Geist and Geist Mono (self-hosted via Fontsource)
- [Phosphor Icons](https://phosphoricons.com)

## Development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # output in dist/
npm run preview   # serve the production build
```

## Updating content

All content lives in typed data files, no component changes needed:

| File                        | Content                                           |
| --------------------------- | ------------------------------------------------- |
| `src/data/profile.ts`       | Name, summary, contact, skills, education, awards |
| `src/data/experience.ts`    | Work history                                      |
| `src/data/projects.ts`      | Projects, domains, featured flag, screenshots     |
| `public/Reno-Anthus-CV.pdf` | Resume linked from the navbar and hero            |

To add a project screenshot, put the image in `src/assets/projects/`, import it at the top of `src/data/projects.ts`, and set it as the project's `image`. The featured grid layout is defined in `src/components/sections/Featured.astro`.

The Open Graph image (`public/og.jpg`) is generated with `node scripts/generate-og.mjs`.

## Deployment

Every push to `main` builds and deploys through `.github/workflows/main.yml` using the official `withastro/action` and `actions/deploy-pages`.

One-time setup: in the GitHub repository go to **Settings > Pages** and set **Source** to **GitHub Actions**.
