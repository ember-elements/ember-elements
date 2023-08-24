/* eslint-disable */
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { warn } from '@ember/debug';
import { action } from '@ember/object';
import { run } from '@ember/runloop';

import * as Classes from '../../_private/common/classes';

import type { IIntentProps } from '../../_private/common';
import type { IPopoverSharedProps } from '../popover/popoverSharedProps';

export interface ITooltipProps extends IPopoverSharedProps, IIntentProps {
  /**
   * The content that will be displayed inside of the tooltip.
   */
  content: string;

  /**
   * The amount of time in milliseconds the tooltip should remain open after
   * the user hovers off the trigger. The timer is canceled if the user mouses
   * over the target before it expires.
   * @default 0
   */
  hoverCloseDelay?: number;

  /**
   * The amount of time in milliseconds the tooltip should wait before opening
   * after the user hovers over the trigger. The timer is canceled if the user
   * mouses away from the target before it expires.
   * @default 100
   */
  hoverOpenDelay?: number;

  /**
   * Indicates how long (in milliseconds) the tooltip's appear/disappear
   * transition takes. This is used by React `CSSTransition` to know when a
   * transition completes and must match the duration of the animation in CSS.
   * Only set this prop if you override Blueprint's default transitions with
   * new transitions of a different length.
   * @default 300
   */
  transitionDuration?: number;

  interactionKind?: string;

  onShow?: () => void;
  onHide?: () => void;
}

export interface EmberTooltip {
  targetId?: string;
  target?: HTMLElement;
  event?: string;
}

interface TooltipArgs extends ITooltipProps, EmberTooltip {
  props: TooltipArgs;
}

export default class Tooltip extends Component<TooltipArgs> {
  POPOVER_TARGET = Classes.POPOVER_TARGET;
  TOOLTIP = Classes.TOOLTIP;

  _initialParentNode = null;
  @tracked _parentFinder: any = null;
  @tracked prevOpenState = false;
  @tracked isOpenState = false;
  @tracked _tooltipEvents = [];

  constructor(props: TooltipArgs, context?: any) {
    super(props, context);
    this._parentFinder = self.document ? self.document.createTextNode('') : '';
  }

  get props() {
    return this.args.props || {};
  }

  get getClassName() {
    let popoverClassName;

    if (this.args.popoverClassName != undefined) {
      popoverClassName = this.args.popoverClassName;
    } else if (this.props.popoverClassName != undefined) {
      popoverClassName = this.props.popoverClassName;
    }

    return popoverClassName;
  }

  get getIntent() {
    let intent: TooltipArgs['intent'] = 'none';

    if (this.args.intent != undefined) {
      intent = this.args.intent;
    } else if (this.props.intent != undefined) {
      intent = this.props.intent;
    }

    return Classes.intentClass(intent) as TooltipArgs['intent'];
  }

  get openComp() {
    if (this.findEvent() === 'none') {
      this.isOpenState = this.getIsOpen();
    }

    return this.isOpenState;
  }

  getIsOpen() {
    let isOpen;

    if (this.args.isOpen != undefined) {
      isOpen = this.args.isOpen;
    } else if (this.props.isOpen != undefined) {
      isOpen = this.props.isOpen;
    }

    return isOpen || this.findDefaultIsOpen();
  }

  get eventListener() {
    return this.addTooltipTargetEventListeners();
  }

  @action
  willDestroyRef() {
    // @ts-ignore
    this._tooltipEvents.forEach(({ callback, target, eventName } = {}) => {
      // @ts-ignore
      target.removeEventListener(eventName, callback);
    });
  }

  findDefaultIsOpen() {
    let defaultIsOpen = false;

    if (this.args.defaultIsOpen != undefined) {
      defaultIsOpen = this.args.defaultIsOpen;
    } else if (this.props.defaultIsOpen != undefined) {
      defaultIsOpen = this.props.defaultIsOpen;
    }

    return defaultIsOpen;
  }

  get _getPopperTarget() {
    return this.popperTarget();
  }

