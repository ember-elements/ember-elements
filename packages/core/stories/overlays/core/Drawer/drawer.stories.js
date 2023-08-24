import { hbs } from 'ember-cli-htmlbars';
// import { linkTo } from '@storybook/addon-links';
import { useArgs } from '@storybook/client-api';

export default {
  title: 'Core/Overlays/Drawer',
  parameters: {
    docs: {
      description: {
        component:
          'Drawers overlay content over existing parts of the UI and are anchored to the edge of the screen.<br><br>Props<br>Use the `size` prop to set the size of the `Drawer`. This prop sets CSS `width` if `vertical={false}` (default) and `height` otherwise. Constants are available for common sizes:<ul><li>`Drawer.SIZE_SMALL = 360px`</li><li>`Drawer.SIZE_STANDARD = 50%`(default)</li><li>`Drawer.SIZE_LARGE = 90%`</li>',
      },
    },
  },
  argTypes: {
    canEscapeKeyClose: {
      description:
        'Whether pressing the **esc** key should invoke **onClose**.',
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
    canOutsideClickClose: {
      description:
        'Whether clicking outside the overlay element (either on backdrop when present or on document) should invoke **onClose**.',
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

    isOpen: {
      description:
        'Toggles the visibility of the overlay and its children. This prop is required because the component is controlled.',
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: true,
        },
      },
      type: {
        required: true,
      },
    },
    onClose: {
      description:
        "A callback that is invoked when user interaction causes the overlay to close, such as clicking on the overlay or pressing the **esc** key (if enabled).<br><br>Receives the event from the user's interaction, if there was an event (generally either a mouse or key event). Note that, since this component is controlled by the **isOpen** prop, it will not actually close itself until that prop becomes **false**.",
      table: {
        type: {
          summary: '(event?: <HTMLElement>) => void',
        },
      },
    },
    portalClassName: {
      description:
        'Space-delimited string of class names applied to the **Portal** element if **usePortal=true**.',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: 'text',
    },

    size: {
      description:
        'CSS size of the drawer. This sets **width** if **vertical={false}&& (default) and **height** otherwise.<br>Constants are available for common sizes:<ul><li><b>SIZE_SMALL = 360px</b></li><li><b>SIZE_STANDARD = 50%</b></li><li><b>SIZE_LARGE = 90%</b></li></ul>',
      table: {
        type: {
          summary: 'number | string',
        },
        defaultValue: {
          summary: '50%',
        },
      },
      control: 'text',
    },
    style: {
      description: 'CSS styles to apply to the dialog.',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: 'text',
    },

    vertical: {
      description: 'Whether the drawer should appear with vertical styling.',
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
  },
};
const Template = (args) => {
  const [, updateArgs] = useArgs();
  return {
    template: hbs`<Button @onClick={{this.onClick}} @intent='primary'
>Show Drawer</Button>
<Drawer @isOpen={{this.isOpen}} @onClose={{this.onClosed}}
 @transitionDuration={{this.transitionDuration}}
  @size={{this.size}}
	@position={{this.position}}
  @style={{this.style}}
  @vertical={{this.vertical}}
  @canOutsideClickClose={{this.canOutsideClickClose}}
  @canEscapeKeyClose={{this.canEscapeKeyClose}}
>
  <Drawer::Header>
    <Icon @icon='info-sign' @iconSize={{20}} />
    <h4 class='ee-heading'>
      Palantir Foundry
    </h4>
    <Button
      aria-label='Close'
      @className='dialog_close_button'
      @icon='small-cross'
      @iconSize={{20}}
      @minimal={{true}}
      @onClick={{this.onClosed}}
    />
  </Drawer::Header>
  <div class='ee-drawer-body'>
    <div class='ee-dialog-body'>
      <p>
        <strong>
          Data integration is the seminal problem of the digital age. For over ten years, we’ve helped the world’s
          premier organizations rise to the challenge.
        </strong>
      </p>
      <p>
        Palantir Foundry radically reimagines the way enterprises interact with data by amplifying and extending the
        power of data integration. With Foundry, anyone can source, fuse, and transform data into any shape they desire.
        Business analysts become data engineers — and leaders in their organization’s data revolution.
      </p>
      <p>
        Foundry’s back end includes a suite of best-in-class data integration capabilities: data provenance, git-style
        versioning semantics, granular access controls, branching, transformation authoring, and more. But these powers
        are not limited to the back-end IT shop.
      </p>
      <p>
        In Foundry, tables, applications, reports, presentations, and spreadsheets operate as data integrations in their
        own right. Access controls, transformation logic, and data quality flow from original data source to
        intermediate analysis to presentation in real time. Every end product created in Foundry becomes a new data
        source that other users can build upon. And the enterprise data foundation goes where the business drives it.
      </p>
      <p>
        Start the revolution. Unleash the power of data integration with Palantir Foundry.
      </p>
    </div>
  </div>
  <div class='ee-drawer-footer'>
    Footer
  </div>
</Drawer>
`,
    context: {
      class: args.class,
      usePortal: args.usePortal,
      vertical: args.vertical,
      portalClassName: args.portalClassName,
      size: args.size,
      style: args.style,
      isOpen: args.isOpen,
      canOutsideClickClose: args.canOutsideClickClose,
      canEscapeKeyClose: args.canEscapeKeyClose,

      onClick: () => {
        args.isOpen = true;

        updateArgs({ ...args });
      },

      onClosed: () => {
        args.isOpen = false;
        updateArgs({ ...args });
      },
    },
  };
};

export const Drawer = Template.bind({});
Drawer.args = {};
