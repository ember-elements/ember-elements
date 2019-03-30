import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import template from './template';
import Ember from 'ember';
import { action, computed } from '@ember-decorators/object';
import { get, getProperties, set } from '@ember/object';
import { classNames, tagName, attribute, layout, className } from '@ember-decorators/component';
import { reads } from '@ember-decorators/object/computed';
import * as Classes from "../../-private/common/classes";
@layout(template)
@tagName('span')
@classNames(Classes.POPOVER_TARGET)
export default class SelectBoxGroup extends Component {
  _popperTarget: any;
  @reads('open') Open!: boolean;
  @className(Classes.POPOVER_OPEN)
  open: boolean = false;
  currentWindow: any;
  didInsertElement() {
    set(this, '_popperTarget', this.element);
    this.set('currentWindow', this.$(window));
  }
  ICON: string = Classes.ICON;
  TRANSITION_CONTAINER: string = Classes.TRANSITION_CONTAINER;
  POPOVER: string = Classes.POPOVER;
  POPOVER_CONTENT: string = Classes.POPOVER_CONTENT;
  POPOVER_DISMISS: string = Classes.POPOVER_DISMISS;
  POPOVER_CONTENT_SIZING: string = Classes.POPOVER_CONTENT_SIZING;
  FILL: string = Classes.FILL;
  ACTIVE: string = Classes.ACTIVE;
  MENU: string = Classes.MENU;
  MENU_ITEM: string = Classes.MENU_ITEM;
  TEXT_OVERFLOW_ELLIPSIS: string = Classes.TEXT_OVERFLOW_ELLIPSIS;
  onSelect!: (data: any, index: number, optIndex: number) => void;
  selected: any;
  date!: string;
  isDefaultOpen!: boolean;
  ESC: number = 27;
  data: any;
  selectedKey: number = -1;
  filteredList: Array<string> = [];
  init() {
    super.init();
    this._closeOnClickOut = this._closeOnClickOut.bind(this);
    this._closeOnEsc = this._closeOnEsc.bind(this);
    this.set('filteredList', (this.get('data') || []));
    this.set('selected', this.get('selected'));
  }
  @attribute('style') style: any = Ember.String.htmlSafe((this.get('style')));
  didRender() {
    Ember.run.next(this, this.detachClickHandler);
  }
  async didReceiveAttrs() {
    await set(this, '_popperTarget', this.element);
    if (this.get('isDefaultOpen')) {
      this.set('open', this.get('isDefaultOpen'));
      let data: Array<string> = JSON.parse(JSON.stringify(this.get('data') || []));
      set(this, 'filteredList', data);
    }
  }

  detachClickHandler() {
    const method = this.get('open') ? 'on' : 'off';
    if (method == 'on') {
      this.currentWindow.on('click', this._closeOnClickOut);
      this.currentWindow.on('keyup', this._closeOnEsc);
    }
    else {
      this.currentWindow.off('click', this._closeOnClickOut);
      this.currentWindow.off('keyup', this._closeOnEsc);
    }
  }
  async _closeOnClickOut(e: any) {
    const clickIsInside = document.querySelector('.' + this.TRANSITION_CONTAINER);
    const clickIsInsideFound = clickIsInside ? clickIsInside.contains(e.target) : false
    if (!clickIsInsideFound) { this._close(); }
  }
  _closeOnEsc(e: any) {
    if (e.keyCode === this.ESC) { this._close(); }
  }
  _close() {
    if (this.isDestroyed || this.isDestroying)
      return;
    set(this, 'open', false);
    set(this, 'selectedKey', -1);
  }
  @action
  onClosePopover() {
    this.set('open', false);
  }
  @action
  onMouseSelect(data: any, index: number, optIndex: number) {
    this.set('selected', data);
    if (this.get('onSelect')) {
      this.get('onSelect')(data, index, optIndex);
    }
    this._close();
  }
  @action
  async togglePopover() {
    await this.toggleProperty('open');
    let data: any[] = JSON.parse(JSON.stringify(this.get('data') || []));
    set(this, 'filteredList', data);
  }
  @action
  handleKeydown(data: any, e: any) {
    this.set('open', true);

    if (e.keyCode == 40 || e.keyCode == 38) {
      let container: any = document.querySelector('.' + this.TRANSITION_CONTAINER);
      let scrollContainer = container.querySelector('ul');
      let list: any[] = container.querySelectorAll(`.${this.POPOVER_CONTENT} ul li`);
      if (list) {
        if (e.keyCode === 40) {
          if (this.selectedKey < list.length - 1)
            this.selectedKey++;
          if (container.getBoundingClientRect().bottom <= list[this.selectedKey].querySelector('a').getBoundingClientRect().bottom)
            scrollContainer.scrollTop += 30;
        } else if (e.keyCode === 38) {
          if (this.selectedKey > 0)
            this.selectedKey--;
          if (container.getBoundingClientRect().top - 40 <= list[this.selectedKey].querySelector('a').getBoundingClientRect().top - 40)
            scrollContainer.scrollTop -= 30;
        }
        list.forEach(element => {
          element.querySelector('a').className = `${this.MENU_ITEM} ${this.POPOVER_DISMISS}`;

        });
        if (list[this.selectedKey])
          list[this.selectedKey].querySelector('a').className += ' '+this.ACTIVE;
      }
    } else if (e.keyCode == 13) {
      if (this.selectedKey > -1) {
        let container: any = document.querySelector('.'+this.TRANSITION_CONTAINER);
        let selectedLi = container.querySelectorAll(`.${this.POPOVER_CONTENT} ul li div`)[this.selectedKey];
        this.set('selected', selectedLi.innerText);
        let keyword: string = selectedLi.innerText;
        let data = this.get('data');
        for (var i = 0; i < data.length; i++) {
          let options = data[i].options || [];
          for (let index = 0; index < options.length; index++) {
            const element: string = options[index];
            if (element == keyword) {
              if (this.get('onSelect')) {
                this.get('onSelect')(keyword, i, index);
              }
              break;
            }
          }
        }
      }
      this._close();
    }
  }

  @action
  onSearchElement(keyword: string, e: any) {
    if (keyword === '') {
      this.set('filteredList', this.get('data'));
      return;
    }

    if (e.keyCode !== 38 && e.keyCode !== 40) {
      let arr: any[] = [];
      let data = this.get('data');
      for (var i = 0; i < data.length; i++) {
        let options = data[i].options || [];
        options.forEach((txt: any) => {
          if (txt.substring(0, keyword.length).toLowerCase() !== keyword.toLowerCase() && keyword.trim() !== "") {
          } else {
            this.selectedKey = -1;
            let filteredObj: object = {
              groupName: data[i].groupName,
              options: [txt],
            }
            arr.push(filteredObj);
          }
        });

      }
      this.set('filteredList', arr);
    }

  }


};