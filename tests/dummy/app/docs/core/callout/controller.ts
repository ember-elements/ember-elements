import Controller from '@ember/controller';
import { action } from '@ember/object';
export default class DocsCoreCallout extends Controller.extend({
  // anything which *must* be merged to prototype here
}) {
  intent = "none";
  title = "Visually important content";
  icon!: string;

  INTENT = [
    { label: "None", value: "none" },
    { label: "Primary", value: "primary" },
    { label: "Success", value: "success" },
    { label: "Warning", value: "warning" },
    { label: "Danger", value: "danger" },
  ];

  @action
  onChangeIntentValue(event: any) {
    this.set('intent', event.target.value);
  }

  @action
  onSwitchChange(value: string) {
    if (value == "isShowHeader")
      this.set('title', this.title == null ? "Visually important content" : null);
    else if (value == "icon")
      this.set('icon', this.icon == null ? "paperclip" : undefined);
  }

  // normal class body definition here
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/core/callout': DocsCoreCallout;
  }
}
