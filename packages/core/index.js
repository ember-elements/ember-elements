'use strict';

module.exports = {
  name: require('./package').name,
  options: {
    'ember-cli-babel': {
      enableTypeScriptTransform: true,
    },
    nodeAssets: {
      'popper.js': {
        srcDir: 'dist/umd',
        import: ['popper.js'],
        vendor: ['popper.js.map'],
      },
    },
  },
};
