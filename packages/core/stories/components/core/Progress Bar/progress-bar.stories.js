import { hbs } from 'ember-cli-htmlbars';
import { action } from '@ember/object';
// import { linkTo } from '@storybook/addon-links';

export default {
	title: 'Core/Components/Progress Bar',
	parameters: {
		docs: {
			description: {
				component:
					'Progress bars indicate progress towards the completion of a task or an indeterminate loading state.<br><br><h3>Props</h3>**ProgressBar** is a simple stateless component that renders the appropriate HTML markup. It supports a **value** prop between 0 and 1 that determines the width of the progress meter. Omitting **value** will result in an "indeterminate" progress meter that fills the entire bar.',
			},
		},
	},
	argTypes: {
		animate: {
			description: 'Whether the background should animate.',
			table: {
				type: {
					summary: 'boolean',
				},
				defaultValue: {
					summary: true,
				},
			},
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
		stripes: {
			table: {
				type: {
					summary: 'boolean',
				},
				defaultValue: {
					summary: false,
				},
			},
			description: 'Whether this navbar should be fixed to the top of the viewport (using CSS <b>position: fixed</b>).',
			control: 'boolean',
		},
		value: {
			description:
				'A value between 0 and 1 (inclusive) representing how far along the operation is. Values below 0 or above 1 will be interpreted as 0 or 1, respectively. Omitting this prop will result in an "indeterminate" progress meter that fills the entire bar.',
			table: {
				type: {
					summary: 'string',
				},
				defaultValue: {
					summary: 'none',
				},
			},
			control: { type: 'range', min: 0, max: 1, step: .1 },
		},
	},
};

const Template = (args) => ({
	template: hbs`<ProgressBar
      @intent={{this.intent}}
      @value={{this.value}}
      @animate={{this.animate}}
			@className={{this.className}}
			@stripes={{this.stripes}}
  />`,
	context: args,
});

export const Default = Template.bind({});
Default.args = {
	intent: 'primary',
	animate: true,
	value: 0.2,
	className: '',
	stripes: true,
};

export const NoAnimation = Template.bind({});
NoAnimation.args = {
	intent: 'primary',
	animate: false,
	value: 0.2,
	className: '',
	stripes: true,
};

export const NoStripe = Template.bind({});
NoStripe.args = {
	intent: 'primary',
	animate: false,
	value: 0.2,
	className: '',
	stripes: false,
};


