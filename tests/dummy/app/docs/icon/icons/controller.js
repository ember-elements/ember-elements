import Controller from '@ember/controller';
import iconsJosn from './icons';
import Ember from 'ember';
import { action } from '@ember-decorators/object';
// let  iconJson= require('../../../styles/dunki')
export default class DocsIconIcons extends Controller {
  // normal class body definition here
  actionIcons: Array<object> = [];
  dataIcons: Array<object> = [];
  editorIcons: Array<object> = [];
  fileIcons: Array<object> = [];
  interfaceIcons: Array<object> = [];
  mediaIcons: Array<object> = [];
  miscellaneousIcons: Array<object> = [];
  tableIcons: Array<object> = [];
  icons: any = {};
  iconsList: any = [];
  ICONS_PER_ROW: number = 5;
  prevCopiedIcon = null;
  storeIconList: any = [];
  init() {
    this.generateIconList();
  }
  generateIconList() {
    this.icons = {};
    iconsJosn.forEach(element => {
      if (this.icons[element.group])
        this.icons[element.group].push(element);
      else {
        this.icons[element.group] = [element];
      }
    });
    let iconsList: any = [];
    function SortByiconName(x, y) {
      return ((x.iconName == y.iconName) ? 0 : ((x.iconName > y.iconName) ? 1 : -1));
    }
    Object.keys(this.icons).forEach(key => {
      this.icons[key].sort(SortByiconName);
      while (this.icons[key].length % this.ICONS_PER_ROW != 0) {
        this.icons[key].push({ iconName: 'null' })
      }
      iconsList.push({ name: key, data: this.icons[key] });
    });
    Ember.A(this.iconsList);
    this.set('storeIconList', JSON.parse(JSON.stringify(iconsList)));
    this.set('iconsList', iconsList);
  }

  @action
  onkeyUp(text: string) {
    if (text == '') {
      Ember.A(this.iconsList);
      this.set('iconsList', this.storeIconList);
      return;
    }
    function SortByiconName(x, y) {
      return ((x.iconName == y.iconName) ? 0 : ((x.iconName > y.iconName) ? 1 : -1));
    }
    let iconsList: any = [];
    Object.keys(this.icons).forEach(key => {
      let icons = this.icons[key] || [];
      let matchIcons: any = [];
      icons.forEach(element => {
        if (this.check(element.iconName, text))
          matchIcons.push(element);
      });

      if (matchIcons.length) {
        while (matchIcons.length % this.ICONS_PER_ROW != 0) {
          matchIcons.push({ iconName: 'null' })
        }
        this.icons[key].sort(SortByiconName);
        iconsList.push({ name: key, data: matchIcons });
      }
    });
    Ember.A(this.iconsList);
    this.set('iconsList', iconsList);
  }
  check(title: string, keyword: string) {
    if (title.substring(0, keyword.length).toLowerCase() !== keyword.toLowerCase() && keyword.trim() !== "") return false;
    else return true;
  }
  @action
  onClickCopyIcon(item: string) {
    if (this.prevCopiedIcon != null) {
      var list = document.querySelectorAll('#' + this.prevCopiedIcon);
      for (var i = 0; i < list.length; ++i) {
        list[i].classList.remove('docs-clipboard-copied');
      }
    }
    var list = document.querySelectorAll('div#' + item);
    var copyText: any = document.querySelector('input#' + item);
    copyText.select();
    document.execCommand("copy");
    for (var i = 0; i < list.length; ++i) {
      list[i].classList.add('docs-clipboard-copied');
    }
    this.set('prevCopiedIcon', item);
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/icon/icons': DocsIconIcons;
  }
}
