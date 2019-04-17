import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';

export default class DocsCoreTag extends Controller {
  // normal class body definition here
  value = 'London';
  active = false;
  minimal = false;
  interactive = false;
  round = false;
  intent = 'none';
  large = false;
  icon = '';
  rightIcon = '';
  fill = false;
  removable = false;
  @action
  doFuction(type: string) {
    if (type == 'active')
      this.set('active', !this.active);
    else if (type == 'minimal')
      this.set('minimal', !this.minimal);
    else if (type == 'interactive')
      this.set('interactive', !this.interactive);
    else if (type == 'round')
      this.set('round', !this.round);
    else if (type == 'large')
      this.set('large', !this.large);
    else if (type == 'rightIcon')
      this.set('rightIcon', this.rightIcon == '' ? 'cube' : '');
    else if (type == 'icon')
      this.set('icon', this.icon == '' ? 'home' : '');
    else if (type == 'fill')
      this.set('fill', !this.fill);
    else if (type == 'removable')
      this.set('removable', !this.removable);


  }
  @action
  selectIntent(e: any) {
    this.set('intent', e.target.value);
  }
  // BEGIN-SNIPPET docs-example-basic-tag.js
  @action
  onRemove(value: string, params: any, event: MouseEvent) {
    console.log(value, event, params);
  }
  // END-SNIPPET

}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/core/tag': DocsCoreTag;
  }
}
