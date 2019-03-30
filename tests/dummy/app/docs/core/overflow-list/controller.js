import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';

export default class DocsCoreOverflowList extends Controller {

  // normal class body definition here
  // BEGIN-SNIPPET docs-example-overflow.ts

  fromValue: string = "START";
  value: number = 50;
  items: Array<object> = [
    { icon: "folder-close", text: "All files" },
    { icon: "folder-close", text: "Users" },
    { icon: "folder-close", text: "Janet" },
    { href: "#", icon: "folder-close", text: "Photos" },
    { href: "#", icon: "folder-close", text: "Wednesday" },
    { icon: "document", text: "image.jpg" },
  ];
  @action
  onCollapseFrom(data: string) {
    this.set('fromValue', data);
  }
  //END-SNIPPET

  @action
  onValueIncrement(data: boolean) {
    this.findWidth(data);
  }
  @action
  onKeyDown(e: any) {
    if (e.keyCode == 38)
      this.findWidth(true);
    else if (e.keyCode == 40)
      this.findWidth(false);


  }
  findWidth(data: boolean) {
    if (data) {
      if (this.value < 100) {
        this.set('value', this.value + 1);
        document.getElementById('overflowWidthInput').value = this.value;
        document.getElementById('overflowListCard1').style.width = this.value + '%';
      }
    }
    else {
      if (this.value > 0) {
        this.set('value', this.value - 1);
        document.getElementById('overflowWidthInput').value = this.value;
        document.getElementById('overflowListCard1').style.width = this.value + '%';

      }
    }
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/core/overflow-list': DocsCoreOverflowList;
  }
}
