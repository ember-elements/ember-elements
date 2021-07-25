import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { assert } from '@ember/debug';
import { action } from '@ember/object';

import * as Classes from '../../_private/common/classes';
import * as Keys from '../../_private/common/keys';

import type { IProps } from '../../_private/common';

export interface IOverlayableProps {
  /**
   * Whether the overlay should acquire application focus when it first opens.
   * @default true
   */
  autoFocus?: boolean;

  /**
   * Whether pressing the `esc` key should invoke `onClose`.
   * @default true
   */
  canEscapeKeyClose?: boolean;

  /**
   * Whether the overlay should prevent focus from leaving itself. That is, if the user attempts
   * to focus an element outside the overlay and this prop is enabled, then the overlay will
   * immediately bring focus back to itself. If you are nesting overlay components, either disable
   * this prop on the "outermost" overlays or mark the nested ones `usePortal={false}`.
   * @default true
   */
  enforceFocus?: boolean;

  /**
   * If `true` and `usePortal={true}`, the `Portal` containing the children is created and attached
   * to the DOM when the overlay is opened for the first time; otherwise this happens when the
   * component mounts. Lazy mounting provides noticeable performance improvements if you have lots
   * of overlays at once, such as on each row of a table.
   * @default true
   */
  lazy?: boolean;

  /**
   * Indicates how long (in milliseconds) the overlay's enter/leave transition takes.
   * This is used by React `CSSTransition` to know when a transition completes and must match
   * the duration of the animation in CSS. Only set this prop if you override Blueprint's default
   * transitions with new transitions of a different length.
   * @default 300
   */
  transitionDuration?: number;

  /**
   * Whether the overlay should be wrapped in a `Portal`, which renders its contents in a new
   * element attached to `portalContainer` prop.
   *
   * This prop essentially determines which element is covered by the backdrop: if `false`,
   * then only its parent is covered; otherwise, the entire page is covered (because the parent
   * of the `Portal` is the `<body>` itself).
   *
   * Set this prop to `false` on nested overlays (such as `Dialog` or `Popover`) to ensure that they
   * are rendered above their parents.
   * @default true
   */
  usePortal?: boolean;

  /**
   * Space-delimited string of class names applied to the `Portal` element if
   * `usePortal={true}`.
   */
  portalClassName?: string;

  /**
   * The container element into which the overlay renders its contents, when `usePortal` is `true`.
   * This prop is ignored if `usePortal` is `false`.
   * @default document.body
   */
  portalContainer?: HTMLElement;

  /**
   * A callback that is invoked when user interaction causes the overlay to close, such as
   * clicking on the overlay or pressing the `esc` key (if enabled).
   *
   * Receives the event from the user's interaction, if there was an event (generally either a
   * mouse or key event). Note that, since this component is controlled by the `isOpen` prop, it
   * will not actually close itself until that prop becomes `false`.
   */
  onClose?: (event?: HTMLElement | KeyboardEvent | MouseEvent) => void;

  onBackDropMouseDown?: (event?: MouseEvent) => void;
}

export interface IBackdropProps {
  /** CSS class names to apply to backdrop element. */
  backdropClassName?: string;

  /** HTML props for the backdrop element. */
  backdropProps?: HTMLDivElement;

  /**
   * Whether clicking outside the overlay element (either on backdrop when present or on document)
   * should invoke `onClose`.
   * @default true
   */
  canOutsideClickClose?: boolean;

  /**
   * Whether a container-spanning backdrop element should be rendered behind the contents.
   * @default true
   */
  hasBackdrop?: boolean;
}

export interface IOverlayProps extends IBackdropProps, IOverlayableProps {
  /**
   * Toggles the visibility of the overlay and its children.
   * This prop is required because the component is controlled.
   */
  isOpen: boolean;

  /**
   * Name of the transition for internal `CSSTransition`.
   * Providing your own name here will require defining new CSS transition properties.
   * @default Classes.OVERLAY
   */
  transitionName?: string;
}

