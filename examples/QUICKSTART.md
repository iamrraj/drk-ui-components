# Quick Start Guide - Testing Examples Locally

Since the library isn't published to NPM yet, here's how to test the examples locally.

## Option 1: Link the Package Locally (Recommended)

### Step 1: Build the Library

```bash
cd /path/to/drk-ui-components
npm install
npm run build
```

### Step 2: Create a Link

```bash
# Still in drk-ui-components directory
npm link
```

### Step 3: Create a Test Project

```bash
# Create a new Vite + React + TypeScript project
npm create vite@latest my-test-app -- --template react-ts
cd my-test-app
npm install
```

### Step 4: Link the Package

```bash
# In my-test-app directory
npm link drk-ui-components
```

### Step 5: Install Dependencies

The examples use icons from `react-icons` and `lucide-react`:

```bash
npm install react-icons lucide-react
```

### Step 6: Copy the Example

```bash
# Copy the App.tsx from examples to your test project
cp ../drk-ui-components/examples/App.tsx src/App.tsx
```

### Step 7: Update main.tsx

Edit `src/main.tsx` to import the CSS:

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Import the component library CSS
import 'drk-ui-components/dist/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

### Step 8: Configure Tailwind (Required)

Install Tailwind CSS:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Update `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
    },
  },
  plugins: [],
}
```

Update `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Step 9: Run the Dev Server

```bash
npm run dev
```

Open http://localhost:5173 in your browser!

## Option 2: Use npm pack

### Step 1: Build and Pack

```bash
cd /path/to/drk-ui-components
npm install
npm run build
npm pack
```

This creates `drk-ui-components-1.0.0.tgz`

### Step 2: Install in Test Project

```bash
cd /path/to/my-test-app
npm install /path/to/drk-ui-components/drk-ui-components-1.0.0.tgz
```

Then follow steps 5-9 from Option 1.

## Option 3: Direct File Import (Quick Test)

If you just want to quickly test components without setting up a full project:

### Step 1: In the Library Directory

```bash
cd /path/to/drk-ui-components
npm run dev
```

This watches for file changes.

### Step 2: Import Components Directly

In your project's `package.json`, add:

```json
{
  "dependencies": {
    "drk-ui-components": "file:../drk-ui-components"
  }
}
```

Then run:

```bash
npm install
```

## Troubleshooting

### Error: Cannot find module 'drk-ui-components'

**Solution**: Make sure you've built the library first:
```bash
cd /path/to/drk-ui-components
npm run build
```

### Error: Module not found: 'react-icons'

**Solution**: Install the icon dependencies:
```bash
npm install react-icons lucide-react
```

### Components have no styles

**Solution**: Make sure you've imported the CSS:
```tsx
import 'drk-ui-components/dist/index.css';
```

And configured Tailwind CSS in your project.

### TypeScript errors

**Solution**: Make sure your test project has React types:
```bash
npm install -D @types/react @types/react-dom
```

## Alternative: Minimal HTML Example

Create a simple `test.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DRK UI Components Test</title>
  <script crossorigin src="https://unpkg.com/react@19/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@19/umd/react-dom.production.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <div id="root"></div>

  <script type="module">
    // Your test code here
    // Note: This approach is limited as the library uses ES modules
  </script>
</body>
</html>
```

## Next Steps

Once you've tested locally:

1. Publish to NPM (see `PUBLISHING.md`)
2. Install normally: `npm install drk-ui-components`
3. Use in any project!

## Example Project Structure

```
my-test-app/
├── node_modules/
│   └── drk-ui-components/   (linked or installed)
├── src/
│   ├── App.tsx              (from examples/App.tsx)
│   ├── main.tsx             (updated with CSS import)
│   └── index.css            (with Tailwind directives)
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Helpful Commands

```bash
# Rebuild library after changes
npm run build

# Watch mode (auto-rebuild on changes)
npm run dev

# Unlink package
npm unlink drk-ui-components

# Re-link after unlink
npm link

# Check where package is linked
npm ls -g --depth=0
```

Happy testing! 🚀
