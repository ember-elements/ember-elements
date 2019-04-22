import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import { classNames } from '@ember-decorators/component';
import * as Classes from '../../-private/common/classes';
import { Intent } from '../../-private/common/intent';
import { readOnly } from '@ember-decorators/object/computed';
import { computed } from '@ember-decorators/object';
import { htmlSafe } from '@ember/string';
@classNames(Classes.FORM_GROUP)
export default class FormGroup extends Component {
  layout = layout;
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
  helperText?: string | HTMLElement;

  /** Whether to render the label and children on a single line. */
  inline?: boolean;

  /** Label of this form group. */
  label?: string | HTMLElement;

  /**
  * `id` attribute of the labelable form element that this `FormGroup` controls,
  * used as `<label for>` attribute.
  */
  labelFor?: string;

  /**
     * Optional secondary text that appears after the label.
  */
  labelInfo?: string | HTMLElement;

  /** CSS properties to apply to the root element. */
  style?: any = htmlSafe(this.style);

  @readOnly('intent') Intents?: Intent;

  @computed('Intents')
  get intentStyle() {
    return this.Intents ? Classes.intentClass(this.Intents) : Classes.intentClass('none');
  }

  classNameBindings = ['intentStyle', `disabled:${Classes.DISABLED}`, `inline:${Classes.INLINE}`];
  attributeBindings = ['style:style'];

  LABEL: string = Classes.LABEL;
  TEXT_MUTED: string = Classes.TEXT_MUTED;
  FORM_CONTENT: string = Classes.FORM_CONTENT;
  FORM_HELPER_TEXT: string = Classes.FORM_HELPER_TEXT;
};
