/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      purple: "#394484",
      "purple-light": "#D9E6F7",
      white: "#F3F8FE",
      dark: "#363636",
      red: "red",
      "gray-light": "#8492a6",
    },
  },
  plugins: [],
};
