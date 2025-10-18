/**
 * DRK UI Components - Tailwind CSS Configuration
 *
 * @description
 * This configuration can be extended in your project to customize the primary color.
 *
 * @example
 * // In your project's tailwind.config.js:
 *
 * import drkConfig from 'drk-ui-components/tailwind.config.js';
 *
 * export default {
 *   ...drkConfig,
 *   theme: {
 *     extend: {
 *       ...drkConfig.theme.extend,
 *       colors: {
 *         ...drkConfig.theme.extend.colors,
 *         primary: {
 *           50: '#fef2f2',
 *           100: '#fee2e2',
 *           200: '#fecaca',
 *           300: '#fca5a5',
 *           400: '#f87171',
 *           500: '#ef4444',  // Your custom primary color
 *           600: '#dc2626',
 *           700: '#b91c1c',
 *           800: '#991b1b',
 *           900: '#7f1d1d',
 *         },
 *       },
 *     },
 *   },
 * };
 */

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary color palette (Sky Blue by default)
        // Users can override this in their own tailwind.config.js
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',  // Main primary color
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        // Background color for sidebars and light surfaces
        SideBar: '#f8fafc',
      },
    },
  },
  plugins: [],
}
