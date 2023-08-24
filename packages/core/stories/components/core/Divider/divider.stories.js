import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Core/Components/Divider',
  parameters: {
    docs: {
      description: {
        component: 'divider',
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
        defaultValue: {
          summary: 'none',
        },
      },
    },
    tagName: {
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'none',
        },
      },
      description: 'tag',
      control: 'text',
    },
  },
};

const Template = (args) => ({
  template: hbs`
			<ButtonGroup minimal={{true}} @vertical={{this.vertical}}>
			  <Button @intent='secondary'> add </Button>

				<Button @intent='secondary'> delete </Button>
			<Divider
      @tagName={{this.tagName}}
      @className={{this.className}}
      />

			<Button @intent='secondary'> Save </Button>
			<Button @intent='secondary'> Cancel </Button>

				<Divider
      @tagName={{this.tagName}}
      @className={{this.className}}
      />

			<Button @icon='add' @intent='secondary' />
			<Button @icon='minus' @intent='secondary' />

			</ButtonGroup>`,
  context: args,
});

export const Divider = Template.bind({});
(Divider.storyName = 'Divider'),
  (Divider.args = {
    tagName: 'divider',
    className: '',
    vertical: false,
  });

export const VerticalDivider = Template.bind({});
(VerticalDivider.storyName = 'VerticalDivider'),
  (VerticalDivider.args = {
    tagName: 'divider',
    className: '',
    vertical: true,
  });
