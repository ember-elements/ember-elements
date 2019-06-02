import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import * as demo from './demo';
import { run } from '@ember/runloop';
import { computed } from '@ember/object';

export default class DomOuterRender extends Component {
  layout = layout;

  destinationElementId: any;
  destinationElement: any = null;
  renderInPlace: boolean = false;
  _dom: any;
  _element: any;
  _wormholeHeadNode: any;
  _wormholeTailNode: any;

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
      return demo.findElementById(this._dom, destinationElementId);
    }
    // no element found
    return null;
  }
  /*
 * Lifecycle
 */
  init() {
    super.init();
    this._dom = demo.getDOM(this);

    // Create text nodes used for the head, tail
    this._wormholeHeadNode = this._dom.createTextNode('');
    this._wormholeTailNode = this._dom.createTextNode('');


    run.schedule('afterRender', () => {
      if (this.isDestroyed) { return; }
      this._element = this._wormholeHeadNode.parentNode;
      if (!this._element) {
        throw new Error('The head node of a wormhole must be attached to the DOM');
      }
      this._appendToDestination();
    });
  }

  willDestroyElement() {
    let { _wormholeHeadNode, _wormholeTailNode } = this;
    run.schedule('render', () => {
      this._removeRange(_wormholeHeadNode, _wormholeTailNode);
    });
  }

  _appendToDestination() {
    var destinationElement = this.get('_destination');
    if (!destinationElement) {
      var destinationElementId = this.get('destinationElementId');
      if (destinationElementId) {
        throw new Error(`ember-wormhole failed to render into '#${destinationElementId}' because the element is not in the DOM`);
      }
      throw new Error('ember-wormhole failed to render content because the destinationElementId was set to an undefined or falsy value.');
    }

    let startingActiveElement: any = demo.getActiveElement();
    this._appendRange(destinationElement, this._wormholeHeadNode, this._wormholeTailNode);
    let resultingActiveElement: any = demo.getActiveElement();
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

  // normal class body definition here
};

