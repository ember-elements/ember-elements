import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import { set, get } from '@ember/object';
import { action, computed } from '@ember-decorators/object';

import * as Classes from "../../-private/common/classes";
import * as Keys from "../../-private/common/keys";

export default class Overlay extends Component.extend({
  // anything which *must* be merged to prototype here
}) {
  layout = layout;

  className?: string;

  autoFocus: boolean = true;

  canEscapeKeyClose: boolean = true;

  enforceFocus?: boolean = true;

  lazy: boolean = true;

  transitionDuration: number = 300;

  usePortal: boolean = true;

  portalClassName?: string;

  onClose!: (event?: HTMLElement) => void;

  onBackDropMouseDown!: (event?: MouseEvent) => void;

  //IBackdropProps--------------------

  /** CSS class names to apply to backdrop element. */
  backdropClassName?: string;

  /** HTML props for the backdrop element. */
  backdropProps: any = {};

  /**
   * Whether clicking outside the overlay element (either on backdrop when present or on document)
   * should invoke `onClose`.
   * @default true
   */
  canOutsideClickClose: boolean = true;

  /**
   * Whether a container-spanning backdrop element should be rendered behind the contents.
   * @default true
   */
  hasBackdrop: boolean = true;

  /**
 * Toggles the visibility of the overlay and its children.
 * This prop is required because the component is controlled.
 */
  isOpen?: boolean;

  containerClassName?: string;

  transitionName: string = Classes.OVERLAY;

  destinationElementId = "destination";

  // overlay state
  hasEverOpened?: boolean;

  containerElement: any;

  // custom id for overlay and attached with current elementId
  overLayCustomId = "";
  containerTransitionId = "";

  //ember css transition state handling
  isShowContentAnimation = true;

  private prevPropsIsOpen = false;
  private static openStack: Overlay[] = [];
  private static getLastOpened = () => Overlay.openStack[Overlay.openStack.length - 1];
  private OverlayId = "overlay_id_";
  private containerId = "transition_id_";

  @computed('className', 'hasEverOpened', 'usePortal')
  get mainContainerClasses() {
    return `${this.OVERLAY} ${this.hasEverOpened ? this.OVERLAY_OPEN : ''} ${this.usePortal ? '' : this.OVERLAY_INLINE} ${this.className ? this.className : ''}`;
  }

  @computed('backdropClassName', 'backdropProps.className')
  get backdropClassNames() {
    return `${this.OVERLAY_BACKDROP} ${this.backdropProps.className ? this.backdropProps.className : ''} ${this.backdropClassName ? this.backdropClassName : ''}`;
  }
  @computed('containerClassName')
  get containerClasses() {
    return `${this.OVERLAY_CONTENT} ${this.containerClassName ? this.containerClassName : ''}`;
  }

  //life cycle 
  async didReceiveAttrs() {

    if (this.prevPropsIsOpen && !this.isOpen) {
      await set(this, 'isShowContentAnimation', false);
      setTimeout(() => {
        if (!this.isDestroyed)
          set(this, "hasEverOpened", this.isOpen ? true : false);
        if (!this.hasEverOpened) {
          this.overlayWillClose();
        }
      }, this.transitionDuration);
    }
    else {
      await set(this, 'isShowContentAnimation', true);
      set(this, "hasEverOpened", this.isOpen ? true : false);
    }

    if (this.prevPropsIsOpen && !this.isOpen) {
      this.prevPropsIsOpen = this.isOpen as boolean;
      this.overlayWillClose();
    } else if (!this.prevPropsIsOpen && this.isOpen) {
      this.prevPropsIsOpen = this.isOpen as boolean;
      this.getRefElement();
      this.overlayWillOpen();
    }

  }

  didRender() {
    this.getRefElement();
    if (document.getElementById(this.containerTransitionId)) {
      (document.getElementById(this.containerTransitionId) as HTMLElement).tabIndex = 0;
    }
  }

  didInsertElement() {
    if (this.isOpen) {
      this.overlayWillOpen();
    }
    set(this, 'overLayCustomId', this.OverlayId + this.elementId);
    set(this, 'containerTransitionId', this.containerId + this.elementId);
  }

  willDestroyElement() {
    this.overlayWillClose();
  }

  // classbindings
  OVERLAY = Classes.OVERLAY;
  OVERLAY_OPEN = Classes.OVERLAY_OPEN;
  OVERLAY_INLINE = Classes.OVERLAY_INLINE;
  OVERLAY_BACKDROP = Classes.OVERLAY_BACKDROP;
  OVERLAY_CONTENT = Classes.OVERLAY_CONTENT;

  @action
  handleKeyDown(e: KeyboardEvent) {
    const { canEscapeKeyClose, onClose } = this;
    if (e.which === Keys.ESCAPE && canEscapeKeyClose) {
      if (onClose) {
        get(this, 'onClose')(e as any);
      }
      e.preventDefault();
    }
  }

  @action
  handleBackdropMouseDown(e: MouseEvent) {
    const { onBackDropMouseDown, canOutsideClickClose, enforceFocus, onClose } = this;
    if (canOutsideClickClose) {
      if (onClose) {
        get(this, 'onClose')(e as any);
      }
    }
    if (enforceFocus) {
      // make sure document.activeElement is updated before bringing the focus back
      this.bringFocusInsideOverlay();
    }
    if (onBackDropMouseDown) {
      get(this, "onBackDropMouseDown")(e);
    }
  };

  public bringFocusInsideOverlay() {
    // always delay focus manipulation to just before repaint to prevent scroll jumping
    return requestAnimationFrame(() => {
      // container ref may be undefined between component mounting and Portal rendering
      // activeElement may be undefined in some rare cases in IE
      if (this.containerElement == null || document.activeElement == null || !this.isOpen) {
        return;
      }

      const isFocusOutsideModal = !this.containerElement.contains(document.activeElement);
      if (isFocusOutsideModal) {
        // element marked autofocus has higher priority than the other clowns
        const autofocusElement = this.containerElement.querySelector("[autofocus]") as HTMLElement;
        const wrapperElement = this.containerElement;
        if (autofocusElement != null) {
          autofocusElement.focus();
        } else if (wrapperElement != null) {
          wrapperElement.focus();
        }
      }
    });
  }

  private overlayWillOpen() {
    const { openStack } = Overlay;
    if (openStack.length > 0) {
      document.removeEventListener("focus", Overlay.getLastOpened().handleDocumentFocus, /* useCapture */ true);
    }

    openStack.push(this);

    if (this.autoFocus) {
      this.bringFocusInsideOverlay();
    }
    if (this.enforceFocus) {
      document.addEventListener("focus", this.handleDocumentFocus, /* useCapture */ true);
    }

    if (this.canOutsideClickClose && !this.hasBackdrop) {
      document.addEventListener("mousedown", this.handleDocumentClick);
    }

    if (this.hasBackdrop && this.usePortal) {
      // add a class to the body to prevent scrolling of content below the overlay
      document.body.classList.add(Classes.OVERLAY_OPEN);
    }
  }

  private handleDocumentFocus = (e: FocusEvent) => {
    if (
      this.enforceFocus &&
      this.containerElement != null &&
      !this.containerElement.contains(e.target as HTMLElement)
    ) {
      // prevent default focus behavior (sometimes auto-scrolls the page)
      e.preventDefault();
      e.stopImmediatePropagation();

      this.bringFocusInsideOverlay();
    }
  }

  private handleDocumentClick = (e: MouseEvent) => {
    const { canOutsideClickClose, isOpen, onClose } = this;
    const eventTarget = e.target as HTMLElement;
    const stackIndex = Overlay.openStack.indexOf(this);
    const isClickInThisOverlayOrDescendant = Overlay.openStack
      .slice(stackIndex)
      .some(({ containerElement: elem }) => {
        // `elem` is the container of backdrop & content, so clicking on that container
        // should not count as being "inside" the overlay.
        return elem && elem.contains(eventTarget) && !elem.isSameNode(eventTarget);
      });

    if (isOpen && canOutsideClickClose && !isClickInThisOverlayOrDescendant) {
      // casting to any because this is a native event
      if (onClose) {
        get(this, 'onClose')(e as any);
      }

    }
  }

  private overlayWillClose() {
    document.removeEventListener("focus", this.handleDocumentFocus, /* useCapture */ true);
    document.removeEventListener("mousedown", this.handleDocumentClick);

    const { openStack } = Overlay;
    const stackIndex = openStack.indexOf(this);
    if (stackIndex !== -1) {
      openStack.splice(stackIndex, 1);
      if (openStack.length > 0) {
        const lastOpenedOverlay = Overlay.getLastOpened();
        if (lastOpenedOverlay.enforceFocus) {
          document.addEventListener("focus", lastOpenedOverlay.handleDocumentFocus, /* useCapture */ true);
        }
      }

      if (openStack.filter(o => o.usePortal && o.hasBackdrop).length === 0) {
        document.body.classList.remove(Classes.OVERLAY_OPEN);
      }
    }
  }

  private getRefElement() {
    const ref = document.getElementById(this.containerTransitionId);

    if (ref)
      set(this, 'containerElement', ref);
  }
};
