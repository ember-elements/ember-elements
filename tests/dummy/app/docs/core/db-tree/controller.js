import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';

export default class DocsCoreDbTree extends Controller {
  // BEGIN-SNIPPET docs-example-basic-tree.js

  content: Array<object> = [{
    id: 0,
    hasCaret: true,
    icon: "folder-close",
    label: "Folder 0",
  },
  {
    id: 1,
    icon: "folder-close",
    isExpanded: true,
    label: 'Folder 1',
    childNodes: [
      {
        id: 2,
        icon: "document",
        label: "Item 0",
        secondaryIcon: "eye-open"
      },
      {
        id: 3,
        icon: "tag",
        label: "Organic meditation gluten-free, sriracha VHS drinking vinegar beard man.",
      },
      {
        id: 4,
        hasCaret: true,
        icon: "folder-close",
        label: " Folder 2",
        isExpanded: true,

        childNodes: [
          { id: 5, label: "No-Icon Item" },
          { id: 6, icon: "tag", label: "Item 1" },
          {
            id: 7,
            hasCaret: true,
            icon: "folder-close",
            label: "Folder 3",
            isExpanded: true,

            childNodes: [
              { id: 8, icon: "document", label: "Item 0" },
              { id: 9, icon: "tag", label: "Item 1" },
              {
                id: 10,
                hasCaret: true,
                icon: "folder-close",
                label: "Folder 4",
                childNodes: [
                  { id: 11, icon: "document", label: "Item 0" },
                  { id: 12, icon: "tag", label: "Item 1" },
                ],
              }
            ],
          },




        ],
      },
    ],
  },
  ];
  @action
  onNodeCollapse(item: any, event: object) {
  }
  @action
  onNodeClick(item: any, event: object) {
  }
  @action
  onNodeDoubleClick(item: any, event: object) {
  }
  @action
  onNodeExpand(item: any, event: object) {
  }
  @action
  onNodeMouseEnter(item: any, event: object) {
  }
  @action
  onNodeMouseLeave(item: any, event: object) {
  }

  // END-SNIPPET
  // normal class body definition here
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/core/db-tree': DocsCoreDbTree;
  }
}
