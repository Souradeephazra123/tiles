/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        74: "74%",
      },
      scale: {
        60: "0.60",
      },
      padding: {
        50: "50",
      },
      borderWidth: {
        1: "1",
      },
    },
  },
  plugins: [],
};
