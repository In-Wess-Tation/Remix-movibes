/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./app/**/*.{js,jsx,ts,tsx}"
],
  theme: {
    extend: {
      colors: {
        peach:"rgb(255, 203, 164)",
        dark: "#151515",
        darkGrey: "#212121",
        grey: "#666666",
        teal: "#3DD2CC",
      }
    },
  },
  plugins: [],
}

