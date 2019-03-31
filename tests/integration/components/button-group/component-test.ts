import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | button-group', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{button-group}}`);
    var element:any=this.element;
    assert.equal(element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#button-group}}
        template block text
      {{/button-group}}
    `);

    assert.equal(element.textContent.trim(), 'template block text');
  });

  test('button-group vertical is true', async function (assert) {
    await render(hbs`<ButtonGroup @vertical={{true}}/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-vertical').length, 1);
  });
  test('button-group vertical is false', async function (assert) {
    await render(hbs`<ButtonGroup @vertical={{false}}/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-vertical').length, 0);
  });
  test('button-group vertical is undefined', async function (assert) {
    await render(hbs`<ButtonGroup />`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-vertical').length, 0);
  });

  test('button-group minimal is true', async function (assert) {
    await render(hbs`<ButtonGroup @minimal={{true}}/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-minimal').length, 1);
  });
  test('button-group minimal is false', async function (assert) {
    await render(hbs`<ButtonGroup @minimal={{false}}/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-minimal').length, 0);
  });
  test('button-group minimal is undefined', async function (assert) {
    await render(hbs`<ButtonGroup />`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-minimal').length, 0);
  });

  test('button-group large is true', async function (assert) {
    await render(hbs`<ButtonGroup @large={{true}}/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-large').length, 1);
  });
  test('button-group large is false', async function (assert) {
    await render(hbs`<ButtonGroup @large={{false}}/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-large').length, 0);
  });
  test('button-group large is undefined', async function (assert) {
    await render(hbs`<ButtonGroup />`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-large').length, 0);
  });


  test('button-group fill is true', async function (assert) {
    await render(hbs`<ButtonGroup @fill={{true}}/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-fill').length, 1);
  });
  test('button-group fill is false', async function (assert) {
    await render(hbs`<ButtonGroup @fill={{false}}/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-fill').length, 0);
  });
  test('button-group fill is undefined', async function (assert) {
    await render(hbs`<ButtonGroup />`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-fill').length, 0);
  });
  test('text align left', async function (assert) {
    await render(hbs`<ButtonGroup @alignText="left" />`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-align-left').length, 1);
  });
  test('text align right', async function (assert) {
    await render(hbs`<ButtonGroup @alignText="right" />`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-align-right').length, 1);
  });
});
