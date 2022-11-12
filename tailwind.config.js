const colors = require('tailwindcss/colors')
module.exports = {
  
  content: [
    "./src/**/*.{html,ts}",
  ], 
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        gray: colors.neutral,
      }
    },
    
  },
  
  plugins: [],
}