interface OverlayArgs extends IOverlayProps, IProps {
  props: OverlayArgs;
}

export default class Overlay extends Component<OverlayArgs> {
  containerElement!: HTMLElement;
  OVERLAY = Classes.OVERLAY;
  OVERLAY_OPEN = Classes.OVERLAY_OPEN;
  OVERLAY_INLINE = Classes.OVERLAY_INLINE;
  OVERLAY_BACKDROP = Classes.OVERLAY_BACKDROP;
  OVERLAY_CONTENT = Classes.OVERLAY_CONTENT;
  PORTAL = Classes.PORTAL;

  popperContainer = '.ember-application';
  prevPropsIsOpen = false;
  @tracked hasEverOpened = false;
  //ember css transition state handling
  @tracked isShowContentAnimation = true;

  @tracked getHasBackdropState = true;

  get props() {
    return this.args.props || {};
  }

  get getClassName() {
    let className;

    if (this.args.className != undefined) {
      className = this.args.className;
    } else if (this.props.className != undefined) {
      className = this.props.className;
    }

    return className;
  }

  get getPortalClassName() {
    let portalClassName;

    if (this.args.portalClassName != undefined) {
      portalClassName = this.args.portalClassName;
    } else if (this.props.portalClassName != undefined) {
      portalClassName = this.props.portalClassName;
    }

    return portalClassName;
  }

  get getBackdropClassName() {
    let backdropClassName;

    if (this.args.backdropClassName != undefined) {
      backdropClassName = this.args.backdropClassName;
    } else if (this.props.backdropClassName != undefined) {
      backdropClassName = this.props.backdropClassName;
    }

    return backdropClassName;
  }

  get getTransitionName() {
    let transitionName = this.OVERLAY;

    if (this.args.transitionName != undefined) {
      transitionName = this.args.transitionName;
    } else if (this.props.transitionName != undefined) {
      transitionName = this.props.transitionName;
    }

    return transitionName;
  }

  get getLazyProp() {
    return this.getLazy();
  }

  get renderInPlace() {
    return !this.getUsePortal();
  }

  get getUserPortalPro() {
    return this.getUsePortal();
  }

  get getHasBackdropProp() {
    const hasBackDrop = this.getHasBackdrop();

    this.getHasBackdropState = hasBackDrop; // eslint-disable-line

    return hasBackDrop;
  }

  get getCanOutsideClickCloseProp() {
    return this.getCanOutsideClickClose();
  }

  get getIsOpenProp() {
    this.didReceiveAttributes();

    return this.getIsOpen();
  }

  get _overlayContainer() {
    const renderInPlace = !this.getUsePortal();
    const maybeContainer = this.popperContainer;

    let popperContainer;

    if (renderInPlace) {
      popperContainer = null;
    } else if (typeof maybeContainer === 'string') {
      const selector = maybeContainer;
      const possibleContainers = self.document.querySelectorAll(selector);

      assert(
        `ember-popper with popperContainer selector "${selector}" found ` +
          `${possibleContainers.length} possible containers when there should be exactly 1`,
        possibleContainers.length === 1
      );

      popperContainer = possibleContainers[0];
    }

    return popperContainer;
  }

  get hasEverOpenedProp() {
    return this.hasEverOpened ? this.OVERLAY_OPEN : '';
  }
  get getHasEverOpened() {
    return this.hasEverOpened;
  }

  getautoFoucs() {
    let autoFocus = true;

    if (this.args.autoFocus != undefined) {
      autoFocus = this.args.autoFocus;
    } else if (this.props.autoFocus != undefined) {
      autoFocus = this.props.autoFocus;
    }

    return autoFocus;
  }

  getCanEscapeKeyClose() {
    let canEscapeKeyClose = true;

    if (this.args.canEscapeKeyClose != undefined) {
      canEscapeKeyClose = this.args.canEscapeKeyClose;
    } else if (this.props.canEscapeKeyClose != undefined) {
      canEscapeKeyClose = this.props.canEscapeKeyClose;
    }

    return canEscapeKeyClose;
  }

