import { hbs } from 'ember-cli-htmlbars';
// import { linkTo } from '@storybook/addon-links';

export default {
	title: 'Core/Form Controls/Switch',
	parameters: {
		docs: {
			description: {
				component:
					'A switch is simply an alternate appearance for a `checkbox` that simulates on/off instead of checked/unchecked.',
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
		checked: {
			table: {
				type: {
					summary: 'boolean',
				},
			},
			description:
				'Whether the control is checked.',
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
			description:
				'Whether the control is initially checked (uncontrolled mode).',
			control: 'boolean',
		},
		disabled: {
			table: {
				type: {
					summary: 'boolean',
				},
			},
			description:
				'Whether the control is non-interactive.',
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
		innerLabel: {
			description:
				'Text to display inside the switch indicator when unchecked.',
			control: 'string',
			table: {
				type: {
					summary: 'string',
				},
			},
		},
		innerLabelChecked: {
			description:
				'Text to display inside the switch indicator when checked. If innerLabel is provided and this prop is omitted, then innerLabel will be used for both states.',
			control: 'string',
			table: {
				type: {
					summary: 'string',
				},
			},
		},
		label: {
			description:
				'Text label for the control.',
			control: 'string',
			table: {
				type: {
					summary: 'string',
				},
			},
		},
		labelElement: {
			description:
				'Html Element for switch instead of label',
			control: 'string',
			table: {
				type: {
					summary: 'string | HtmlElement',
				},
			},
		},
		large: {
			onChange: {
				description: 'Event handler invoked when input value is changed.',
				table: {
					type: {
						summary: 'HTMLInputElement',
					},
				},
			},
		},
	}
};

const Template = (args) => ({
	template: hbs`
<Switch
  @disabled={{this.disabled}}
  @inline={{inline}}
  @large={{large}}
  @alignIndicator={{this.alignIndicator}}
  @labelElement="<u>Cooperative</u>"
  @defaultChecked={{this.defaultChecked}}
  @innerLabel={{this.innerLabel}}
  @innerLabelChecked={{this.innerLabelChecked}}
 ></Switch>`,
	context: args,
});

export const Switch = Template.bind({});
Switch.args = {
	alignIndicator: 'left',
	checked: false,
	defaultChecked: false,
	disabled: false,
	inline: false,
	label: 'Text label for the control.',
	large: false
};

export const InnerLabelSwitch = Template.bind({});
InnerLabelSwitch.args = {
	alignIndicator: 'left',
	checked: false,
	defaultChecked: false,
	disabled: false,
	inline: false,
	innerLabel: 'Off',
	innerLabelChecked: 'On',
	label: 'Text label for the control.',
	large: false
};

export const DisabledSwitch = Template.bind({});
DisabledSwitch.args = {
	alignIndicator: 'left',
	checked: false,
	defaultChecked: false,
	disabled: true,
	inline: false,
	label: 'Text label for the control.',
	large: false
};

export const LargeSwitch = Template.bind({});
LargeSwitch.args = {
	alignIndicator: 'left',
	checked: false,
	defaultChecked: true,
	disabled: false,
	inline: false,
	label: 'Text label for the control.',
	large: true
};

export const RighAlignSwitch = Template.bind({});
RighAlignSwitch.args = {
	alignIndicator: 'right',
	checked: false,
	defaultChecked: true,
	disabled: false,
	inline: false,
	label: 'Text label for the control.',
	large: true
};
