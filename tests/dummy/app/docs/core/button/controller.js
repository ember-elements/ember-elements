import Controller from '@ember/controller';
import { action } from '@ember/object';
export default class DocsCoreButton extends Controller {
  // normal class body definition here
  text = 'sample button';
  active = false;
  minimal = false;
  disabled = false;
  intent = 'none';
  small = false;
  large = false;
  icon = 'floppy-disk';
  rightIcon = '';
  fill = false;
  iconOnly = false;
  @action
  doFuction(type) {
    if (type == 'active')
      this.set('active', !this.active);
    else if (type == 'minimal')
      this.set('minimal', !this.minimal);
    else if (type == 'disabled')
      this.set('disabled', !this.disabled);
    else if (type == 'small')
      this.set('small', !this.small);
    else if (type == 'large')
      this.set('large', !this.large);
    else if (type == 'rightIcon')
      this.set('rightIcon', this.rightIcon == '' ? 'refresh' : '');
    else if (type == 'fill')
      this.set('fill', !this.fill);
    else if (type == 'iconsonly')
      this.set('iconOnly', !this.iconOnly);
  }
  @action
  selectIntent(e) {
    this.set('intent', e.target.value);
  }
  // BEGIN-SNIPPET docs-example-basic-button.js
  @action
  onClickButton(event: object) { //mouse event action
    alert('button clicked!!!!')
  }
  // END-SNIPPET

}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/core/button': DocsCoreButton;
  }
}
