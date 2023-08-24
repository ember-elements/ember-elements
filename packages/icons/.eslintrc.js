'use strict';

const { configs } = require('@nullvoxpopuli/eslint-configs');

const config = configs.ember();

module.exports = {
  ...config,
  overrides: [
    ...config.overrides,
    {
      files: ['**/*.{ts,js'],
      rules: {
        'prettier/prettier': ['error', { singleQuote: true, printWidth: 120, trailingComma: 'all', bracketSpacing: true, endOfLine: 'lf',}],
        'no-multi-spaces': 'error',
        'no-multiple-empty-lines': 'error',
        'ember/no-computed-properties-in-native-classes': 'off',
      },
    },
  ],
};
