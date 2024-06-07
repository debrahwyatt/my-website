module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '\\.css$': 'jest-css-modules-transform',
  },
  moduleNameMapper: {
    '\\.(mp3|wav)$': '<rootDir>/node_modules/file-loader/dist/index.js',
    '\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/node_modules/file-loader/dist/index.js',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
