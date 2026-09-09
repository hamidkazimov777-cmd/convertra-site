# Convertra Website — AI Handoff Document

This document provides a high-level overview of the Convertra website's architecture, recent changes, and core systems. It is intended to quickly onboard any AI assistant to the current state of the codebase.

## 🏗 Project Stack & Architecture
- **Framework:** [Astro](https://astro.build/) (Static Site Generation).
- **Styling:** Vanilla CSS (`src/styles/global.css`) utilizing extensive CSS variables for a premium, dark-mode-first aesthetic (glassmorphism, subtle gradients, micro-animations).
- **Interactivity:** Vanilla JavaScript (no React/Vue). Most interactive logic (modals, language switching) is handled via inline `<script>` tags within Astro components.
- **Hosting / CDN:** Cloudflare Pages (for the site) + Cloudflare R2 (for downloads).

## 🌍 Internationalization (i18n)
- **Data Source:** `src/data/i18n.ts` exports a `t(key)` function and dictionaries for English (en), Russian (ru), and Spanish (es).
- **Mechanism:** The site is a Single Page Application (SPA-like) in terms of language switching. It does **not** use separate URL routes (like `/ru` or `/en`). 
- **DOM Updates:** Elements with the `data-i18n` attribute are dynamically updated via Vanilla JS when the language switcher in `Nav.astro` is clicked.

## 📦 Download Flow (Cloudflare R2)
- **Concept:** Users download a single bundled archive (`Convertra.zip`) which contains the macOS `.app` and PDF installation guides for all languages.
- **Storage:** Hosted on a Cloudflare R2 bucket (`convertra-downloads`).
- **URL:** The site uses a direct R2.dev public URL (`https://pub-c14da7ee40324b948af5daf02abe0599.r2.dev/releases/mac/Convertra.zip`).
- **Release Script:** `scripts/upload_release.sh` is used to upload new versions of `Convertra.zip` from the local `desktop/Convertra_macOS` folder directly to R2.
- **UI Component:** `src/components/DownloadModal.astro`. It intercepts clicks on elements with the `.js-download` class and presents a premium modal with macOS compatibility info and the final download button.

## 📝 Key Components & Recent Changes
1. **`Nav.astro`:** 
   - Contains the main navigation and the language switcher.
   - The primary CTA button is a static "Стать партнером" (Become a Partner) button (`js-cta` class, `data-inquiry="partnership"`) which opens the Contact Modal.
2. **`ProductSplit.astro` & `Showcase.astro`:**
   - These sections visually separate and highlight the two core products: **Convertra App** (for DJs) and **AudioCore** (the underlying engine for developers).
   - The primary App CTA ("Скачать для macOS") triggers the Download Modal (`js-download`).
3. **`ContactModal.astro`:**
   - Intercepts clicks on `.js-cta` elements. Opens a modal offering direct contact links (Email, Telegram, WhatsApp, LinkedIn, GitHub) to the founder.

## 🛠 Guidelines for AI Assistants
1. **Styling:** Stick to Vanilla CSS. Use existing CSS variables from `global.css`. Maintain the premium, Apple-like dark aesthetic. Do not introduce Tailwind unless explicitly requested.
2. **Interactivity:** Use Vanilla JS. Rely on event delegation or simple query selectors within Astro component scripts.
3. **i18n:** When adding new text, always add the keys to all three languages in `src/data/i18n.ts` and use the `data-i18n` attribute in the markup so it dynamically updates on language switch.
4. **Downloads:** Do not change the download flow back to separate App and PDF downloads. They are intentionally bundled into one `Convertra.zip`.
