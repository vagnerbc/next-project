// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  clearMocks: true,
  setupFiles: ['<rootDir>/src/jest/index.ts'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  coverageDirectory: '<rootDir>/jest/coverage',
  testMatch: ['**/__tests__/**/*.test.ts?(x)'],
  coveragePathIgnorePatterns: ['.stories.tsx'],
  // Ignorable test files
  testPathIgnorePatterns: [],
  coverageReporters: ['json', 'lcov']
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)