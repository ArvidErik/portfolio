/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000B0D",
        secondary: "#67dab4",
        tertiary: "#00272D",
        "black-100": "#002826",
        "black-200": "#010C10",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/greenbg.jpg')",
      },
    },
  },
  plugins: [],
};
