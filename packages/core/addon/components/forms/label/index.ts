import Component from '@glimmer/component';

import * as Classes from '../../../_private/common/classes';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LabelArgs {}

export default class Label extends Component<LabelArgs> {
  LABEL = Classes.LABEL;
}
