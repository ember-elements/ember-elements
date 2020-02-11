import Component from '@glimmer/component';
// @ts-ignore
import { setComponentTemplate } from '@ember/component';
// @ts-ignore
import selectLayout from './template';

import * as Classes from '../../_private/common/classes';
interface SelectArgs {
  minimal?: boolean;
}

class Select extends Component<SelectArgs> {
  TRANSITION_CONTAINER = Classes.TRANSITION_CONTAINER;
  POPOVER = Classes.POPOVER;
}
export default setComponentTemplate(selectLayout, Select);
