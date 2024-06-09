/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-white':'rgb(250, 246, 239)',
        'secondary-black':'#27272A',
        'trinary-green':'#9AFF77',
        'neutral-blue':'#62FFF6',
      },
      fontFamily: {
        blink: ['blink', 'sans-serif'],
        cloudy : ['cloudy', 'sans-serif'], 
        boomster : ['boomster', 'sans-serif'], 
        dirtyBrush : ['dirtyBrush', 'sans-serif'], 
        superFunky : ['superFunky', 'sans-serif'], 
        superMilk : ['superMilk', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};
