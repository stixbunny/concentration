/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        'dscreen': '100dvh',
      },
      fontFamily: {
        score: 'Oswald, ui-serif',
        dialog: 'Roboto, sans-serif',
      },
      keyframes: {
        'quick-bounce': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg) translateY(-1rem)' },
        },
      },
      animation: {
        'quick-bounce': 'quick-bounce 0.5s ease-in-out',
      },
    },
  },
};
