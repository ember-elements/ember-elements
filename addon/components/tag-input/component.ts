import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import template from './template';
import * as Classes from '../../-private/common/classes';
import { action, computed } from '@ember/object';
import { htmlSafe } from '@ember/string';
export default class TagInput extends Component {
  layout = template;
  classNameBindings = [`INPUT`, `TAG_INPUT`, `disabled:${Classes.DISABLED}`, `active:${Classes.ACTIVE}`];
  attributeBindings = [`inlineStyle:style`];

  @computed('style')
  get inlineStyle() {
    return htmlSafe(this.style);
  }

  TAG_INPUT_VALUES: string = Classes.TAG_INPUT_VALUES;
  INPUT = Classes.INPUT;
  TAG_INPUT = Classes.TAG_INPUT;
  TAG: string = Classes.TAG;
  INPUT_GHOST: string = Classes.INPUT_GHOST;
  BUTTON: string = Classes.BUTTON;
  MINIMAL: string = Classes.MINIMAL;
  ICON: string = Classes.ICON;

  style?: any;
  active: boolean = false;
  data?: Array<string>;
  tag: any;
  selectedItem: any = null;
  isCloseNotRequired!: boolean;

  //function declarations
  save!: (value: any) => void;
  delete!: (index: any, value: string, e: MouseEvent) => void;

  didReceiveAttrs() {
    if (this.get('isCloseNotRequired'))
      this.set('isCloseNotRequired', true);
    else
      this.set('isCloseNotRequired', false);
  }

  @action
  savetag() {

    if (this.get('tag').replace(/\s/g, '') != '') {
      if (this.get('save'))
        this.get('save')(this.get('tag'));
    }
    this.set('tag', '');
  }

  @action
  onFocus() {
    let element: any = this.element;
    let d = element.getAttribute('class').split(' ').includes(Classes.DISABLED);
    if (!d) {
      element.querySelector('input').focus();
      this.set('active', true);
    }
  }

  @action
  onBlur() {
    this.set('active', false);
    this.set('tag', '')
  }

  @action
  Delete(value: string, index: any, e: MouseEvent) {
    if (this.get('delete'))
      this.get('delete')(index, value, e);
  }

  @action
  DeleteAll() {
    this.set('data', []);
  }

  @action
  handleKeydown(e: any) {
    let divelement: any = this.element;
    let element = divelement.querySelectorAll(`.${Classes.TAG_INPUT_VALUES} .${Classes.TAG}`);
    let textbox = divelement.querySelector('input');
    if (e.keyCode === 8) {
      if (this.selectedItem > -1 && textbox.value.length == 0) {
        if (this.selectedItem === null) this.selectedItem = element.length - 1;
        else {
          this.send('Delete', (parseInt(element[this.selectedItem].id, 10)));
          if (this.selectedItem > 0)
            this.selectedItem--;
        }
      }
    } else if (e.keyCode === 37) {
      if (this.selectedItem === null) this.selectedItem = element.length - 1;
      else if (this.selectedItem > 0)
        this.selectedItem--;
    }
    else if (e.keyCode === 39) {
      if (this.selectedItem === null) this.selectedItem = 0;
      else if (this.selectedItem < element.length - 1)
        this.selectedItem++;
    }
    if (e.keyCode == 37 || e.keyCode == 39 || e.keyCode == 8) {
      if (this.selectedItem > -1 && textbox.value.length == 0) {
        element.forEach((item: any) => {
          item.className = this.TAG
        });
        element[this.selectedItem].className += ' ' + Classes.ACTIVE;
      }
    }
  }

};
