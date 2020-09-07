module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    // '^vue$': 'vue/dist/vue.common.js',
  },
  modulePathIgnorePatterns: ['<rootDir>/cypress/'],
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.ts?$': 'ts-jest',
    '.*\\.(vue)$': './index.js',
  },
  // setupFilesAfterEnv: ['<rootDir>/test/jest.setup.js'],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue',
    '<rootDir>/lib/**/*.ts',
    '<rootDir>/plugins/**/*.ts',
    '<rootDir>/store/**/*.ts',
  ],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
}
