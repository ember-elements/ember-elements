import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

import { Intent } from '../intent';

import { FORM_GROUP, INTENT_SUCCESS, FORM_HELPER_TEXT } from '../classes';

module('Integration | Component | form-group', function(hooks) {
  setupRenderingTest(hooks);
  test('supports className & intent', async function(assert) {
    this.set('intent', Intent.SUCCESS);

    await render(hbs`<FormGroup @className='foo' @intent={{this.intent}}/>`);

    assert.dom('div').hasClass(FORM_GROUP);
    assert.dom('div').hasClass(INTENT_SUCCESS);
    assert.dom('div').hasClass('foo');
    assert.dom('div').exists();
  });

  test('renders children in form content', async function(assert) {
    await render(hbs`<FormGroup > <input id='yes'></FormGroup>`);

    assert.dom('input').exists();
    assert.dom('input').hasAttribute('id', 'yes');
  });

  test('renders label & labelFor', async function(assert) {
    this.set('labelText', 'This is the label.');

    await render(hbs`<FormGroup @label={{this.labelText}} @labelFor='foo'/>`);
    assert.dom('label').exists();
    assert.dom('label').hasText(this.labelText);
    assert.dom('label').hasAttribute('for', 'foo');
  });

  test('hides label when falsy', async function(assert) {
    await render(hbs`<FormGroup />`);
    assert.dom('label').doesNotExist();
  });

  test('renders helperText', async function(assert) {
    this.set('helperText', 'Help me out');

    await render(hbs`<FormGroup @helperText={{this.helperText}} />`);
    assert.dom(`.${FORM_HELPER_TEXT}`).exists();
    assert.dom(`.${FORM_HELPER_TEXT}`).hasText(this.helperText);
  });

  test('renders ...attributes', async function(assert) {
    await render(hbs`<FormGroup style='color:red' />`);
    assert.dom('div').hasAttribute('style', 'color:red');
  });
});
