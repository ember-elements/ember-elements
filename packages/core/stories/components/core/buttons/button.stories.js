import { hbs } from 'ember-cli-htmlbars';
// import { linkTo } from '@storybook/addon-links';
import { useArgs } from '@storybook/client-api';
export default {
  title: 'Core/Components/Button',
  parameters: {
    docs: {
      description: {
        component:
          "The ***Button*** component is used to trigger actions when user clicked.<br><br><h3>Props</h3> The two button components each support arbitrary HTML props for their underlying DOM element (<b>&lt;button&gt;</b> and <b>&lt;a&gt;</b> respectively). Specifying an HTML prop will override the component's default for it, such as <b>role</b> on <b>&lt;AnchorButton&gt;</b>.",
      },
    },
  },
  argTypes: {
    text: {
      description: 'Text to be shown inside the button',
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'none',
        },
      },
    },
    active: {
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
      description:
        "If set to <b>true</b>, The button will display in an active state. This is equivalent to setting <b>className='bp3-active'</b>.",
      control: 'boolean',
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
    disabled: {
      description: 'Whether this action is non-interactive.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
      },
      control: 'boolean',
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
    fill: {
      description: 'Whether this button should expand to fill its container.',
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
      description: 'Whether this button should use large styles.',
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
      description: 'Whether this button should use minimal styles.',
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
      description: 'Whether this button should use small styles.',
      table: {
        type: {
          summary: 'boolean',
        },
      },
      defaultValue: {
        summary: false,
      },
    },
    type: {
      control: 'text',
      description: 'The type property specifies the type of button.',
      table: {
        type: {
          summary: 'string',
        },
      },
      defaultValue: {
        summary: 'button',
      },
    },
    icon: {
      description:
        'Name of a Blueprint UI icon to render before the text.<br><a href="https://dunkinbase.github.io/ember-elements/docs/icon/icons" >IconName</a>',
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: 'none' },
      },
    },
    iconSize: {
      description: 'Size of icon',
      control: 'number',
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: { summary: 16 },
      },
    },
    rightIcon: {
      description:
        'Name of a Blueprint UI icon to render after the text.<br><a href="https://dunkinbase.github.io/ember-elements/docs/icon/icons" >IconName</a>',
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: 'none' },
      },
    },
  },
};

const Template = (args) => {
  const [_, updateArgs] = useArgs();
  return {
    template: hbs`<Button
      @intent={{this.intent}}
      @active={{this.active}}
      @alignText={{this.alignText}}
      @className={{this.className}}
      style={{this.style}}
      @disabled={{this.disabled}}
      @fill={{this.fill}}
      @icon={{this.icon}}
      @iconSize={{this.iconSize}}
      @large={{this.large}}
      @minimal={{this.minimal}}
      @rightIcon={{this.rightIcon}}
      @small={{this.small}}
      @type={{this.type}}
			@onClick={{this.onClick}}
    >
      {{this.text}}
    </Button>`,
    context: {
      intent: args.intent,
      active: args.active,
      alignText: args.alignText,
      className: args.className,
      style: args.style,
      disabled: args.disabled,
      fill: args.fill,
      icon: args.icon,
      iconSize: args.iconSize,
      large: args.large,
      minimal: args.minimal,
      rightIcon: args.rightIcon,
      small: args.small,
      type: args.type,
      text: args.text,
      onClick: (a) => {
        updateArgs({ ...args });
      },
    },
  };
};

export const Primary = Template.bind({});
let args = {
  text: 'Sample Button',
  active: false,
  alignText: 'center',
  className: '',
  style: '',
  disabled: false,
  intent: 'primary',
  fill: false,
  icon: 'lock',
  iconSize: 16,
  large: false,
  minimal: false,
  rightIcon: 'share',
  small: false,
  type: 'button',
};
Primary.args = args;

export const Success = Template.bind({});
Success.args = {
  text: 'Sample Success Button',
  active: false,
  alignText: 'center',
  className: '',
  style: '',
  disabled: false,
  intent: 'success',
  fill: false,
  icon: '',
  iconSize: 16,
  large: false,
  minimal: false,
  rightIcon: '',
  small: false,
  type: 'button',
};

export const Warning = Template.bind({});
Warning.args = {
  text: 'Sample Warning Button',
  active: false,
  alignText: 'center',
  className: '',
  style: '',
  disabled: false,
  intent: 'warning',
  fill: false,
  icon: '',
  iconSize: 16,
  large: false,
  minimal: false,
  rightIcon: '',
  small: false,
  type: 'button',
};

export const Danger = Template.bind({});
Danger.args = {
  text: 'Sample Danger Button',
  active: false,
  alignText: 'center',
  className: '',
  style: '',
  disabled: false,
  intent: 'danger',
  fill: false,
  icon: '',
  iconSize: 16,
  large: false,
  minimal: false,
  rightIcon: '',
  small: false,
  type: 'button',
};

export const ActiveButton = Template.bind({});
ActiveButton.storyName = 'Active Button';
ActiveButton.args = {
  text: 'Sample Active Button',
  active: true,
  alignText: 'center',
  className: '',
  disabled: false,
  intent: 'primary',
  fill: false,
  icon: '',
  iconSize: 16,
  large: false,
  minimal: false,
  rightIcon: '',
  small: false,
  type: 'button',
};

export const DisabledButton = Template.bind({});
DisabledButton.storyName = 'Disabled Button';
DisabledButton.args = {
  text: 'Sample Disabled Button',
  active: false,
  alignText: 'center',
  className: '',
  style: '',
  disabled: true,
  intent: 'primary',
  fill: false,
  icon: '',
  iconSize: 16,
  large: false,
  minimal: false,
  rightIcon: '',
  small: false,
  type: 'button',
};

export const LargeButton = Template.bind({});
LargeButton.storyName = 'Large Button';
LargeButton.args = {
  text: 'Large Button',
  active: false,
  alignText: 'center',
  className: '',
  style: '',
  disabled: false,
  intent: 'primary',
  fill: false,
  icon: '',
  iconSize: 16,
  large: true,
  minimal: false,
  rightIcon: '',
  small: false,
  type: 'button',
};

export const MinimalButton = Template.bind({});
MinimalButton.storyName = 'Minimal Button';
MinimalButton.args = {
  text: 'Minimal Button',
  active: false,
  alignText: 'center',
  className: '',
  style: '',
  disabled: false,
  intent: 'primary',
  fill: false,
  icon: '',
  iconSize: 16,
  large: false,
  minimal: true,
  rightIcon: '',
  small: false,
  type: 'button',
};

export const SmallButton = Template.bind({});
SmallButton.storyName = 'Small Button';
SmallButton.args = {
  text: 'Large Button',
  active: false,
  alignText: 'center',
  className: '',
  style: '',
  disabled: false,
  intent: 'primary',
  fill: false,
  icon: '',
  iconSize: 16,
  large: false,
  minimal: false,
  rightIcon: '',
  small: true,
  type: 'button',
};
// TextWithAction.parameters = { notes: 'My notes on a button with emojis' };

// export const ActiveButton = () => ({
//   template: hbs`
//     <button {{action onClick}}>
//       Trigger Action
//     </button>
//   `,
//   context: {
//     onClick: () => action('This was clicked')(),
//   },
// });
// export const ButtonWithLinkToAnotherStory = () => ({
//   template: hbs`
//     <button {{action onClick}}>
//       Go to Welcome Story
//     </button>
//   `,
//   context: {
//     onClick: linkTo('example-introduction--page'),
//   },
// });

// ButtonWithLinkToAnotherStory.storyName = 'button with link to another story';
