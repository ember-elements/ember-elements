import { click, render, triggerKeyEvent, typeIn } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

import hbs from 'htmlbars-inline-precompile';

import * as Classes from '../classes';
module('Integration | Component | numeric-input', function (hooks) {
  setupRenderingTest(hooks);

  test('Default null value in <NumericInput>', async function (assert) {
    await render(hbs`<NumericInput/>`); //Default null value in <NumericInput>

    assert.dom('.' + Classes.INPUT).hasValue(''); // null value
  });

  test('increments the value from 0 if the field is empty', async function (assert) {
    await render(hbs`<NumericInput/>`); //increments the value from 0 if the field is empty

    await click('button');

    assert.dom('.' + Classes.INPUT).hasValue('1');
  });

  test('renders the buttons on the right when buttonPosition == right', async function (assert) {
    await render(hbs` <NumericInput @buttonPosition='right'/>`);

    assert.strictEqual(
      document
        .querySelector('.' + Classes.NUMERIC_INPUT)
        .getElementsByTagName('div')[1].classList[0],
      Classes.BUTTON_GROUP
    );
  });

  test('renders the buttons on the right when buttonPosition == left', async function (assert) {
    await render(hbs`
      <NumericInput @buttonPosition='left'/>
    `);

    assert.strictEqual(
      document
        .querySelector('.' + Classes.NUMERIC_INPUT)
        .getElementsByTagName('div')[0].classList[0],
      Classes.BUTTON_GROUP
    );
  });

  test('does not render the buttons when buttonPosition == "none"', async function (assert) {
    await render(hbs`
      <NumericInput @buttonPosition='none'/>
    `);
    assert.notOk(
      document
        .querySelector('.' + Classes.NUMERIC_INPUT)
        .getElementsByTagName('div')[1]
    );
  });

  test('does not render the buttons when buttonPosition is null', async function (assert) {
    await render(hbs`
      <NumericInput @buttonPosition='null'/>
    `);
    assert.notOk(
      document
        .querySelector('.' + Classes.NUMERIC_INPUT)
        .getElementsByTagName('div')[1]
    );
  });

  test('always renders the children in a ControlGroup', async function (assert) {
    await render(hbs`<NumericInput/>`); // always renders the children in a ControlGroup

    assert.strictEqual(
      document.querySelector('.' + Classes.BUTTON_GROUP).parentNode
        .classList[0],
      Classes.CONTROL_GROUP
    );
  });

  test('Basic functionality:- works like a text input', async function (assert) {
    await render(hbs`<NumericInput />`);

    document.querySelector('input').value = '11';
    assert.strictEqual(document.querySelector('input').value, '11');
  });

  test('allows entry of non-numeric characters', async function (assert) {
    await render(hbs`<NumericInput />`); //default don"t allows entry of non-numeric characters

    document.querySelector('input').value = '11 + a';
    assert.strictEqual(document.querySelector('input').value, '11 + a');
  });

  test('provides numeric value to onValueChange as a number and a string', async function (assert) {
    this.set('onValueChange', function (valueAsNumber) {
      this.set('valueAsNumber', valueAsNumber);
    });
    await render(hbs`
      <NumericInput @value={{1}} @onValueChange={{action this.onValueChange }} />
    `);
    await typeIn('input', '13');
    assert.strictEqual(this.valueAsNumber, 113);
  });

  test('provides non-numeric value to onValueChange as NaN and a string', async function (assert) {
    this.set('onValueChange', function (valueAsNumber) {
      this.set('valueAsNumber', valueAsNumber);
    });
    await render(hbs`
      <NumericInput @onValueChange={{action this.onValueChange }} />
    `);
    await typeIn('input', 'non-numeric-value');
    assert.strictEqual(this.valueAsNumber.toString(), 'NaN');
  });

  test('accepts a numeric value', async function (assert) {
    await render(hbs`
      <NumericInput @value={{10}}  />
    `);
    assert.dom('.' + Classes.INPUT).hasValue('10'); // null value
  });

  test('accepts a string value', async function (assert) {
    await render(hbs`
      <NumericInput @value='10'  />
    `);
    assert.dom('.' + Classes.INPUT).hasValue('10'); // null value
  });

  test('in controlled mode, accepts successive value changes containing non-numeric characters', async function (assert) {
    this.set('value', '1 +');
    await render(hbs`
      <NumericInput @value={{this.value}}  />
    `);
    assert.dom('.' + Classes.INPUT).hasValue('1 +');
  });

  test('fires onValueChange with the number value and the string value when the value changes', async function (assert) {
    this.set('onValueChange', function (valueAsNumber) {
      this.set('valueAsNumber', valueAsNumber);
    });
    await render(hbs`
      <NumericInput  @onValueChange={{action this.onValueChange }} />
    `);
    await click('button');
    assert.dom('.' + Classes.INPUT).hasValue('1');

    assert.strictEqual(this.valueAsNumber, 1);
  });

  test('fires onButtonClick with the number value and the string value when either button is pressed', async function (assert) {
    this.set('onButtonClick', function (valueAsNumber) {
      this.set('valueAsNumber', valueAsNumber);
    });
    await render(hbs`
      <NumericInput  @onButtonClick={{action this.onButtonClick }} />
    `);
    // incrementing from 0
    await click('button');
    assert.dom('.' + Classes.INPUT).hasValue('1');
    assert.strictEqual(this.valueAsNumber, 1);

    // decrementing from 1 now
    let button2 = this.element.querySelectorAll('button')[1];

    await click(button2);
    assert.dom('.' + Classes.INPUT).hasValue('0');
    assert.strictEqual(this.valueAsNumber, 0);
  });

  test('if false (the default), does not select any text on focus', async function (assert) {
    await render(hbs`
      <NumericInput @value='12345678' />
    `);

    const input = this.element.querySelector('input');

    await input.focus();
    assert.strictEqual(input.selectionStart, input.selectionEnd);
  });

  test('if true, selects all text on focus', async function (assert) {
    this.set('value', '12345678');
    await render(hbs`
      <NumericInput @value={{this.value}} @selectAllOnFocus={{true}} />
    `);

    const input = this.element.querySelector('input');

    await input.focus();
    assert.strictEqual(input.selectionEnd, this.value.length);
  });

  test('if false (the default), does not select any text on increment', async function (assert) {
    this.set('value', '12345678');
    await render(hbs`
      <NumericInput @value={{this.value}}  />
    `);

    const input = this.element.querySelector('input');

    await input.focus();
    await triggerKeyEvent(input, 'keydown', 40);
    assert.strictEqual(input.selectionStart, input.selectionEnd);
  });

  test('if true, selects all text on increment', async function (assert) {
    this.set('value', '12345678');
    await render(hbs`
      <NumericInput @value={{this.value}} @selectAllOnIncrement={{true}}  />
    `);

    const input = this.element.querySelector('input');

    await input.focus();
    await triggerKeyEvent(input, 'keydown', 40);
    assert.strictEqual(input.selectionEnd, this.value.length);
  });

  // //Keyboard text entry in input field

  const LESS_COMMON_SYMBOLS = 'åß∂ƒ©©˙∆˚≈ç√∫˜µ≤∑´®†¥¨ˆ≤≥';

  const NON_CHARACTER_KEYS = 'Alt';

  const NON_NUMERIC_LOWERCASE_LETTERS = 'abcdfghijklmnopqrstuvwxyz';
  const NON_NUMERIC_UPPERCASE_LETTERS = 'ABCDFGHIJKLMNOPQRSTUVWXYZ';
  const NON_NUMERIC_SYMBOLS_WITHOUT_SHIFT = "`=[]\\;',/";
  const NON_NUMERIC_SYMBOLS_WITH_SHIFT = '~!@#$%^&*()_{}|:"<>?';

  const NUMERIC_DIGITS = '0123456789'; // could be typed from the keyboard or numpad
  const NUMERIC_LOWERCASE_LETTERS = 'e';
  const NUMERIC_UPPERCASE_LETTERS = 'E';
  const NUMERIC_SYMBOLS_WITHOUT_SHIFT = '.-';
  const NUMERIC_SYMBOLS_WITH_SHIFT = '+';

  // const SAMPLE_CHARS_TO_ALLOW_WITH_ALT_CTRL_META_WITHOUT_SHIFT = "a[;,/=";
  // const SAMPLE_CHARS_TO_ALLOW_WITH_ALT_CTRL_META_WITH_SHIFT = "A{:<?_!";

  const SPACE_CHAR = ' ';

  test('allowNumericCharactersOnly=true disables keystroke for all letters except "e" and "E"', async function (assert) {
    this.set('value', NON_NUMERIC_LOWERCASE_LETTERS);
    await render(hbs`
      <NumericInput @value={{this.value}} @didPasteEventJustOccur={{true}}  />
    `);
    await triggerKeyEvent('.' + Classes.INPUT, 'keyup', 'Enter');
    assert.strictEqual(
      this.element.querySelector('.' + Classes.INPUT).value,
      NON_NUMERIC_LOWERCASE_LETTERS,
      'NON_NUMERIC_LOWERCASE_LETTERS'
    );

    this.set('value', NON_NUMERIC_UPPERCASE_LETTERS);
    await triggerKeyEvent('.' + Classes.INPUT, 'keyup', 'Enter');
    assert.strictEqual(
      this.element.querySelector('.' + Classes.INPUT).value,
      NON_NUMERIC_UPPERCASE_LETTERS,
      'NON_NUMERIC_UPPERCASE_LETTERS'
    );

    this.set('valueI', NUMERIC_LOWERCASE_LETTERS);
    await render(hbs`
      <NumericInput @value={{this.valueI}} @didPasteEventJustOccur={{true}}  />
    `);

    await triggerKeyEvent('.' + Classes.INPUT, 'keyup', 'Enter');
    assert.strictEqual(
      this.element.querySelector('.' + Classes.INPUT).value,
      NUMERIC_LOWERCASE_LETTERS,
      'NUMERIC_LOWERCASE_LETTERS'
    );

    this.set('valueI', NUMERIC_UPPERCASE_LETTERS);
    await triggerKeyEvent('.' + Classes.INPUT, 'keydown', 'Enter');
    assert.dom('.' + Classes.INPUT).hasValue('E'); // null value
  });

  test("disables keystroke for all common English symbols except '.', '-', and '+'", async function (assert) {
    this.set('value', NON_NUMERIC_SYMBOLS_WITHOUT_SHIFT);
    await render(hbs`
      <NumericInput @value={{this.value}} @didPasteEventJustOccur={{true}}  />
    `);
    await triggerKeyEvent('.' + Classes.INPUT, 'keyup', 'Enter');
    assert.strictEqual(
      this.element.querySelector('.' + Classes.INPUT).value,
      NON_NUMERIC_SYMBOLS_WITHOUT_SHIFT,
      'NON_NUMERIC_SYMBOLS_WITHOUT_SHIFT'
    );

    this.set('value', NUMERIC_SYMBOLS_WITHOUT_SHIFT);
    await triggerKeyEvent('.' + Classes.INPUT, 'keyup', 'Enter');
    assert.strictEqual(
      this.element.querySelector('.' + Classes.INPUT).value,
      '.-',
      'NUMERIC_SYMBOLS_WITHOUT_SHIFT'
    );

    this.set('value', NON_NUMERIC_SYMBOLS_WITH_SHIFT);
    await triggerKeyEvent('.' + Classes.INPUT, 'keyup', 'Enter');
    assert.strictEqual(
      this.element.querySelector('.' + Classes.INPUT).value,
      NON_NUMERIC_SYMBOLS_WITH_SHIFT,
      'NON_NUMERIC_SYMBOLS_WITH_SHIFT'
    );

    this.set('value', NUMERIC_SYMBOLS_WITH_SHIFT);
    await triggerKeyEvent('.' + Classes.INPUT, 'keyup', 'Enter');
    assert.strictEqual(
      this.element.querySelector('.' + Classes.INPUT).value,
      '+',
      'NUMERIC_SYMBOLS_WITH_SHIFT'
    );
  });

  test('disables keystroke for less common symbols typed with OPTION-key modifier on Mac', async function (assert) {
    this.set('value', LESS_COMMON_SYMBOLS);
    await render(hbs`
      <NumericInput @value={{this.value}} @didPasteEventJustOccur={{true}}  />
    `);
    await triggerKeyEvent('.' + Classes.INPUT, 'keyup', 'Enter');
    assert.strictEqual(
      this.element.querySelector('.' + Classes.INPUT).value,
      LESS_COMMON_SYMBOLS,
      'LESS_COMMON_SYMBOLS'
    );
  });

  test('disables keystroke for the spacebar', async function (assert) {
    this.set('value', SPACE_CHAR);
    await render(hbs`
      <NumericInput @value={{this.value}} @didPasteEventJustOccur={{true}}  />
    `);
    await triggerKeyEvent('.' + Classes.INPUT, 'keyup', 'Enter');
    assert.strictEqual(
      this.element.querySelector('.' + Classes.INPUT).value,
      ' ',
      'SPACE_CHAR'
    );
  });

  test("allows keystroke for keys that don't print a character (Arrow keys, Backspace, Enter, etc.)", async function (assert) {
    this.set('value', NON_CHARACTER_KEYS);
    await render(hbs`
      <NumericInput @value={{this.value}} @didPasteEventJustOccur={{true}}  />
    `);
    await triggerKeyEvent('.' + Classes.INPUT, 'keyup', 'Enter');
    assert.strictEqual(
      this.element.querySelector('.' + Classes.INPUT).value,
      NON_CHARACTER_KEYS,
      'NON_CHARACTER_KEYS'
    );
  });

  test('allows keystroke for numeric digits (0-9)', async function (assert) {
    this.set('value', NUMERIC_DIGITS);
    await render(hbs`
      <NumericInput @value={{this.value}} @didPasteEventJustOccur={{true}}  />
    `);
    await triggerKeyEvent('.' + Classes.INPUT, 'keyup', 'Enter');
    assert.strictEqual(
      this.element.querySelector('.' + Classes.INPUT).value,
      '0123456789',
      'NUMERIC_DIGITS'
    );
  });

  test('Keyboard interactions in input field "Press ↑", "Press ↓"', async function (assert) {
    this.set('value', '1');
    await render(hbs`
      <NumericInput @value={{this.value}}  />
    `);

    const input = this.element.querySelector('input');

    await input.focus();
    await triggerKeyEvent(input, 'keydown', 40);
    assert.strictEqual(input.value, '0', 'simulateDecrement');

    await triggerKeyEvent(input, 'keydown', 38);

    assert.strictEqual(input.value, '1', 'simulateIncrement');
  });

  test('Keyboard interactions on buttons (with Space key) "Press SPACE" "Press SPACE"', async function (assert) {
    this.set('value', '1');
    await render(hbs`
      <NumericInput @value={{this.value}}  />
    `);

    const button = this.element.querySelectorAll('button');

    await button[0].focus();
    await triggerKeyEvent(button[0], 'keydown', 32);

    const input = this.element.querySelector('input');

    assert.strictEqual(input.value, '2', 'simulateIncrement');

    await triggerKeyEvent(button[1], 'keydown', 32);

    assert.strictEqual(input.value, '1', 'simulateDecrement');
  });

  test('Keyboard interactions on buttons (with Enter key) "Press Enter" "Press Enter"', async function (assert) {
    this.set('value', '1');
    await render(hbs`
      <NumericInput @value={{this.value}}  />
    `);

    const button = this.element.querySelectorAll('button');

    await button[0].focus();
    await triggerKeyEvent(button[0], 'keydown', 'Enter');

    const input = this.element.querySelector('input');

    assert.strictEqual(input.value, '2', 'simulateIncrement');

    await triggerKeyEvent(button[1], 'keydown', 'Enter');

    assert.strictEqual(input.value, '1', 'simulateDecrement');
  });

  //Value bounds
  test('if no bounds are defined:- enforces no minimum bound', async function (assert) {
    await render(hbs`
      <NumericInput  />
    `);

    const button = this.element.querySelectorAll('button');
    const input = this.element.querySelector('input');

    await triggerKeyEvent(button[1], 'keydown', 'Enter', { shiftKey: true });
    await triggerKeyEvent(button[1], 'keydown', 'Enter', { shiftKey: true });

    assert.strictEqual(input.value, '-20', 'simulateDecrement');
  });
  test('if no bounds are defined:- clamps an out-of-bounds value to the new `min` if the component props change', async function (assert) {
    await render(hbs`
      <NumericInput  @value={{0}} @min={{this.minValue}}/>
    `);

    let input = this.element.querySelector('input');

    assert.strictEqual(input.value, '0', 'value is 0');

    await this.set('minValue', 10);
    input = this.element.querySelector('input');
    assert.strictEqual(input.value, '10', 'changed default 0 to 10 ');
  });

  test('if no bounds are defined:- clamps an out-of-bounds value to the new `max` if the component props change', async function (assert) {
    await render(hbs`
      <NumericInput  @value={{0}} @max={{this.maxValue}}/>
    `);

    let input = this.element.querySelector('input');

    assert.strictEqual(input.value, '0', 'value is 0');

    const button = this.element.querySelectorAll('button');

    await this.set('maxValue', -10);
    await click(button[0]);
    input = this.element.querySelector('input');
    assert.strictEqual(input.value, '-10', 'can not increment max value ');
  });

  test('if `min` is defined: decrements the value as usual if it is above the minimum', async function (assert) {
    this.set('MIN_VALUE', 0);
    await render(hbs`
      <NumericInput @min={{this.MIN_VALUE}} />
    `);

    const button = this.element.querySelectorAll('button');
    const input = this.element.querySelector('input');

    await click(button[1]);

    assert.strictEqual(input.value, '0', ' min value should not change');
  });

  test('if `min` is defined: clamps the value to the minimum bound when decrementing by stepSize', async function (assert) {
    this.set('MIN_VALUE', -0.5);
    await render(hbs`
      <NumericInput @min={{this.MIN_VALUE}} />
    `);

    const button = this.element.querySelectorAll('button');
    const input = this.element.querySelector('input');

    // try to decrement by 1
    await click(button[1]);

    assert.strictEqual(input.value, '-0.5');
  });

  test('if `min` is defined: clamps the value to the minimum bound when decrementing by minorStepSize', async function (assert) {
    this.set('MIN_VALUE', -0.05);
    await render(hbs`
      <NumericInput @min={{this.MIN_VALUE}} @minorStepSize={{0.2}} />
    `);

    const button = this.element.querySelectorAll('button');
    const input = this.element.querySelector('input');

    // try to decrement by 0.1
    await triggerKeyEvent(button[1], 'keydown', 'Enter', { altKey: true });

    assert.strictEqual(input.value, '-0.05');
  });

  test('if `min` is defined: clamps the value to the minimum bound when decrementing by majorStepSize', async function (assert) {
    this.set('MIN_VALUE', -5);
    await render(hbs`
      <NumericInput @min={{this.MIN_VALUE}} />
    `);

    const button = this.element.querySelectorAll('button');
    const input = this.element.querySelector('input');

    // try to decrement by 10
    await triggerKeyEvent(button[1], 'keydown', 'Enter', { shiftKey: true });

    assert.strictEqual(input.value, '-5');
  });

  test('if `min` is defined:fires onValueChange with clamped value if nextProps.min > value ', async function (assert) {
    this.set('onValueChange', function (valueAsNumber) {
      this.set('valueAsNumber', valueAsNumber);
    });
    await render(hbs`
      <NumericInput @value={{-10}} @min={{this.min}} @onValueChange={{action this.onValueChange}}/>
    `);
    this.set('min', 0);

    const input = this.element.querySelector('input');

    // try to decrement by 10
    await triggerKeyEvent('.' + Classes.INPUT, 'keyup', 13);

    assert.strictEqual(input.value, '0');
  });

  test('if `min` is defined:does not fire onValueChange if nextProps.min < value ', async function (assert) {
    this.set('onValueChange', function (valueAsNumber) {
      this.set('valueAsNumber', valueAsNumber);
    });
    await render(hbs`
      <NumericInput @value={{-10}} @min={{this.min}} @onValueChange={{action this.onValueChange}}/>
    `);
    this.set('min', -20);

    const input = this.element.querySelector('input');

    // try to decrement by 10
    await triggerKeyEvent('.' + Classes.INPUT, 'keyup', 13);

    assert.strictEqual(input.value, '-10');
  });

  test('if `max` is defined: decrements the value as usual if it is above the minimum', async function (assert) {
    this.set('MAX_VALUE', 0);
    await render(hbs`
      <NumericInput @max={{this.MAX_VALUE}} />
    `);

    const button = this.element.querySelectorAll('button');
    const input = this.element.querySelector('input');

    await click(button[0]);

    assert.strictEqual(input.value, '0', ' max value should not change');
  });

  test('if `max` is defined: clamps the value to the maximum bound when incrementing by stepSize', async function (assert) {
    this.set('MAX_VALUE', 0.5);
    await render(hbs`
      <NumericInput @max={{this.MAX_VALUE}} />
    `);

    const button = this.element.querySelectorAll('button');
    const input = this.element.querySelector('input');

    // try to incrementing by 1
    await click(button[0]);

    assert.strictEqual(input.value, '0.5');
  });

  test('if `max` is defined: clamps the value to the maximum bound when incrementing by minorStepSize', async function (assert) {
    this.set('MAX_VALUE', 0.05);
    await render(hbs`
      <NumericInput @max={{this.MAX_VALUE}} @minorStepSize={{0.05}}/>
    `);

    const button = this.element.querySelectorAll('button');
    const input = this.element.querySelector('input');

    // try to incrementing by 0.1
    await triggerKeyEvent(button[0], 'keydown', 'Enter', { altKey: true });

    assert.strictEqual(input.value, '0.05');
  });

  test('if `max` is defined: clamps the value to the maximum bound when incrementing by majorStepSize', async function (assert) {
    this.set('MAX_VALUE', 5);
    await render(hbs`
      <NumericInput @max={{this.MAX_VALUE}} />
    `);

    const button = this.element.querySelectorAll('button');
    const input = this.element.querySelector('input');

    // try to incrementing by 10
    await triggerKeyEvent(button[0], 'keydown', 'Enter', { shiftKey: true });

    assert.strictEqual(input.value, '5');
  });

  test('if `max` is defined:fires onValueChange with clamped value if nextProps.max > value ', async function (assert) {
    this.set('onValueChange', function (valueAsNumber) {
      this.set('valueAsNumber', valueAsNumber);
    });
    await render(hbs`
      <NumericInput @value={{10}} @max={{this.max}} @onValueChange={{action this.onValueChange}}/>
    `);
    this.set('max', 0);

    const input = this.element.querySelector('input');

    await triggerKeyEvent('.' + Classes.INPUT, 'keyup', 13);

    assert.strictEqual(input.value, '0');
  });

  test('if `max` is defined:does not fire onValueChange if nextProps.max < value ', async function (assert) {
    this.set('onValueChange', function (valueAsNumber) {
      this.set('valueAsNumber', valueAsNumber);
    });
    await render(hbs`
      <NumericInput @value={{10}} @max={{this.max}} @onValueChange={{action this.onValueChange}}/>
    `);
    this.set('max', 20);

    const input = this.element.querySelector('input');

    await triggerKeyEvent('.' + Classes.INPUT, 'keyup', 13);

    assert.strictEqual(input.value, '10');
  });

  test('if min === max : never changes value', async function (assert) {
    this.set('onValueChange', function (valueAsNumber) {
      this.set('valueAsNumber', valueAsNumber);
    });
    await render(hbs`
      <NumericInput  @max={{2}} @min={{2}} @onValueChange={{action this.onValueChange}}/>
    `);

    const input = this.element.querySelector('input');
    const button = this.element.querySelectorAll('button');

    await triggerKeyEvent(button[0], 'keydown', 13);
    await triggerKeyEvent(button[0], 'keydown', 13);
    await triggerKeyEvent(button[0], 'keydown', 13);
    await triggerKeyEvent(button[0], 'keydown', 13);

    assert.strictEqual(input.value, '2');
  });

  test('clampValueOnBlur : does not clamp or invoke onValueChange on blur if clampValueOnBlur=false', async function (assert) {
    // should be false by default
    this.set('onValueChange', function (valueAsNumber) {
      this.set('valueAsNumber', valueAsNumber);
    });
    await render(hbs`
      <NumericInput  @value='-5' @clampValueOnBlur={{false}} @onValueChange={{action this.onValueChange}}/>
    `);

    const input = this.element.querySelector('input');

    await triggerKeyEvent(input, 'keydown', 13);

    assert.strictEqual(input.value, '-5');
  });

  test('clampValueOnBlur :clamps an out-of-bounds value to min', async function (assert) {
    // should be false by default
    this.set('onValueChange', function (valueAsNumber) {
      this.set('valueAsNumber', valueAsNumber);
    });
    await render(hbs`
      <NumericInput  @value={{-10}} @min={{0}} @clampValueOnBlur={{true}} @onValueChange={{action this.onValueChange}}/>
    `);

    let input = this.element.querySelector('input');

    assert.strictEqual(input.value, '-10');
  });

  test('clampValueOnBlur :clamps an out-of-bounds value to max', async function (assert) {
    // should be false by default
    this.set('onValueChange', function (valueAsNumber) {
      this.set('valueAsNumber', valueAsNumber);
    });
    await render(hbs`
      <NumericInput  @value={{5}} @max={{0}} @clampValueOnBlur={{true}} @onValueChange={{action this.onValueChange}}/>
    `);

    let input = this.element.querySelector('input');

    assert.strictEqual(input.value, '5');
  });

  test('clears the field if the value is invalid when incrementing', async function (assert) {
    await render(hbs`
      <NumericInput @value={{'<invalid>'}} />
    `);

    const button = this.element.querySelectorAll('button');
    const input = this.element.querySelector('input');

    assert.strictEqual(input.value, '<invalid>');

    await triggerKeyEvent(button[0], 'keydown', 'Enter');
    assert.strictEqual(input.value, '');
  });

  test('clears the field if the value is invalid when decrementing', async function (assert) {
    await render(hbs`
      <NumericInput @value={{'<invalid>'}} />
    `);

    const button = this.element.querySelectorAll('button');
    const input = this.element.querySelector('input');

    assert.strictEqual(input.value, '<invalid>');

    await triggerKeyEvent(button[1], 'keydown', 'Enter');
    assert.strictEqual(input.value, '');
  });

  // others
  test('disables the input field and buttons when disabled is true', async function (assert) {
    await render(hbs`
      <NumericInput @disabled={{true}} />
    `);
    assert.true(this.element.querySelector('.' + Classes.INPUT).disabled);
    assert.ok(
      this.element.querySelector(`.${Classes.INPUT_GROUP}.${Classes.DISABLED}`)
    );
  });

  // eslint-disable-next-line qunit/no-commented-tests
  // test('disables the buttons and sets the input field to read-only when readOnly is true', async function(assert) {
  //   await render(hbs`
  //     <NumericInput @readOnly={{true}} />
  //   `);
  //   assert.strictEqual(this.element.querySelector('.' + Classes.INPUT).readOnly, true);
  // });

  // eslint-disable-next-line qunit/no-commented-tests
  // test('shows placeholder text if provided', async function(assert) { ...attributes not rendering
  //   await render(hbs`
  //     <NumericInput placeholder='Enter a number' />
  //   `);
  //   assert.strictEqual(this.element.querySelector('.p' + Classes.INPUT).placeholder, 'Enter a number');
  // });

  test('shows yield element if provided', async function (assert) {
    await render(hbs`
      <NumericInput><button class='hii' type='button' /></NumericInput>
    `);
    assert.ok(this.element.querySelector('.hii'));
  });

  test('changes max precision of displayed value to that of the smallest step size defined', async function (assert) {
    await render(hbs`
      <NumericInput @majorStepSize={{1}} @stepSize={{0.1}} @minorStepSize={{0.001}}/>
    `);

    const button = this.element.querySelectorAll('button');
    const input = this.element.querySelector('input');

    await triggerKeyEvent(button[0], 'keydown', 'Enter');
    assert.strictEqual(input.value, '0.1');

    await triggerKeyEvent(button[0], 'keydown', 'Enter', { altKey: true });
    assert.strictEqual(input.value, '0.101');

    await triggerKeyEvent(button[0], 'keydown', 'Enter', { shiftKey: true });
    assert.strictEqual(input.value, '1.101');
  });

  test('changes max precision appropriately when the [*]stepSize props change: excess digits should truncate to max precision', async function (assert) {
    await render(hbs`
      <NumericInput @value={{0.0001}} @majorStepSize={{1}} @stepSize={{0.1}} @minorStepSize={{0.001}}/>
    `);

    const button = this.element.querySelectorAll('button');
    const input = this.element.querySelector('input');

    await triggerKeyEvent(button[0], 'keydown', 'Enter', { altKey: true });
    assert.strictEqual(input.value, '0.001');
  });

  test('changes max precision appropriately when the [*]stepSize props change: now try a smaller step size, and expect no truncation', async function (assert) {
    await render(hbs`
      <NumericInput @value={{0.0001}} @majorStepSize={{1}} @stepSize={{0.1}} @minorStepSize={{0.0001}}/>
    `);

    const button = this.element.querySelectorAll('button');
    const input = this.element.querySelector('input');

    await triggerKeyEvent(button[0], 'keydown', 'Enter', { altKey: true });
    assert.strictEqual(input.value, '0.0002');
  });
  test('changes max precision appropriately when the [*]stepSize props change: now try a larger step size, and expect more truncation than before', async function (assert) {
    await render(hbs`
      <NumericInput @value={{0.0001}} @majorStepSize={{1}} @stepSize={{0.1}} @minorStepSize={{0.1}}/>
    `);

    const button = this.element.querySelectorAll('button');
    const input = this.element.querySelector('input');

    await triggerKeyEvent(button[0], 'keydown', 'Enter', { altKey: true });
    assert.strictEqual(input.value, '0.1');
  });
});
