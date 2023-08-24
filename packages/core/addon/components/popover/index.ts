import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { htmlSafe } from '@ember/template';

import * as Classes from '../../_private/common/classes';
import { positionToPlacement } from './popoverMigrationUtils';
import {
  arrowOffsetModifier,
  getPosition,
  getTransformOrigin,
} from './popperUtils';

import type { IProps } from '../../_private/common';
import type { IPopoverSharedProps } from './popoverSharedProps';
import type PopperJS from 'popper.js';

export interface IPopoverProps extends IProps {
  /** HTML props for the backdrop element. Can be combined with `backdropClassName`. */
  backdropProps?: string;

  /**
   * The content displayed inside the popover. This can instead be provided as
   * the _second_ element in `children` (first is `target`).
   */
  content?: string;

  /**
   * Whether the wrapper and target should take up the full width of their container.
   * Note that supplying `true` for this prop will force  `targetTagName="div"` and
   * `wrapperTagName="div"`.
   */
  fill?: boolean;

  /**
   * Enables an invisible overlay beneath the popover that captures clicks and
   * prevents interaction with the rest of the document until the popover is
   * closed. This prop is only available when `interactionKind` is
   * `PopoverInteractionKind.CLICK`. When popovers with backdrop are opened,
   * they become focused.
   * @default false
   */
  hasBackdrop?: boolean;

  /**
   * Whether to apply minimal styles to this popover, which includes removing
   * the arrow and adding `Classes.MINIMAL` to minimize and accelerate the
   * transitions.
   * @default false
   */
  minimal?: boolean;

  /**
   * Ref supplied to the `Classes.POPOVER` element.
   */
  popoverRef?: (ref: HTMLDivElement | null) => void;

  /**
   * The target to which the popover content is attached. This can instead be
   * provided as the _first_ element in `children`.
   */
  target?: string;

  popoverClassName?: string;
}

interface PopoverArgs extends IPopoverProps, IPopoverSharedProps {
  props: PopoverArgs;
}

export default class Select extends Component<PopoverArgs> {
  arrowElement!: HTMLElement;
  // these paths come from the Core Kit Sketch file
  SVG_SHADOW_PATH =
    'M8.11 6.302c1.015-.936 1.887-2.922 1.887-4.297v26c0-1.378' +
    '-.868-3.357-1.888-4.297L.925 17.09c-1.237-1.14-1.233-3.034 0-4.17L8.11 6.302z';
  SVG_ARROW_PATH =
    'M8.787 7.036c1.22-1.125 2.21-3.376 2.21-5.03V0v30-2.005' +
    'c0-1.654-.983-3.9-2.21-5.03l-7.183-6.616c-.81-.746-.802-1.96 0-2.7l7.183-6.614z';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @tracked transformOrigin: any = '';
  @tracked arrowProps = {};
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @tracked arrowAngleStyle: any = '';

  TRANSITION_CONTAINER = Classes.TRANSITION_CONTAINER;
  POPOVER = Classes.POPOVER;
  POPOVER_CONTENT = Classes.POPOVER_CONTENT;
  POPOVER_ARROW = Classes.POPOVER_ARROW;

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

  get getPopoverClassName() {
    let popoverClassName;

    if (this.args.popoverClassName != undefined) {
      popoverClassName = this.args.popoverClassName;
    } else if (this.props.popoverClassName != undefined) {
      popoverClassName = this.props.popoverClassName;
    }

    return popoverClassName;
  }

  get getMinimal() {
    return this.minimalData() ? Classes.MINIMAL : '';
  }

  get getIsArrowEnabled() {
    return this.isArrowEnabled();
  }

  get getPlacement() {
    let position: IPopoverSharedProps['position'] = 'auto';

    if (this.args.position != undefined) {
      position = this.args.position;
    } else if (this.props.position != undefined) {
      position = this.props.position;
    }

    return positionToPlacement(position);
  }

  minimalData() {
    let minimal;

    if (this.args.minimal != undefined) {
      minimal = this.args.minimal;
    } else if (this.props.minimal != undefined) {
      minimal = this.props.minimal;
    }

    return minimal;
  }

  get modifiers() {
    return {
      arrow: {
        enabled: true,
      },
      arrowOffset: {
        enabled: this.isArrowEnabled(),
        fn: this.getarrowModifier,
        order: 510,
      },
      updatePopoverState: {
        enabled: true,
        fn: this.updatePopoverState,
        order: 900,
      },
      applyStyle: { enabled: true },
      keepTogether: { enabled: true },
    };
  }

  private updatePopoverState = (data: PopperJS.Data) => {
    // always set string; let shouldComponentUpdate determine if update is necessary
    this.transformOrigin = htmlSafe(
      `transform-origin:${getTransformOrigin(data)}`
    );

    return data;
  };

  private isArrowEnabled() {
    // omitting `arrow` from `modifiers` uses Popper default, which does show an arrow.
    return !this.minimalData();
  }

  private getarrowModifier = (
    data: PopperJS.Data,
    options: PopperJS.ModifierFn
  ) => {
    data = arrowOffsetModifier(data, options);

    const arrowCss = data.offsets.arrow || {};

    this.arrowProps = htmlSafe(`left:${arrowCss.left}px;top:${arrowCss.top}px`);

    this.arrowAngleStyle = htmlSafe(
      `transform: rotate(${this.getArrowAngle(data.placement)}deg)`
    );

    return data;
  };

  private getArrowAngle(placement?: PopperJS.Placement) {
    if (placement == null) {
      return 0;
    }

    // can only be top/left/bottom/right - auto is resolved internally
    switch (getPosition(placement)) {
      case 'top':
        return -90;
      case 'left':
        return 180;
      case 'bottom':
        return 90;
      default:
        return 0;
    }
  }
}
