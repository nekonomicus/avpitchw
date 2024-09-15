/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#3B82F6',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}