/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          500: '#2563eb',
          600: '#1d4ed8',
          700: '#1e40af',
          800: '#1e3a8a',
          900: '#0f172a'
        },
        card: {
          bg: 'rgba(255, 255, 255, 0.85)',
          border: 'rgba(226, 232, 240, 0.8)'
        }
      }
    }
  },
  plugins: []
};
