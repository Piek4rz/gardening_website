/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      white: '#FFFFFF',
      grey: '#F5F0EC',
      darkGrey: '#A0A0A0',
      green: '#1B5B31',
      greenLight: '#2B7A4B',
      black: '#111111',
      beige: '#DCC1AB',
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [ ],
}