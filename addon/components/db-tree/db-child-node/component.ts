

import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import { action } from '@ember-decorators/object';
import Ember from 'ember';
import { selectedTree } from '../storeSelectedIndex';

import * as Classes from '../../../-private/common/classes';
export default class DbTreeDbChildNode extends Component {
  layout = layout;
  iteration!: number;
  treeNodeClassName!: string;
  onNodeCollapse!: (item: any, event: object) => void;
  onNodeClick!: (item: any, event: object) => void;
  onNodeDoubleClick!: (item: any, event: object) => void;
  onNodeExpand!: (item: any, event: object) => void;
  onNodeMouseEnter!: (item: any, event: object) => void;
  onNodeMouseLeave!: (item: any, event: object) => void;
  COLLAPSE:string=Classes.COLLAPSE;
  COLLAPSE_BODY:string=Classes.COLLAPSE_BODY;
  TREE_NODE:string=Classes.TREE_NODE;
  TREE_NODE_EXPANDED:string=Classes.TREE_NODE_EXPANDED;
  TREE_NODE_CONTENT:string=Classes.TREE_NODE_CONTENT;
  TREE_NODE_CARET:string=Classes.TREE_NODE_CARET;
  TREE_NODE_CARET_OPEN:string=Classes.TREE_NODE_CARET_OPEN;
  TREE_NODE_CARET_CLOSED:string=Classes.TREE_NODE_CARET_CLOSED;
  TREE_NODE_CARET_NONE:string=Classes.TREE_NODE_CARET_NONE;
  TREE_NODE_SECONDARY_LABEL:string=Classes.TREE_NODE_SECONDARY_LABEL;
  POPOVER_WRAPPER:string=Classes.POPOVER_WRAPPER;
  POPOVER_TARGET:string=Classes.POPOVER_TARGET;
  TREE_NODE_LABEL:string=Classes.TREE_NODE_LABEL;
  TREE_NODE_SELECTED:string=Classes.TREE_NODE_SELECTED;
  TREE_NODE_LIST:string=Classes.TREE_NODE_LIST;
  ICON:string=Classes.ICON+' '+ Classes.TREE_NODE_ICON+' bp3-icon-folder-close';

  didReceiveAttrs() {
    this.iteration += 1
    this.set('treeNodeClassName', `${this.TREE_NODE_CONTENT} ${this.TREE_NODE_CONTENT}-${this.iteration}`);
  }

  @action
  onNodeClickFun(item: any, event: any) {
    if (selectedTree.selectedTreeIndex >= 0) {
      let node: any = document.getElementById(this.TREE_NODE + selectedTree.selectedTreeIndex);
      node.classList.remove(this.TREE_NODE_SELECTED);
    }
    if (selectedTree.selectedChildIndex >= 0) {
      if (selectedTree.selectedChildIndex == item.id) {
        let node: any = document.getElementById('bp3-tree-node2' + item.id);
        if (node.classList.contains(Classes.TREE_NODE_SELECTED))
        node.classList.remove(Classes.TREE_NODE_SELECTED);
      else
        node.classList.add(Classes.TREE_NODE_SELECTED);
      }
      else {
        let node: any = document.getElementById('bp3-tree-node2' + selectedTree.selectedChildIndex);
        node.classList.remove(this.TREE_NODE_SELECTED);
        node = document.getElementById('bp3-tree-node2' + item.id);
        node.classList.add(this.TREE_NODE_SELECTED);
      }
    }
    else {
      let node: any = document.getElementById('bp3-tree-node2' + item.id);
      node.classList.add(this.TREE_NODE_SELECTED);
    }
    selectedTree.selectedChildIndex = item.id;
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
