import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

import hbs from 'htmlbars-inline-precompile';

import { Alignment } from '../alignment';
import * as Classes from '../classes';

module('Integration | Component |checkbox', function (hooks) {
  setupRenderingTest(hooks);

  test('Check alignIndicator with left ', async function (assert) {
    await render(hbs`<Checkbox @alignIndicator='left'/>`);

    assert.dom('label').hasClass(Classes.alignmentClass(Alignment.LEFT));
  });

  test('Check alignIndicator with right ', async function (assert) {
    await render(hbs`<Checkbox @alignIndicator='right'/>`);

    assert.dom('label').hasClass(Classes.alignmentClass(Alignment.RIGHT));
  });

  test('renders checked property ', async function (assert) {
    await render(hbs`<Checkbox checked={{true}}/>`);

    assert.true(this.element.querySelector('input').checked);
  });

  test('renders label property ', async function (assert) {
    await render(hbs`<Checkbox @label='label'/>`);

    assert.dom('label').hasText('label');
  });

  test('renders defaultIndeterminate property ', async function (assert) {
    await render(hbs`<Checkbox @defaultIndeterminate={{true}}/>`);

    assert.true(this.element.querySelector('input').indeterminate);
  });

  test('disabled true value to check box', async function (assert) {
    await render(hbs`<Checkbox @disabled={{true}}/>`);

    assert.dom('label').hasClass(Classes.DISABLED);
  });

  test('disabled false value to check box', async function (assert) {
    await render(hbs`<Checkbox @disabled={{false}}/>`);

    assert.dom('label').doesNotHaveClass(Classes.DISABLED);
  });

  test('disabled string value to check box', async function (assert) {
    await render(hbs`<Checkbox @disabled='hii'/>`);

    assert.dom('label').hasClass(Classes.DISABLED);
  });

  test('indeterminate true value to check box ', async function (assert) {
    await render(hbs`<Checkbox @indeterminate={{true}}/>`);

    assert.true(this.element.querySelector('input').indeterminate);
  });

  test('indeterminate false value to check box ', async function (assert) {
    await render(hbs`<Checkbox @indeterminate={{false}}/>`);
    assert.false(this.element.querySelector('input').indeterminate);
  });

  test('indeterminate string value to check box ', async function (assert) {
    await render(hbs`<Checkbox @indeterminate='string'/>`);
    assert.true(this.element.querySelector('input').indeterminate);
  });

  test('indeterminate number value to check box ', async function (assert) {
    await render(hbs`<Checkbox @indeterminate={{123}}/>`);
    assert.true(this.element.querySelector('input').indeterminate);
  });

  test('set inline true to check box ', async function (assert) {
    await render(hbs`<Checkbox @inline={{true}}/>`);
    assert.ok(document.getElementsByClassName('bp3-inline'));
  });

  test('set inline false to check box ', async function (assert) {
    await render(hbs`<Checkbox @inline={{false}}/>`);
    assert.notOk(document.querySelector('.bp3-inline'));
  });

  test('set inline string to check box ', async function (assert) {
    await render(hbs`<Checkbox @inline='hii'/>`);
    assert.ok(document.getElementsByClassName('bp3-inline'));
  });

  test('set inline number to check box ', async function (assert) {
    await render(hbs`<Checkbox @inline={{123}}/>`);
    assert.ok(document.getElementsByClassName('bp3-inline'));
  });

  test('labelElement with string value to Check Box', async function (assert) {
    await render(hbs`<Checkbox @labelElement='hellow'/>`);
    assert.equal(this.element.textContent.trim(), 'hellow');
  });
  test('labelElement with htmlElement value to Check Box', async function (assert) {
    await render(hbs`<Checkbox @labelElement='<div>hellow<div>'/>`);
    assert.equal(this.element.textContent.trim(), 'hellow');
  });

  test('first priority for labelElement when compared with label', async function (assert) {
    await render(hbs`<Checkbox @label='hello' @labelElement='<div>hellow<div>'/>`);

    assert.equal(this.element.textContent.trim(), 'hello');
  });

  test('large prop set true value to check box  ', async function (assert) {
    await render(hbs`<Checkbox @large={{true}}/>`);
    assert.ok(document.getElementsByClassName(Classes.LARGE));
  });

  test('large prop set false value to check box  ', async function (assert) {
    await render(hbs`<Checkbox @large={{false}}/>`);
    assert.notOk(document.querySelector('.bp3-large'));
  });

  test('large prop set string value to check box  ', async function (assert) {
    await render(hbs`<Checkbox @large='hello'/>`);
    assert.ok(document.getElementsByClassName(Classes.LARGE));
  });

  test('large prop set number value to check box  ', async function (assert) {
    await render(hbs`<Checkbox @large={{123}}/>`);
    assert.ok(document.getElementsByClassName(Classes.LARGE));
  });

  test('indeterminate prop is first priority when check prop occurred', async function (assert) {
    await render(hbs`<Checkbox @indeterminate={{true}} @checked={{true}}/>`);
    assert.false(this.element.querySelector('input').checked);
    assert.true(this.element.querySelector('input').indeterminate);
  });

  test('defaultIndeterminate first priority when check prop occurred', async function (assert) {
    await render(hbs`<Checkbox @defaultIndeterminate={{true}} @checked={{true}}/>`);

    assert.false(this.element.querySelector('input').checked);
    assert.true(this.element.querySelector('input').indeterminate);
  });
});
