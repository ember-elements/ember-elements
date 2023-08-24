import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Core/Components/Html Table',
  parameters: {
    docs: {
      description: {
        component:
          ' HTML tables allow web developers to arrange data into rows and columns. ',
      },
    },
  },

  argTypes: {
    class: {
      description:
        'A space-delimited list of class names to pass along to a child element.',
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
    bordered: {
      description: 'Whether the table be bordered',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
      },
      control: 'boolean',
    },

    condensed: {
      description: 'Whether the table be condensed',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
      },
      control: 'boolean',
    },

    striped: {
      description: 'Whether the table be striped.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
      },
      control: 'boolean',
    },

    interactive: {
      description: 'Whether the table be interactive',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
      },
      control: 'boolean',
    },
  },
};
const Template = (args) => ({
  template: hbs`<HtmlTable

      @className={{this.class}}
      @bordered={{this.bordered}}
      @condensed={{this.condensed}}
      @striped={{this.striped}}
      @interactive={{this.interactive}}
      ><thead>
    <tr>
      <th>HEXNODE
      </th>
      <th>MITSOGO
      </th>
      <th>HEXNODE
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>hexnode
      </td>
      <td>mitsogo
      </td>
      <td>hexnode
      </td>
    </tr>
    <tr>
      <td>mitsogo
      </td>
      <td>hexnode
      </td>
      <td>mitsogo
      </td>
    </tr>
    <tr>
      <td>hexnode
      </td>
      <td>mitsogo
      </td>
      <td>hexnode
      </td>
    </tr>
  </tbody></HtmlTable>`,
  context: args,
});

export const HtmlTable = Template.bind({});
HtmlTable.args = {};

export const BorderedHtmlTable = Template.bind({});
BorderedHtmlTable.args = { bordered: true };

export const CondensedHtmlTable = Template.bind({});
CondensedHtmlTable.args = { condensed: true };

export const StripedHtmlTable = Template.bind({});
StripedHtmlTable.args = { striped: true };

export const InteractiveHtmlTable = Template.bind({});
InteractiveHtmlTable.args = { interactive: true };
