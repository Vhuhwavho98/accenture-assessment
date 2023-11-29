/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
        light: ['light', 'sans-serif'],
        displayBold: ['displayBold', 'sans-serif'],
        displayBlack: ['displayBlack', 'sans-serif'],
        displayThin: ['displayThin', 'sans-serif'],
        extraBold: ['extraBold', 'sans-serif'],
        displayRegular:['displayRegular','sans-serif'],
    },
    extend: {
      backgroundImage: {
      },
    },
  },
  plugins: [],
}
