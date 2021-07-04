import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

import hbs from 'htmlbars-inline-precompile';

const NS = 'ee';
const BUTTON = `${NS}-button-group`;
const FILL = `${NS}-fill`;
const LARGE = `${NS}-large`;
const MINIMAL = `${NS}-minimal`;
const VERTICAL = `${NS}-vertical`;

module('Integration | Component | button-group', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ButtonGroup />`);
    assert.dom('div').exists();
    assert.dom('div').hasClass(BUTTON);
  });

  test('className renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ButtonGroup @className='foo' />`);
    assert.dom('div').hasClass('foo');
  });

  test('fill renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ButtonGroup @fill={{true}} />`);
    assert.dom('div').hasClass(FILL);
  });

  test('minimal renders', async function (assert) {
    await render(hbs`<ButtonGroup @minimal={{true}} />`);
    assert.dom('div').hasClass(MINIMAL);
  });

  test('vertical renders', async function (assert) {
    await render(hbs`<ButtonGroup @vertical={{true}} />`);
    assert.dom('div').hasClass(VERTICAL);
  });

  test('large renders', async function (assert) {
    await render(hbs`<ButtonGroup @large={{true}} />`);
    assert.dom('div').hasClass(LARGE);
  });
});
