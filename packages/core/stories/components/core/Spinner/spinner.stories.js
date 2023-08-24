import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Core/Components/Spinner',
  parameters: {
    docs: {
      description: {
        component: 'Spinner is the icon to show content loading',
      },
    },
  },

  argType: {
    className: {
      description:
        'A space-delimited list of class names to pass along to a child element.',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'none',
        },
      },
      controller: 'text',
    },
    intent: {
      description:
        'Visual intent color to apply to element. Options are <b>primary,danger,elementary,secondary,</b>.',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: 'danger' },
      },
      control: {
        type: 'select',
        options: {
          primary: 'primary',
          elementary: 'elementary',
          secondary: 'secondary',
          danger: 'danger',
        },
      },
    },

    value: {
      description:
        'It shows the intensity of loading circle .Value ranges between 0 and 1 .(0.4-default,0.2-small,0.6-large)',
      table: {
        type: {
          summary: 'integer',
        },
        defaultValue: {
          summary: '0.4',
        },
      },
      controller: 'integer',
    },

    size: {
      table: {
        type: {
          summary: 'integer',
        },
        defaultValue: {
          summary: 75,
        },
      },
      description:
        'To set the size of loading icon(50-small,75-default,100-large)',
      control: 'integer',
    },
  },
};

const Template = (args) => ({
  template: hbs`<Spinner
      @intent={{this.intent}}
      @className={{this.className}}
      @value={{this.value}}
      @size={{this.size}}


      >
      this is the spinner
      </Spinner>`,
  context: args,
});

export const PrimarySpin = Template.bind({});
PrimarySpin.storyName = 'primary spinner';
PrimarySpin.args = {
  value: 0.4,
  className: '',
  intent: 'primary',
  size: 75,
};

export const SecondarySpin = Template.bind({});
SecondarySpin.storyName = 'secondary spinner';
SecondarySpin.args = {
  value: 0.4,
  className: '',
  intent: 'secondary',
  size: 75,
};

export const ElementarySpin = Template.bind({});
ElementarySpin.storyName = 'elementary spinner';
ElementarySpin.args = {
  value: 0.4,
  className: '',
  intent: 'elementary',
  size: 75,
};

export const DangerSpin = Template.bind({});
DangerSpin.storyName = 'danger spinner';
DangerSpin.args = {
  value: 0.4,
  className: '',
  intent: 'danger',
  size: 75,
};

export const LargeSpin = Template.bind({});
LargeSpin.storyName = 'Large spinner';
LargeSpin.args = {
  value: 0.4,
  className: '',
  intent: 'primary',
  size: 100,
};

export const DefaultSpin = Template.bind({});
DefaultSpin.storyName = 'Default spinner';
DefaultSpin.args = {
  value: 0.4,
  className: '',
  intent: 'primary',
  size: 75,
};

export const SmallSpin = Template.bind({});
SmallSpin.storyName = 'Small spinner';
SmallSpin.args = {
  value: 0.4,
  className: '',
  intent: 'primary',
  size: 50,
};
