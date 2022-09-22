/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-turquoise": "#25CED1",
        "champagne-pink": "#FCEADE",
        "coral": "#FF8A5B",
        "paradise-pink": "#EA526F",
        "purple-dark": "#5e466e",
      }
    },
  },
  plugins: [],
}
