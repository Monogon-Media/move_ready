const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  purge: ['./pages/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary:'#1e5800',
        secondary: '#4fae1e',
        tertiary: '#cdd442',
        lightGray: colors.lightGray,
        backup: colors.lime,
      }
    },
  },
  plugins: [],
}