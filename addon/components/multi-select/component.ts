
import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import template from './template';
import Ember from 'ember';
import { action, computed } from '@ember-decorators/object';
import { get, getProperties, set } from '@ember/object';
import { classNames, tagName, attribute, layout, className } from '@ember-decorators/component';
import { reads, readOnly } from '@ember-decorators/object/computed';
import * as Classes from "../../-private/common/classes";
@layout(template)
@tagName('span')
@classNames(`${Classes.INPUT} ${Classes.TAG_INPUT}`)
export default class MultiSelect extends Component {
  @className(Classes.POPOVER_OPEN)
  open: boolean = false;
  @attribute('style') style: any = Ember.String.htmlSafe((this.style));
  _popperTarget: any;
  ESC: number = 27;
  selectedKey: number = -1;
  selected: any;
  selectedItem: any;
  classNameAssigned: string = `${Classes.TEXT_OVERFLOW_ELLIPSIS} ${Classes.FILL}`;
  select: any[] = this.selected || [];
  isDBrequired!: boolean;
  currentWindow:any;
  tagInput:string=Classes.TAG_INPUT_VALUES;
  INPUT_GHOST:string=Classes.INPUT_GHOST;
  BUTTON:string=Classes.BUTTON;
  MINIMAL:string=Classes.MINIMAL;
  TRANSITION_CONTAINER:string=Classes.TRANSITION_CONTAINER;
  POPOVER:string=Classes.POPOVER;
  POPOVER_CONTENT:string=Classes.POPOVER_CONTENT;
  POPOVER_DISMISS:string=Classes.POPOVER_DISMISS;
  MENU:string=Classes.MENU;
  MENU_ITEM:string=Classes.MENU_ITEM;
  TEXT_OVERFLOW_ELLIPSIS:string=Classes.TEXT_OVERFLOW_ELLIPSIS;
  TAG:string=Classes.TAG;
  FILL:string=Classes.FILL;
  @readOnly('open') Open!: boolean;
  didInsertElement() {
    set(this, '_popperTarget', this.element);
    this.set('currentWindow', this.$(window));
  }
  filteredList: any[] = [];
  isDefaultOpen!: boolean;
  data: any;
  onSelect!: (item: object[]) => void;
  onDelete!: (item: object[]) => void;
  init() {
    super.init();
    this._closeOnClickOut = this._closeOnClickOut.bind(this);
    this._closeOnEsc = this._closeOnEsc.bind(this);
  }
  async didReceiveAttrs() {
    this.set('select', this.selected || []);
    if (this.get('isDBrequired'))
      this.set('isDBrequired', true);
    else
      this.set('isDBrequired', false);
    await set(this, '_popperTarget', this.element);
    this.set('filteredList', this.get('data'));
    if (this.get('isDefaultOpen')) {
      this.set('open', this.get('isDefaultOpen'));
      this.addToFilterList();
    }
  }


