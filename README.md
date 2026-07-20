# Karthikeya Career Solutions — Website

Official website for **Karthikeya Career Solutions (KCS)**, a professional placement agency offering Permanent, Contract, and Freelance job opportunities across India.

---

## Project Structure

```
KarthikeyaCareerSolutions/
├── index.html          ← Main website (single-page)
├── css/
│   └── styles.css      ← All styles, animations & responsive design
├── js/
│   └── script.js       ← Interactivity, counters, slider, form logic
├── assets/             ← Place logo/images here (optional)
└── README.md           ← This file
```

---

## How to Open

No server or installation needed. Simply:

1. Navigate to `Desktop → KarthikeyaCareerSolutions`
2. Double-click **`index.html`**
3. It opens directly in your browser

> Requires an internet connection to load fonts, icons, and animations (CDN libraries).

---

## Website Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | **Navbar** | Sticky navigation with smooth scroll & mobile menu |
| 2 | **Hero** | Full-screen banner with particles, stats counter |
| 3 | **Ticker** | Scrolling job type announcements |
| 4 | **About** | Company overview with animated graphic |
| 5 | **Services** | Permanent, Contract & Freelance cards |
| 6 | **Industries** | 8 industry sectors served |
| 7 | **Process** | 4-step placement guide |
| 8 | **Why Choose Us** | Key advantages + achievement cards |
| 9 | **Testimonials** | Auto-sliding candidate reviews |
| 10 | **Apply Now** | Google Form CTA section |
| 11 | **Contact** | Email, Phone, WhatsApp + contact form |
| 12 | **Footer** | Links, contact info, social buttons |

---

## Contact Details (Live in Website)

| Channel | Value |
|---------|-------|
| Email | Karthikeyacareersolutions@gmail.com |
| Phone / WhatsApp | +91 832 808 7587 |
| Application Form | https://forms.gle/vfX8nosdJvVr4BH2A |

---

## Libraries Used (CDN — No Install Required)

| Library | Purpose |
|---------|---------|
| [Google Fonts — Poppins & Inter](https://fonts.google.com/) | Typography |
| [Font Awesome 6](https://fontawesome.com/) | Icons throughout the site |
| [AOS — Animate On Scroll](https://michalsnik.github.io/aos/) | Scroll reveal animations |
| [Swiper.js](https://swiperjs.com/) | Testimonials carousel |

---

## Key Features

- Fully **responsive** — works on mobile, tablet, and desktop
- **Animated** hero section with floating particles
- **Counter animations** for stats (placements, companies, etc.)
- **3D tilt effect** on service cards
- **Sticky navbar** that changes appearance on scroll
- **WhatsApp floating button** with pulse animation
- **Contact form** that opens pre-filled email client
- **Preloader** screen on page load
- **Smooth scroll** navigation between sections

---

## Customization Guide

### Update Contact Details
Open `index.html` and search for:
- `Karthikeyacareersolutions@gmail.com` — replace with new email
- `+91 832 808 7587` — replace with new phone
- `forms.gle/vfX8nosdJvVr4BH2A` — replace with new Google Form URL

### Update Brand Colors
Open `css/styles.css` and edit the `:root` variables at the top:
```css
--blue:   #1565c0;   /* Primary blue */
--teal:   #00acc1;   /* Secondary teal */
--orange: #ff9800;   /* Accent orange */
```

### Add a Logo Image
Place your logo image in the `assets/` folder, then in `index.html` replace the `.logo-icon` div with:
```html
<img src="assets/logo.png" alt="KCS Logo" height="42">
```

---

## Browser Support

| Browser | Supported |
|---------|-----------|
| Chrome (latest) | ✅ |
| Firefox (latest) | ✅ |
| Edge (latest) | ✅ |
| Safari (latest) | ✅ |
| Mobile browsers | ✅ |

---

&copy; 2024 Karthikeya Career Solutions. All Rights Reserved.
