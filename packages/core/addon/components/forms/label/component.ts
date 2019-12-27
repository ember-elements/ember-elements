import Component from '@glimmer/component';

// @ts-ignore
import { setComponentTemplate } from '@ember/component';
// @ts-ignore
import layout from './template';

import * as Classes from '../../../_private/common/classes';
interface LabelArgs {}

class Label extends Component<LabelArgs> {
  LABEL = Classes.LABEL;
}

export default setComponentTemplate(layout, Label);
