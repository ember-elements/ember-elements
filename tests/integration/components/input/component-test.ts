import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | input', function (hooks) {
  setupRenderingTest(hooks);

  test('input disabled is true', async function (assert) {
    await render(hbs`<Input @disabled=true/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-disabled').length, 1, "occurred 1 input disable");
  });
  test('input disabled is false', async function (assert) {
    await render(hbs`<Input @disabled={{false}}/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-disabled').length, 0, "occurred 0 input disable");
  });
  test('input disabled is not defined', async function (assert) {
    await render(hbs`<Input />`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-disabled').length, 0, "not defined");
  });

  test('input primary is true', async function (assert) {
    await render(hbs`<Input @primary=true/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-intent-primary').length, 1);
  });
  test('input primary is false', async function (assert) {
    await render(hbs`<Input @primary={{false}}/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-intent-primary').length, 0);
  });
  test('input primary is undefined', async function (assert) {
    await render(hbs`<Input />`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-intent-primary').length, 0);
  });

  test('input success is true', async function (assert) {
    await render(hbs`<Input @success=true/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-intent-success').length, 1);
  });
  test('input success is false', async function (assert) {
    await render(hbs`<Input @success={{false}}/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-intent-success').length, 0);
  });
  test('input success is undefined', async function (assert) {
    await render(hbs`<Input />`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-intent-success').length, 0);
  });

  test('input warning is true', async function (assert) {
    await render(hbs`<Input @warning=true/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-intent-warning').length, 1);
  });
  test('input warning is false', async function (assert) {
    await render(hbs`<Input @warning={{false}}/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-intent-warning').length, 0);
  });
  test('input warning is undefined', async function (assert) {
    await render(hbs`<Input />`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-intent-warning').length, 0);
  });

  test('input danger is true', async function (assert) {
    await render(hbs`<Input @danger=true/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-intent-danger').length, 1);
  });
  test('input danger is false', async function (assert) {
    await render(hbs`<Input @danger={{false}}/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-intent-danger').length, 0);
  });
  test('input danger is undefined', async function (assert) {
    await render(hbs`<Input />`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-intent-danger').length, 0);
  });

  test('input minimal is true', async function (assert) {
    await render(hbs`<Input @minimal=true/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-minimal').length, 1);
  });
  test('input minimal is false', async function (assert) {
    await render(hbs`<Input @minimal={{false}}/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-minimal').length, 0);
  });
  test('input minimal is undefined', async function (assert) {
    await render(hbs`<Input />`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-minimal').length, 0);
  });

  test('input large is true', async function (assert) {
    await render(hbs`<Input @large=true/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-large').length, 1);
  });
  test('input large is false', async function (assert) {
    await render(hbs`<Input @large={{false}}/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-large').length, 0);
  });
  test('input large is undefined', async function (assert) {
    await render(hbs`<Input />`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-large').length, 0);
  });

  test('input fill is true', async function (assert) {
    await render(hbs`<Input @fill=true/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-fill').length, 1);
  });
  test('input fill is false', async function (assert) {
    await render(hbs`<Input @fill={{false}}/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-fill').length, 0);
  });
  test('input fill is undefined', async function (assert) {
    await render(hbs`<Input />`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-fill').length, 0);
  });

  test('input round is true', async function (assert) {
    await render(hbs`<Input @round=true/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-round').length, 1);
  });
  test('input round is false', async function (assert) {
    await render(hbs`<Input @round={{false}}/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-round').length, 0);
  });
  test('input round is undefined', async function (assert) {
    await render(hbs`<Input />`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-round').length, 0);
  });

  test('placeholder', async function (assert) {
    await render(hbs`<Input @placeholder="any text" />`);
    let element: any = this.element;
    assert.equal(element.querySelector('input').placeholder, "any text");
  });
  test('placeholder is undefined ', async function (assert) {
    await render(hbs`<Input  />`);
    let element: any = this.element;
    assert.equal(element.querySelector('input').placeholder, "Any text...");
  });
  test('maxlength ', async function (assert) {
    await render(hbs`<Input  />`);
    let element: any = this.element;
    element.querySelector('input').maxlength = "10";
    assert.equal(element.querySelector('input').maxlength, "10");
  });
  test('data binding ', async function (assert) {
    await render(hbs`<Input  />`);
    let element: any = this.element;
    element.querySelector('input').value = "abc";
    assert.equal(element.querySelector('input').value, "abc");
  });

  test('autofocus true ', async function (assert) {
    await render(hbs`<Input @autofocus=true />`);
    let element: any = this.element;
    assert.equal(element.querySelector('input').autofocus, true);
  });
  test('autofocus false ', async function (assert) {
    await render(hbs`<Input @autofocus={{false}} />`);
    let element: any = this.element;
    assert.equal(element.querySelector('input').autofocus, false);
  });
  test('autofocus false ', async function (assert) {
    await render(hbs`<Input  />`);
    let element: any = this.element;
    assert.equal(element.querySelector('input').autofocus, false);
  });
  test('readonly true ', async function (assert) {
    await render(hbs`<Input  />`);
    let element: any = this.element;
    element.querySelector('input').readonly = true;
    assert.equal(element.querySelector('input').readonly, true);
  });
  test('readonly false ', async function (assert) {
    await render(hbs`<Input @readonly={{false}}  />`);
    let element: any = this.element;
    element.querySelector('input').readonly = false;

    assert.equal(element.querySelector('input').readonly, false);
  });
  test('readonly undefined value ', async function (assert) {
    await render(hbs`<Input  />`);
    let element: any = this.element;
    assert.equal(element.querySelector('input').readonly, null);
  });

  test('size ', async function (assert) {
    await render(hbs`<Input @size=10  />`);
    let element: any = this.element;
    assert.equal(element.querySelector('input').size, 10);
  });
  test('size negative ', async function (assert) {
    await render(hbs`<Input @size=-10  />`);
    let element: any = this.element;
    assert.equal(element.querySelector('input').size, 20);
  });
  test('size undefined ', async function (assert) {
    await render(hbs`<Input   />`);
    let element: any = this.element;
    assert.equal(element.querySelector('input').size, 20);
  });
  test('tabindex ', async function (assert) {
    await render(hbs`<Input />`);
    let element: any = this.element;
    element.querySelector('input').tabindex = 1;

    assert.equal(element.querySelector('input').tabindex, 1);
  });
  test('tabindex undefined ', async function (assert) {
    await render(hbs`<Input />`);
    let element: any = this.element;
    assert.equal(element.querySelector('input').tabindex, null);
  });
  test('min  ', async function (assert) {
    await render(hbs`<Input @min=10 />`);
    let element: any = this.element;
    assert.equal(element.querySelector('input').min, 10);
  });
  test('min not defined  ', async function (assert) {
    await render(hbs`<Input  />`);
    let element: any = this.element;
    assert.equal(element.querySelector('input').min, "");
  });

  test('max  ', async function (assert) {
    await render(hbs`<Input @max=10 />`);
    let element: any = this.element;
    assert.equal(element.querySelector('input').max, 10);
  });
  test('max not defined  ', async function (assert) {
    await render(hbs`<Input  />`);
    let element: any = this.element;
    assert.equal(element.querySelector('input').max, "");
  });
  test('pattern  ', async function (assert) {
    await render(hbs`<Input @pattern="[A-Za-z]{3}" />`);
    let element: any = this.element;
    assert.equal(element.querySelector('input').pattern, "[A-Za-z]{3}");
  });
  // test('autocomplete  ', async function (assert) {
  //   await render(hbs`<Input autocomplete=true />`);
  //   let element: any = this.element;
  //   assert.ok(document.querySelector('input').autocomplete);
  // });
  test('find .bp3-input', async function (assert) {
    await render(hbs`<Input  />`);
    let element: any = this.element;
    assert.equal(element.querySelector('.bp3-input') != null, true);
  });
});
