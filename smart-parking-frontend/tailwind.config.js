/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'blue-900': '#00205B',
        'gold-500': '#FFD700',
        'green-500': '#4CAF50',
        'red-500': '#F44336'
      }
    },
  },
  plugins: [],
}
