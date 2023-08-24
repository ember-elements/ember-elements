import { hbs } from 'ember-cli-htmlbars';
// import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Core/Form Controls/Text Area',
  parameters: {
    docs: {
      description: {
        component:
          'The Input Group defines a field for entering a text such as password',
      },
    },
  },
  argTypes: {
    className: {
      description:
        'A space-delimited list of class names to pass along to a child element.',
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
      },
    },

    fill: {
      description: 'Whether this element should expand to fill its container.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
      },
      control: 'boolean',
    },

    large: {
      control: 'boolean',
      description: 'Whether this element should use large styles.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },

    small: {
      control: 'boolean',
      description: 'Whether this element should use small styles.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },

    intent: {
      description:
        'Visual intent color to apply to element. Options are <b>primary,success,warning,danger,none</b>.',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: 'none' },
      },
      control: {
        type: 'select',
        options: {
          primary: 'primary',
          success: 'success',
          warning: 'warning',
          danger: 'danger',
          none: 'none',
        },
      },
    },

    value: {
      description: 'the content to be in text area',
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
      },
    },

    growVertically: {
      control: 'boolean',
      description:
        'Whether this element should grow vertically as the text fills the current area',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
  },
};

const Template = (args) => ({
  template: hbs`<TextArea
  @className={{this.className}}
   @fill={{this.fill}}
  @large={{this.large}}
  @small={{this.small}}
  @intent={{this.intent}}
  @value={{this.value}}
  @growVertically={{this.growVertically}}
   @borderless={{this.borderless}}
  > </TextArea>`,
  context: args,
});

export const TextArea = Template.bind({});
TextArea.args = {};

export const FillTextArea = Template.bind({});
FillTextArea.args = { fill: true };

export const DangerTextArea = Template.bind({});
DangerTextArea.args = { intent: 'Danger' };

export const LargeTextArea = Template.bind({});
LargeTextArea.args = { large: true };

export const SmallTextArea = Template.bind({});
SmallTextArea.args = { small: true };

export const GrowTextArea = Template.bind({});
GrowTextArea.args = { growVertically: true };
