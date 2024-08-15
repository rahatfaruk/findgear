/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        "primary": "#0D9488"
      }
    },
  },
  plugins: [],
}

