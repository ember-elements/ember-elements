import { hbs } from 'ember-cli-htmlbars';
import { action } from '@ember/object';
// import { linkTo } from '@storybook/addon-links';

export default {
	title: 'Core/Components/Tag',
	parameters: {
		docs: {
			description: {
				component: 'Tags are great for lists of strings.',
			},
		},
	},
	description: 'Storybook helps you build UI components in isolation from your app',
	argTypes: {
		active: {
			table: {
				type: {
					summary: 'boolean',
				},
				defaultValue: {
					summary: false,
				},
			},
			description: 'Whether the tag should appear in an active state.',
			control: 'boolean',
		},
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

		fill: {
			description: 'Whether the tag should take up the full width of its container.',
			table: {
				type: {
					summary: 'boolean',
				},
				defaultValue: { summary: false },
			},
			control: 'boolean',
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
		interactive: {
			description:
				'Whether the tag should visually respond to user interactions. If set to <b>true</b>, hovering over the tag will change its color and mouse cursor.<br><br>Recommended when <b>onClick</b> is also defined.',
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
			description: 'Whether this tag should use large styles.',
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
			description: 'Whether this tag should use minimal styles.',
			table: {
				type: {
					summary: 'boolean',
				},
				defaultValue: {
					summary: false,
				},
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
		round: {
			control: 'boolean',
			description: 'Whether this tag should have rounded ends.',
			table: {
				type: {
					summary: 'boolean',
				},
			},
			defaultValue: {
				summary: false,
			},
		},
		// onRemove: {
		// 	description: 'Whether this tag should have a close icon on the right',
		// },
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
		value: {
			control: 'text',
			description: 'Action Text',
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
	template: hbs`<Tag
      @fill={{this.fill}}
      @large={{this.large}}
      @minimal={{this.minimal}}
      @active={{this.active}}
      @interactive={{this.interactive}}
      @round={{this.round}}
      @icon={{this.icon}}
      @rightIcon={{this.rightIcon}}
      @intent={{this.intent}}
      @value={{this.value}}
      @onRemove={{this.onRemove}}
    >
    {{this.value}}
    </Tag>`,
	context: args,
});

export const Default = Template.bind({});
Default.args = {
	className: '',
	fill: false,
	large: false,
	minimal: false,
	active: false,
	interactive: false,
	round: false,
	icon: '',
	rightIcon: '',
	intent: '',
	value: 'Sample Tag',
};

export const Primary = Template.bind({});
Primary.args = {
	className: '',
	fill: false,
	large: false,
	minimal: false,
	active: false,
	interactive: false,
	round: false,
	icon: '',
	rightIcon: '',
	intent: 'primary',
	value: 'Sample Tag',
	onRemove: (e, args) => action(console.log(`e : ${e} `, 'args: ', args), alert('onRemove action triggered'))
};

export const Success = Template.bind({});
Success.args = {
	fill: false,
	large: false,
	minimal: false,
	active: false,
	interactive: false,
	round: false,
	icon: '',
	rightIcon: '',
	intent: 'success',
	value: 'Sample Tag',
};

export const Warning = Template.bind({});
Warning.args = {
	fill: false,
	large: false,
	minimal: false,
	active: false,
	interactive: false,
	round: false,
	icon: '',
	rightIcon: '',
	intent: 'warning',
	value: 'Sample Tag',
};

export const Danger = Template.bind({});
Danger.args = {
	fill: false,
	large: false,
	minimal: false,
	active: false,
	interactive: false,
	round: false,
	icon: '',
	rightIcon: '',
	intent: 'danger',
	value: 'Sample Tag',
};

export const Large = Template.bind({});
Large.args = {
	fill: false,
	large: true,
	minimal: false,
	active: false,
	interactive: false,
	round: false,
	icon: '',
	rightIcon: '',
	intent: 'primary',
	value: 'Sample Tag',
};

export const Minimal = Template.bind({});
Minimal.args = {
	fill: false,
	large: false,
	minimal: true,
	active: false,
	interactive: false,
	round: false,
	icon: '',
	rightIcon: '',
	intent: 'primary',
	value: 'Sample Tag',
};

export const Active = Template.bind({});
Active.args = {
	fill: false,
	large: false,
	minimal: false,
	active: true,
	interactive: false,
	round: false,
	icon: '',
	rightIcon: '',
	intent: '',
	value: 'Sample Tag',
};

export const Interactive = Template.bind({});
Interactive.args = {
	fill: false,
	large: false,
	minimal: false,
	active: false,
	interactive: true,
	round: false,
	icon: '',
	rightIcon: '',
	intent: 'primary',
	value: 'Sample Tag',
};

export const Round = Template.bind({});
Round.args = {
	fill: false,
	large: false,
	minimal: false,
	active: false,
	interactive: false,
	round: true,
	icon: '',
	rightIcon: '',
	intent: 'primary',
	value: 'Sample Tag',
};

export const Icon = Template.bind({});
Icon.args = {
	fill: false,
	large: false,
	minimal: false,
	active: false,
	interactive: false,
	round: false,
	icon: 'plus',
	rightIcon: '',
	intent: 'primary',
	value: 'Sample Tag',
};

export const RightIcon = Template.bind({});
RightIcon.args = {
	fill: false,
	large: false,
	minimal: false,
	active: false,
	interactive: false,
	round: true,
	icon: '',
	rightIcon: 'lock',
	intent: 'primary',
	value: 'Sample Tag',
};


export const LeftRightIcon = Template.bind({});
LeftRightIcon.args = {
	fill: false,
	large: false,
	minimal: false,
	active: false,
	interactive: false,
	round: false,
	icon: 'plus',
	rightIcon: 'lock',
	intent: '',
	value: 'Sample Tag',
};
