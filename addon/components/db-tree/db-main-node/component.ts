
import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import template from './template';
import Ember from 'ember';
import { selectedTree } from '../storeSelectedIndex';
import * as Classes from '../../../-private/common/classes';
import { action } from '@ember/object';
export default class DbTreeDbMainNode extends Component {
  layout = template;
  tagName = 'ul';
  classNameBindings = [`TREE_NODE_LIST`];

  TREE_NODE_LIST = Classes.TREE_NODE_LIST;
  TREE_NODE: string = Classes.TREE_NODE;
  TREE_NODE_EXPANDED: string = Classes.TREE_NODE_EXPANDED;
  TREE_NODE_CONTENT: string = Classes.TREE_NODE_CONTENT;
  TREE_NODE_CARET: string = Classes.TREE_NODE_CARET;
  TREE_NODE_CARET_OPEN: string = Classes.TREE_NODE_CARET_OPEN;
  TREE_NODE_CARET_CLOSED: string = Classes.TREE_NODE_CARET_CLOSED;
  TREE_NODE_LABEL: string = Classes.TREE_NODE_LABEL;

  ICON: string = Classes.ICON + ' ' + Classes.TREE_NODE_ICON + ' bp3-icon-folder-close';
  content!: Array<object>;

  onNodeCollapse!: (item: any, event: object) => void;
  onNodeClick!: (item: any, event: object) => void;
  onNodeDoubleClick!: (item: any, event: object) => void;
  onNodeExpand!: (item: any, event: object) => void;
  onNodeMouseEnter!: (item: any, event: object) => void;
  onNodeMouseLeave!: (item: any, event: object) => void;

  didInsertElement() {
    var content: any = (this.get('content') || [])[0] || {};
    if (this.get('content') && content.id == 0) {
      let node: any = document.getElementById(this.elementId);
      node.classList.add(Classes.TREE_ROOT);
    }
  }

  @action
  async onNodeClickFun(item: any, index: number, event: any) {
    if (selectedTree.selectedChildIndex >= 0) {
      let node: any = document.getElementById('bp3-tree-node2' + selectedTree.selectedChildIndex);
      node.classList.remove(Classes.TREE_NODE_SELECTED);
    }
    if (selectedTree.selectedTreeIndex >= 0) {
      if (selectedTree.selectedTreeIndex == index) {
        let node: any = document.getElementById(Classes.TREE_NODE + index);
        if (node.classList.contains(Classes.TREE_NODE_SELECTED))
          node.classList.remove(Classes.TREE_NODE_SELECTED);
        else
          node.classList.add(Classes.TREE_NODE_SELECTED);

      }
      else {
        let node: any = document.getElementById(Classes.TREE_NODE + selectedTree.selectedTreeIndex);
        node.classList.remove(Classes.TREE_NODE_SELECTED);
        node = document.getElementById(Classes.TREE_NODE + index);
        node.classList.add(Classes.TREE_NODE_SELECTED);
      }
    }
    else {
      let node: any = document.getElementById(Classes.TREE_NODE + index);
      node.classList.add(Classes.TREE_NODE_SELECTED);
    }
    selectedTree.selectedTreeIndex = index;
    if (this.get('onNodeClick'))
      this.get('onNodeClick')(item, event);
  }

  @action
  onNodeDoubleClickFun(item: any, event: any) {
    if (this.get('onNodeDoubleClick'))
      this.get('onNodeDoubleClick')(item, event);
  }

  @action
  onNodeCollapseFun(item: any, event: any) {
    if (item.isExpanded) {
      Ember.set(item, 'isExpanded', false);
      if (this.get('onNodeCollapse'))
        this.get('onNodeCollapse')(item, event);
    }
    else {
      Ember.set(item, 'isExpanded', true);
      if (this.get('onNodeExpand'))
        this.get('onNodeExpand')(item, event);
    }
  }

  @action
  onNodeMouseEnterFun(item: any, event: any) {
    if (this.get('onNodeMouseEnter'))
      this.get('onNodeMouseEnter')(item, event);
  }

  @action
  onNodeMouseLeaveFun(item: any, event: any) {
    if (this.get('onNodeMouseLeave'))
      this.get('onNodeMouseLeave')(item, event);
  }

  // normal class body definition here
};
