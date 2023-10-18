/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-green': '#053d41',
        'dark-orange': '#f58342',
      },
    },
  },
  plugins: [],
};
