import Controller from '@ember/controller';
import Ember from 'ember';
import { action, computed } from '@ember/object';

export default class DocsCorePanelStack extends Controller {
  // normal class body definition here
  // BEGIN-SNIPPET docs-example-basic-panel-block.js
  componentName: string = 'create-panel';
  title: string = 'panel1';
  panelList: Array<object> = [
    {
      title: 'panel1',
      component: 'create-panel'
    }
  ];
  @computed('panelList.[]')
  get reversePanelList() {
    let data = JSON.parse(JSON.stringify(this.panelList))
    return data.reverse();
  }
  @action
  onClosePanel(currentPanelId: number) {
    Ember.A(this.get('panelList'));
    this.panelList.removeObject(this.panelList[currentPanelId - 1]);

  }
  @action
  sendComponentName(componentName: string) {
    this.set('componentName', componentName);
  }
  //END-SNIPPET
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/core/panel-stack': DocsCorePanelStack;
  }
}
