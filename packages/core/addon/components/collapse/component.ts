import Component from '@glimmer/component';

import { reads } from '@ember/object/computed';
import { action } from '@ember/object';
import { htmlSafe } from '@ember/string';

// @ts-ignore
import { tracked } from '@glimmer/tracking';

// @ts-ignore
import { setComponentTemplate } from '@ember/component';
// @ts-ignore
import collapseLayout from './template';

import { AnimationStates } from './animationSates';
import * as collapseClasses from '../../_private/common/classes';
import { IProps } from '../../_private/common';

export interface ICollapseProps extends IProps {
  /**
   * Whether the component is open or closed.
   * @default false
   */
  isOpen?: boolean;

  /**
   * Whether the child components will remain mounted when the `Collapse` is closed.
   * Setting to true may improve performance by avoiding re-mounting children.
   * @default false
   */
  keepChildrenMounted?: boolean;

  /**
   * The length of time the transition takes, in milliseconds. This must match
   * the duration of the animation in CSS. Only set this prop if you override
   * Blueprint's default transitions with new transitions of a different
   * length.
   * @default 300
   */
  transitionDuration?: number;
}

interface CollapseArgs extends ICollapseProps {
  props: ICollapseProps;
}

class Collapse extends Component<CollapseArgs> {
  @reads('props.className') className?: CollapseArgs['className'];
  @reads('props.isOpen') isOpenProps?: CollapseArgs['isOpen'];
  @reads('props.keepChildrenMounted')
  keepChildrenMounted?: CollapseArgs['keepChildrenMounted'];
  @reads('props.transitionDuration')
  transitionDuration?: CollapseArgs['transitionDuration'];

  @tracked animationState = this.args.isOpen ? AnimationStates.OPEN : AnimationStates.CLOSED;
  @tracked isOpen = false;
  @tracked height = '0px';
  @tracked openStartTimeOut = '';
  @tracked closingTimeOut = '';
  // The most recent non-0 height (once a height has been measured - is 0 until then)
  @tracked defaultHeight = 0;

  //store previous state
  @tracked isOpenState = false;
  @tracked isOpenPrevState = this.args.isOpen;

  @tracked shouldRenderChildren = false;

  @tracked isContentVisible = false;

  @tracked containerStyle = '';
  @tracked contentsStyle = '';

  COLLAPSE = collapseClasses.COLLAPSE;
  COLLAPSE_BODY = collapseClasses.COLLAPSE_BODY;

  get getCollapseClassName() {
    let collapseClassName;
    if (this.args.className != undefined) {
      collapseClassName = this.args.className;
    } else if (this.className != undefined) {
      collapseClassName = this.className;
    }

    return collapseClassName;
  }

  get getCollapseTD() {
    let transitionDuration = 300;
    if (this.args.transitionDuration != undefined) {
      transitionDuration = this.args.transitionDuration;
    } else if (this.transitionDuration != undefined) {
      transitionDuration = this.transitionDuration;
    }

    return transitionDuration;
  }

  get getCollapseIsOpen() {
    return this.getIsOpen();
  }

  get getCollapseKCMounted() {
    return !this.isContentVisible && this.getKeepChildrenMounted();
  }

  get contentsStyles() {
    return this.contentsStyle;
  }

  getIsOpen() {
    let isOpen = false;
    if (this.args.isOpen != undefined) {
      isOpen = this.args.isOpen;
    } else if (this.isOpenProps != undefined) {
      isOpen = this.isOpenProps;
    }

    this.willRenderComp();

    this.isOpen = isOpen;

    if (this.isOpenState !== this.isOpen) {
      this.onClearTimeOuts();
      if (this.animationState !== AnimationStates.CLOSED && !this.isOpen) {
        this.animationState = AnimationStates.CLOSING_START;
        this.height = `${this.defaultHeight}px`;
      } else if (this.animationState !== AnimationStates.OPEN && this.isOpen) {
        this.animationState = AnimationStates.OPEN_START;
      }

      // current isOpen state
      this.isOpenState = this.isOpen;
    }

    // init yield first
    if (this.isOpen) this.shouldRenderChildren = true;

    return isOpen;
  }

  get containerStyles() {
    return this.containerStyle;
  }

  getKeepChildrenMounted() {
    let keepChildrenMounted = false;
    if (this.args.keepChildrenMounted != undefined) {
      keepChildrenMounted = this.args.keepChildrenMounted;
    } else if (this.keepChildrenMounted != undefined) {
      keepChildrenMounted = this.keepChildrenMounted;
    }

    return keepChildrenMounted;
  }

  @action
  inputElementRef(element: HTMLElement) {
    if (this.isOpen) {
      this.animationState = AnimationStates.OPEN;
      this.height = 'auto';
    } else {
      this.animationState = AnimationStates.CLOSED;
    }
    this.defaultHeight = element.clientHeight;
  }

  @action
  componentDidUpdate(element: HTMLElement, data: Array<number>) {
    if (element != null && element.clientHeight !== 0) {
      this.defaultHeight = element.clientHeight;
    }
    let transitionDuration = data[0];

    if (this.animationState === AnimationStates.CLOSING_START) {
      this.animationState = AnimationStates.CLOSING;
      this.height = `${this.defaultHeight}px`;
      // @ts-ignore
      this.closingTimeOut = setTimeout(() => this.onDelayedStateChange(), transitionDuration);
    }

    if (this.animationState === AnimationStates.OPEN_START) {
      this.animationState = AnimationStates.OPENING;
      this.height = this.defaultHeight + 'px';
      // @ts-ignore
      this.openStartTimeOut = setTimeout(() => this.onDelayedStateChange(), transitionDuration);
    }
  }

  willRenderComp() {
    const isContentVisible = this.animationState !== AnimationStates.CLOSED;
    const shouldRenderChildren = isContentVisible || this.getKeepChildrenMounted();
    const displayWithTransform =
      isContentVisible && this.animationState !== AnimationStates.CLOSING;
    const isAutoHeight = this.height === 'auto';

    this.shouldRenderChildren = shouldRenderChildren;

    const containerStyle = {
      height: isContentVisible ? this.height : undefined,
      overflowY: isAutoHeight ? 'visible' : undefined,
      transition: isAutoHeight ? 'none' : undefined,
    };

    this.containerStyle = `${
      containerStyle.height != undefined ? `height:` + containerStyle.height + `;` : ''
    } ${
      containerStyle.overflowY != undefined ? `overflow-y:` + containerStyle.overflowY + `;` : ''
    } ${
      containerStyle.transition != undefined ? `transition:` + containerStyle.transition + `;` : ''
    } `.trim();

    // @ts-ignore
    this.contentsStyle = htmlSafe(
      `transform: ${displayWithTransform ? 'translateY(0)' : `translateY(-${this.height})`};  ${
        isAutoHeight ? 'transition:none ' : ''
      } `
    );
  }
  private onDelayedStateChange() {
    switch (this.animationState) {
      case AnimationStates.OPENING:
        this.animationState = AnimationStates.OPEN;
        this.height = 'auto';

        break;
      case AnimationStates.CLOSING:
        this.animationState = AnimationStates.CLOSED;
        this.willRenderComp();
        break;
      default:
        break;
    }
  }

  private onClearTimeOuts() {
    //clear all timeouts
    // @ts-ignore
    clearTimeout(this.closingTimeOut);
    // @ts-ignore
    clearTimeout(this.openStartTimeOut);
  }
}

export default setComponentTemplate(collapseLayout, Collapse);
