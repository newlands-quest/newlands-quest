/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {

    screens: {
      'sm': '640px',

      'md': '768px',
    },
    extend: {},
  },
  plugins: [],
}