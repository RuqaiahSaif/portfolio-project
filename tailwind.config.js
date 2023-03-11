/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.{js,jsx,ts,html}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Rampart: ["Montserrat", "sans-serif"],
      },
      rotate: {
        '360': '360deg',
      },
      colors: {
        primary: {
          '400': '#e0b15f'}
      },
      backgroundImage: {
        'bg_night': "url('../src/assets/images/bg_night.jpg')",
       
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },

      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
      },
    },
    
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
  variants: {
    scrollbar: ['rounded']
  }
}
