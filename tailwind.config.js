/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        a: ["Great Vibes"],
      },

      colors: {
        customRed: "#FA4032",
        brinjal: "#5D1451",
        wiproBlue: "#0071C5",
      },
    },
  },
  plugins: [],
};
