import { hbs } from 'ember-cli-htmlbars';
import { action } from '@ember/object';
// import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Core/Components/Navigation Bar',
  parameters: {
    docs: {
      description: {
        component: 'Navbars present useful navigation controls at the top of an application.',
      },
    },
  },
  argTypes: {
    className: {
      description: 'A space-delimited list of class names to pass along to a child element.',
      table: {
        category: 'Navigation Bar Props',
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'none',
        },
      },
      control: 'text',
    },
    fixedToTop: {
      table: {
        category: 'Navigation Bar Props',
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
    style: {
      description: 'Inline html style to parent element.',
      table: {
        category: 'Navigation Bar Props',
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'none',
        },
      },
      control: 'text',
    },
    align: {
      table: {
        category: 'Navigation Bar Group Props',
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'left',
        },
      },
      description:
        'The side of the navbar on which the group should appear. The <b>Alignment<b> enum provides constants for these values.("left","right","center")',
      control: {
        type: 'select',
        options: {
          left: 'left',
          right: 'right',
        },
      },
    },
    className: {
      description: 'A space-delimited list of class names to pass along to a child element.',
      table: {
        category: 'Navigation Bar Group Props',
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
        category: 'Navigation Bar Group Props',
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'none',
        },
      },
      control: 'text',
    },
    className: {
      description: 'A space-delimited list of class names to pass along to a child element.',
      table: {
        category: 'Navigation Bar Divider Props',
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
        category: 'Navigation Bar Divider Props',
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'none',
        },
      },
      control: 'text',
    },
  },
};

const Template = (args) => ({
  template: hbs`
	<Navbar @className={{this.className}} @fixedToTop={{this.fixedToTop}} style={{this.style}}>
		<NavbarGroup @align={{this.align}}>
			<NavbarHeading> ember-elements </NavbarHeading>
			<NavbarDivider />
			<Button @minimal={{true}} @icon="home">
				Home
			</Button>
			<Button @minimal={{true}} @icon="document">
				Document
			</Button>
		</NavbarGroup>
	</Navbar>
	`,
  context: args,
});

export const LeftAlignNavBar = Template.bind({});
LeftAlignNavBar.args = {
  className: '',
  fixedToTop: false,
  style: 'width:500px;',
  align: '',
};

export const RightAlignNavBar = Template.bind({});
RightAlignNavBar.args = {
  className: '',
  fixedToTop: false,
  style: 'width:500px;',
  align: 'right',
};

export const FixedToNavBar = Template.bind({});
FixedToNavBar.args = {
  className: '',
  fixedToTop: true,
  style: '',
  align: 'left',
};
