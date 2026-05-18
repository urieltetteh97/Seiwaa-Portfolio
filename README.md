# Fashion Designer Portfolio

A dark-luxury editorial portfolio built with **React + Vite + TailwindCSS**.

## Tech Stack

| Tool       | Version  | Purpose                         |
|------------|----------|---------------------------------|
| React      | 18       | UI components                   |
| Vite       | 5        | Dev server & bundler            |
| TailwindCSS| 3        | Utility-first styling           |
| Poppins    | Google   | Heading (700) & body (400) font |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## Project Structure

```
fashion-portfolio/
├── public/
│   └── images/           ← Add your photos here
│       ├── hero.jpg
│       ├── designer.jpg
│       ├── work-01.jpg … work-08.jpg
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx    ← Sticky nav with mobile hamburger
│   │   ├── Hero.jsx      ← Full-viewport landing section
│   │   ├── Work.jsx      ← Filterable gallery grid
│   │   ├── Bio.jsx       ← Designer portrait + story
│   │   ├── Contact.jsx   ← Contact info + inquiry form
│   │   └── Footer.jsx    ← Footer with nav links
│   │
│   ├── App.jsx           ← Root layout
│   ├── main.jsx          ← Entry point
│   └── index.css         ← Tailwind directives + global styles
│
├── index.html            ← HTML shell + Poppins font import
├── tailwind.config.js    ← Custom colors, fonts, spacing
├── vite.config.js
├── postcss.config.js
└── package.json
```

---

## Customisation Checklist

- [ ] Replace `Amara Osei` in `Navbar.jsx`, `Bio.jsx`, `Footer.jsx` with actual name
- [ ] Add hero photo → `public/images/hero.jpg`
- [ ] Add designer portrait → `public/images/designer.jpg`
- [ ] Add portfolio photos → `public/images/work-01.jpg` … `work-08.jpg`
- [ ] Update `WORKS` array in `Work.jsx` with real titles, categories, and image paths
- [ ] Update bio copy in `Bio.jsx`
- [ ] Update contact details in `Contact.jsx`
- [ ] Wire up the contact form (Formspree / EmailJS / Resend)
- [ ] Update `<title>` and `<meta name="description">` in `index.html`

---

## Colour Palette

| Token          | Hex       | Usage                    |
|----------------|-----------|--------------------------|
| `ink`          | `#0D0D0D` | Background               |
| `canvas`       | `#F5F0EB` | Primary text / surfaces  |
| `mist`         | `#C9BFB3` | Secondary / muted text   |
| `accent`       | `#C8A97E` | Warm gold — CTAs, labels |

Override any of these in `tailwind.config.js → theme.extend.colors`.

---

## Typography

Both heading and body use **Poppins** (loaded from Google Fonts):

```css
/* Applied automatically via index.css */
h1–h6  → font-weight: 700  (Bold)
p, a…  → font-weight: 400  (Regular)
```

Use the `font-heading` Tailwind class to explicitly apply the bold weight.
Use the `eyebrow` utility class for small-caps tracking labels.
