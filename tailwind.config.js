const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue"
  ],
  theme: {
    colors: {
      primary: '#03438D',
      white: '#FFFFFF',
      black: '#000400',
      grey: {
        100: '#707070',
        200: '#00040029',
        300: 'EFECE7'
      },
      light: '#E2EDFA',
      negative: '#F57375'
    },
    fontFamily: {
      paytone: ['Paytone One'],
      helvetica: ['Helvetica Neus'],
      mono: ['Azeret Mono'],
      noto: ['Noto Sans TC'],
      baloo: ['"Baloo Da 2"'],
      tapestry: ['Tapestry']
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.2xl') },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.lg') },
      })
    })
  ],
}
