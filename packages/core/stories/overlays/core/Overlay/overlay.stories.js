import { hbs } from 'ember-cli-htmlbars';
import { useArgs } from '@storybook/client-api';

export default {
  title: 'Core/Overlays/Overlay',
  parameters: {
    docs: {
      description: {
        component:
          'Overlay is a generic low-level component for rendering content on top of its siblings or above the entire application. < br > <br> An optional "backdrop" element can be rendered behind the overlaid children to provide modal behavior, whereby the overlay prevents interaction with anything behind it. <br><br> Overlay is the backbone of all the components listed in the Overlays group in the sidebar. Using Overlay directly should be rare in your application; it should only be necessary if no existing component meets your needs.',
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
      description:
        'Whether the overlay should acquire application focus when it first opens.',
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
      description:
        'Whether the overlay should be wrapped in a Portal, which renders its contents in a new element attached to portalContainer prop.',
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
      description:
        'If true and usePortal={true}, the Portal containing the children is created and attached to the DOM when the overlay is opened for the first time; otherwise this happens when the component mounts. Lazy mounting provides noticeable performance improvements if you have lots of overlays at once, such as on each row of a table.',
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
<Button @onClick={{this.onClick}} @primary={{true}}>
  Show overlay
</Button>
<Overlay
  @className='ee-overlay-scroll-container'
  @isOpen={{this.isOpen}}
  class='ee-card ee-elevation-4 docs-overlay-example-transition {{if this.useTallContent 'docs-overlay-example-tall'}}'
  @autoFocus={{this.autoFocus}}
  @enforceFocus={{this.enforceFocus}}
  @usePortal={{this.usePortal}}
  @canEscapeKeyClose={{this.canEscapeKeyClose}}
  @canOutsideClickClose={{this.canOutsideClickClose}}
  @onClose={{this.onClose}}
>
  <div>
    <h3 class='bp3-heading'>
      I'm an Overlay!
    </h3>
    <p>
      This is a simple container with some inline styles to position it on the screen. Its CSS transitions are
      customized for this example only to demonstrate how easily custom transitions can be implemented.
    </p>
    <p>
      Click the "Focus button" below to transfer focus to the "Show overlay" trigger button outside of this overlay. If
      persistent focus is enabled, focus will be constrained to the overlay. Use the
      <code class='bp3-code'>
        tab
      </code>
      key to move to the next focusable element to illustrate this effect.
    </p>
    <p>
      Click the "Make me scroll" button below to make this overlay's content really tall, which will make the overlay's
      container (but not the page) scrollable
    </p>
    <br />
    <div class='bp3-dialog-footer-actions'>
      <Button @intent='danger' @onClick={{this.onClose}}>
        Close
      </Button>
      <Button @onClick={{this.focusButton}} class='focus-button'>
        Focus button
      </Button>
      <Button
        @onClick={{this.toggleScrollButton}}
        @icon='double-chevron-down'
        @rightIcon='double-chevron-down'
        @active={{this.useTallContent}}
      >
        Make me scroll
      </Button>
    </div>
  </div>
</Overlay>
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
      focusButton: () => {
        document.querySelector('.focus-button').focus();
      },
      toggleScrollButton: () => {
        args.useTallContent = !args.useTallContent;

        updateArgs({ ...args });
      },
    },
  };
};

export const Dialog = Template.bind({});
(Dialog.storyName = 'Default dialog'),
  (Dialog.args = {
    isOpen: false,
    isCloseButtonShown: true,
    hasBackdrop: true,
    autoFocus: true,
    enforceFocus: true,
    canEscapeKeyClose: true,
    usePortal: true,
    canOutsideClickClose: true,
    useTallContent: false,
    isOpenPopper: false,
  });
