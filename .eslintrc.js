module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
  },
  extends: [
    'airbnb-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
    warnOnUnsupportedTypeScriptVersion: false,
  },
  rules: {
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-no-bind': 'off',
    'react/no-unused-prop-types': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.{ts,tsx}',
          '**/*.spec.{ts,tsx}',
          '**/*.story.tsx',
          '**/__tests__/**',
          '**/__mocks__/**',
          '**/scripts/**/*.js',
          '**/config/**/*.js',
          '**/setupTests.{js,ts}',
          '**/testUtils.{js,ts}',
          '**/jest.config.js',
          '**/cypress/**',
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.stories.tsx'],
      rules: {
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'function',
            format: null,
          },
        ],
      },
    },
    {
      files: ['**/*.test.ts'],
      env: {
        jest: true,
      },
    },
  ],
};