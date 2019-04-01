import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';

export default class DocsCoreIcon extends Controller {
  value: number = 16;
  intent:string="none";

  @action
  selectIntent(e:any) {
    this.set('intent', e.target.value);
  }
  @action
  onValueIncrement(data: boolean) {
    this.findWidth(data);
  }
  @action
  onKeyDown(e: any) {
    if (e.keyCode == 38)
      this.findWidth(true);
    else if (e.keyCode == 40)
      this.findWidth(false);
  }
  findWidth(data: boolean) {
    if (data) {
      if (this.value < 100) {
        this.set('value', this.value + 1);
      }
    }
    else {
      if (this.value > 0) {
        this.set('value', this.value - 1);
      }
    }
  }
  // normal class body definition here
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/core/icon': DocsCoreIcon;
  }
}
