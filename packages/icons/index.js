'use strict';

module.exports = {
  name: require('./package').name,
   options: {
   'ember-cli-babel': {
     enableTypeScriptTransform: true,
   },
  }
  // Disable it for now

  // optionsFor(type, options) {
  //   if (type === 'sass') {
  //     options.cacheInclude = options.cacheInclude || [];
  //     options.cacheInclude.push(/app\.scss/);
  //   }

  //   return options;
  // },
};