  didRender() {
    Ember.run.next(this, this.detachClickHandler);
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
  _closeOnClickOut(e: any) {

    if (e.target.className != `${Classes.MENU_ITEM} ${this.POPOVER_DISMISS}` && e.target.className != this.classNameAssigned) { this._close(); }
  }
  _closeOnEsc(e: any) {
    if (e.keyCode === this.ESC) { this._close(); }
  }
  _close() {
    if (this.isDestroyed || this.isDestroying)
      return;
    set(this, 'open', false);
  }
  @action
  close() {
    this._close();
  }
  @action
  async togglePopover() {
    await this.toggleProperty('open');
    this.addToFilterList();
  }
  async  addToFilterList() {
    let data: [] = JSON.parse(JSON.stringify(this.get('data') || []));
    let arr = [];
    if (this.get('select')) {
      for (let index = 0; index < data.length; index++) {
        const element: any = data[index];
        let isfind = await this.get('select').find((data: any) => {
          return data == element
        });
        if (!isfind) {
          arr.push(element);
        }
      }
      this.set('filteredList', arr);
    }
  }
  @action
  onMouseSelect(data: any) {
    Ember.A(this.select);
    Ember.A(this.filteredList);
    if (this.select && this.select.filter(e => e === data).length > 0) {
      this.get('select').removeObject(data);
      this.get('filteredList').pushObject(data);
    }
    else {
      this.get('select').pushObject(data);
      this.get('filteredList').removeObject(data);
    }
    this.send('onSelected');
    this.set('open', true);
  }


  @action
  delete(index: any) {
    Ember.A(this.get('select'));
    if (index != null) {
      let removeObj = this.get('select')[index];
      this.get('select').removeObject(removeObj);
    } else {
      this.set('select', []);
    }
    var arr = JSON.parse(JSON.stringify(this.get('data') || []));
    Ember.A(arr);
    this.get('select').forEach((element) => {
      arr.removeObject(element);
    })
    this.set('filteredList', arr);
    this.send('onSelected');
  }
  @action
  onSelected() {

    if (this.get('onSelect'))
      this.get('onSelect')(this.select);
    if (this.get('onDelete'))
      this.get('onDelete')(this.select);
  }
  @action
  active() {
    let container: any = document.querySelector(`.${this.TRANSITION_CONTAINER}`);
    if (this.filteredList.length) {
      let list: any[] = container.querySelectorAll(`.${this.POPOVER_CONTENT} ul li`);
      list.forEach(element => {
        element.querySelector('a').className = `${this.MENU_ITEM} ${this.POPOVER_DISMISS}`;
      });
      list[this.selectedKey].querySelector('a').className += ' '+Classes.ACTIVE;
    }
  }
  @action
  handleKeydown(e: any) {
    this.set('open', true);
    let element = this.get('element').querySelectorAll(`.${Classes.TAG_INPUT_VALUES} .${this.TAG}`);
    let textbox: any = this.get('element').querySelector('input');
    if (e.keyCode === 8) {
      if (this.selectedItem > -1 && textbox.value.length == 0) {
        if (this.selectedItem == null) this.selectedItem = element.length - 1;
        else {
          this.send('delete', this.selectedItem);
          if (this.selectedItem > 0)
            this.selectedItem--;
        }
      }
    } else if (e.keyCode === 37) {
      if (this.selectedItem == null) this.selectedItem = element.length - 1;
      else if (this.selectedItem > 0)
        this.selectedItem--;
    }
    else if (e.keyCode === 39) {
      if (this.selectedItem == null) this.selectedItem = 0;
      else if (this.selectedItem < element.length - 1)
        this.selectedItem++;
    }
    if (e.keyCode == 37 || e.keyCode == 39 || e.keyCode == 8) {
      if (this.selectedItem > -1 && textbox.value.length == 0) {
        element.forEach((item) => {
          item.className = 'bp3-tag'
        });
        element[this.selectedItem].className += ' '+Classes.ACTIVE;
      }
    }
    if (e.keyCode === 40 || e.keyCode === 38) {
      let container: any = document.querySelector(`.${this.TRANSITION_CONTAINER}`);
      if (this.filteredList.length && container) {
        let scrollContainer = container.querySelector('ul');
        let list = container.querySelectorAll(`.${this.POPOVER_CONTENT} ul li`);
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
        this.send('active');
      }
    } else if (e.keyCode === 13) {
      Ember.A(this.select);
      Ember.A(this.filteredList);
      if (this.get('select').includes(this.filteredList[this.selectedKey])) {
        this.get('select').removeObject(this.filteredList[this.selectedKey]);
        this.get('filteredList').pushObject(this.filteredList[this.selectedKey]);
      }
      else {
        if (this.filteredList[this.selectedKey]) {
          this.get('select').pushObject(this.filteredList[this.selectedKey]);
          this.get('filteredList').removeObject(this.filteredList[this.selectedKey]);
        }
      }
      this.set('selectedKey', 0);
      this.send('active');
      this.send('onSelected');
    }
  }
  @action
  onSearchElement(e: any) { //search value
    let keys: Array<Number> = [37, 38, 39, 40, 13];
    Ember.A(this.get('data'));
    let element: any = this.element;
    let keyword = element.querySelector('input').value;
    if (!keys.includes(e.keyCode)) {
      var temp = JSON.parse(JSON.stringify(this.get('data') || []));
      Ember.A(temp);
      this.get('select').forEach((element) => {
        temp.removeObject(element);
      })
      let arr = [];
      for (var i = 0; i < temp.length; i++) {
        let txt = temp[i];
        if (txt.substring(0, keyword.length).toLowerCase() !== keyword.toLowerCase() && keyword.trim() !== "") {
        } else {
          this.selectedKey = -1;
          arr.push(txt);
        }
      }
      this.set('filteredList', arr);
    }
  }



};


