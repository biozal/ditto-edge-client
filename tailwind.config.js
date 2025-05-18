// tailwind.config.js
/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

const { darkTheme, lightTheme } = require('./src/theme/js')
const { createThemes } = require('tw-colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,css,ejs}'],
  darkMode: 'media',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.neutral,
      amber: colors.amber,
      blue: colors.blue,
      white: colors.white,
      black: colors.black,
      green: colors.emerald,
      yellow: colors.amber,
      purple: colors.violet,
      pink: colors.pink,
      'forge-brand': '#F65B2D',
      primary: {
        DEFAULT: '#2C7BE5',
        50: '#F8FBFE',
        100: '#E2EDFB',
        200: '#B4D0F6',
        300: '#87B4F0',
        400: '#5997EB',
        500: '#2C7BE5',
        600: '#1862C6',
        700: '#134C98',
        800: '#0D356B',
        900: '#081F3D',
      },
      ditto: '#2C7BE5', // primary alias to avoid hover effects from scss
      'gray-text': colors.gray[500],
      'code-value': '#50a14f',
      'code-label': '#986801',
      red: colors.red,
      sunset: {
        DEFAULT: '#FF5C33',
        50: '#FFEBE5',
        100: '#FFD5C9',
        200: '#FFAA91',
        300: '#FF7F59',
        400: '#FF5421',
        500: '#FF5C33',
        600: '#E83500',
        700: '#AF2800',
        800: '#771C00',
        900: '#3F0F00',
      },
    },
    fontSize: {
      xs: '.65rem',
      sm: ['.75rem', '1rem'],
      base: '.875rem',
      lg: '1rem',
      xl: '1.125rem',
      '2xl': '1.25rem',
      '3xl': '1.5rem',
      '4xl': '1.875rem',
      '5xl': '2.25rem',
      '6xl': '3rem',
      '7xl': '4rem',
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        inconsolata: 'Inconsolata',
        'plex-mono': 'IBM Plex Mono',
        aeonik: 'Aeonik Pro',
        kairos: 'Kairos Sans Variable',
      },
      cursor: {
        'ns-resize': 'ns-resize',
      },
      gridTemplateColumns: {
        'min-fr': 'min-content 1fr',
      },
      transitionProperty: {
        height: 'height',
        width: 'width',
      },
      animation: {
        scan: 'scan 4s infinite ease-in-out',
      },
      keyframes: {
        scan: {
          '0%, 100%': {
            transform: 'translateY(-100%)',
          },
          '25%, 75%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(100%)',
          },
        },
      },
      colors: {
        buttonWhite: {
          background: '#fff',
          foreground: '#181616',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar-hide'),
    require('tailwindcss-animate'),
    createThemes(
      {
        light: lightTheme,
        dark: darkTheme,
      },
      {
        defaultTheme: {
          light: 'light',
          dark: 'dark',
        },
      },
    ),
    function ({ addUtilities }) {
      addUtilities({
        '.variant-white': {
          backgroundColor: 'var(--button-white-bg)',
          color: 'var(--button-white-fg)',
        },
        '.variant-white:hover': {
          backgroundColor: '#f3f3f3',
        },
      });
    },
  ],
  corePlugins: {
    preflight: true,
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
}
