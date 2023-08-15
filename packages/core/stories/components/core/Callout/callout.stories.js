import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Core/Components/Callout',
  parameters: {
    docs: {
      description: {
        component:
          'Callouts visually highlight important content for the user. They can contain a title, an icon and content. Each intent has a default icon associated with it.',
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
    intent: {
      description:
        'Visual intent color to apply to background, title, and icon.<br><br>Defining this prop also applies a default icon, if the icon prop is omitted.',
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
        'Name of a UI icon name to render on the left side.<br><br>If this prop is omitted or <b>undefined</b>, the <b>intent</b> prop will determine a default icon. If this prop is explicitly <b>null</b>, no icon will be displayed (regardless of <b>intent</b>).<br><a href="https://dunkinbase.github.io/ember-elements/docs/icon/icons" >IconName</a>',
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: 'none' },
      },
    },

    title: {
      control: 'text',
      description:
        'String content of optional title element.<br><br>Due to a conflict with the HTML prop types, to provide html element content simply pass <b>&lt;h4&gt;title content&lt;/h4&gt;</b> as first children element instead of using this prop.',
      table: {
        type: {
          summary: 'string',
        },
      },
      defaultValue: {
        summary: 'none',
      },
    },
  },
};

const Template = (args) => ({
  template: hbs`<Callout
			@className={{this.className}}
      @title={{this.title}}
      @icon={{this.icon}}
      @intent={{this.intent}}
    >
      The component is a simple wrapper around the CSS API
      that provides props for modifiers and optional
      title element. Any additional HTML props will be spread to the rendered
      <code class="ee-code">&lt;div&gt;</code>
      element.
    </Callout>`,
  context: args,
});

export const IconCallout = Template.bind({});
IconCallout.storyName = 'Callout with Icon';
IconCallout.args = {
  className: '',
  title: 'Visually important content',
  icon: 'lock',
  intent: 'none',
};

export const TitleCallout = Template.bind({});
TitleCallout.storyName = 'Callout with Title';
TitleCallout.args = {
  className: '',
  title: 'Visually important content',
  icon: 'lock',
  intent: 'none',
};

export const PrimaryCallout = Template.bind({});
PrimaryCallout.storyName = 'Callout with Primary intent';
PrimaryCallout.args = {
  className: '',
  title: 'Primary Callout',
  icon: 'lock',
  intent: 'primary',
};

export const SuccessCallout = Template.bind({});
SuccessCallout.storyName = 'Callout with Success intent';
SuccessCallout.args = {
  className: '',
  title: 'Success Callout',
  icon: 'lock',
  intent: 'success',
};

export const WarningCallout = Template.bind({});
WarningCallout.storyName = 'Callout with Warning intent';
WarningCallout.args = {
  className: '',
  title: 'Warning Callout',
  icon: 'lock',
  intent: 'warning',
};

export const DangerCallout = Template.bind({});
DangerCallout.storyName = 'Callout with Danger intent';
DangerCallout.args = {
  className: '',
  title: 'Danger Callout',
  icon: 'lock',
  intent: 'danger',
};