  getEnforceFocus() {
    let enforceFocus = true;

    if (this.args.enforceFocus != undefined) {
      enforceFocus = this.args.enforceFocus;
    } else if (this.props.enforceFocus != undefined) {
      enforceFocus = this.props.enforceFocus;
    }

    return enforceFocus;
  }

  getLazy() {
    let lazy = true;

    if (this.args.lazy != undefined) {
      lazy = this.args.lazy;
    } else if (this.props.lazy != undefined) {
      lazy = this.props.lazy;
    }

    return lazy;
  }

  getTransitionDuration() {
    let transitionDuration = 300;

    if (this.args.transitionDuration != undefined) {
      transitionDuration = this.args.transitionDuration;
    } else if (this.props.transitionDuration != undefined) {
      transitionDuration = this.props.transitionDuration;
    }

    return transitionDuration;
  }

  getUsePortal() {
    let usePortal = true;

    if (this.args.usePortal != undefined) {
      usePortal = this.args.usePortal;
    } else if (this.props.usePortal != undefined) {
      usePortal = this.props.usePortal;
    }

    return usePortal || false;
  }

  getCanOutsideClickClose() {
    let canOutsideClickClose = true;

    if (this.args.canOutsideClickClose != undefined) {
      canOutsideClickClose = this.args.canOutsideClickClose;
    } else if (this.props.canOutsideClickClose != undefined) {
      canOutsideClickClose = this.props.canOutsideClickClose;
    }

    return canOutsideClickClose;
  }

  getHasBackdrop() {
    let hasBackdrop = true;

    if (this.args.hasBackdrop != undefined) {
      hasBackdrop = this.args.hasBackdrop;
    } else if (this.props.hasBackdrop != undefined) {
      hasBackdrop = this.props.hasBackdrop;
    }

    return hasBackdrop;
  }

  getIsOpen() {
    let isOpen = false;

    if (this.args.isOpen != undefined) {
      isOpen = this.args.isOpen;
    } else if (this.props.isOpen != undefined) {
      isOpen = this.props.isOpen;
    }

    return isOpen;
  }

  @action
  getRefElement(element: HTMLElement) {
    this.containerElement = element;
    element.tabIndex = 0;
  }

  @action
  didUpdateElement(_element: HTMLElement) {
    if (this.getIsOpen()) {
      this.overlayWillOpen();
    }
  }

  @action
  willDestroyElementComp() {
    this.overlayWillClose();
  }

  private static openStack: Overlay[] = [];
  private static getLastOpened = () => Overlay.openStack[Overlay.openStack.length - 1];

  didReceiveAttributes() {
    if (this.prevPropsIsOpen && !this.getIsOpen()) {
      this.getHasBackdropState = false;
      this.isShowContentAnimation = false;

      setTimeout(() => {
        if (!this.isDestroyed) this.hasEverOpened = this.getIsOpen() ? true : false;
        this.prevPropsIsOpen = this.getIsOpen() ? true : false;

        if (!this.hasEverOpened) {
          this.overlayWillClose();
        }
      }, this.getTransitionDuration());
    } else {
      this.isShowContentAnimation = true;
      this.hasEverOpened = this.getIsOpen() ? true : false;
    }

    if (!this.prevPropsIsOpen && this.getIsOpen()) {
      this.getHasBackdropState = this.getHasBackdrop();
      this.prevPropsIsOpen = this.getIsOpen();
      this.overlayWillOpen();
    }
  }

  get getIsShowContentAnimation() {
    return this.isShowContentAnimation;
  }

  @action
  handleKeyDown(e: KeyboardEvent) {
    if (e.which === Keys.ESCAPE && this.getCanEscapeKeyClose()) {
      if (this.args.onClose) {
        this.args.onClose(e as KeyboardEvent);
      }

      e.preventDefault();
    }
  }

