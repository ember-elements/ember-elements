import { hbs } from 'ember-cli-htmlbars';
// import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Core/Components/Button Group',
  parameters: {
    docs: {
      description: {
        component:
          'Button group is grouping of two or more ***Button***. Button groups arrange multiple buttons in a horizontal or vertical group. Provided some of the blueprintjs button group features as follows.',
      },
    },
  },
  argTypes: {
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
      control: 'text',
    },
    fill: {
      description:
        'Whether the button group should take up the full width of its container.',
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
      description:
        'Whether the child buttons should appear with large styling.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    minimal: {
      control: 'boolean',
      description:
        'Whether the button groups should appear with minimal styling.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    vertical: {
      description:
        'Whether the button group should appear with vertical styling.',
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
      },
    },

    alignText: {
      description:
        'Text alignment within button. By default, icons and text will be centered within the button. Passing <b>"left"</b> or <b>"right"</b> will align the button text to that side and push <b>icon</b> and <b>rightIcon</b> to either edge. Passing <b>"center"</b> will center the text and icons together.',
      table: {
        type: {
          summary: 'enum',
          detail: 'possible values: left, right, center',
        },
        defaultValue: {
          summary: false,
        },
      },
      control: {
        type: 'select',
        options: {
          Left: 'left',
          Right: 'right',
          Center: 'center',
        },
      },
    },

    style: {
      description: 'Inline html style to parent element.',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'none',
        },
      },
      control: 'text',
    },
  },
};

const Template = (args) => ({
  template: hbs`<ButtonGroup
	  @className={{this.className}}
    @minimal={{this.minimal}}
    @large={{this.large}}
    @vertical={{this.vertical}}
    @fill={{this.fill}}
    @alignText={{this.alignText}}
    style={{this.style}}>
      <Button @icon='database' @type='button' > Queries </Button>
      <Button @icon='function' @type='button' >Fun </Button>
      <Button @icon='cog' @type='button' >Settings</Button>
    </ButtonGroup>`,
  context: args,
});

export const FilledButton = Template.bind({});
FilledButton.storyName = 'Filled Button';
FilledButton.args = {
  alignText: 'center',
  className: '',
  style: 'min-width:200px',
  fill: true,
  large: false,
  minimal: false,
  vertical: false,
};

export const LargeButton = Template.bind({});
LargeButton.storyName = 'Large Button';
LargeButton.args = {
  alignText: 'center',
  className: '',
  style: 'min-width:200px',
  fill: false,
  large: true,
  minimal: false,
  vertical: false,
};

export const MinimalButton = Template.bind({});
MinimalButton.storyName = 'Minimal Button';
MinimalButton.args = {
  alignText: 'center',
  className: '',
  style: 'min-width:200px',
  fill: false,
  large: false,
  minimal: true,
  vertical: false,
};

export const VerticalButton = Template.bind({});
VerticalButton.storyName = 'Vertical Button';
VerticalButton.args = {
  alignText: 'center',
  className: '',
  style: 'min-width:200px',
  fill: false,
  large: false,
  minimal: false,
  vertical: true,
};
