## Catamaran System

React + TypeScript application bootstrapped with Vite, styled with Tailwind CSS, and linted with ESLint. This README explains local setup, development workflow, and build commands.

### Tech stack
- **Build tool**: Vite 7
- **Framework**: React 19 (with Fast Refresh)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3
- **Linting**: ESLint (TypeScript + React hooks + React Refresh configs)

### Prerequisites
- **Node.js**: 18 or newer (LTS recommended)
- **npm**: 9+ (or use pnpm/yarn if you prefer and have a lockfile for it)

### Getting started
1. Install dependencies
```bash
npm install
```
2. Start the development server (with HMR)
```bash
npm run dev
```
3. Open the URL printed in the terminal (typically `http://localhost:5173`).

### Available scripts
- **dev**: run the Vite dev server
```bash
npm run dev
```
- **build**: type-check and create a production build in `dist/`
```bash
npm run build
```
- **preview**: serve the production build locally
```bash
npm run preview
```
- **lint**: run ESLint on the project
```bash
npm run lint
```

### Project structure
```text
.
├─ index.html
├─ public/              # Static assets copied as-is
├─ src/
│  ├─ main.tsx         # App bootstrap (React root)
│  ├─ App.tsx          # Root component
│  ├─ App.css          # Example styles
│  ├─ index.css        # Tailwind base/imports
│  └─ assets/          # Local images/icons/etc.
├─ vite.config.ts       # Vite configuration
├─ tailwind.config.js   # Tailwind configuration
├─ tsconfig*.json       # TypeScript configs
├─ eslint.config.js     # ESLint flat config
├─ package.json
└─ package-lock.json
```

### Styling with Tailwind CSS
- Tailwind is configured via `tailwind.config.js` with `content` scanning for `index.html` and all files in `src/**/*.{js,ts,jsx,tsx}`.
- Global Tailwind layers are imported in `src/index.css`.
- Use utility classes directly in your JSX, e.g. `<div className="p-4 text-gray-700">`.

### Linting
ESLint is configured in `eslint.config.js` with TypeScript and React plugin presets. Run:
```bash
npm run lint
```

### Building for production
Create an optimized build to `dist/`:
```bash
npm run build
```
Optionally preview the built app locally:
```bash
npm run preview
```

### Notes for Windows
- This project works fine in Command Prompt, PowerShell, or Git Bash.
- If your path contains spaces (e.g., `Don's Stuffs`), npm scripts still work as shown above.

### Configuration references
- Vite config: `vite.config.ts`
- Tailwind config: `tailwind.config.js`
- TypeScript configs: `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`
- ESLint config: `eslint.config.js`

### License
Proprietary – internal project. Update this section if a different license applies.