  @action
  handleBackdropMouseDown(e: MouseEvent) {
    if (this.getCanOutsideClickClose()) {
      if (this.args.onClose) {
        this.args.onClose(e);
      }
    }

    if (this.getEnforceFocus()) {
      // make sure document.activeElement is updated before bringing the focus back
      this.bringFocusInsideOverlay();
    }

    if (this.args.onBackDropMouseDown) {
      this.args.onBackDropMouseDown(e);
    }
  }

  public bringFocusInsideOverlay() {
    // always delay focus manipulation to just before repaint to prevent scroll jumping
    return requestAnimationFrame(() => {
      // container ref may be undefined between component mounting and Portal rendering
      // activeElement may be undefined in some rare cases in IE
      if (this.containerElement == null || document.activeElement == null || !this.getIsOpen()) {
        return;
      }

      const isFocusOutsideModal = !this.containerElement.contains(document.activeElement);

      if (isFocusOutsideModal) {
        // element marked autofocus has higher priority than the other clowns
        const autofocusElement = this.containerElement.querySelector('[autofocus]') as HTMLElement;
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
      document.removeEventListener(
        'focus',
        Overlay.getLastOpened().handleDocumentFocus,
        /* useCapture */ true
      );
    }

    openStack.push(this);

    if (this.getautoFoucs()) {
      this.bringFocusInsideOverlay();
    }

    if (this.getEnforceFocus()) {
      document.addEventListener('focus', this.handleDocumentFocus, /* useCapture */ true);
    }

    if (this.getCanOutsideClickClose() && !this.getHasBackdrop()) {
      document.addEventListener('mousedown', this.handleDocumentClick);
    }

    if (this.getHasBackdrop() && this.getUsePortal()) {
      // add a class to the body to prevent scrolling of content below the overlay
      document.body.classList.add(Classes.OVERLAY_OPEN);
    }
  }

  private handleDocumentFocus = (e: FocusEvent) => {
    if (
      this.getEnforceFocus() &&
      this.containerElement != null &&
      !this.containerElement.contains(e.target as HTMLElement)
    ) {
      // prevent default focus behavior (sometimes auto-scrolls the page)
      e.preventDefault();
      e.stopImmediatePropagation();

      this.bringFocusInsideOverlay();
    }
  };

  private handleDocumentClick = (e: MouseEvent) => {
    const eventTarget = e.target as HTMLElement;
    const stackIndex = Overlay.openStack.indexOf(this);
    const isClickInThisOverlayOrDescendant = Overlay.openStack
      .slice(stackIndex)
      .some(({ containerElement: elem }) => {
        // `elem` is the container of backdrop & content, so clicking on that container
        // should not count as being "inside" the overlay.
      return elem && elem.contains(eventTarget) && !elem.isSameNode(eventTarget); // eslint-disable-line
      });

    if (this.getIsOpen() && this.getCanOutsideClickClose() && !isClickInThisOverlayOrDescendant) {
      // casting to any because this is a native event
      if (this.args.onClose) {
        this.args.onClose(e);
      }
    }
  };

  private overlayWillClose() {
    document.removeEventListener('focus', this.handleDocumentFocus, /* useCapture */ true);
    document.removeEventListener('mousedown', this.handleDocumentClick);

    const { openStack } = Overlay;
    const stackIndex = openStack.indexOf(this);

    if (stackIndex !== -1) {
      openStack.splice(stackIndex, 1);

      if (openStack.length > 0) {
        const lastOpenedOverlay = Overlay.getLastOpened();

        if (lastOpenedOverlay.getEnforceFocus()) {
          document.addEventListener(
            'focus',
            lastOpenedOverlay.handleDocumentFocus,
            /* useCapture */ true
          );
        }
      }

      if (openStack.filter((o) => o.getUsePortal() && o.getHasBackdrop()).length === 0) {
        if (document.body.classList) document.body.classList.remove(Classes.OVERLAY_OPEN);
      }
    }
  }
}
