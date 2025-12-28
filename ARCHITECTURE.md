# Portfolio Architecture & File Structure

## 📁 Project Overview

This is a React-based single-page application (SPA) built with Vite, deployed to GitHub Pages via GitHub Actions, and served through a custom domain (davidrashid.com).

---

## 🗂️ File Structure & Purpose

### **Root Configuration Files**

#### `package.json`
- **Purpose**: Defines project metadata, dependencies, and npm scripts
- **Key Scripts**:
  - `dev`: Runs Vite dev server (localhost:5173)
  - `build`: Compiles React app into static files in `/dist`
  - `deploy`: Legacy script (not used - we use GitHub Actions)
- **Dependencies**: React, Framer Motion (animations), React Router (routing), Tailwind CSS (styling)
- **Connections**: Referenced by Vite, npm, and GitHub Actions

#### `vite.config.js`
- **Purpose**: Vite build tool configuration
- **Key Settings**:
  - `base: '/'`: Base URL for assets (changed from `/personalPortfolio/` for custom domain)
  - `outDir: 'dist'`: Where compiled files go
  - `@` alias: Maps to `./src` for cleaner imports
- **Connections**: Used by `npm run build`, processes all source files

#### `tailwind.config.js`
- **Purpose**: Tailwind CSS configuration (utility-first CSS framework)
- **Key Features**:
  - Defines color scheme, animations, and design tokens
  - `tailwindcss-animate` plugin for animation utilities
- **Connections**: Processes CSS classes in all `.jsx` files

#### `.github/workflows/deploy.yml`
- **Purpose**: GitHub Actions CI/CD pipeline
- **Workflow**:
  1. Triggers on push to `main` branch
  2. Installs Node.js and dependencies
  3. Runs `npm run build` (creates `/dist` folder)
  4. Uploads `/dist` to GitHub Pages
  5. Deploys to `github-pages` environment
- **Connections**: Automatically runs when you push to GitHub

---

### **Source Files (`/src`)**

#### `main.jsx`
- **Purpose**: Application entry point
- **What it does**: 
  - Renders the React app into the HTML `<div id="root">`
  - Imports global CSS styles
- **Connections**: Called by `index.html`, renders `<App />`

#### `index.html` (root)
- **Purpose**: HTML template
- **What it does**: 
  - Provides the `<div id="root">` where React mounts
  - Loads the compiled JavaScript bundle
- **Connections**: Vite injects compiled JS/CSS here during build

#### `App.jsx`
- **Purpose**: Root React component
- **What it does**:
  - Wraps the entire app
  - Includes `<Pages />` (routing) and `<Toaster />` (notifications)
- **Connections**: Rendered by `main.jsx`, contains all pages

#### `index.css`
- **Purpose**: Global CSS styles
- **What it does**: 
  - Tailwind CSS directives (`@tailwind base/components/utilities`)
  - CSS variables for theming
- **Connections**: Imported by `main.jsx`, affects all components

---

### **Routing (`/src/pages`)**

#### `index.jsx`
- **Purpose**: Router configuration
- **What it does**:
  - Sets up React Router (handles URL navigation)
  - Maps URLs to page components
  - Currently: `/` and `/Home` both show `<Home />`
- **Key Change**: Removed `basename="/personalPortfolio"` for custom domain
- **Connections**: Used by `App.jsx`, renders page components

#### `Home.jsx`
- **Purpose**: Main landing page component
- **What it does**:
  - Displays hero section, projects, social links
  - Uses Framer Motion for animations
  - Contains background effects (blur gradients, stars)
- **Connections**: Rendered by router, uses `<ProjectCard />` and `<SocialButton />`

#### `Layout.jsx`
- **Purpose**: Wrapper for pages (currently minimal)
- **Connections**: Used by router to wrap page content

---

### **Components (`/src/components`)**

#### `ProjectCard.jsx`
- **Purpose**: Reusable card component for projects
- **Features**:
  - Expandable/collapsible description
  - Framer Motion animations
  - Hover effects with blur gradients
- **Connections**: Used by `Home.jsx` to display projects

