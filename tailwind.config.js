/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        move: 'move 5s infinite 1s',
      },
      keyframes: {
        move: {
          '0%': { top: '0px' },
          '20%': { top: '-50px' },
          '40%': { top: '-100px' },
          '60%': { top: '-150px' },
          '80%': { top: '-200px' },
        },
        
      },
    },
  },
  plugins: [],
};

