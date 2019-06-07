import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import { run } from '@ember/runloop';
import { getActiveElement, findElementById, getDOM } from '../../-private/utils/panelDom';
import { computed, observes } from '@ember-decorators/object';

export default class Portal extends Component.extend({
  // anything which *must* be merged to prototype here
}) {
  layout = layout;
  destinationElementId: any = null;
  destinationElement?: string;
  renderInPlace: boolean = false;

  @computed('destinationElementId')
  get to() {
    return this.get('destinationElementId');
  }

  @computed('destinationElement', 'destinationElementId', 'renderInPlace')
  get _destination() {
    let renderInPlace = this.get('renderInPlace');
    if (renderInPlace) {
      return this._element;
    }

    let destinationElement = this.get('destinationElement');
    if (destinationElement) {
      return destinationElement;
    }
    let destinationElementId = this.get('destinationElementId');
    if (destinationElementId) {
      return findElementById(this._dom, destinationElementId);
    }
    // no element found
    return null;
  };

  private _dom: any;
  private _headNode: any;
  private _element: any;
  private _tailNode: any;
  init() {
    super.init();

    this._dom = getDOM(this);

    // Create text nodes used for the head, tail
    this._headNode = this._dom.createTextNode('');
    this._tailNode = this._dom.createTextNode('');

    /*al
     * init to be run after render. Importantly, we want to run
     * appendToDestination after the child nodes have rendered.
     */
    run.schedule('afterRender', () => {
      if (this.isDestroyed) { return; }
      this._element = this._headNode.parentNode;
      if (!this._element) {
        throw new Error('The head node of a portal must be attached to the DOM');
      }
      this._appendToDestination();
    });
  }

  willDestroyElement() {
    // not called in fastboot
    this._super(...arguments);
    let { _headNode, _tailNode } = this;
    run.schedule('render', () => {
      this._removeRange(_headNode, _tailNode);
    });
  }

  @observes('_destination')
  _destinationDidChange() {
    let destinationElement = this.get('_destination');
    if (destinationElement !== this._headNode.parentNode) {
      run.schedule('render', this, '_appendToDestination');
    }
  }

  _appendToDestination() {
    var destinationElement = this.get('_destination');
    if (!destinationElement) {
      var destinationElementId = this.get('destinationElementId');
      if (destinationElementId) {
        throw new Error(`protal failed to render into '#${destinationElementId}' because the element is not in the DOM`);
      }
      throw new Error('portal failed to render content because the destinationElementId was set to an undefined or falsy value.');
    }

    let startingActiveElement: any = getActiveElement();
    this._appendRange(destinationElement, this._headNode, this._tailNode);
    let resultingActiveElement = getActiveElement();
    if (startingActiveElement && resultingActiveElement !== startingActiveElement) {
      startingActiveElement.focus();
    }
  }

  _appendRange(destinationElement: any, firstNode: any, lastNode: any) {
    while (firstNode) {
      destinationElement.insertBefore(firstNode, null);
      firstNode = firstNode !== lastNode ? lastNode.parentNode.firstChild : null;
    }
  }

  _removeRange(firstNode: any, lastNode: any) {
    var node = lastNode;
    do {
      var next = node.previousSibling;
      if (node.parentNode) {
        node.parentNode.removeChild(node);
        if (node === firstNode) {
          break;
        }
      }
      node = next;
    } while (node);
  }

};
