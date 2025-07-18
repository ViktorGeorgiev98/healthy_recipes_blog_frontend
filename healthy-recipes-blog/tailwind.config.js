/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // make sure jsx/tsx extensions included
  ],
  theme: {
    extend: {
      colors: {
        main: "#38A169",
        secondary: "#9AE6B4",
        tertiary: "#2F855A",
        golden: "#F6E05E",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
