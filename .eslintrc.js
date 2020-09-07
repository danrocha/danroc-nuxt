module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
    'cypress/globals': true,
  },
  // parserOptions: {
  // parser: 'babel-eslint',
  // },
  extends: [
    '@nuxtjs',
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier', 'cypress'],
  // add your custom rules here
  rules: {
    '@typescript-eslint/no-empty-interface': 1,
    // https://github.com/typescript-eslint/typescript-eslint/issues/103
    '@typescript-eslint/no-parameter-properties': 0,
  },
}
