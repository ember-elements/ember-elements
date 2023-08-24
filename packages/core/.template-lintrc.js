'use strict';

module.exports = {
  rules: {
    quotes: 'single',
    'no-inline-styles': false,
    'no-implicit-this': true,
    'no-pointer-down-event-binding': false,
    'no-action': false,
    'require-input-label': false,
    'no-empty-headings': false,
    'no-autofocus-attribute': false,
    'no-invalid-interactive': {
      additionalInteractiveTags: ['a'],
    },
    'attribute-indentation': false,
  },
  extends: 'recommended',
};
