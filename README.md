# 🚖 Uber Partners — Driver Recruitment Landing

A responsive landing page for an official Uber partner company in Moscow. Built with HTML, SASS (compiled to CSS), and vanilla JavaScript using Bootstrap 5 grid for layout.

**[Live Demo →](https://daria-bragina.github.io/uber-bootstrap5-sass/)**

---

## Screenshots

<img width="1661" height="829" alt="2026 07 03 15-42-23" src="https://github.com/user-attachments/assets/cc1949ab-5b53-4ec9-a1ab-661a704ab903" />


---

## Features

- 🍔 **Hamburger menu** — animated mobile nav toggle
- 📋 **Lead capture** — "Request a call" button and application form
- ✅ **8 reasons section** — icon cards listing driver benefits (cashless payments, 8% commission, flexible schedule, etc.)
- 📱 **Mobile app showcase** — 6 feature cards (one-tap orders, reliable dispatch, transparent pricing, etc.)
- 🚗 **Car choice section** — full-width dark promo block with vehicle image
- 📜 **Requirements section** — two-column layout: own car conditions vs. company car, plus documents checklist
- 🌍 **World map section** — decorative "cities worldwide" block
- 📲 **App store badges** — App Store, Google Play, Windows Store links in footer
- 📱 **Fully responsive** — Bootstrap 5 grid + custom SASS breakpoints

---

## Tech Stack

| Category | Technology |
|---|---|
| Markup | HTML5 |
| Styles | **SASS** → compiled to CSS |
| Grid | Bootstrap 5 Grid + Reboot |
| Icons | Font Awesome 5 |
| Fonts | Google Fonts (Roboto 300 / 400 / 700) |
| Scripts | Vanilla JavaScript |
| Deployment | GitHub Pages |

---

## Project Structure

```
uber-bootstrap5-sass/
├── index.html              # Single-page layout (454 lines)
├── sass/                   # SASS source files
│   └── ...                 # Partials: header, sections, footer, mixins
├── styles/
│   ├── style.min.css       # Compiled & minified from SASS
│   ├── bootstrap-grid.min.css
│   └── bootstrap-reboot.min.css
├── scripts/
│   └── script.js           # Hamburger toggle, modal, form logic
└── images/
    ├── logo.png
    ├── car.png
    ├── icon1–8.svg         # Reason section icons
    └── app_store.png / google_play.png / windows_store.png
```

---

## Page Sections

| Section | Description |
|---|---|
| Header | Logo, phone number, "Request a call" CTA, hamburger nav |
| Hero | Company intro, earnings (80,000–120,000 ₽/month), application button |
| Reasons | 8 icon cards: cashless payments, 8% commission, guaranteed payouts, flexible hours, free remote onboarding, high order volume, 24/7 support, no taxi markings |
| Mobile app | 6 feature cards with hover interaction |
| Car choice | Full-width dark promo block with vehicle photo |
| Requirements | Own car conditions, company car conditions, vehicle requirements, documents list |
| Map | Decorative world map with "cities worldwide" copy |
| Footer | Social icons, nav links, language toggle, app store badges |

---

## Running Locally

No build step needed to view the site — just open `index.html` in a browser.

```bash
git clone https://github.com/Daria-Bragina/uber-bootstrap5-sass.git
cd uber-bootstrap5-sass
open index.html
```

To edit styles, compile SASS to `styles/style.min.css`:

```bash
npm install -g sass
sass sass/style.scss styles/style.min.css --style=compressed --watch
```

---

## Author

**Daria Bragina** — Frontend Developer  
[GitHub](https://github.com/Daria-Bragina)
