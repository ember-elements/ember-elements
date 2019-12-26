import Component from '@glimmer/component';
import { reads } from '@ember/object/computed';

// @ts-ignore
import { setComponentTemplate } from '@ember/component';
// @ts-ignore
import layout from './template';

import { IProps } from '../../../_private/common';
import * as Classes from '../../../_private/common/classes';

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

class ControlGroup extends Component<ControlGroupArgs> {
  @reads('props.className') className?: ControlGroupArgs['className'];
  @reads('props.fill') fill?: ControlGroupArgs['fill'];
  @reads('props.vertical') vertical?: ControlGroupArgs['vertical'];

  CONTROL_GROUP = Classes.CONTROL_GROUP;

  get getClassName() {
    let className;
    if (this.args.className != undefined) {
      className = this.args.className;
    } else if (this.className != undefined) {
      return (className = this.className);
    }

    return className;
  }

  get getFill() {
    let fill;

    if (this.args.fill != undefined) {
      fill = this.args.fill;
    } else if (this.fill != undefined) {
      fill = this.fill;
    }

    return fill != null ? Classes.FILL : '';
  }

  get getVertical() {
    let vertical;

    if (this.args.vertical != undefined) {
      vertical = this.args.vertical;
    } else if (this.vertical != undefined) {
      vertical = this.vertical;
    }

    return vertical != null ? Classes.VERTICAL : '';
  }
}

export default setComponentTemplate(layout, ControlGroup);
