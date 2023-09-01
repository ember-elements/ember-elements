import './style.css';
export const parameters = {
  // layout: 'centered',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  controls: { expanded: true },
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: { inlineStories: false, iframeHeight: 'auto' },
  layout: 'centered',
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark'],
    },
  },
};
