/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily:{
        dela: "Dela Gothic One, serif" ,
        syne: "Syne, serif"
      },
      colors: {
        item: "#F0EEED",
      }
    },
  },
  plugins: [],
}