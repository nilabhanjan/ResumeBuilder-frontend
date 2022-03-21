const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  content: ["./src/**/*.{html,ts}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        amber: colors.amber,
        emerald: colors.emerald,
        gray: colors.trueGray,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [ ],
}
