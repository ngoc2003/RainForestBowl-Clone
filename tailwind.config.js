/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A76E65",
        secondary: "#466732",
        third: "#69451c", // brown
        nude: "#EFD7C5",
        lightNude: "#F5EBE0",
        font: "#69451C",
        lightFont: "#fbf8f7",
        red: "#F44032",
        blue: "#2273AA",
        lightBlue: "#2D9CDB",
        orange: "#E29856",
        gray: "#828282",
        lightGray: "#D8D8D8",
        westar: "#E0E0D6",
        nude2: "#F5F2F2",
        borderColor: "rgba(226,152,86,.5)",
      },
      fontFamily: {
        sans: ["sans-serif"],
        raleway: ["Raleway-Medium"],
      },
    },
  },
  plugins: [],
};
