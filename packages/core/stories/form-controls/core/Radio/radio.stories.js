import { hbs } from 'ember-cli-htmlbars';
// import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Core/Form Controls/Radio',
  parameters: {
    docs: {
      description: {
        component:
          'A radio button typically represents a single option in a mutually exclusive list (where only one item can be selected at a time). Ember-elements provides `Radio` and `RadioGroup` components for these two layers.<br><br>Props<br>Typically, radio buttons are used in a group to choose one option from several, similar to how a `<select>` tag contains several `<option>` tags. As such, you can use the `RadioGroup` component with a series of Radio children. `RadioGroup` is responsible for managing state and interaction.',
      },
    },
  },
  argTypes: {
    alignIndicator: {
      description: 'Alignment of the indicator within container. The options are **left**, **center**, **right**.',
      control: {
        type: 'select',
        options: {
          left: 'left',
          right: 'right',
          center: 'center',
        },
      },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    intent: {
      description: 'Visual intent color to apply to element. Options are <b>primary,success,warning,danger,none</b>.',
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
    checked: {
      table: {
        type: {
          summary: 'boolean',
        },
      },
      description: 'Whether the control is checked.',
      control: 'boolean',
    },
    class: {
      description: 'A space-delimited list of class names to pass along to a child element.',
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    defaultChecked: {
      table: {
        type: {
          summary: 'boolean',
        },
      },
      description: 'Whether the control is initially checked (uncontrolled mode).',
      control: 'boolean',
    },
    disabled: {
      table: {
        type: {
          summary: 'boolean',
        },
      },
      description: 'Whether the control is non-interactive.',
      control: 'boolean',
    },
    inline: {
      control: 'boolean',
      description: 'Whether the control should appear as an inline element.',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    label: {
      description: 'Text label for the control.',
      control: 'string',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    labelElement: {
      description: 'Html Element for check box instead of label.',
      control: 'string',
      table: {
        type: {
          summary: 'string | HtmlElement',
        },
      },
    },
    large: {
      control: 'boolean',
      description: 'Whether this control should use large styles.',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    onChange: {
      description: 'Event handler invoked when input value is changed.',
      table: {
        type: {
          summary: 'HTMLInputElement',
        },
      },
    },
    value: {
      type: {
        required: true,
      },
      description: 'Value of this option.',
      control: 'string',
      table: {
        type: {
          summary: 'string | number',
        },
      },
    },
  },
};

const Template = (args) => ({
  template: hbs`<RadioGroup
  @label="Determine lunch"
  @name="group"
  @inline={{this.inline}}
  @selectedValue={{this.value}}
  @onChange={{this.handleRadioChange}}
>
  <Radio
    @value="one"
    @large={{this.large}}
    @disabled={{this.disabled}}
  @inline={{this.inline}}
    @alignIndicator={{this.alignIndicator}}
  >
  Soup
   </Radio>
  <Radio
    @value="two"
    @large={{this.large}}
    @disabled={{this.disabled}}
    @alignIndicator={{this.alignIndicator}}
   >
   Salad
   </Radio>
  <Radio
    @value="three"
    @large={{this.large}}
    @disabled={{this.disabled}}
    @alignIndicator={{this.alignIndicator}}
   >
   Sandwich
   </Radio>
</RadioGroup>`,
  context: args,
});

export const Radio = Template.bind({});
Radio.args = {
  alignIndicator: 'left',
  checked: false,
  defaultChecked: false,
  disabled: false,
  inline: false,
  label: 'Text label for the control.',
  large: false,
  value: 'string',
};

export const LargeRadio = Template.bind({});
LargeRadio.args = {
  alignIndicator: 'left',
  checked: false,
  defaultChecked: false,
  disabled: false,
  inline: false,
  label: 'Text label for the control.',
  large: true,
  value: 'string',
};

export const RightAlignedRadio = Template.bind({});
RightAlignedRadio.args = {
  alignIndicator: 'right',
  checked: false,
  defaultChecked: false,
  disabled: false,
  inline: false,
  label: 'Text label for the control.',
  large: true,
  value: 'string',
};

export const DisabledRadio = Template.bind({});
DisabledRadio.args = {
  alignIndicator: 'left',
  checked: false,
  defaultChecked: false,
  disabled: true,
  inline: false,
  label: 'Text label for the control.',
  large: true,
  value: 'string',
};
