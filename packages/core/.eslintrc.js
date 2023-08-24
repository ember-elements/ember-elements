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
        'no-multi-spaces': 'error',
        'no-multiple-empty-lines': 'error',
        'ember/no-computed-properties-in-native-classes': 'off',
      },
    },
  ],
};
