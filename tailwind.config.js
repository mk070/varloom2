/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'rgb(250, 246, 239)',
        'secondary':'#27272A',
        'trinary':'#9AFF77',
        'neutral':'#62FFF6',
      }
    },
  },
  plugins: [],
};
