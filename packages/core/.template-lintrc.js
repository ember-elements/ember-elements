'use strict';

module.exports = {
  rules: {
    quotes: 'single',
    'no-inline-styles': false,
    'no-implicit-this': true,
    'no-invalid-interactive': {
      additionalInteractiveTags: ['a'],
    },
    'attribute-indentation': false,
  },
  extends: 'recommended',
};
