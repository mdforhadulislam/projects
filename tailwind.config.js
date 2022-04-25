module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      boxShadow: {
        '3xl': ' 0vw 0vw 0.5vw 0vw rgb(32 32 32 / 12%)',
        '4xl': ' 0vw 0vw 0.5vw 0vw rgb(32 32 32 / 20%)',
        '5xl': ' 0vw 0vw 0.5vw 0vw rgb(32 32 32 / 25%)'
      }
    },
  },
}