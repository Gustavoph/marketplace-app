/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './src/**/*.tsx'],
  theme: {
    extend: {
      space: {
        22: '88px',
      },
      width: {
        22: '88px',
      },
      height: {
        22: '88px',
      },
      colors: {
        blue: '#364D9D',
        'blue-light': '#647AC7',
        'red-light': '#EE7979',
        gray: {
          1: '#1A181B',
          2: '#3E3A40',
          3: '#5F5B62',
          4: '#9F9BA1',
          5: '#D9D8DA',
          6: '#EDECEE',
          7: '#F7F7F8',
        },
      },
    },
  },
  plugins: [],
}
