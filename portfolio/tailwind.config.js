/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,css,js}"],
  theme: {
    colors: {
      //green and pink
      //light pink on dark pink with white font
      'berry': '#8A0049',
      'light-pink': '#FFE0F1'
    },
    screens: {
      '40': '640px',
      // => @media (min-width: 640px) { ... }

      '50': '800px',
      // => @media (min-width: 800px) { ... }

      '60': '960px',
      // => @media (min-width: 960px) { ... }

      '70': '1120px',
      // => @media (min-width: 1120px) { ... }

      '80': '1280px',
      // => @media (min-width: 1280px) { ... }

      '100': '1600px',
      // => @media (min-width: 1600px) { ... }

      '120': '1920px',
      // => @media (min-width: 1920px) { ... }
    },
    extend: {
      fontFamily: {
        'kalnia': ['Kalnia', 'serif']
      },
    },
  },
  plugins: [],
};
