/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.{js,ts,tsx}', './app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        background: '#222222',
        'almost-black': '#111111',
        'dark-gray': '#555555',
        primary: '#5663F7',
      },
    },
  },
  plugins: [],
};
