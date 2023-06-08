/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        darkestGrey: "#121212",
        darkGrey: "#1D1D1D",
        menu: "#212121"
      }
    },
  },
  plugins: [],
}

