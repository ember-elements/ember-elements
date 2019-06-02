import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import * as Classes from '../../../-private/common/classes';
export default class TabsExpander extends Component.extend({
  // anything which *must* be merged to prototype here
}) {
  layout = layout;
  classNameBindings = [`FLEX_EXPANDER`];

  FLEX_EXPANDER = Classes.FLEX_EXPANDER;
  // normal class body definition here
};
