import { hbs } from 'ember-cli-htmlbars';
import { action } from '@ember/object';
// import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Core/Components/Icon',
  parameters: {
    docs: {
      description: {
        component:
          'The ***Icon*** addon which populate <a href="https://dunkinbase.github.io/ember-elements/docs/icon/icons" >Blueprintjs</a> Icons based on icon name.',
      },
    },
  },
  argTypes: {
    className: {
      description: 'A space-delimited list of class names to pass along to a child element.',
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
      description: 'Inline html style to parent element',
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
    intent: {
      description: 'Visual intent color to apply to element. Options are <b>primary,success,warning,danger</b>.',
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
    title: {
      description:
        "Description string. This string does not appear in normal browsers, but it increases accessibility. For instance, screen readers will use it for aural feedback. By default, this is set to the icon's name.",
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: '',
        },
      },
    },
    color: {
      description:
        'Color of icon. This is used as the <b>fill</b> attribute on the <b>&lt;svg&gt;</b> image so it will override any CSS <b>color<b> property, including that set by <b>intent</b>. If this prop is omitted, icon color is inherited from surrounding text.',
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: '',
        },
      },
    },
  },
};

const Template = (args) => ({
  template: hbs`<Icon
      @icon={{this.icon}}
      @iconSize={{this.iconSize}}
      @intent={{this.intent}}
			style={{this.style}}
			@intent={{this.intent}}
			@iconSize={{this.iconSize}}
			@title={{this.title}}
			@color={{this.color}}
      />`,
  context: args,
});

export const Default = Template.bind({});
Default.args = {
  icon: 'asterisk',
  className: '',
  iconSize: '',
  style: '',
  intent: 'none',
  iconSize: 16,
  title: 'asterick icon',
  color: '',
};

export const Primary = Template.bind({});
Primary.args = {
  icon: 'asterisk',
  className: '',
  iconSize: '',
  style: '',
  intent: 'primary',
  iconSize: 16,
  title: 'asterick icon',
};

export const Success = Template.bind({});
Success.args = {
  icon: 'asterisk',
  className: '',
  iconSize: '',
  style: '',
  intent: 'success',
  iconSize: 16,
  title: 'asterick icon',
};

export const Warning = Template.bind({});
Warning.args = {
  icon: 'asterisk',
  className: '',
  iconSize: '',
  style: '',
  intent: 'warning',
  iconSize: 16,
  title: 'asterick icon',
};

export const Danger = Template.bind({});
Danger.args = {
  icon: 'asterisk',
  className: '',
  iconSize: '',
  style: '',
  intent: 'danger',
  iconSize: 16,
  title: 'asterick icon',
};

export const IconSize = Template.bind({});
IconSize.args = {
  icon: 'asterisk',
  className: '',
  iconSize: '',
  style: '',
  intent: 'none',
  iconSize: 24,
  title: 'asterick icon',
  color: '',
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  icon: 'asterisk',
  className: '',
  iconSize: '',
  style: '',
  intent: 'none',
  iconSize: 16,
  title: 'asterick icon',
  color: 'orange',
};
