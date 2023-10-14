/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        score: 'Oswald, ui-serif',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      }
    },
  },
}