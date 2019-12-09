'use strict';

module.exports = {
  name: require('./package').name,
  optionsFor(type, options) {
    if (type === 'sass') {
      options.cacheInclude = options.cacheInclude || [];
      options.cacheInclude.push(/app\.scss/);
    }

    return options;
  },
};
