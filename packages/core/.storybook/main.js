module.exports = {
  stories: [
    '../stories/components/core/**/*.stories.js',
    '../stories/form-controls/core/**/*.stories.js',
    '../stories/form-inputs/core/**/*.stories.js',
    '../stories/overlays/core/**/*.stories.js',
  ],
  // stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-essentials'],
};
