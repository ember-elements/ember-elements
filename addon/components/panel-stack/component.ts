import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import template from './template';
import { tagName, classNames, layout } from '@ember-decorators/component';
import { action, computed } from '@ember-decorators/object';
import * as Classes from "../../-private/common/classes";
@layout(template)
@tagName('span')
export default class DbPanelStack extends Component {
  panelList!: any[];
  isPopPanel!: boolean;
  title!: string;
  prevTitle!: string;
  currentPanelId!: number;
  TEXT_OVERFLOW_ELLIPSIS: string = Classes.TEXT_OVERFLOW_ELLIPSIS;
  HEADING: string = Classes.HEADING;
  BUTTON: string = Classes.BUTTON;
  MINIMAL: string = Classes.MINIMAL;
  SMALL: string = Classes.SMALL;
  PANEL_STACK_HEADER_BACK: string = Classes.PANEL_STACK_HEADER_BACK;
  BUTTON_TEXT: string = Classes.BUTTON_TEXT;
  contentId!: string;
  closePanel!: (currentPanelId: number) => void;

  @computed('panelList.[]')
  get isPushPanel(): any {
    if (this.get('panelList') && this.get('panelList').length == 1) {
      this.set('isPopPanel', false);
      this.set('currentPanelId', 1);
      this.set('title', this.get('panelList.0.title'));
      var documents: any = document.querySelector('#' + this.elementId);
      let node: any = documents.querySelector('.' + Classes.PANEL_STACK);
      node.classList.remove('bp3-panel-stack-push');
      node.classList.add('bp3-panel-stack-pop');
      this.animation('.' + Classes.PANEL_STACK_VIEW, 'fadeOutLeft');
      return true;
    }
    else if (this.get('panelList') && this.get('panelList').length > 1) {
      this.set('isPopPanel', true);
      let length = this.get('panelList').length;
      this.set('title', this.get('panelList')[length - 1].title);
      this.set('prevTitle', this.get('panelList')[length - 2].title);
      this.set('currentPanelId', length);
      var documents: any = document.querySelector('#' + this.elementId);
      let node: any = documents.querySelector('.' + Classes.PANEL_STACK);
      node.classList.remove('bp3-panel-stack-pop');
      node.classList.add('bp3-panel-stack-push');
      this.animation('.' + Classes.PANEL_STACK_HEADER, 'fadeOutLeft');
      this.animation('#panel-stack-contents' + this.contentId, 'fadeOutLeft');
    }
    return false;
  }

  didInsertElement() {
    super.init();
    this.set('contentId', this.elementId);
  }

  animation(element, animationName) {
    if (document.getElementById('panel-stack-contents' + this.contentId)) {
      var documents: any = document.querySelector('#' + this.elementId);
      const node = documents.querySelector(element)
      node.classList.add('animated', animationName)
      function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.classList.remove('animated', 'fadeInRight')
        node.removeEventListener('animationend', handleAnimationEnd)
      }
      node.addEventListener('animationend', handleAnimationEnd)
    }
  }
  
  @action
  closeCurrentPanel() {
    if (this.get('closePanel'))
      this.get('closePanel')(this.currentPanelId);
  }
  // normal class body definition here
};
