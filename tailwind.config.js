/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      white: '#FFFFFF',
      grey: '#F5F0EC',
      green: '#1B5B31',
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
  plugins: [],
}