import Component from '@glimmer/component';
import { reads } from '@ember/object/computed';

// @ts-ignore
import { setComponentTemplate } from '@ember/component';
// @ts-ignore
import layout from './template';

import { IProps, IIntentProps, Intent } from '../../../_private/common';
import * as Classes from '../../../_private/common/classes';

export interface IFormGroupProps extends IIntentProps, IProps {
  /**
   * A space-delimited list of class names to pass along to the
   * `Classes.FORM_CONTENT` element that contains `children`.
   */
  contentClassName?: string;

  /**
   * Whether form group should appear as non-interactive.
   * Remember that `input` elements must be disabled separately.
   */
  disabled?: boolean;

  /**
   * Optional helper text. The given content will be wrapped in
   * `Classes.FORM_HELPER_TEXT` and displayed beneath `children`.
   * Helper text color is determined by the `intent`.
   */
  helperText?: string;

  /** Whether to render the label and children on a single line. */
  inline?: boolean;

  /** Label of this form group. */
  label?: string;

  /**
   * `id` attribute of the labelable form element that this `FormGroup` controls,
   * used as `<label for>` attribute.
   */
  labelFor?: string;

  /**
   * Optional secondary text that appears after the label.
   */
  labelInfo?: string;

  /** CSS properties to apply to the root element. */
  style?: CSS;
}

interface FormsFormGroupArgs extends IFormGroupProps {
  props: IFormGroupProps;
}

class FormGroup extends Component<FormsFormGroupArgs> {
  @reads('props.className') className?: FormsFormGroupArgs['className'];
  @reads('props.contentClassName')
  contentClassName?: FormsFormGroupArgs['contentClassName'];
  @reads('props.disabled') disabled?: FormsFormGroupArgs['disabled'];
  @reads('props.helperText') helperText?: FormsFormGroupArgs['helperText'];
  @reads('props.inline') inline?: FormsFormGroupArgs['inline'];
  @reads('props.intent') intent?: Intent;
  @reads('props.label') label?: FormsFormGroupArgs['label'];
  @reads('props.labelFor') labelFor?: FormsFormGroupArgs['labelFor'];
  @reads('props.labelInfo') labelInfo?: FormsFormGroupArgs['labelInfo'];

  FORM_GROUP = Classes.FORM_GROUP;
  FORM_CONTENT = Classes.FORM_CONTENT;
  LABEL = Classes.LABEL;
  TEXT_MUTED = Classes.TEXT_MUTED;
  FORM_HELPER_TEXT = Classes.FORM_HELPER_TEXT;

  get getClassName() {
    let className;
    if (this.args.className != undefined) {
      className = this.args.className;
    } else if (this.className != undefined) {
      return (className = this.className);
    }

    return className;
  }

  get getContentClassName() {
    let contentClassName;
    if (this.args.contentClassName != undefined) {
      contentClassName = this.args.contentClassName;
    } else if (this.contentClassName != undefined) {
      return (contentClassName = this.contentClassName);
    }

    return contentClassName;
  }

  get getDisabled() {
    let disabled;

    if (this.args.disabled != undefined) {
      disabled = this.args.disabled;
    } else if (this.disabled != undefined) {
      disabled = this.disabled;
    }

    return disabled ? Classes.DISABLED : '';
  }

  get getHelperText() {
    let helperText;

    if (this.args.helperText != undefined) {
      helperText = this.args.helperText;
    } else if (this.helperText != undefined) {
      helperText = this.helperText;
    }

    return helperText;
  }

  get getInline() {
    let inline;

    if (this.args.inline != undefined) {
      inline = this.args.inline;
    } else if (this.inline != undefined) {
      inline = this.inline;
    }

    return inline != null ? Classes.INLINE : '';
  }

  get getIntent() {
    let intent: Intent = 'none';

    if (this.args.intent != undefined) {
      intent = this.args.intent;
    } else if (this.intent != undefined) {
      intent = this.intent;
    }

    return Classes.intentClass(intent) as Intent;
  }

  get getLabel() {
    let label;

    if (this.args.label != undefined) {
      label = this.args.label;
    } else if (this.label != undefined) {
      label = this.label;
    }

    return label;
  }

  get getLabelFor() {
    let labelFor;

    if (this.args.labelFor != undefined) {
      labelFor = this.args.labelFor;
    } else if (this.labelFor != undefined) {
      labelFor = this.labelFor;
    }

    return labelFor;
  }

  get getLabelInfo() {
    let labelInfo;

    if (this.args.labelInfo != undefined) {
      labelInfo = this.args.labelInfo;
    } else if (this.labelInfo != undefined) {
      labelInfo = this.labelInfo;
    }

    return labelInfo;
  }
}

export default setComponentTemplate(layout, FormGroup);
