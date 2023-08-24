import { hbs } from 'ember-cli-htmlbars';
import { useArgs } from '@storybook/client-api';

export default {
  title: 'Core/Overlays/ToolTip',
  parameters: {
    docs: {
      description: {
        component:
          'A tooltip is often used to specify extra information about something when the user moves the mouse pointer over an element',
      },
    },
  },
  argTypes: {
    class: {
      description:
        'A space-delimited list of class names to pass along to a child element.',
      control: 'text',
      table: {
        type: {
          summary: 'string',
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

    isOpen: {
      description: 'Whether the tooltip should be open while the event is none',
      table: {
        type: {
          summary: 'boolean',
        },
      },
      control: 'boolean',
    },

    defaultIsOpen: {
      table: {
        type: {
          summary: 'boolean',
        },
      },
      description:
        'Whether the tooltip should be defaultly open while the event is none',
      control: 'boolean',
    },

    minimal: {
      table: {
        type: {
          summary: 'boolean',
        },
      },
      description: 'Whether the tooltip be visible with minimal style',
      control: 'boolean',
    },

    event: {
      description:
        'Option to choose the event the tooltip should have (hover,focus,none)',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: 'hover' },
      },
      control: {
        type: 'select',
        options: {
          hover: 'hover',
          focus: 'focus',
          none: 'none',
        },
      },
    },

    position: {
      description:
        'visual position of the tooltip with respect to the parent container',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: 'right' },
      },
      control: {
        type: 'select',
        options: {
          top: 'top',
          right: 'right',
          bottom: 'bottom',
          left: 'left',
        },
      },
    },
  },
};

const Template = (args) => {
  const [_, updateArgs] = useArgs();
  return {
    template: hbs`<Button @intent='primary'>
    <Tooltip @popoverClassName={{this.class}}
     @intent={{this.intent}}
      @position={{this.position}}
       @minimal={{this.minimal}}
        @isOpen={{this.isOpen}}
        @defaultIsOpen={{this.defaultIsOpen}}
        @event={{this.event}}>
      hi its me ..wake up
    </Tooltip>action
  </Button>`,
    context: {
      intent: args.intent,
      className: args.className,
      style: args.style,
      minimal: args.minimal,
      event: args.event,
      position: args.position,
      defaultIsOpen: args.defaultIsOpen,
      isOpen: args.isOpen,
    },
  };
};

export const ToolTip = Template.bind({});
ToolTip.args = {
  event: 'hover',
  intent: 'none',
  className: '',
};

export const MinimalToolTip = Template.bind({});
MinimalToolTip.args = { minimal: true };

export const bottomToolTip = Template.bind({});
bottomToolTip.args = { position: 'bottom' };

export const PrimaryIntentToolTip = Template.bind({});
PrimaryIntentToolTip.args = { position: 'bottom', intent: 'primary' };

export const SuccessIntentToolTip = Template.bind({});
SuccessIntentToolTip.args = { position: 'bottom', intent: 'success' };

export const WarningIntentToolTip = Template.bind({});
WarningIntentToolTip.args = { position: 'bottom', intent: 'warning' };

export const DangerIntentToolTip = Template.bind({});
DangerIntentToolTip.args = { position: 'bottom', intent: 'danger' };

export const DefaultOpenToolTip = Template.bind({});
DefaultOpenToolTip.args = { event: 'none', defaultIsOpen: true };

export const IsOpenToolTip = Template.bind({});
IsOpenToolTip.args = { event: 'none', isOpen: true };

export const ClickEventToolTip = Template.bind({});
ClickEventToolTip.args = { event: 'click' };

const FocusTemplate = (args) => {
  return {
    template: hbs`
<span tabindex='0' >click tab key to show tooltip
    <Tooltip @popoverClassName={{this.class}}
     @intent={{this.intent}}
      @position={{this.position}}
       @minimal={{this.minimal}}
        @isOpen={{this.isOpen}}
        @defaultIsOpen={{this.defaultIsOpen}}
        @event={{this.event}}>

      hi its me ..wake up
    </Tooltip>
  </span>`,
    context: {
      intent: args.intent,
      className: args.className,
      style: args.style,
      minimal: args.minimal,
      event: args.event,
      position: args.position,
      defaultIsOpen: args.defaultIsOpen,
    },
  };
};

export const FocusEventToolTip = FocusTemplate.bind({});
FocusEventToolTip.args = { event: 'focus' };