#### `SocialButton.jsx`
- **Purpose**: Social media link buttons
- **Connections**: Used by `Home.jsx` in social links section

#### `/src/components/ui/*`
- **Purpose**: Reusable UI components (from shadcn/ui)
- **Includes**: Buttons, dialogs, toasts, etc.
- **Connections**: Used throughout the app for consistent UI

---

### **Build & Deployment**

#### `public/CNAME`
- **Purpose**: Tells GitHub Pages your custom domain
- **Content**: `davidrashid.com`
- **How it works**: Vite copies this to `/dist` during build, GitHub Pages reads it
- **Connections**: Required for custom domain setup

#### `public/.nojekyll`
- **Purpose**: Disables Jekyll processing (GitHub Pages default)
- **Why needed**: We're using a SPA, not a Jekyll site
- **Connections**: Prevents GitHub from trying to process the site with Jekyll

#### `/dist` folder (generated)
- **Purpose**: Compiled production files
- **Contents**:
  - `index.html`: Final HTML with injected assets
  - `assets/`: JavaScript and CSS bundles
  - `CNAME`: Copied from `public/`
- **Connections**: Deployed to GitHub Pages by GitHub Actions

---

## 🔄 How It All Works Together

### **Development Flow**
1. Edit files in `/src`
2. Run `npm run dev` → Vite serves on localhost
3. Changes hot-reload automatically

### **Build Flow**
1. Run `npm run build` → Vite compiles:
   - React JSX → JavaScript bundles
   - Tailwind classes → CSS file
   - Copies `public/*` → `dist/`
2. Output: `/dist` folder with static files

### **Deployment Flow**
1. Push code to GitHub `main` branch
2. GitHub Actions workflow triggers:
   - Checks out code
   - Runs `npm ci` (install dependencies)
   - Runs `npm run build` (creates `/dist`)
   - Uploads `/dist` to GitHub Pages
3. GitHub Pages serves files from `/dist`
4. Custom domain (`davidrashid.com`) points to GitHub Pages
5. DNS resolves → site loads

### **Request Flow (User visits davidrashid.com)**
1. DNS lookup: `davidrashid.com` → GitHub Pages IPs
2. GitHub Pages serves `index.html` from `/dist`
3. Browser loads `index.html`
4. HTML loads JavaScript bundle from `/assets/`
5. React app initializes and renders
6. Framer Motion animations start

---

## 🛠️ What We Fixed for Custom Domain

### **Problem**
- Site worked at `xtiberius.github.io/personalPortfolio/` but not at `davidrashid.com`
- GitHub Pages was deploying from wrong branch (`gh-pages` instead of GitHub Actions)

### **Solutions Applied**

1. **Changed Base Path** (`vite.config.js`)
   - Before: `base: '/personalPortfolio/'`
   - After: `base: '/'`
   - Why: Custom domains serve from root, not subdirectory

2. **Removed Router Basename** (`src/pages/index.jsx`)
   - Before: `<Router basename="/personalPortfolio">`
   - After: `<Router>`
   - Why: Router should match root path for custom domain

3. **Created CNAME File** (`public/CNAME`)
   - Content: `davidrashid.com`
   - Why: Tells GitHub Pages which domain to serve

4. **Added .nojekyll** (`public/.nojekyll`)
   - Why: Prevents Jekyll from interfering with SPA routing

5. **Fixed GitHub Pages Source**
   - Changed from "Deploy from branch" to "GitHub Actions"
   - Why: Ensures latest build with correct config is deployed

---

## 📊 Technology Stack

- **React 18**: UI framework
- **Vite 6**: Build tool (fast, modern)
- **Framer Motion**: Animation library
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first CSS
- **GitHub Actions**: CI/CD automation
- **GitHub Pages**: Static hosting

---

## 🎯 Key Concepts

- **SPA (Single Page Application)**: All navigation happens client-side, no page reloads
- **Static Site**: Pre-built HTML/CSS/JS, no server-side rendering
- **CDN**: GitHub Pages serves files from edge locations globally
- **Custom Domain**: Your domain points to GitHub's servers via DNS

