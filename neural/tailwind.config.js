/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        banumans: ["Banumans", "cursive"],
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
