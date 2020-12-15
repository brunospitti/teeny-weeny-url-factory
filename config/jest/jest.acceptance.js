import { paths } from '../paths';

module.exports = {
  roots: [paths.root],
  rootDir: paths.root,
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  setupFiles: [require.resolve('./jest.setup.js')],
  testMatch: ['**/__tests__/*.test.acceptance.js?(x)'],
};
