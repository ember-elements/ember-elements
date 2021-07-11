import Component from '@glimmer/component';

import * as Classes from '../../../_private/common/classes';

import type { IProps } from '../../../_private/common';

export interface IControlGroupProps extends IProps {
  /**
   * Whether the control group should take up the full width of its container.
   * @default false
   */
  fill?: boolean;

  /**
   * Whether the control group should appear with vertical styling.
   * @default false
   */
  vertical?: boolean;
}

interface ControlGroupArgs extends IControlGroupProps {
  props: IControlGroupProps;
}

export default class ControlGroup extends Component<ControlGroupArgs> {
  CONTROL_GROUP = Classes.CONTROL_GROUP;

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

  get getFill() {
    let fill;

    if (this.args.fill != undefined) {
      fill = this.args.fill;
    } else if (this.props.fill != undefined) {
      fill = this.props.fill;
    }

    return fill != null ? Classes.FILL : '';
  }

  get getVertical() {
    let vertical;

    if (this.args.vertical != undefined) {
      vertical = this.args.vertical;
    } else if (this.props.vertical != undefined) {
      vertical = this.props.vertical;
    }

    return vertical != null ? Classes.VERTICAL : '';
  }
}
