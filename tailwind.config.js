const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  content: ["./src/**/*.{html,ts,js}", './node_modules/tw-elements/dist/js/**/*.js'],
  darkMode: 'class', // or 'media' or 'class'
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
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
