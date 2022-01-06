import { hbs } from 'ember-cli-htmlbars';
// import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Core/Form Controls/Form Group',
  parameters: {
    docs: {
      description: {
        component:
          '`FormGroup` component support simple labels and additional helper text to aid with user navigation.',
      },
    },
  },
  argTypes: {
    class: {
      description:
        'A space-delimited list of class names to pass along to a child element.',
      control: 'string',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    contentClassName: {
      description:
        'A space-delimited list of class names to pass along to the **Classes.FORM_CONTENT** element that contains **children** .',
      control: 'string',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    disabled: {
      description:
        'Whether form group should appear as non-interactive. Remember that **input** elements must be disabled separately.',
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    helperText: {
      description:
        'Optional helper text. The given content will be wrapped in **Classes.FORM_HELPER_TEXT** and displayed beneath **children** . Helper text color is determined by the **intent** .',
      control: 'string',
      table: {
        type: {
          summary: 'string | HtmlElement',
        },
      },
    },
    inline: {
      table: {
        type: {
          summary: 'boolean',
        },
      },
      description: 'Whether to render the label and children on a single line.',
      control: 'boolean',
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
    label: {
      description:
        'Label of this form group.',
      control: 'string',
      table: {
        type: {
          summary: 'string | HtmlElement',
        },
      },
    },
    labelFor: {
      description:
        '**id** attribute of the labelable form element that this **FormGroup** controls, used as **<label for>** attribute.',
      control: 'string',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    labelInfo: {
      description:
        'Optional secondary text that appears after the label.',
      control: 'string',
      table: {
        type: {
          summary: 'string | HtmlElement',
        },
      },
    },
    style: {
      control: 'text',
      description: 'CSS properties to apply to the root element.',
      table: {
        type: {
          summary: 'CSSProperties',
        },
      },
    },
  },
};

const Template = (args) => ({
  template: hbs`<FormGroup
  @disabled={{this.disabled}}
  @inline={{inline}}
  @intent={{intent}}
  @label={{label}}
  @labelFor="text-input"
  @helperText={{helperText}}
  @labelInfo={{requiredLabel}}
>
  <InputGroup  placeholder="Placeholder text" @disabled={{this.disabled}} @intent={{intent}} ></InputGroup>
</FormGroup>`,
  context: args,
});

export const FormGroup = Template.bind({});
FormGroup.args = {
  disabled: false,
  helperText: 'Optional helper text',
  intent: 'primary',
  label: 'Label of this form group.',
};

export const DisabledFormGroup = Template.bind({});
DisabledFormGroup.args = {
  disabled: true,
  helperText: 'Optional helper text',
  intent: 'primary',
  label: 'Label of this form group.',
};

export const InlineFormGroup = Template.bind({});
InlineFormGroup.args = {
  inline: true,
  disabled: false,
  helperText: 'Optional helper text',
  intent: 'primary',
  label: 'Label of this form group.',
};

export const DangerFormGroup = Template.bind({});
DangerFormGroup.args = {
  inline: true,
  disabled: false,
  helperText: 'Optional helper text',
  intent: 'danger',
  label: 'Label of this form group.',
};
