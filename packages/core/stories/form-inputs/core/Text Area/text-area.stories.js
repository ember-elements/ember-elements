import { hbs } from 'ember-cli-htmlbars';
// import { linkTo } from '@storybook/addon-links';

export default {
	title: 'Core/Form Inputs/Text Area',
	parameters: {
		docs: {
			description: {
				component: 'Apply `Classes.INPUT` on a `<textarea>`, or use the `TextArea` component.',
			},
		},
	},
	argTypes: {
		className: {
			description: 'A space-delimited list of class names to pass along to a child element.',
			control: 'text',
			table: {
				type: {
					summary: 'string',
				},
			},
		},
		fill: {
			table: {
				type: {
					summary: 'boolean',
				},
			},
			description: 'Whether the text area should take up the full width of its container.',
			control: 'boolean',
		},
		growVertically: {
			table: {
				type: {
					summary: 'boolean',
				},
			},
			description: 'Whether the text area should automatically grow vertically to accomodate content.',
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
		large: {
			description: 'Whether the text area should appear with large styling.',
			table: {
				type: {
					summary: 'boolean',
				},
			},
			control: 'boolean',
		},
		small: {
			description: 'Whether the text area should appear with small styling.',
			table: {
				type: {
					summary: 'boolean',
				},
			},
			control: 'boolean',
		},
	},
};

const Template = (args) => ({
	template: hbs`<TextArea
  @growVertically={{this.growVertically}}
  @large={{this.large}}
  @fill={{this.fill}}
  @small={{this.small}}
  @intent={{this.intent}}
  @value={{this.value}}
  @onChange={{action (mut this.value) value="target.value"}}
></TextArea>`,
	context: args,
});

export const Default = Template.bind({});
Default.args = {
	fill: false,
	growVertically: false,
	intent: 'primary',
	large: false,
	small: false,
};

export const Fill = Template.bind({});
Fill.args = {
	fill: true,
	growVertically: false,
	intent: 'primary',
	large: false,
	small: false,
};

export const Intent = Template.bind({});
Intent.args = {
	fill: false,
	growVertically: false,
	intent: 'success',
	large: false,
	small: false,
};

export const Large = Template.bind({});
Large.args = {
	fill: false,
	growVertically: false,
	intent: 'primary',
	large: true,
	small: false,
};

export const Small = Template.bind({});
Small.args = {
	fill: false,
	growVertically: false,
	intent: 'primary',
	large: false,
	small: true,
};

export const growVertically = Template.bind({});
growVertically.args = {
	fill: false,
	growVertically: true,
	intent: 'primary',
	large: false,
	small: false,
};
