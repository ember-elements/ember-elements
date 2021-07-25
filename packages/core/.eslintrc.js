'use strict';

const { configs } = require('@nullvoxpopuli/eslint-configs');

const config = configs.ember();

module.exports = {
  ...config,
  overrides: [
    ...config.overrides,
    // your modifications here
    // see: https://eslint.org/docs/user-guide/configuring/configuration-files#how-do-overrides-work
  ],
  rules: {
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': 'error',
    'ember/no-computed-properties-in-native-classes': 'off',
  },
};

// 'use strict';

// module.exports = {
//   root: true,
//   parser: 'babel-eslint',
//   parserOptions: {
//     ecmaVersion: 2018,
//     sourceType: 'module',
//     ecmaFeatures: {
//       legacyDecorators: true,
//     },
//   },
//   plugins: ['ember'],
//   extends: [
//     'eslint:recommended',
//     'plugin:ember/recommended',
//     'plugin:prettier/recommended',
//   ],
//   env: {
//     browser: true,
//   },
//   rules: {},
//   overrides: [
//     // node files
//     {
//       files: [
//         '.eslintrc.js',
//         '.prettierrc.js',
//         '.template-lintrc.js',
//         'ember-cli-build.js',
//         'index.js',
//         'testem.js',
//         'blueprints/*/index.js',
//         'config/**/*.js',
//         'tests/dummy/config/**/*.js',
//       ],
//       excludedFiles: [
//         'addon/**',
//         'addon-test-support/**',
//         'app/**',
//         'tests/dummy/app/**',
//       ],
//       parserOptions: {
//         sourceType: 'script',
//       },
//       env: {
//         browser: false,
//         node: true,
//       },
//       plugins: ['node'],
//       extends: ['plugin:node/recommended'],
//     },
//   ],
// };
