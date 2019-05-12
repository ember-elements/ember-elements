import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, triggerKeyEvent, typeIn } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | numeric-input', function (hooks) {
  setupRenderingTest(hooks);

  test('Default null value in <NumericInput>', async function (assert) {

    await render(hbs`
      <NumericInput/> 
    `);
    assert.equal((document.querySelector('.bp3-input') as HTMLInputElement).value, '');
  });

  test('increments the value from 0 if the field is empty', async function (assert) {

    await render(hbs`
      <NumericInput/> 
    `);
    await click('button')
    assert.equal((document.querySelector('.bp3-input') as HTMLInputElement).value, 1);
  });

  test('enders the buttons on the right when buttonPosition == right', async function (assert) {
    await render(hbs`
      <NumericInput @buttonPosition="right"/> 
    `);
    assert.equal((document.querySelector('.bp3-numeric-input') as HTMLInputElement).getElementsByTagName('div')[1].classList[1], "bp3-button-group");
  });

  test('enders the buttons on the right when buttonPosition == left', async function (assert) {
    await render(hbs`
      <NumericInput @buttonPosition="left"/> 
    `);
    assert.equal((document.querySelector('.bp3-numeric-input') as HTMLInputElement).getElementsByTagName('div')[0].classList[1], "bp3-button-group");
  });

  test('does not render the buttons when buttonPosition == "none"', async function (assert) {
    await render(hbs`
      <NumericInput @buttonPosition="none"/> 
    `);
    assert.notOk((document.querySelector('.bp3-numeric-input') as HTMLInputElement).getElementsByTagName('div')[1]);
  });

  test('does not render the buttons when buttonPosition is null', async function (assert) {
    await render(hbs`
      <NumericInput @buttonPosition="null"/> 
    `);
    assert.notOk((document.querySelector('.bp3-numeric-input') as HTMLInputElement).getElementsByTagName('div')[1]);
  });

  test('always renders the children in a ControlGroup', async function (assert) {
    await render(hbs`
      <NumericInput @buttonPosition="right"/> 
    `);
    assert.equal((document.querySelector('.bp3-button-group') as any).parentNode.classList[1], 'bp3-control-group');
  });

  test('Basic functionality:- works like a text input', async function (assert) {
    await render(hbs`
      <NumericInput /> 
    `);
    (document.querySelector('input') as HTMLInputElement).value = "11";
    assert.equal((document.querySelector('input') as any).value, "11");
  });

  test('default dont allows entry of non-numeric characters', async function (assert) {
    await render(hbs`
      <NumericInput /> 
    `);
    (document.querySelector('input') as HTMLInputElement).value = "11 + a";
    assert.equal((document.querySelector('input') as any).value, "11 + a");
  });

  test('provides numeric value to onValueChange as a number and a string', async function (assert) {
    var that = this;
    this.set('onValueChange', function (valueAsNumber: number) {
      that.set('valueAsNumber', valueAsNumber);
    });
    await render(hbs`
      <NumericInput @value={{1}} @onValueChange={{action onValueChange }} /> 
    `);
    await typeIn('input', "13");
    assert.equal(this.get('valueAsNumber'), 113);
  });

  test('provides non-numeric value to onValueChange as NaN and a string', async function (assert) {
    var that = this;
    this.set('onValueChange', function (valueAsNumber: number) {
      that.set('valueAsNumber', valueAsNumber);
    })
    await render(hbs`
      <NumericInput @onValueChange={{action onValueChange }} /> 
    `);
    await typeIn('input', "non-numeric-value");
    assert.equal((this.get('valueAsNumber') as string).toString(), "NaN");
  });

  test('accepts a numeric value', async function (assert) {
    await render(hbs`
      <NumericInput @value={{10}}  /> 
    `);
    assert.equal((document.querySelector('.bp3-input') as HTMLInputElement).value, "10");
  });

  test('accepts a string value', async function (assert) {
    await render(hbs`
      <NumericInput @value={{"10"}}  /> 
    `);
    assert.equal((document.querySelector('.bp3-input') as HTMLInputElement).value, "10");
  });

  test('in controlled mode, accepts successive value changes containing non-numeric characters', async function (assert) {
    this.set('value', "1")
    await render(hbs`
      <NumericInput @value={{value}}  /> 
    `);
    assert.equal((document.querySelector('.bp3-input') as HTMLInputElement).value, "1");
    this.set('value', "1 +");
    assert.equal((document.querySelector('.bp3-input') as HTMLInputElement).value, "1 +");
    this.set('value', "1 + 1");
    assert.equal((document.querySelector('.bp3-input') as HTMLInputElement).value, "1 + 1");
  });

  test('fires onValueChange with the number value and the string value when the value changes', async function (assert) {
    var that = this;
    this.set('onValueChange', function (valueAsNumber: number) {
      that.set('valueAsNumber', valueAsNumber);
    })
    await render(hbs`
      <NumericInput  @onValueChange={{action onValueChange }} /> 
    `);
    await click('button')
    assert.equal((document.querySelector('.bp3-input') as HTMLInputElement).value, 1);
    assert.equal(this.get('valueAsNumber'), 1);
  });

  test('fires onButtonClick with the number value and the string value when either button is pressed', async function (assert) {
    var that = this;
    this.set('onButtonClick', function (valueAsNumber: number) {
      that.set('valueAsNumber', valueAsNumber);
    })
    await render(hbs`
      <NumericInput  @onButtonClick={{action onButtonClick }} /> 
    `);
    // incrementing from 0
    await click('button')
    assert.equal((document.querySelector('.bp3-input') as HTMLInputElement).value, 1);
    assert.equal(this.get('valueAsNumber'), 1);

    // decrementing from 1 now
    var button2 = this.element.querySelectorAll('button')[1];
    await click(button2);
    assert.equal((document.querySelector('.bp3-input') as HTMLInputElement).value, 0);
    assert.equal(this.get('valueAsNumber'), 0);
  });

  test('if false (the default), does not select any text on focus', async function (assert) {
    await render(hbs`
      <NumericInput @value="12345678" />  
    `);
    const input = this.element.querySelector("input") as HTMLInputElement;
    await input.focus();
    assert.equal(input.selectionStart, input.selectionEnd);
  });

  test('if true, selects all text on focus', async function (assert) {
    this.set('value', "12345678");
    await render(hbs`
      <NumericInput @value={{value}} @selectAllOnFocus={{true}} /> 
    `);
    const input = this.element.querySelector("input") as HTMLInputElement;
    await input.focus();
    // assert.equal(input.selectionStart, 0);
    assert.equal(input.selectionEnd, this.get('value' as string).length);
  });

  test('if false (the default), does not select any text on increment', async function (assert) {
    this.set('value', "12345678");
    await render(hbs`
      <NumericInput @value={{value}}  /> 
    `);

    const input = this.element.querySelector("input") as HTMLInputElement;
    await input.focus();
    await triggerKeyEvent(input, 'keydown', 40)
    assert.equal(input.selectionStart, input.selectionEnd);
  });


  test('if true, selects all text on increment', async function (assert) {
    this.set('value', "12345678");
    await render(hbs`
      <NumericInput @value={{value}} @selectAllOnIncrement={{true}}  /> 
    `);

    const input = this.element.querySelector("input") as HTMLInputElement;
    await input.focus();
    await triggerKeyEvent(input, 'keydown', 40)
    assert.equal(input.selectionStart, 0);
    assert.equal(input.selectionEnd, this.get('value' as string).length);
  });



  //Keyboard text entry in input field

  const LESS_COMMON_SYMBOLS = "åß∂ƒ©©˙∆˚≈ç√∫˜µ≤∑´®†¥¨ˆ≤≥";

  const NON_CHARACTER_KEYS = "Alt";

  const NON_NUMERIC_LOWERCASE_LETTERS = "abcdfghijklmnopqrstuvwxyz";
  const NON_NUMERIC_UPPERCASE_LETTERS = "ABCDFGHIJKLMNOPQRSTUVWXYZ";
  const NON_NUMERIC_SYMBOLS_WITHOUT_SHIFT = "`=[]\\;',/";
  const NON_NUMERIC_SYMBOLS_WITH_SHIFT = '~!@#$%^&*()_{}|:"<>?';

  const NUMERIC_DIGITS = "0123456789"; // could be typed from the keyboard or numpad
  const NUMERIC_LOWERCASE_LETTERS = "e";
  const NUMERIC_UPPERCASE_LETTERS = "E";
  const NUMERIC_SYMBOLS_WITHOUT_SHIFT = ".-";
  const NUMERIC_SYMBOLS_WITH_SHIFT = "+";

  // const SAMPLE_CHARS_TO_ALLOW_WITH_ALT_CTRL_META_WITHOUT_SHIFT = "a[;,/=";
  // const SAMPLE_CHARS_TO_ALLOW_WITH_ALT_CTRL_META_WITH_SHIFT = "A{:<?_!";

  const SPACE_CHAR = " ";

  test('allowNumericCharactersOnly=true disables keystroke for all letters except "e" and "E"', async function (assert) {

    this.set('value', NON_NUMERIC_LOWERCASE_LETTERS);
    await render(hbs`
      <NumericInput @value={{value}} @didPasteEventJustOccur={{true}}  /> 
    `);
    await triggerKeyEvent('.bp3-input', 'keyup', "Enter");
    assert.equal((this.element.querySelector('.bp3-input') as HTMLInputElement).value, NON_NUMERIC_LOWERCASE_LETTERS, "NON_NUMERIC_LOWERCASE_LETTERS");

    this.set('value', NON_NUMERIC_UPPERCASE_LETTERS);
    await triggerKeyEvent('.bp3-input', 'keyup', "Enter");
    assert.equal((this.element.querySelector('.bp3-input') as HTMLInputElement).value, NON_NUMERIC_UPPERCASE_LETTERS, "NON_NUMERIC_UPPERCASE_LETTERS");

    this.set('value', NUMERIC_LOWERCASE_LETTERS);
    await triggerKeyEvent('.bp3-input', 'keyup', "Enter");
    assert.equal((this.element.querySelector('.bp3-input') as HTMLInputElement).value, NUMERIC_LOWERCASE_LETTERS, "NUMERIC_LOWERCASE_LETTERS");

    this.set('value', NUMERIC_UPPERCASE_LETTERS);
    await triggerKeyEvent('.bp3-input', 'keyup', "Enter");
    assert.equal((this.element.querySelector('.bp3-input') as HTMLInputElement).value, "E", "NUMERIC_UPPERCASE_LETTERS");
  });

  test("disables keystroke for all common English symbols except '.', '-', and '+'", async function (assert) {

    this.set('value', NON_NUMERIC_SYMBOLS_WITHOUT_SHIFT);
    await render(hbs`
      <NumericInput @value={{value}} @didPasteEventJustOccur={{true}}  /> 
    `);
    await triggerKeyEvent('.bp3-input', 'keyup', "Enter");
    assert.equal((this.element.querySelector('.bp3-input') as HTMLInputElement).value, NON_NUMERIC_SYMBOLS_WITHOUT_SHIFT, "NON_NUMERIC_SYMBOLS_WITHOUT_SHIFT");

    this.set('value', NUMERIC_SYMBOLS_WITHOUT_SHIFT);
    await triggerKeyEvent('.bp3-input', 'keyup', "Enter");
    assert.equal((this.element.querySelector('.bp3-input') as HTMLInputElement).value, ".-", "NUMERIC_SYMBOLS_WITHOUT_SHIFT");

    this.set('value', NON_NUMERIC_SYMBOLS_WITH_SHIFT);
    await triggerKeyEvent('.bp3-input', 'keyup', "Enter");
    assert.equal((this.element.querySelector('.bp3-input') as HTMLInputElement).value, NON_NUMERIC_SYMBOLS_WITH_SHIFT, "NON_NUMERIC_SYMBOLS_WITH_SHIFT");

    this.set('value', NUMERIC_SYMBOLS_WITH_SHIFT);
    await triggerKeyEvent('.bp3-input', 'keyup', "Enter");
    assert.equal((this.element.querySelector('.bp3-input') as HTMLInputElement).value, "+", "NUMERIC_SYMBOLS_WITH_SHIFT");

  });

  test("disables keystroke for less common symbols typed with OPTION-key modifier on Mac", async function (assert) {

    this.set('value', LESS_COMMON_SYMBOLS);
    await render(hbs`
      <NumericInput @value={{value}} @didPasteEventJustOccur={{true}}  /> 
    `);
    await triggerKeyEvent('.bp3-input', 'keyup', "Enter");
    assert.equal((this.element.querySelector('.bp3-input') as HTMLInputElement).value, LESS_COMMON_SYMBOLS, "LESS_COMMON_SYMBOLS");
  });

  test("disables keystroke for the spacebar", async function (assert) {

    this.set('value', SPACE_CHAR);
    await render(hbs`
      <NumericInput @value={{value}} @didPasteEventJustOccur={{true}}  /> 
    `);
    await triggerKeyEvent('.bp3-input', 'keyup', "Enter");
    assert.equal((this.element.querySelector('.bp3-input') as HTMLInputElement).value, " ", "SPACE_CHAR");
  });

  test("allows keystroke for keys that don't print a character (Arrow keys, Backspace, Enter, etc.)", async function (assert) {

    this.set('value', NON_CHARACTER_KEYS);
    await render(hbs`
      <NumericInput @value={{value}} @didPasteEventJustOccur={{true}}  /> 
    `);
    await triggerKeyEvent('.bp3-input', 'keyup', "Enter");
    assert.equal((this.element.querySelector('.bp3-input') as HTMLInputElement).value, NON_CHARACTER_KEYS, "NON_CHARACTER_KEYS");
  });

  test("allows keystroke for numeric digits (0-9)", async function (assert) {

    this.set('value', NUMERIC_DIGITS);
    await render(hbs`
      <NumericInput @value={{value}} @didPasteEventJustOccur={{true}}  /> 
    `);
    await triggerKeyEvent('.bp3-input', 'keyup', "Enter");
    assert.equal((this.element.querySelector('.bp3-input') as HTMLInputElement).value, "0123456789", "NUMERIC_DIGITS");
  });

  test('Keyboard interactions in input field "Press ↑", "Press ↓"', async function (assert) {
    this.set('value', "1");
    await render(hbs`
      <NumericInput @value={{value}}  /> 
    `);

    const input = this.element.querySelector("input") as HTMLInputElement;
    await input.focus();
    await triggerKeyEvent(input, 'keydown', 40)
    assert.equal(input.value, 0, "simulateDecrement");

    await triggerKeyEvent(input, 'keydown', 38)

    assert.equal(input.value, 1, "simulateIncrement");
  });

  test('Keyboard interactions on buttons (with Space key) "Press SPACE" "Press SPACE"', async function (assert) {
    this.set('value', "1");
    await render(hbs`
      <NumericInput @value={{value}}  /> 
    `);

    const button: any = this.element.querySelectorAll("button");
    await button[0].focus();
    await triggerKeyEvent(button[0], 'keydown', 32);
    const input = this.element.querySelector("input") as HTMLInputElement;
    assert.equal(input.value, 2, "simulateIncrement");

    await triggerKeyEvent(button[1], 'keydown', 32)

    assert.equal(input.value, 1, "simulateDecrement");
  });

  test('Keyboard interactions on buttons (with Enter key) "Press Enter" "Press Enter"', async function (assert) {
    this.set('value', "1");
    await render(hbs`
      <NumericInput @value={{value}}  /> 
    `);

    const button: any = this.element.querySelectorAll("button");
    await button[0].focus();
    await triggerKeyEvent(button[0], 'keydown', "Enter");
    const input = this.element.querySelector("input") as HTMLInputElement;
    assert.equal(input.value, 2, "simulateIncrement");

    await triggerKeyEvent(button[1], 'keydown', "Enter")

    assert.equal(input.value, 1, "simulateDecrement");
  });

  //Value bounds
  test('if no bounds are defined:- enforces no minimum bound', async function (assert) {
    await render(hbs`
      <NumericInput  /> 
    `);

    const button: any = this.element.querySelectorAll("button");
    const input = this.element.querySelector("input") as HTMLInputElement;
    await triggerKeyEvent(button[1], 'keydown', "Enter", { shiftKey: true })
    await triggerKeyEvent(button[1], 'keydown', "Enter", { shiftKey: true })


    assert.equal(input.value, -20, "simulateDecrement");
  });
  test('if no bounds are defined:- clamps an out-of-bounds value to the new `min` if the component props change', async function (assert) {
    await render(hbs`
      <NumericInput  @value={{0}} @min={{minValue}}/> 
    `);

    var input = this.element.querySelector("input") as HTMLInputElement;
    assert.equal(input.value, 0, "value is 0");

    await this.set('minValue', 10);
    input = this.element.querySelector("input") as HTMLInputElement;
    assert.equal(input.value, 10, "changed default 0 to 10 ");

  });

  test('if no bounds are defined:- clamps an out-of-bounds value to the new `max` if the component props change', async function (assert) {
    await render(hbs`
      <NumericInput  @value={{0}} @max={{maxValue}}/> 
    `);

    var input = this.element.querySelector("input") as HTMLInputElement;
    assert.equal(input.value, 0, "value is 0");
    const button: any = this.element.querySelectorAll("button");

    await this.set('maxValue', -10);
    await click(button[0]);
    input = this.element.querySelector("input") as HTMLInputElement;
    assert.equal(input.value, -10, "can not increment max value ");

  });

  test('if `min` is defined: decrements the value as usual if it is above the minimum', async function (assert) {
    this.set('MIN_VALUE', 0);
    await render(hbs`
      <NumericInput @min={{MIN_VALUE}} /> 
    `);

    const button: any = this.element.querySelectorAll("button");
    const input = this.element.querySelector("input") as HTMLInputElement;
    await click(button[1]);

    assert.equal(input.value, 0, " min value should not change");
  });

  test('if `min` is defined: clamps the value to the minimum bound when decrementing by stepSize', async function (assert) {
    this.set('MIN_VALUE', -0.5);
    await render(hbs`
      <NumericInput @min={{MIN_VALUE}} /> 
    `);

    const button: any = this.element.querySelectorAll("button");
    const input = this.element.querySelector("input") as HTMLInputElement;
    // try to decrement by 1
    await click(button[1]);

    assert.equal(input.value, -0.5);
  });

  test('if `min` is defined: clamps the value to the minimum bound when decrementing by minorStepSize', async function (assert) {
    this.set('MIN_VALUE', -0.05);
    await render(hbs`
      <NumericInput @min={{MIN_VALUE}} /> 
    `);

    const button: any = this.element.querySelectorAll("button");
    const input = this.element.querySelector("input") as HTMLInputElement;
    // try to decrement by 0.1
    await triggerKeyEvent(button[1], 'keydown', "Enter", { altKey: true })


    assert.equal(input.value, -0.05);
  });

  test('if `min` is defined: clamps the value to the minimum bound when decrementing by majorStepSize', async function (assert) {
    this.set('MIN_VALUE', -5);
    await render(hbs`
      <NumericInput @min={{MIN_VALUE}} /> 
    `);

    const button: any = this.element.querySelectorAll("button");
    const input = this.element.querySelector("input") as HTMLInputElement;
    // try to decrement by 10
    await triggerKeyEvent(button[1], 'keydown', "Enter", { shiftKey: true })

    assert.equal(input.value, -5);
  });

  test('if `min` is defined:fires onValueChange with clamped value if nextProps.min > value ', async function (assert) {
    var that = this;
    this.set('onValueChange', function (valueAsNumber: number) {
      that.set('valueAsNumber', valueAsNumber);
    })
    await render(hbs`
      <NumericInput @value={{-10}} @min={{min}} @onValueChange={{action onValueChange}}/> 
    `);
    this.set('min', 0);
    const input = this.element.querySelector("input") as HTMLInputElement;
    // try to decrement by 10
    await triggerKeyEvent('.bp3-input', 'keyup', 13)

    assert.equal(input.value, 0);
  });

  test('if `min` is defined:does not fire onValueChange if nextProps.min < value ', async function (assert) {
    var that = this;
    this.set('onValueChange', function (valueAsNumber: number) {
      that.set('valueAsNumber', valueAsNumber);
    })
    await render(hbs`
      <NumericInput @value={{-10}} @min={{min}} @onValueChange={{action onValueChange}}/> 
    `);
    this.set('min', -20);
    const input = this.element.querySelector("input") as HTMLInputElement;
    // try to decrement by 10
    await triggerKeyEvent('.bp3-input', 'keyup', 13)

    assert.equal(input.value, -10);
  });

  test('if `max` is defined: decrements the value as usual if it is above the minimum', async function (assert) {
    this.set('MAX_VALUE', 0);
    await render(hbs`
      <NumericInput @max={{MAX_VALUE}} /> 
    `);

    const button: any = this.element.querySelectorAll("button");
    const input = this.element.querySelector("input") as HTMLInputElement;
    await click(button[0]);

    assert.equal(input.value, 0, " max value should not change");
  });

  test('if `max` is defined: clamps the value to the maximum bound when incrementing by stepSize', async function (assert) {
    this.set('MAX_VALUE', 0.5);
    await render(hbs`
      <NumericInput @max={{MAX_VALUE}} /> 
    `);

    const button: any = this.element.querySelectorAll("button");
    const input = this.element.querySelector("input") as HTMLInputElement;
    // try to incrementing by 1
    await click(button[0]);

    assert.equal(input.value, 0.5);
  });

  test('if `max` is defined: clamps the value to the maximum bound when incrementing by minorStepSize', async function (assert) {
    this.set('MAX_VALUE', 0.05);
    await render(hbs`
      <NumericInput @max={{MAX_VALUE}}/> 
    `);

    const button: any = this.element.querySelectorAll("button");
    const input = this.element.querySelector("input") as HTMLInputElement;
    // try to incrementing by 0.1
    await triggerKeyEvent(button[0], 'keydown', "Enter", { altKey: true })


    assert.equal(input.value, 0.05);
  });

  test('if `max` is defined: clamps the value to the maximum bound when incrementing by majorStepSize', async function (assert) {
    this.set('MAX_VALUE', 5);
    await render(hbs`
      <NumericInput @max={{MAX_VALUE}} /> 
    `);

    const button: any = this.element.querySelectorAll("button");
    const input = this.element.querySelector("input") as HTMLInputElement;
    // try to incrementing by 10
    await triggerKeyEvent(button[0], 'keydown', "Enter", { shiftKey: true })

    assert.equal(input.value, 5);
  });

  test('if `max` is defined:fires onValueChange with clamped value if nextProps.max > value ', async function (assert) {
    var that = this;
    this.set('onValueChange', function (valueAsNumber: number) {
      that.set('valueAsNumber', valueAsNumber);
    })
    await render(hbs`
      <NumericInput @value={{10}} @max={{max}} @onValueChange={{action onValueChange}}/> 
    `);
    this.set('max', 0);
    const input = this.element.querySelector("input") as HTMLInputElement;
    await triggerKeyEvent('.bp3-input', 'keyup', 13)

    assert.equal(input.value, 0);
  });

  test('if `max` is defined:does not fire onValueChange if nextProps.max < value ', async function (assert) {
    var that = this;
    this.set('onValueChange', function (valueAsNumber: number) {
      that.set('valueAsNumber', valueAsNumber);
    })
    await render(hbs`
      <NumericInput @value={{10}} @max={{max}} @onValueChange={{action onValueChange}}/> 
    `);
    this.set('max', 20);
    const input = this.element.querySelector("input") as HTMLInputElement;
    await triggerKeyEvent('.bp3-input', 'keyup', 13)

    assert.equal(input.value, 10);
  });

  test('if min === max : never changes value', async function (assert) {
    var that = this;
    this.set('onValueChange', function (valueAsNumber: number) {
      that.set('valueAsNumber', valueAsNumber);
    })
    await render(hbs`
      <NumericInput  @max={{2}} @min={{2}} @onValueChange={{action onValueChange}}/> 
    `);
    const input = this.element.querySelector("input") as HTMLInputElement;
    const button: any = this.element.querySelectorAll("button");

    await triggerKeyEvent(button[0], 'keydown', 13);
    await triggerKeyEvent(button[0], 'keydown', 13);
    await triggerKeyEvent(button[0], 'keydown', 13);
    await triggerKeyEvent(button[0], 'keydown', 13);

    assert.equal(input.value, 2);
  });

  test('clampValueOnBlur : does not clamp or invoke onValueChange on blur if clampValueOnBlur=false', async function (assert) {
    // should be false by default
    var that = this;
    this.set('onValueChange', function (valueAsNumber: number) {
      that.set('valueAsNumber', valueAsNumber);
    })
    await render(hbs`
      <NumericInput  @value="-5" @clampValueOnBlur={{false}} @onValueChange={{action onValueChange}}/> 
    `);
    const input = this.element.querySelector("input") as HTMLInputElement;
    await triggerKeyEvent(input, 'keydown', 13);

    assert.equal(input.value, -5);
  });

  test('clampValueOnBlur :clamps an out-of-bounds value to min', async function (assert) {
    // should be false by default
    var that = this;
    this.set('onValueChange', function (valueAsNumber: number) {
      that.set('valueAsNumber', valueAsNumber);
    })
    await render(hbs`
      <NumericInput  @value={{-10}} @min={{0}} @clampValueOnBlur={{true}} @onValueChange={{action onValueChange}}/> 
    `);
    var input: any = this.element.querySelector("input") as HTMLInputElement;
    assert.equal(input.value, -10);
  });

  test('clampValueOnBlur :clamps an out-of-bounds value to max', async function (assert) {
    // should be false by default
    var that = this;
    this.set('onValueChange', function (valueAsNumber: number) {
      that.set('valueAsNumber', valueAsNumber);
    })
    await render(hbs`
      <NumericInput  @value={{5}} @max={{0}} @clampValueOnBlur={{true}} @onValueChange={{action onValueChange}}/> 
    `);
    var input: any = this.element.querySelector("input") as HTMLInputElement;
    assert.equal(input.value, 5);
  });


  test('clears the field if the value is invalid when incrementing', async function (assert) {
    await render(hbs`
      <NumericInput @value={{"<invalid>"}} /> 
    `);

    const button: any = this.element.querySelectorAll("button");
    const input = this.element.querySelector("input") as HTMLInputElement;
    assert.equal(input.value, "<invalid>");

    await triggerKeyEvent(button[0], 'keydown', "Enter");
    assert.equal(input.value, "");
  });

  test('clears the field if the value is invalid when decrementing', async function (assert) {
    await render(hbs`
      <NumericInput @value={{"<invalid>"}} /> 
    `);

    const button: any = this.element.querySelectorAll("button");
    const input = this.element.querySelector("input") as HTMLInputElement;
    assert.equal(input.value, "<invalid>");

    await triggerKeyEvent(button[1], 'keydown', "Enter");
    assert.equal(input.value, "");
  });

  // others
  test('disables the input field and buttons when disabled is true', async function (assert) {

    await render(hbs`
      <NumericInput @disabled=true /> 
    `);
    assert.equal((this.element.querySelector('.bp3-input') as HTMLInputElement).disabled, true);
    assert.ok((this.element.querySelector('.bp3-input-group.bp3-disabled') as HTMLInputElement));
  });

  // test('disables the buttons and sets the input field to read-only when readOnly is true', async function (assert) {

  //   await render(hbs`
  //     <NumericInput @readOnly=true /> 
  //   `);
  //   assert.equal((this.element.querySelector('.bp3-input') as HTMLInputElement).readOnly, true);
  // });

  test('shows placeholder text if provided', async function (assert) {

    await render(hbs`
      <NumericInput @placeholder="Enter a number" /> 
    `);
    assert.equal((this.element.querySelector('.bp3-input') as HTMLInputElement).placeholder, "Enter a number");
  });

  test('shows yield element if provided', async function (assert) {

    await render(hbs`
      <NumericInput><button class='hii'/></NumericInput> 
    `);
    assert.ok((this.element.querySelector('.hii') as HTMLInputElement));
  });

  test('changes max precision of displayed value to that of the smallest step size defined', async function (assert) {

    await render(hbs`
      <NumericInput @majorStepSize={{1}} @stepSize={{0.1}} @minorStepSize={{0.001}}/>
    `);
    const button: any = this.element.querySelectorAll("button");
    const input = this.element.querySelector("input") as HTMLInputElement;

    await triggerKeyEvent(button[0], 'keydown', "Enter");
    assert.equal(input.value, 0.1);

    await triggerKeyEvent(button[0], 'keydown', "Enter", { altKey: true });
    assert.equal(input.value, 0.101);

    await triggerKeyEvent(button[0], 'keydown', "Enter", { shiftKey: true });
    assert.equal(input.value, 1.101);
  });

  test('changes max precision appropriately when the [*]stepSize props change: excess digits should truncate to max precision', async function (assert) {

    await render(hbs`
      <NumericInput @value={{0.0001}} @majorStepSize={{1}} @stepSize={{0.1}} @minorStepSize={{0.001}}/>
    `);
    const button: any = this.element.querySelectorAll("button");
    const input = this.element.querySelector("input") as HTMLInputElement;

    await triggerKeyEvent(button[0], 'keydown', "Enter", { altKey: true });
    assert.equal(input.value, 0.001);

  });

  test('changes max precision appropriately when the [*]stepSize props change: now try a smaller step size, and expect no truncation', async function (assert) {

    await render(hbs`
      <NumericInput @value={{0.0001}} @majorStepSize={{1}} @stepSize={{0.1}} @minorStepSize={{0.0001}}/>
    `);
    const button: any = this.element.querySelectorAll("button");
    const input = this.element.querySelector("input") as HTMLInputElement;

    await triggerKeyEvent(button[0], 'keydown', "Enter", { altKey: true });
    assert.equal(input.value, 0.0002);

  });
  test('changes max precision appropriately when the [*]stepSize props change: now try a larger step size, and expect more truncation than before', async function (assert) {

    await render(hbs`
      <NumericInput @value={{0.0001}} @majorStepSize={{1}} @stepSize={{0.1}} @minorStepSize={{0.1}}/>
    `);
    const button: any = this.element.querySelectorAll("button");
    const input = this.element.querySelector("input") as HTMLInputElement;

    await triggerKeyEvent(button[0], 'keydown', "Enter", { altKey: true });
    assert.equal(input.value, 0.1);

  });



});
