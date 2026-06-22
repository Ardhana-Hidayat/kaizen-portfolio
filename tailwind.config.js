/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        'kaizen-bg': '#111111',
        'kaizen-card': '#1A1A1A',
        'kaizen-border': '#2A2A2A',
        'kaizen-muted': '#888888',
      },
    },
  },
  plugins: [],
}
