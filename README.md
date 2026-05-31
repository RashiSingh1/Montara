# 🏔️ Montara — Hill Station Discovery Platform

> Discover India's most breathtaking hill stations through an immersive, animated travel experience.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-brightgreen?style=for-the-badge)](https://montara-zeta.vercel.app/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=black)](https://greensock.com/gsap/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

---

## 🌐 Live Demo

**[montara-zeta.vercel.app](https://montara-zeta.vercel.app/)**

---

## 📖 About

**Montara** is a niche hill station discovery platform that helps travelers explore hidden and popular hill destinations across India. Built with vanilla HTML, CSS, and JavaScript — no frontend framework used.

This project started as a college HTML/CSS project and evolved into a full-featured, JavaScript-powered travel platform with smooth animations, multi-page architecture, and real interactivity.

Each destination has its own dedicated page with top attractions, a photo gallery, best time to visit, and travel tips — all styled consistently using shared CSS (`explore.css`) and shared JS (`common.js`).

---

## ✨ Features

- 🔍 **Real-time Search & Filter** — Instant destination search using DOM manipulation
- 📜 **Scroll Progress Bar** — Fixed top bar showing reading progress via `window.scroll`
- 🎬 **GSAP + TextPlugin** — Animated hero text typewriter effect on homepage
- 🚂 **Locomotive Scroll** — Smooth scroll with lerp across all pages
- 👁️ **IntersectionObserver Animations** — Cards animate in on scroll with staggered delay
- ✅ **Form Validation** — Full client-side validation (name, email regex, destination whitelist, date, message)
- 🍔 **Hamburger Menu** — Mobile-responsive nav with CSS toggle animation
- 📱 **Fully Responsive** — Desktop, tablet (768px), and mobile (480px) breakpoints

---

## 🏔️ Destinations Covered

| Destination | State | Highlights |
|-------------|-------|------------|
| Leh | Ladakh | Pangong Lake, Nubra Valley, Magnetic Hill |
| Shimla | Himachal Pradesh | Mall Road, Jakhu Temple, The Ridge |
| Ooty | Tamil Nadu | Nilgiri Hills, Botanical Garden, Ooty Lake |
| Coorg | Karnataka | Abbey Falls, Raja's Seat, Coffee Estates |
| Pahalgam | Jammu & Kashmir | Betaab Valley, Aru Valley, Baisaran |
| Gulmarg | Jammu & Kashmir | Gondola Ride, Skiing, Alpine Meadows |
| Kodaikanal | Tamil Nadu | Coaker's Walk, Bear Shola Falls, Star Lake |
| Kalpa | Himachal Pradesh | Kinner Kailash, Apple Orchards |
| Pangi Valley | Himachal Pradesh | Sach Pass, Remote Himalayan Culture |

---

## 🛠️ Tech Stack

| Technology | Usage |
|-----------|-------|
| HTML5 | Semantic structure across 10+ pages |
| CSS3 | Flexbox, Grid, Glassmorphism, Responsive |
| JavaScript (Vanilla) | DOM, Events, IntersectionObserver, Validation |
| GSAP 3.13 + TextPlugin | Hero typewriter animation |
| Locomotive Scroll 4.1.4 | Smooth scroll with lerp on all pages |
| Font Awesome 6.5 | Social icons on destination pages |
| Google Fonts | Poppins, Playfair Display |
| Vercel | Deployment & Hosting |

---

## 📁 Project Structure

```
Montara/
├── index.html            # Main landing page
├── style.css             # Homepage styles (glassmorphism, nav, cards)
├── script.js             # Homepage JS (search, scroll bar, GSAP, form, animations)
├── explore.css           # Shared styles for all 9 destination pages
├── common.js             # Shared Locomotive Scroll init for destination pages
│
├── leh.html              # Leh — Pangong, Nubra, Magnetic Hill, Thiksey
├── Shimla.html           # Shimla destination page
├── Shimla.css            # Shimla-specific styles
├── ooty.html
├── coorg.html
├── pahalgam.html
├── gulmarg.html
├── kodaikanal.html
├── kalpa.html
├── PangiValley.html
│
├── Montara(3).png        # Logo
├── Montara_Logo.png
└── Images/               # 100+ destination images (jpg, webp, avif)
```

---

## 🚀 Getting Started

### View Live
Visit **[montara-zeta.vercel.app](https://montara-zeta.vercel.app/)**

### Run Locally
```bash
# Clone the repository
git clone https://github.com/RashiSingh1/Montara.git

cd Montara
code .

# Open index.html with Live Server (VS Code extension)
```
> No build step, no npm, no framework — pure HTML/CSS/JS!

---

## 📸 Screenshots

> <img width="1920" height="913" alt="2026-05-31 (4)" src="https://github.com/user-attachments/assets/121dd019-bd11-4766-b4db-f80d5f41f2d7" />


---

## 🐛 Known Issues & Fixes Applied

| Issue | Fix |
|-------|-----|
| GSAP TextPlugin not registered | Added `gsap.registerPlugin(TextPlugin)` |
| Locomotive Scroll + `window.scroll` conflict on progress bar | Used `scroll.on("scroll")` instead |
| Search only matching from start | Changed `startsWith` → `includes` for better UX |

---

## 🎯 What I Learned

- Building a multi-page website with shared CSS and JS across 9+ pages
- Integrating and debugging GSAP TextPlugin with Locomotive Scroll
- Writing real-time search/filter logic from scratch without any library
- Using IntersectionObserver API for performant scroll-triggered animations
- Client-side form validation with regex and destination whitelisting
- Mobile-first responsive design with hamburger menu
- Deploying and managing a multi-page project on Vercel

---


## 👩‍💻 Author

**Rashi Kumari**
- GitHub: [@RashiSingh1](https://github.com/RashiSingh1)
- LinkedIn: [linkedin.com/in/rashi-kumari-15987a321](https://www.linkedin.com/in/rashi-kumari-15987a321/)


---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ **If you found this helpful, please give it a star!** It motivates me to keep building.
