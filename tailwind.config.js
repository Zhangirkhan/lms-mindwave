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
    screens: {
      'xxxs': '320px',   // iPhone SE, Galaxy S8
      'xxs': '375px',    // iPhone 12/13/14, iPhone X/11 Pro
      'xs': '425px',     // Large phones
      'sm': '640px',     // Default Tailwind sm
      'md': '768px',     // Default Tailwind md
      'lg': '1024px',    // Default Tailwind lg
      'xl': '1280px',    // Default Tailwind xl
      '2xl': '1536px',   // Default Tailwind 2xl
    },
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