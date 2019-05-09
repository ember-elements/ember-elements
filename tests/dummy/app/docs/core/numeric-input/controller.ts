import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';

export default class DocsCoreNumericInput extends Controller.extend({
  // anything which *must* be merged to prototype here
}) {
  disabled: boolean = false;
  fill: boolean = false;
  large: boolean = false;
  leftIcon: string = "";
  allowNumericCharactersOnly: boolean = true;
  selectAllOnFocus: boolean = false;
  selectAllOnIncrement: boolean = false;
  min: number = 0;
  intent: string = "none";
  max: number = 100;
  value: string = "";
  buttonPosition: string = "right";
  MIN_VALUES = [
    { label: "None", value: -Infinity },
    { label: "-10", value: -10 },
    { label: "0", value: 0, selected: true },
    { label: "20", value: 20 },
  ];

  MAX_VALUES = [
    { label: "None", value: +Infinity },
    { label: "20", value: 20 },
    { label: "50", value: 50 },
    { label: "100", value: 100, selected: true },
  ];

  BUTTON_POSITIONS = [
    { label: "None", value: "none" },
    { label: "Left", value: "left" },
    { label: "Right", value: "right", selected: true },
  ];
  INTENT = [
    { label: "None", value: "none" },
    { label: "Primary", value: "primary" },
    { label: "Success", value: "success" },
    { label: "Warning", value: "warning" },
    { label: "Danger", value: "danger" },
  ];
  @action
  onSwitchChange(value: string) {
    if (value == "disabled")
      this.set('disabled', !this.disabled);
    else if (value == "fill")
      this.set('fill', !this.fill);
    else if (value == "large")
      this.set('large', !this.large);
    else if (value == "leftIcon")
      this.set('leftIcon', this.leftIcon ? "" : "dollar");
    else if (value == "allowNumericCharactersOnly")
      this.set('allowNumericCharactersOnly', !this.allowNumericCharactersOnly);
    else if (value == "selectAllOnFocus")
      this.set('selectAllOnFocus', !this.selectAllOnFocus);
    else if (value == "selectAllOnIncrement")
      this.set('selectAllOnIncrement', !this.selectAllOnIncrement);
  }
  @action
  onChangeMinValue(event: any) {
    this.set('min', +(event.target.value));
  }

  @action
  onChangeMaxValue(event: any) {
    this.set('max', +(event.target.value));
  }
  @action
  onChangePosValue(event: any) {
    this.set('buttonPosition', event.target.value);
  }
  @action
  onChangeIntentValue(event: any) {
    this.set('intent', event.target.value);
  }


  //2nd example
  @action
  handleBlur(e: any) {
    this.handleConfirm((e.target as HTMLInputElement).value);
  }
  @action
  handleKeyDown(e: any) {
    if (e.keyCode == 13) {
      this.handleConfirm((e.target as HTMLInputElement).value);
    }
  }
  @action
  handleValueChange(_valueAsNumber: number, valueAsString: string) {
    this.set('value', valueAsString);
  }


  private handleConfirm = (value: string) => {
    let result = value;
    result = this.expandScientificNotationTerms(result);
    result = this.expandNumberAbbreviationTerms(result);
    result = this.evaluateSimpleMathExpression(result);
    result = this.nanStringToEmptyString(result);
    this.set('value', result);

    // the user could have typed a different expression that evaluates to
    // the same value. force the update to ensure a render triggers even if
    // this is the case.
  };

  private expandScientificNotationTerms = (value: string) => {
    // leave empty strings empty
    if (!value) {
      return value;
    }
    return value.replace(SCIENTIFIC_NOTATION_REGEX, this.expandScientificNotationNumber);
  };

  private expandNumberAbbreviationTerms = (value: string) => {
    // leave empty strings empty
    if (!value) {
      return value;
    }
    return value.replace(NUMBER_ABBREVIATION_REGEX, this.expandAbbreviatedNumber);
  };

  private evaluateSimpleMathExpression = (value: string) => {
    // leave empty strings empty
    if (!value) {
      return value;
    }

    // parse all terms from the expression. we allow simple addition and
    // subtraction only, so we'll split on the + and - characters and then
    // validate that each term is a number.
    const terms = value.split(/[+\-]/);

    // ex. "1 + 2 - 3 * 4" will parse on the + and - signs into
    // ["1 ", " 2 ", " 3 * 4"]. after trimming whitespace from each term
    // and coercing them to numbers, the third term will become NaN,
    // indicating that there was some illegal character present in it.
    const trimmedTerms = terms.map((term: string) => term.trim());
    const numericTerms = trimmedTerms.map((term: string) => +term);
    const illegalTerms = numericTerms.filter(isNaN);

    if (illegalTerms.length > 0) {
      return "";
    }

    // evaluate the expression now that we know it's valid
    let total = 0;

    // the regex below will match decimal numbers--optionally preceded by
    // +/- followed by any number of spaces—-including each of the
    // following:
    // ".1"
    // "  1"
    // "1.1"
    // "+ 1"
    // "-   1.1"
    const matches = value.match(/[+\-]*\s*(\.\d+|\d+(\.\d+)?)/gi) || [];
    for (const match of matches) {
      const compactedMatch = match.replace(/\s/g, "");
      total += parseFloat(compactedMatch);
    }
    const roundedTotal = this.roundValue(total);
    return roundedTotal.toString();
  };

  private nanStringToEmptyString = (value: string) => {
    // our evaluation logic isn't perfect, so use this as a final
    // sanitization step if the result was not a number.
    return value === "NaN" ? "" : value;
  };

  private expandAbbreviatedNumber = (value: string) => {
    if (!value) {
      return value;
    }

    const num = +value.substring(0, value.length - 1);
    const lastChar = value.charAt(value.length - 1).toLowerCase();

    let result!: number;

    if (lastChar === NumberAbbreviation.THOUSAND) {
      result = num * 1e3;
    } else if (lastChar === NumberAbbreviation.MILLION) {
      result = num * 1e6;
    } else if (lastChar === NumberAbbreviation.BILLION) {
      result = num * 1e9;
    }

    const isValid = result != null && !isNaN(result);

    if (isValid) {
      result = this.roundValue(result);
    }

    return isValid ? result.toString() : "";
  };


  private expandScientificNotationNumber = (value: string) => {
    if (!value) {
      return value;
    }
    return (+value).toString();
  };

  private roundValue = (value: number, precision: number = 1) => {
    // round to at most two decimal places
    return Math.round(value * 10 ** precision) / 10 ** precision;
  };
  // normal class body definition here
}
export interface INumericInputExtendedExampleState {
  value?: string;
}

const NumberAbbreviation = {
  BILLION: "b",
  MILLION: "m",
  THOUSAND: "k",
};

const NUMBER_ABBREVIATION_REGEX = /((\.\d+)|(\d+(\.\d+)?))(k|m|b)\b/gi;
const SCIENTIFIC_NOTATION_REGEX = /((\.\d+)|(\d+(\.\d+)?))(e\d+)\b/gi;

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'docs/core/numeric-input': DocsCoreNumericInput;
  }
}
