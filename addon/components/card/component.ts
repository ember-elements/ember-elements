import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import template from './template';
import * as Classes from '../../-private/common/classes';
import { Elevation } from '../../-private/common/elevation';
import { readOnly } from '@ember/object/computed';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';

export default class Card extends Component {
  layout = template;

  attributeBindings = [`inlineStyle:style`];
  classNameBindings = [`CARD`, `elevationStyle`, `interactiveStyle`];

  @readOnly('interactive') Interactive!: boolean;

  @readOnly('elevation') Elevation?: Elevation;

  @computed('Elevation')
  get elevationStyle() {
    return this.Elevation ? Classes.elevationClass(this.Elevation) : Classes.ELEVATION_0;
  }

  @computed('Interactive')
  get interactiveStyle() {
    return this.Interactive ? Classes.INTERACTIVE : '';
  }

  @computed('style')
  get inlineStyle() {
    return htmlSafe(this.style);
  }

  style?: any;
  CARD = Classes.CARD;

  onClick!: (event: any) => void;

  click(event: any) {
    if (this.get('onClick'))
      this.get('onClick')(event);
  }
};
