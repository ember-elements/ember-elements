import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import * as Classes from '../../../-private/common/classes';
import { classNames } from '@ember-decorators/component';
@classNames(Classes.FLEX_EXPANDER)
export default class TabsExpander extends Component.extend({
  // anything which *must* be merged to prototype here
}) {
  layout = layout;
  // normal class body definition here
};
