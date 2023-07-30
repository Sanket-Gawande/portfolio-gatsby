/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/partials/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        md: "16px",
      },
      colors: {
        bg: "#080c16",
        primary: "#33BBCF",
        secondary: "#10162a",
      },
      borderWidth: {
        normal: "1.5px",
      },
    },
  },
  plugins: [],
};
