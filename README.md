# Atelier Demo — Responsive Art Studio Website

[![TypeScript](https://img.shields.io/badge/TypeScript-7.x-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.x-61dafb.svg)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38b2ac.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646cff.svg)](https://vite.dev/)

> A responsive art studio website demonstrating modern frontend development, interactive artwork galleries, and custom commission experiences.

---

## 🎨 Project Overview

**Atelier Demo** is a frontend portfolio demonstration project inspired by a handmade art studio.

The application showcases modern web development concepts through a responsive interface, interactive artwork gallery, lightbox viewer, commission configuration interface, and light and dark themes.

This project is intended for educational and portfolio purposes. Demonstration artwork and placeholder studio information are used instead of the original business's private content.

---

## ✨ Key Features

- **Interactive Artwork Gallery:** Browse demonstration artwork across multiple creative mediums and artistic styles.
- **Gallery Filtering:** Explore artwork through category-based filtering.
- **Interactive Lightbox:** View selected artwork in an enlarged modal with navigation controls.
- **Commission Simulator:** Configure artwork commission options and view estimated pricing.
- **Dark and Light Themes:** Switch between light and dark appearance modes.
- **Responsive Design:** Layout adapts to desktop, tablet, and mobile screen sizes.
- **Reusable Components:** Modular React components and centralized TypeScript data structures support maintainability.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| Frontend Framework | React 19 |
| Programming Language | TypeScript |
| Styling | Tailwind CSS 4, CSS |
| Icons | Lucide React |
| Animations | Motion |
| Build Tool | Vite 8 |
| Package Manager | npm |

---

## 📁 Project Structure

```text
atelier-demo-portfolio/
│
├── public/
│   └── assets/
│       ├── artworks/
│       │   └── demo/              # Demonstration artwork SVGs
│       └── studio/                # Demonstration studio assets
│
├── src/
│   ├── components/
│   │   ├── AboutSection.tsx
│   │   ├── BrandIcons.tsx
│   │   ├── ClientFeedback.tsx
│   │   ├── ContactSection.tsx
│   │   ├── CustomCommissionForm.tsx
│   │   ├── Footer.tsx
│   │   ├── GallerySection.tsx
│   │   ├── Hero.tsx
│   │   ├── HowOrderingWorks.tsx
│   │   ├── LightboxModal.tsx
│   │   ├── Navbar.tsx
│   │   ├── ServicesShowcase.tsx
│   │   └── ThemeToggle.tsx
│   │
│   ├── context/
│   │   └── ThemeContext.tsx
│   │
│   ├── data/
│   │   └── businessData.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/atelier-demo-portfolio.git
```

### 2. Navigate to the Project Directory

```bash
cd atelier-demo-portfolio
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

---

## 🏗️ Production Build

To generate an optimized production build:

```bash
npm run build
```

The generated production files will be available in the `dist/` directory.

To run TypeScript type checking:

```bash
npm run lint
```

---

## 🔒 Privacy and Demonstration Notice

- **Demonstration Artwork:** The gallery uses demonstration SVG assets rather than original customer artwork photographs.
- **Placeholder Information:** Studio profiles and testimonials are intended for demonstration purposes.
- **Simulated Enquiries:** Contact and commission interactions operate in demonstration mode and do not send messages to the original business.
- **No Production Integration:** This project is a frontend demonstration and is not connected to the original business's private systems.

---

## 🤖 AI-Assisted Development Disclosure

This project was developed with assistance from **Google AI Studio**.

My contributions included reviewing the generated implementation, configuring the local development environment, resolving dependency installation issues, validating TypeScript compilation, and testing the application locally.

AI assistance was used throughout development. This repository is presented transparently as an AI-assisted frontend portfolio project.