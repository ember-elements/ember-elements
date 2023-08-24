'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function (defaults) {
  const app = new EmberAddon(defaults, {
    // Add options here
    // TODO disable it for now
    // eslint: {
    //   testGenerator: 'qunit',
    //   group: true,
    //   rulesDir: 'eslint-rules',
    //   extensions: ['js', 'ts'],
    // },
      sassOptions: {
        includePaths: ['addon/styles']
      },
      'ember-cli-babel': {
        enableTypeScriptTransform: true,
      },
  });

  /*
		This build file specifies the options for the dummy test app of this
		addon, located in `/tests/dummy`
		This build file does *not* influence how the addon or the app using it
		behave. You most likely want to be modifying `./index.js` or app's build file
	*/

  const { maybeEmbroider } = require('@embroider/test-setup');

  return maybeEmbroider(app, {
    skipBabel: [
      {
        package: 'qunit',
      },
    ],
  });
};
