/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navbar: '#f25251',
        betterWhite: 'rgb(246,246,246)',
        betterBlue: '#4169a7',
        darkerWhite: '#eaeaea',
        betterBlack: '#202020',
        hoverColor: '#292929',
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif']
      },
    },
  },
  plugins: [],
}