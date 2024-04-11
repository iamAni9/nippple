/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      custom: ["Bebas Neue", "sans-serif"],
      custom_2: ["PT Sans Narrow", "sans-serif"],
    }
  },
  plugins: [],
}

