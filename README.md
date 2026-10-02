# Grilli – Restaurant Website (Next.js)

Next.js (App Router) + TypeScript port of the [Grilli](https://github.com/codewithsadee/grilli) restaurant template by codewithsadee (MIT, see `LICENSE`). The design is kept 1:1 with the original HTML/CSS template.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
npm run lint
```

## Structure

```
src/
  app/
    layout.tsx        fonts (Forum, DM Sans via next/font) + metadata
    page.tsx          home page – composes the sections below
    globals.css       original template stylesheet (ported as-is)
    icon.svg          favicon
  components/
    layout/           Preloader, Topbar, Header (nav), Footer, BackToTop
    home/             Hero (slider), Service, About + ParallaxBanner,
                      SpecialDish, Menu, Testimonial, Reservation, Features, Event
    ui/Button.tsx     gold button with the rolling-text hover effect
  data/
    site.ts           contact info, opening hours, nav & social links
    home.ts           slides, menu items, services, features, events, form options
public/images/        all template images
```

Content (phone numbers, hours, menu, prices…) lives in `src/data/` – edit it there, not in the components.

## Notes

- Icons come from `react-icons/io5` (the same Ionicons 5 set the template used via CDN); they use the `ion-icon` class so the original CSS applies.
- Images go through `next/image` (automatic WebP/AVIF + responsive `srcset`).
- Interactive parts (`Preloader`, `Header`, `Hero`, `ParallaxBanner`, `BackToTop`) are client components; everything else renders on the server.
