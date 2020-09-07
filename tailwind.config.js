/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
        mono: ['Source Code Pro', ...defaultTheme.fontFamily.mono],
      },
    },
    typography: (theme) => ({
      default: {
        css: [
          {
            color: theme('colors.gray.200'),
            strong: {
              color: theme('colors.gray.200'),
            },
            'h2, h3, h1': {
              fontWeight: 700,
              fontFamily: theme('fontFamily.mono'),
              color: theme('colors.teal.200'),
            },
            'a, code': {
              color: theme('colors.teal.200'),
            },
            'ul > li::before': {
              content: '"×"',
              position: 'absolute',
              color: theme('colors.teal.500'),
              fontWeight: theme('fontWeight.bold'),
              backgroundColor: null,
              borderRadius: null,
              width: null,
              height: null,
              top: null,
            },
            'ul > li > p': {
              marginLeft: 0,
            },
            'p, h3, ul, ol': {
              marginLeft: theme('margin.0'),
            },
            img: {
              boxShadow: theme('boxShadow.md'),
            },
          },
        ],
      },
    }),
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
