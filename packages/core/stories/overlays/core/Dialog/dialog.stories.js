import { hbs } from 'ember-cli-htmlbars';
import { useArgs } from '@storybook/client-api';

export default {
  title: 'Core/Overlays/Dialog',
  parameters: {
    docs: {
      description: {
        component:
          'Dialogs present content overlaid over other parts of the UI.<br><br>Props<br>`Dialog` is a stateless component controlled by the `isOpen` prop.<br>The children you provide to this component are rendered as contents inside the `Classes.DIALOG` element. Typically, you will want to provide a child with `Classes.DIALOG_BODY` that contains the body content and a child with `Classes.DIALOG_FOOTER` that contains the action buttons.',
      },
    },
  },
  argTypes: {
    isOpen: {
      description:
        'Toggles the visibility of the overlay and its children. This prop is required because the component is controlled.',
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'false',
        },
      },
    },

    autoFocus: {
      description: 'Whether the overlay should acquire application focus when it first opens.',
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: true,
        },
      },
    },

    class: {
      description: 'A space-delimited list of class names to pass along to a child element.',
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

    usePortal: {
      description: 'whether the user portal be interactive or not on dialog popup',
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'false',
        },
      },
    },

    canEscapeKeyClose: {
      description: 'whether the dialog be able to close on escape key',
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'false',
        },
      },
    },

    canOutsideClickClose: {
      description: 'whether the dialog be able to close on outside click',
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'false',
        },
      },
    },

    lazy: {
      description: 'whether the dialog should appear with minimal style',
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'true',
        },
      },
    },

    isCloseButtonShown: {
      description: 'whether the close button appear on dialog pop up(at right corner)',
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'true',
        },
      },
    },
  },
};

const Template = (args) => {
  const [, updateArgs] = useArgs();

  return {
    template: hbs`<div>
 <Button @styleType='action' @intent='elementary' @onClick={{this.onClick}}>
      Default dialog
  </Button>

<Dialog
    @isOpen={{this.isOpen}}
  @autoFocus={{this.autoFocus}}
    @usePortal={{this.usePortal}}
    @canEscapeKeyClose={{this.canEscapeKeyClose}}
    @canOutsideClickClose={{this.canOutsideClickClose}}
    @onClose={{this.onClose}}
    @lazy={{this.lazy}}
    @className={{this.class}}
    @icon='info-sign'
    @title='Palantir Foundry'
    @isCloseButtonShown={{this.isCloseButtonShown}}
>
  <div class='ee-dialog-body'>
    <p>
      <strong>
        Data integration is the seminal problem of the digital age. For over ten years, we’ve helped the world’s premier
        organizations rise to the challenge.
      </strong>
    </p>
    <p>
      Palantir Foundry radically reimagines the way enterprises interact with data by amplifying and extending the power
      of data integration. With Foundry, anyone can source, fuse, and transform data into any shape they desire.
      Business analysts become data engineers — and leaders in their organization’s data revolution.
    </p>
    <p>
      Foundry’s back end includes a suite of best-in-class data integration capabilities: data provenance, git-style
      versioning semantics, granular access controls, branching, transformation authoring, and more. But these powers
      are not limited to the back-end IT shop.
    </p>
    <p>
      In Foundry, tables, applications, reports, presentations, and spreadsheets operate as data integrations in their
      own right. Access controls, transformation logic, and data quality flow from original data source to intermediate
      analysis to presentation in real time. Every end product created in Foundry becomes a new data source that other
      users can build upon. And the enterprise data foundation goes where the business drives it.
    </p>
    <p>
      Start the revolution. Unleash the power of data integration with Palantir Foundry.
    </p>
  </div>
  <div class='ee-dialog-footer'>
    <div class='ee-dialog-footer-actions'>
      <Button @onClick={{this.onClose}}>
        Close
      </Button>
    </div>
  </div>
</Dialog>
</div>
  `,
    context: {
      ...args,
      onClick: () => {
        console.log('asdfasfasf');
        args.isOpen = true;

        updateArgs({ ...args });
      },
      onClose: () => {
        args.isOpen = false;

        updateArgs({ ...args });
      },
    },
  };
};

export const Dialog = Template.bind({});
(Dialog.storyName = 'Default dialog'),
  (Dialog.args = {
    isOpen: false,
    canEscapeKeyClose: true,
    canOutsideClickClose: true,
    usePortal: true,
    isCloseButtonShown: true,
  });
