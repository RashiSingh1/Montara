# 🏔️ Montara — Hill Station Discovery Platform

> Discover India's most breathtaking hill stations through an immersive, animated travel experience — with live weather data on every destination.

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

This project started as a college HTML/CSS project and evolved into a full-featured, JavaScript-powered travel platform with smooth animations, real-time weather data via API integration, multi-page architecture, real interactivity, and a fully functional contact form with email notifications.

Each destination has its own dedicated page with top attractions, a photo gallery, best time to visit, and travel tips — all styled consistently using shared CSS (`explore.css`) and shared JS (`common.js`).

---

## ✨ Features

- 🌤️ **Live Weather API** — Real-time temperature and conditions on every destination card via OpenWeatherMap API (async/await, loading spinner, graceful error handling)
- 📧 **Functional Contact Form** — Real-time email notifications via EmailJS API integration, with no dedicated backend server required
- 🔍 **Real-time Search & Filter** — Instant destination search using DOM manipulation with card counter
- 📜 **Scroll Progress Bar** — Fixed top bar showing reading progress via `window.scroll`
- 🎬 **GSAP + TextPlugin** — Animated hero text typewriter effect on homepage
- 🚂 **Locomotive Scroll** — Smooth scroll with lerp across all pages
- 👁️ **IntersectionObserver Animations** — Cards animate in on scroll with staggered delay
- ✅ **Form Validation** — Full client-side validation (name, email regex, destination whitelist, date, message)
- 🍔 **Hamburger Menu** — Mobile-responsive nav with CSS toggle animation
- 📱 **Fully Responsive** — Desktop, tablet (768px), and mobile (480px) breakpoints

---

## 🌤️ Weather API Integration

Each destination card fetches live weather data from the **OpenWeatherMap API** on page load:

- Temperature in Celsius (rounded)
- Current weather condition (clear sky, light rain, etc.)
- Loading spinner while fetching — graceful "unavailable" fallback on error
- Implemented using `async/await` and `fetch()` — no external libraries

```js
async function fetchWeather(city) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  const data = await res.json();
  return { temp: Math.round(data.main.temp), desc: data.weather[0].description };
}
```

---

## 📧 Contact Form & Email Integration

The "Plan Your Trip" form on the homepage sends real-time email notifications using **EmailJS**, eliminating the need for a custom backend or server-side mail handling:

- Client-side validation runs first (name, email format, destination whitelist, date, message)
- On successful validation, form data is sent via `emailjs.sendForm()` directly from the browser
- Success and error states are handled gracefully with user-facing feedback

```js
emailjs.sendForm("service_id", "template_id", form)
  .then(function () {
    successMessage.style.display = "block";
    form.reset();
  }, function (error) {
    console.log("EmailJS error:", error);
  });
```

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
| JavaScript (Vanilla) | DOM, Events, Fetch API, Async/Await, IntersectionObserver, Validation |
| OpenWeatherMap API | Live weather data on all destination cards |
| EmailJS | Serverless contact form email notifications |
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
├── style.css             # Homepage styles (glassmorphism, nav, cards, weather badge)
├── script.js             # Homepage JS (search, scroll bar, GSAP, form, weather API, EmailJS)
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

> <img width="1920" height="913" alt="Montara Homepage" src="https://github.com/user-attachments/assets/121dd019-bd11-4766-b4db-f80d5f41f2d7" />

---

## 🐛 Known Issues & Fixes Applied

| Issue | Fix Applied |
|-------|-----|
| GSAP TextPlugin not registered | Added `gsap.registerPlugin(TextPlugin)` |
| Locomotive Scroll + `window.scroll` conflict on progress bar | Used `scroll.on("scroll")` instead |
| Search hiding cards with `opacity: 0` | Added `classList.add/remove("show")` alongside `display` toggle |
| `DOMContentLoaded` firing too late for weather | Replaced event listener with direct `loadAllWeather()` call |
| Weather badge layout shift during loading | Added `min-height` on badge + spinner + `.hidden` utility class |

---

## 🎯 What I Learned

- Building a multi-page website with shared CSS and JS across 9+ pages
- Integrating a real REST API (OpenWeatherMap) using `fetch()` and `async/await`
- Implementing loading states, error handling, and spinner UI for async operations
- Writing real-time search/filter logic from scratch without any library
- Using IntersectionObserver API for performant scroll-triggered animations
- Client-side form validation with regex and destination whitelisting
- Integrating a third-party email service (EmailJS) to add real functionality to a static frontend
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
