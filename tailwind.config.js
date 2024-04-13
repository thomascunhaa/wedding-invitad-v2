/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'body-primary': '#b0cddf'
      },
      fontFamily: {
        'roboto': ['Roboto', 'ui-sans-serif', 'system-ui'],
        'wolo' : ['Micro 5 Charted", sans-serif']
      }
    },
  },
  plugins: [],
}