  popperTarget() {
    this._initialParentNode = this._parentFinder.parentNode;

    const TargetIdElement = this.findTargetId();
    const targetElement = this.findTarget();

    if (TargetIdElement) {
      return TargetIdElement;
    } else if (targetElement) {
      return targetElement;
    }

    return this._initialParentNode;
  }

  findTargetId() {
    let targetId = '';

    if (this.args.targetId != undefined) {
      targetId = this.args.targetId;
    } else if (this.props.targetId != undefined) {
      targetId = this.props.targetId;
    }

    let target;

    if (targetId) {
      target = document.getElementById(targetId);

      if (!target) {
        warn(`No target found for targetId ${targetId}`, true, {
          id: 'ember-tooltips.no-element-with-targetId',
        });
      }
    }

    return target;
  }

  findTarget() {
    let target;

    if (this.args.target != undefined) {
      target = this.args.target;
    } else if (this.props.target != undefined) {
      target = this.props.target;
    }

    return target;
  }

  findEvent() {
    let event = 'hover';

    if (this.args.event != undefined) {
      event = this.args.event;
    } else if (this.props.event != undefined) {
      event = this.props.event;
    }

    return event;
  }

  hideOn() {
    const event = this.findEvent();

    let hideOn;

    switch (event) {
      case 'hover':
        hideOn = 'mouseleave';
        break;
      case 'focus':
        hideOn = 'blur';
        break;
      case 'ready':
        hideOn = null;
        break;
      default:
        hideOn = event;
        break;
    }

    return hideOn;
  }

  showOn() {
    const event = this.findEvent();

    let showOn;

    switch (event) {
      case 'hover':
        showOn = 'mouseenter';
        break;
      default:
        showOn = event;
        break;
    }

    return showOn;
  }

  addTooltipTargetEventListeners() {
    /* Setup event handling to hide and show the tooltip */
    const event = this.findEvent();

    if (event === 'none') {
      return;
    }

    const hideOn = this.hideOn();
    const showOn = this.showOn();

    /* If show and hide are the same (e.g. click) toggle
		the visibility */

    if (showOn === hideOn) {
      // @ts-ignore
      this._addEventListener(showOn, () => {
        this.toggle();
      });
    } else {
      /* Else, add the show and hide events individually */

      if (showOn !== 'none') {
        // @ts-ignore
        this._addEventListener(showOn, () => {
          this.show();
        });
      }

      if (hideOn !== 'none') {
        // @ts-ignore
        this._addEventListener(hideOn, () => {
          this.hide();
        });
      }
    }

    /* Hide and show the tooltip on focus and escape
		for accessibility */

    if (event !== 'focus') {
      /* If the event is click, we don't want the
			click to also trigger focusin */

      if (event !== 'click') {
        // @ts-ignore
        this._addEventListener('focusin', () => {
          this.show();
        });
      }

      // @ts-ignore
      this._addEventListener('focusout', () => {
        this.hide();
      });
    }

    this._addEventListener(
      'keydown',
      // @ts-ignore
      (keyEvent) => {
        if (keyEvent.which === 27 && this.isOpenState) {
          this.hide();
          keyEvent.stopImmediatePropagation(); /* So this callback only fires once per keydown */
          keyEvent.preventDefault();

          return false;
        }
      },
      document
    );
  }

  // @ts-ignore
  _addEventListener(eventName, callback, element) {
    const target = element || this.popperTarget();

    /* Remember event listeners so they can removed on teardown */

    const boundCallback = run.bind(this, callback);

    // @ts-ignore
    this._tooltipEvents.push({ callback: boundCallback, target, eventName });

    /* Add the event listeners */

    target.addEventListener(eventName, boundCallback);
  }

  toggle() {
    if (this.isOpenState) {
      this.isOpenState = false;
    } else {
      this.isOpenState = true;
    }
  }

  show() {
    this.isOpenState = true;

    if (this.args.onShow) {
      this.args.onShow();
    }
  }

  hide() {
    this.isOpenState = false;

    if (this.args.onHide) {
      this.args.onHide();
    }
  }
}
