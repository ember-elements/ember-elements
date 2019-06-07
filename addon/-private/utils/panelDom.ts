import { getOwner } from '@ember/application';

export function getActiveElement() {
    if (typeof document === 'undefined') {
        return null;
    } else {
        return document.activeElement;
    }
}

function childNodesOfElement(element: any) {
    let children = [];
    let child = element.firstChild;
    while (child) {
        children.push(child);
        child = child.nextSibling;
    }
    return children;
}

export function findElementById(doc: any, id: string) {
    if (doc.getElementById) {
        return doc.getElementById(id);
    }

    let nodes = childNodesOfElement(doc);
    let node;

    while (nodes.length) {
        node = nodes.shift();

        if (node.getAttribute && node.getAttribute('id') === id) {
            return node;
        }

        nodes = childNodesOfElement(node).concat(nodes);
    }
}

// Private Ember API usage. Get the dom implementation used by the current
// renderer, be it native browser DOM
export function getDOM(context: any) {
    let { renderer } = context;
    if (!renderer._dom) {
        let container = getOwner ? getOwner(context) : context.container;
        let documentService = container.lookup('service:-document');

        if (documentService) { return documentService; }

        renderer = container.lookup('renderer:-dom');
    }

    if (renderer._dom && renderer._dom.document) {
        return renderer._dom.document;
    } else {
        throw new Error('Panel could not get DOM');
    }
}
