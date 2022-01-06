import { hbs } from 'ember-cli-htmlbars';
// import { linkTo } from '@storybook/addon-links';

export default {
	title: 'Core/Form Controls/Control Group',
	parameters: {
		docs: {
			description: {
				component:
					'A control group renders several distinct form controls as one unit, squaring the borders between them. It supports any number of buttons, text inputs, input groups, and HTML selects as direct children. <br><br>Flex Layout<br>`ControlGroup` is a CSS inline flex row (or column if vertical) and provides some modifer props for common flexbox patterns:<br> - Enable the `fill` prop on a control group to make all controls expand equally to fill the available space. <br> - - Controls will expand horizontally by default, or vertically if the `vertical` prop is enabled.<br> - - Add the class `Classes.FIXED` to individual controls to revert them to their initial sizes.<br> - Alternatively, enable the `fill` prop on specific controls(instead of on the group) to expand them equally to fill the available space while other controls retain their original sizes. <br> You can adjust the specific size of a control with the `flex-basis` or `width` CSS properties.',
			},
		},
	},
	argTypes: {
		className: {
			description:
				'A space-delimited list of class names to pass along to a child element.',
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
			description: 'Whether this element should fill its container.',
			control: 'boolean',
		},
		vertical: {
			description:
				'Whether the control group should appear with vertical styling.',
			control: 'boolean',
			table: {
				type: {
					summary: 'boolean',
				},
			},
		},
	},
};

const Template = (args) => ({
	template: hbs`
	<ControlGroup @fill={{this.fill}} @vertical={{this.vertical}}>
	 <Button @intent="primary">
	  	Hii
	 </Button>
	 <InputGroup @placeholder="Find filters..."></InputGroup>
	 <Button @icon="arrow-right"></Button>
  </ControlGroup>`,
	context: args,
});

export const ControlGroup = Template.bind({});
ControlGroup.args = {
	className: '',
	fill: false,
	vertical: false
};
