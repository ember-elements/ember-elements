import Component from '@glimmer/component';

import * as Classes from '../../../_private/common/classes';

import type { IIntentProps, Intent, IProps } from '../../../_private/common';

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
  style?: string;
}

interface FormsFormGroupArgs extends IFormGroupProps {
  props: IFormGroupProps;
}

export default class FormGroup extends Component<FormsFormGroupArgs> {
  FORM_GROUP = Classes.FORM_GROUP;
  FORM_CONTENT = Classes.FORM_CONTENT;
  LABEL = Classes.LABEL;
  TEXT_MUTED = Classes.TEXT_MUTED;
  FORM_HELPER_TEXT = Classes.FORM_HELPER_TEXT;

  get props() {
    return this.args.props || {};
  }

  get getClassName() {
    let className;

    if (this.args.className != undefined) {
      className = this.args.className;
    } else if (this.props.className != undefined) {
      return (className = this.props.className);
    }

    return className;
  }

  get getContentClassName() {
    let contentClassName;

    if (this.args.contentClassName != undefined) {
      contentClassName = this.args.contentClassName;
    } else if (this.props.contentClassName != undefined) {
      return (contentClassName = this.props.contentClassName);
    }

    return contentClassName;
  }

  get getDisabled() {
    let disabled;

    if (this.args.disabled != undefined) {
      disabled = this.args.disabled;
    } else if (this.props.disabled != undefined) {
      disabled = this.props.disabled;
    }

    return disabled ? Classes.DISABLED : '';
  }

  get getHelperText() {
    let helperText;

    if (this.args.helperText != undefined) {
      helperText = this.args.helperText;
    } else if (this.props.helperText != undefined) {
      helperText = this.props.helperText;
    }

    return helperText;
  }

  get getInline() {
    let inline;

    if (this.args.inline != undefined) {
      inline = this.args.inline;
    } else if (this.props.inline != undefined) {
      inline = this.props.inline;
    }

    return inline ? Classes.INLINE : '';
  }

  get getIntent() {
    let intent: Intent = 'none';

    if (this.args.intent != undefined) {
      intent = this.args.intent;
    } else if (this.props.intent != undefined) {
      intent = this.props.intent;
    }

    return Classes.intentClass(intent) as Intent;
  }

  get getLabel() {
    let label;

    if (this.args.label != undefined) {
      label = this.args.label;
    } else if (this.props.label != undefined) {
      label = this.props.label;
    }

    return label;
  }

  get getLabelFor() {
    let labelFor;

    if (this.args.labelFor != undefined) {
      labelFor = this.args.labelFor;
    } else if (this.props.labelFor != undefined) {
      labelFor = this.props.labelFor;
    }

    return labelFor;
  }

  get getLabelInfo() {
    let labelInfo;

    if (this.args.labelInfo != undefined) {
      labelInfo = this.args.labelInfo;
    } else if (this.props.labelInfo != undefined) {
      labelInfo = this.props.labelInfo;
    }

    return labelInfo;
  }
}
