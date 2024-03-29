const defaultTheme = require('tailwindcss/defaultTheme')
const ghost = require('./plugins/tailwind-custom/ghost')

module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue'
  ],
  theme: {
    screens: {
      xs: '375px',
      ...defaultTheme.screens
    },
    colors: {
      primary: '#03438D',
      white: '#FFFFFF',
      black: '#000400',
      grey: {
        100: '#707070',
        200: '#00040029',
        300: '#EFECE7',
        400: '#9B9893',
        500: '#A8B0B9',
        600: '#808080',
        700: '#FAF9F8'
      },
      light: '#E2EDFA',
      negative: '#F57375',
      yellow: {
        DEFAULT: '#EEC32A',
        2: '#FAA722'
      },
      green: '#83C51D',
      red: '#DE4B63'
    },
    fontFamily: {
      paytone: ['Paytone One'],
      helvetica: ['Helvetica Neus'],
      mono: ['Azeret Mono'],
      noto: ['Noto Sans TC'],
      baloo: ['"Baloo Da 2"'],
      tapestry: ['Tapestry']
    },
    extend: {
      borderRadius: {
        DEFAULT: '0.5rem'
      }
    }
  },
  plugins: [
    ghost()
  ]
}
