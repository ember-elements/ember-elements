import Controller from '@ember/controller';
import {
  action
} from '@ember-decorators/object';

export default class DocsCoreButton extends Controller {
  // normal class body definition here
  text = 'sample button';
  active = false;
  minimal = false;
  disabled = false;
  primary = false;
  success = false;
  warning = false;
  danger = false;
  small = false;
  large = false;
  icon = '';
  rightIcon = '';
  fill = false;
  @action
  doFuction(type) {
    if (type == 'active')
      this.set('active', !this.active);
    else if (type == 'minimal')
      this.set('minimal', !this.minimal);
    else if (type == 'disabled')
      this.set('disabled', !this.disabled);
    else if (type == 'primary')
      this.set('primary', !this.primary);
    else if (type == 'success')
      this.set('success', !this.success);
    else if (type == 'warning')
      this.set('warning', !this.warning);
    else if (type == 'danger')
      this.set('danger', !this.danger);
    else if (type == 'small')
      this.set('small', !this.small);
    else if (type == 'large')
      this.set('large', !this.large);
    else if (type == 'icon'){
      this.set('icon', this.icon == '' ? 'floppy-disk' : '');
      if(this.icon !='')
      {
        this.set('rightIcon','');
      }
    }
    else if (type == 'rightIcon'){
      this.set('rightIcon', this.rightIcon == '' ? 'refresh' : '');
      if(this.rightIcon=='refresh')
      {
        this.set('icon','');
      }
    }
    else if (type == 'fill')
      this.set('fill', !this.fill);


  }
  // BEGIN-SNIPPET docs-example-basic-button.js
  @action
  onClickButton(event: object) { //mouse event action
  }
  // END-SNIPPET

}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/core/button': DocsCoreButton;
  }
}
