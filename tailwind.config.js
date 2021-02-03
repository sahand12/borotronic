const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
      },
      spacing: {
        '128': '32rem',
        '300': '75rem',
      },
    },
    fontFamily: {
      sans: ['IranYekan'],
    },
  },
  variants: {
    extend: {
      fontWeight: ['hover'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
