/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    screens: {
      xl: "991px",
      lg: "800px",
      md: "600px",
      sm: "400px",
    },
    extend: {
      screens: {
        xxl: "1250px",
        xs: "360px",
        llg: "940px",
      },
      colors: {
        primary: "#A76E65",
        secondary: "#466732",
        // third: "#69451c",
        black: "#69451c",
        pink: "#A76E65",
        nude: "#EFD7C5",
        lightNude: "#F5EBE0",
        font: "#69451C",
        lightFont: "#fbf8f7",
        red: "#F44032",
        yellow: "#FFB903",
        blue: "#2273AA",
        lightBlue: "#2D9CDB",
        orange: "#E29856",
        gray: "#828282",
        lightGray: "#D8D8D8",
        westar: "#E0E0D6",
        nude2: "#F5F2F2",
        lightPink: "#f6f0f0",
        lightPurple: "#EAEDEA",
        green: "#466732",
        borderColor: "rgba(226,152,86,.5)",
        borderForm: "#ccc",
      },
      fontFamily: {
        sans: ["sans-serif"],
        raleway: ["Raleway-Medium"],
      },
    },
  },
  plugins: [],
};
