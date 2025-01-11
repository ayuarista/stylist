/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
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