/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          'sm': '100%',
          'md': '100%',
          'lg': '1224px',
          'xl': '1480px',
          '2xl': '1800px',
      }
      },
    },
  },
  plugins: [],
}

