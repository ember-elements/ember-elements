import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import template from './template';
import { layout } from '@ember-decorators/component';
import * as Classes from '../../-private/common/classes';
@layout(template)
export default class DbTree extends Component {
  TREE: string = Classes.TREE;
  ELEVATION_0: any = Classes.ELEVATION_0;
  // normal class body definition here
};
