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
    extend: {
      fontFamily: {
        'kalnia': ['Kalnia', 'serif']
      },
    },
  },
  plugins: [],
};
