/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1025px', // 👈 custom fix for 1024px issue
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
}
