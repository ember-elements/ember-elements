'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
module.exports = function (defaults) {
  const options = {};

  if (defaults.project.findAddonByName('ember-native-dom-event-dispatcher')) {
    options.vendorFiles = { 'jquery.js': null };
  }

  const app = new EmberAddon(defaults, {
    // Add options here
     sassOptions: {
    includePaths: ['addon/components']
    },
    'ember-cli-babel': {
      enableTypeScriptTransform: true,
    },
      nodeAssets: {
        'popper.js': {
          srcDir: 'dist/umd',
          import: ['popper.js'],
          vendor: ['popper.js.map']
        }
    },
      ...options,

  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */
  // return app.toTree()

  const { maybeEmbroider } = require('@embroider/test-setup');
  return maybeEmbroider(app, {
    skipBabel: [
      {
        package: 'qunit',
      },
    ]
  });
};
