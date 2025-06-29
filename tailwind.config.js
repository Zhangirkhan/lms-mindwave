const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary': '#1D2026',
        'secondary': '#4E5566',
        'accent': '#2467EC',
        'topbar-inactive': '#8C94A3',
        'topbar-bg': '#1D2026'
      },
      fontSize: {
        'menu': '14px',
        'body': '16px'
      }
    },
  },
  plugins: [],
} 