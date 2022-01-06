import { hbs } from 'ember-cli-htmlbars';
// import { linkTo } from '@storybook/addon-links';

export default {
	title: 'Core/Form Controls/CheckBox',
	parameters: {
		docs: {
			description: {
				component:
					'A checkbox allows the user to toggle between checked, unchecked, and (rarely) indeterminate states.',
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
		className: {
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
		defaultIndeterminate: {
			table: {
				type: {
					summary: 'boolean',
				},
			},
			description:
				'Whether this checkbox is initially indeterminate (uncontrolled mode).',
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
		indeterminate: {
			table: {
				type: {
					summary: 'boolean',
				},
			},
			description:
				'Whether this checkbox is indeterminate, or "partially checked." The checkbox will appear with a small dash instead of a tick to indicate that the value is not exactly true or false. Note that this prop takes precendence over checked: if a checkbox is marked both checked and indeterminate via props, it will appear as indeterminate in the DOM.',
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
			description:
				'Text label for the control.',
			control: 'text',
			table: {
				type: {
					summary: 'string',
				},
			},
		},
		labelElement: {
			description:
				'Html Element for check box instead of label.',
			control: 'text',
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
	},
};

const Template = (args) => ({
	template: hbs`
<Checkbox
	@className={{this.className}}
  @disabled={{this.disabled}}
  @inline={{this.inline}}
  @large={{this.large}}
  @alignIndicator={{this.alignIndicator}}
  @defaultIndeterminate={{this.defaultIndeterminate}}
  @indeterminate={{this.indeterminate}}
	@labelElement={{this.labelElement}}
  checked={{this.checked}}
 >
 Sample Checkbox Label
 </Checkbox>`,
	context: args,
});

export const Default = Template.bind({});
Default.args = {
	className: '',
	alignIndicator: 'left',
	checked: false,
	defaultChecked: false,
	defaultIndeterminate: false,
	disabled: false,
	indeterminate: false,
	inline: false,
	label: 'Text label for the control.',
	labelElement: '',
	large: false
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
	alignIndicator: 'left',
	checked: false,
	defaultChecked: false,
	disabled: false,
	indeterminate: true,
	inline: false,
	label: 'Text label for the control.',
	large: false
};

export const DefaultIndeterminate = Template.bind({});
DefaultIndeterminate.args = {
	alignIndicator: 'left',
	checked: false,
	defaultChecked: false,
	defaultIndeterminate: true,
	disabled: false,
	indeterminate: false,
	inline: false,
	label: 'Text label for the control.',
	large: false
};

export const DefaultChecked = Template.bind({});
DefaultChecked.args = {
	alignIndicator: 'left',
	checked: false,
	defaultChecked: true,
	defaultIndeterminate: false,
	disabled: false,
	indeterminate: false,
	inline: false,
	label: 'Text label for the control.',
	large: false
};

export const Large = Template.bind({});
Large.args = {
	alignIndicator: 'left',
	checked: false,
	defaultChecked: false,
	defaultIndeterminate: false,
	disabled: false,
	indeterminate: false,
	inline: false,
	label: 'Text label for the control.',
	large: true
};

export const Disabled = Template.bind({});
Disabled.args = {
	alignIndicator: 'left',
	checked: false,
	defaultChecked: false,
	defaultIndeterminate: false,
	disabled: true,
	indeterminate: false,
	inline: false,
	label: 'Text label for the control.',
	large: false
};

export const RightAligned = Template.bind({});
RightAligned.args = {
	alignIndicator: 'right',
	checked: false,
	defaultChecked: false,
	defaultIndeterminate: false,
	disabled: false,
	indeterminate: false,
	inline: false,
	label: 'Text label for the control.',
	large: false
};

export const LabelElement = Template.bind({});
LabelElement.args = {
	alignIndicator: 'left',
	checked: false,
	defaultChecked: false,
	defaultIndeterminate: false,
	disabled: false,
	indeterminate: false,
	inline: false,
	large: false,
	labelElement: '<b>Bold label</b>'
};
