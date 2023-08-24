import { hbs } from 'ember-cli-htmlbars';
// import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Core/Form Inputs/File Input',
  argTypes: {
    disabled: {
      description:
        'Whether the file input is non-interactive. Setting this to **true** will automatically disable the child input too.',
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    fill: {
      table: {
        type: {
          summary: 'boolean',
        },
      },
      description:
        'Whether the file input should take up the full width of its container.',
      control: 'boolean',
    },
    hasSelection: {
      description:
        "Whether the user has made a selection in the input. This will affect the component's text styling. Make sure to set a non-empty value for the text prop as well.",
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
      control: 'boolean',
    },
    inputProps: {
      description:
        'The props to pass to the child input. **disabled** will be ignored in favor of the top-level prop. **type** will be ignored, because the input must be **type="file". class,style,autofocus,name,readonly,required,tabIndex,fileInputId,disabled** these keys are common for inputProps object.',
      table: {
        type: {
          summary: 'object',
        },
      },
      control: 'text',
    },
    large: {
      control: 'boolean',
      description: 'Whether the file input should appear with large styling.',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    onInputChange: {
      description: 'Callback invoked on **&lt;input&gt; change** events.',
      table: {
        type: {
          summary: 'HTMLInputElement',
        },
      },
    },
    text: {
      control: 'text',
      description: 'The text to display.',
      table: {
        type: {
          summary: 'HtmlElement',
        },
      },
      defaultValue: {
        summary: '"Choose file..."',
      },
    },
  },
};

const Template = (args) => ({
  template: hbs`<FileInput
  @disabled={{this.disabled}}
  @large={{this.large}}
  @fill={{this.fill}}
  @inputProps={{this.inputProps}}
  @hasSelection={{this.hasSelection}}
>
  Choose file..
</FileInput>`,
  context: args,
});

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  fill: false,
  hasSelection: false,
  large: false,
  text: 'HtmlElement',
  defaultValue: '"Choose file..."',
  inputProps: '',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  fill: false,
  hasSelection: false,
  large: false,
  text: 'HtmlElement',
  defaultValue: '"Choose file..."',
  inputProps: '',
};

export const Filled = Template.bind({});
Filled.args = {
  disabled: false,
  fill: true,
  hasSelection: false,
  large: false,
  text: 'HtmlElement',
  defaultValue: '"Choose file..."',
  inputProps: '',
};

export const Large = Template.bind({});
Large.args = {
  disabled: false,
  fill: false,
  hasSelection: false,
  large: true,
  text: 'HtmlElement',
  defaultValue: '"Choose file..."',
  inputProps: '',
};
