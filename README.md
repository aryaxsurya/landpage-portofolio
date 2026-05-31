# 🌐 Arya Surya — Portfolio Landing Page

> A clean, responsive, and trilingual personal portfolio website for a **Fullstack & Infrastructure Engineer** — built with pure **HTML, CSS, and Vanilla JavaScript**. No frameworks. No build tools. Just open and it works.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Status](https://img.shields.io/badge/Status-Live-brightgreen?style=flat-square)

---

## 🔗 Live Demo

> **[aryaxsurya.site](https://aryaxsurya.site/index_en.html)**

---

## 📖 About

This is a **trilingual portfolio landing page** for **Arya Surya**, a Fullstack & Infrastructure Engineer based in Funabashi, Chiba, Japan. The site presents professional experience, technical skills, and freelance services across three languages:

| File             | Language                  |
|------------------|---------------------------|
| `index.html`     | 🇮🇩 Indonesian (default)  |
| `index_en.html`  | 🇬🇧 English               |
| `index_jp.html`  | 🇯🇵 Japanese              |

Visitors can switch languages directly from the navigation bar on any page.

---

## ✨ Features

- **Trilingual** — Indonesian, English, and Japanese with in-page language switcher
- **Fully Responsive** — optimized for mobile, tablet, and desktop
- **Scroll Animations** — powered by [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
- **Tech Skill Icons** — via [Devicon CDN](https://devicon.dev/)
- **Animated Profile Card** — with avatar photo, skill tags, and contact links
- **Zero install** — no `npm install`, no build step, open directly in browser
- **GitHub Pages ready** — deploy in under 5 minutes

### Page Sections

| Section         | Content                                                                  |
|-----------------|--------------------------------------------------------------------------|
| **Hero**        | Headline, tagline, CTA buttons, stats (13+ yrs · 3 companies · 5+ apps) |
| **Services**    | Booking System, Custom Web App, Company Profile, Infrastructure & DevOps |
| **About**       | Engineer background, work philosophy, 12-icon tech skills grid           |
| **Skills**      | Vertical timeline — Frontend, Backend, WordPress, Linux, AWS, Automation |
| **Experience**  | Japan Post/Fujitsu · Qubitous/Fujitsu · MUFG/UFJ Bank/Hitachi           |
| **CTA Banner**  | Free consultation call-to-action                                         |
| **Contact**     | Email form, location (Funabashi, Chiba), language switcher               |

---

## 🗂️ Project Structure

```
portfolio/
├── index.html              # 🇮🇩 Indonesian version (main)
├── index_en.html           # 🇬🇧 English version
├── index_jp.html           # 🇯🇵 Japanese version
├── README.md               # This file
├── .gitignore
└── assets/
    ├── css/
    │   └── style.css       # All styles — custom properties, grid, animations
    ├── js/
    │   └── script.js       # Mobile menu toggle & contact form handler
    └── images/
        └── avatar.jpg      # Profile photo
```

---

## 🛠️ Tech Stack

| Component          | Technology                              |
|--------------------|-----------------------------------------|
| Markup             | HTML5 (semantic elements)               |
| Styling            | CSS3 (custom properties, grid, flexbox) |
| Scripting          | Vanilla JavaScript (ES6)                |
| Scroll Animations  | AOS v2.3.1 (CDN)                        |
| Skill Icons        | Devicon (CDN)                           |
| Typography         | Google Fonts — Inter                    |
| Hosting            | GitHub Pages                            |

---

## ⚙️ Running Locally

No installation needed.

```bash
# 1. Clone the repository
git clone https://github.com/aryaxsurya/portfolio.git
cd portfolio

# 2. Open in browser
open index.html
# or double-click index.html in your file manager
```

For live reload during development (optional):

```bash
# Using Python (built-in, no install needed)
python3 -m http.server 3000
# Visit → http://localhost:3000
```

Or install [VS Code Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) and click **Go Live**.

---

## 🎨 Customization

All design tokens are defined as CSS custom properties at the top of `style.css`. To retheme the site, only update these variables:

```css
:root {
  --accent:      #7c6aff;   /* Primary accent / highlight color */
  --bg:          #0d0d0f;   /* Page background */
  --surface:     #16161a;   /* Card and section background */
  --text:        #e8e8f0;   /* Primary text color */
  --text-muted:  #8585a0;   /* Secondary / muted text */
  --radius:      16px;      /* Global border radius */
}
```

---

## 👤 Profile at a Glance

| | |
|---|---|
| **Name**       | Arya Surya |
| **Role**       | Fullstack & Infrastructure Engineer |
| **Location**   | Funabashi, Chiba, Japan |
| **Experience** | 13+ years |
| **Companies**  | Japan Post · Fujitsu · Qubitous · MUFG / UFJ Bank · Hitachi |
| **Tech**       | Laravel · Node.js · WordPress · Linux · AWS · Ansible · MySQL |
| **Email**      | aryaxsurya@gmail.com |

---

## 📜 License

This project is open source under the [MIT License](LICENSE).  
Feel free to use this as a template for your own portfolio.

---

## 👤 Author

**Arya Surya**  
GitHub: [@aryaxsurya](https://github.com/aryaxsurya)  
Email: aryaxsurya@gmail.com
