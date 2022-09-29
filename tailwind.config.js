const colors = require("./colors.json");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "sulsans-light": ["SulSans-Light"],
        "sulsans-regular": ["SulSans-Regular"],
        "sulsans-medium": ["SulSans-Medium"],
        "sulsans-bold": ["SulSans-Bold"],
      },
      colors,
    },
  },
  plugins: [],
};
