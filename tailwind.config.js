/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['PT Sans', ...defaultTheme.fontFamily.sans],
        mono: ['PT Mono', ...defaultTheme.fontFamily.mono],
      },
    },
    typography: (theme) => ({
      default: {
        css: [
          {
            'h2, h3': {
              fontWeight: 400,
            },
            'h2:before': {
              display: 'block',
              content: '""',
              width: theme('width.24'),
              marginBottom: theme('margin.2'),
              borderTopWidth: theme('borderWidth.2'),
              borderTopColor: theme('colors.blue.400'),
            },
            'ul > li::before': {
              content: '"×"',
              position: 'absolute',
              color: theme('colors.pink.500'),
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
              marginLeft: theme('margin.8'),
            },
          },
        ],
      },
      sm: {
        css: [
          {
            'p, h3, ul, ol': {
              marginLeft: theme('margin.8'),
            },
            'ul > li::before': {
              width: null,
              height: null,
              top: null,
            },
          },
        ],
      },
      md: {
        css: [
          {
            'p, h3, ul, ol': {
              marginLeft: theme('margin.12'),
            },
          },
        ],
      },
      lg: {
        css: [
          {
            'p, h3, ul, ol': {
              marginLeft: theme('margin.12'),
            },
            'ul > li::before': {
              width: null,
              height: null,
              top: null,
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
