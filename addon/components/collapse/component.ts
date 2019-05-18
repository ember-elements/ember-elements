import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import { classNames } from '@ember-decorators/component';
import { htmlSafe } from '@ember/string';
import { computed } from '@ember-decorators/object';

import * as Classes from "../../-private/common/classes";
import { AnimationStates } from './animationSates';

@classNames(Classes.COLLAPSE)
export default class Collapse extends Component {
  layout = layout;

  /**
     * Whether the component is open or closed.
     * @default false
     */
  isOpen: boolean = false;

  /**
   * Whether the child components will remain mounted when the `Collapse` is closed.
   * Setting to true may improve performance by avoiding re-mounting children.
   * @default false
   */
  keepChildrenMounted: boolean = false;

  /**
   * The length of time the transition takes, in milliseconds. This must match
   * the duration of the animation in CSS. Only set this prop if you override
   * Blueprint's default transitions with new transitions of a different
   * length.
   * @default 300
   */
  transitionDuration: number = 300;

  /** The height that should be used for the content animations. This is a CSS value, not just a number. */

  height?: string = "0px";

  /** The state the element is currently in. */
  animationState: AnimationStates = this.isOpen ? AnimationStates.OPEN : AnimationStates.CLOSED;

  shouldRenderChildren?: boolean;

  contentsStyle?: string;

  COLLAPSE_BODY = Classes.COLLAPSE_BODY;

  isContentVisible!: boolean;

  containerStyle?: string;

  // The element containing the contents of the collapse.
  private contents?: HTMLElement;

  // The most recent non-0 height (once a height has been measured - is 0 until then)
  private defaultHeight: number = 0;

  //store previous state
  private isOpenState: boolean = false;

  //clear timeouts
  private closingTimeOut!: any;
  private closingTimeOut2!: any;
  private openStartTimeOut!: any;

  didInsertElement() {
    this._super(...arguments);

    if (this.isOpen) {
      this.set('animationState', AnimationStates.OPEN);
      this.set('height', 'auto');
    } else {
      this.set('animationState', AnimationStates.CLOSED);
    }
    if (this.element) {
      this.contents = (this.element.querySelector('.' + this.COLLAPSE_BODY) as HTMLElement);
      if (this.contents != null) {
        this.defaultHeight = this.contents.clientHeight;
      }
    }
  }

  didReceiveAttrs() {
    this._super(...arguments);

    if (this.isOpenState !== this.isOpen) {
      this.onClearTimeOuts();
      if (this.animationState !== AnimationStates.CLOSED && !this.isOpen) {
        this.set('animationState', AnimationStates.CLOSING_START);
        this.set('height', `${this.defaultHeight}px`);

      } else if (this.animationState !== AnimationStates.OPEN && this.isOpen) {
        this.set('animationState', AnimationStates.OPEN_START);
      }

      // current isOpen state
      this.isOpenState = this.isOpen as boolean;
    }

    // init yield first
    if (this.isOpen)
      this.set('shouldRenderChildren', true);
  }

  willRender() {
    const isContentVisible = this.animationState !== AnimationStates.CLOSED;
    this.set('shouldRenderChildren', isContentVisible || this.keepChildrenMounted);
    const displayWithTransform = isContentVisible && this.animationState !== AnimationStates.CLOSING;
    const isAutoHeight = this.height === "auto";
    this.set('isContentVisible', isContentVisible);

    const containerStyle = {
      height: isContentVisible ? this.height : undefined,
      overflowY: (isAutoHeight ? "visible" : undefined) as "visible" | undefined,
      transition: isAutoHeight ? "none " : undefined,
    };

    this.set('containerStyle', htmlSafe((`${containerStyle.height != undefined ? `height:` + containerStyle.height + `;` : ''} ${containerStyle.overflowY != undefined ? `overflowY:` + containerStyle.overflowY + `;` : ''} ${containerStyle.transition != undefined ? `transition:` + containerStyle.transition + `;` : ''} `).trim()));
    this.set('contentsStyle', htmlSafe(`transform: ${displayWithTransform ? "translateY(0)" : `translateY(-${this.defaultHeight}px)`};  ${isAutoHeight ? "transition:none " : ''} `));
  }

  @computed('containerStyle', 'height')
  get style() {
    return this.containerStyle;
  }

  attributeBindings = ['style:style'];

  didUpdate() {

    if (this.element) {
      this.contents = (this.element.querySelector('.' + this.COLLAPSE_BODY) as HTMLElement);
    }

    if (this.contents != null && this.contents.clientHeight !== 0) {
      this.defaultHeight = this.contents.clientHeight;
    }

    if (this.animationState === AnimationStates.CLOSING_START) {
      this.set('animationState', AnimationStates.CLOSING);
      this.set('height', '0px');

      this.closingTimeOut2 = setTimeout(() => this.onDelayedStateChange(), this.transitionDuration);
    }

    if (this.animationState === AnimationStates.OPEN_START) {
      this.set('animationState', AnimationStates.OPENING);
      this.set('height', this.defaultHeight + "px");

      this.openStartTimeOut = setTimeout(() => this.onDelayedStateChange(), this.transitionDuration);
    }
  }

  private onDelayedStateChange() {
    switch (this.animationState) {
      case AnimationStates.OPENING:
        this.set('animationState', AnimationStates.OPEN);
        this.set('height', "auto");
        break;
      case AnimationStates.CLOSING:
        this.set('animationState', AnimationStates.CLOSED);
        this.willRender();
        break;
      default:
        break;
    }
  }

  private onClearTimeOuts() {
    //clear all timeouts
    clearTimeout(this.closingTimeOut);
    clearTimeout(this.closingTimeOut2);
    clearTimeout(this.openStartTimeOut);
  }
};
