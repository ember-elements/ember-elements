import { render } from '@ember/test-helpers';
import { click } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

import hbs from 'htmlbars-inline-precompile';

const NS = 'ee';
const CARD = `${NS}-card`;
const ELEVATION_3 = `${NS}-elevation-3`;
const INTERACTIVE = `${NS}-interactive`;

module('Integration | Component | card', function (hooks) {
  setupRenderingTest(hooks);

  test('supports elevation, interactive, and className props', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Card @elevation={{3}} @className='foo' @interactive={{true}}/>`);
    assert.dom('div').hasClass(CARD);
    assert.dom('div').hasClass('foo');
    assert.dom('div').hasClass(ELEVATION_3);
    assert.dom('div').hasClass(INTERACTIVE);
  });

  test('renders child', async function (assert) {
    await render(hbs`<Card> <h4></h4></Card>`);
    assert.dom('div').hasClass(CARD);
    assert.dom('h4').exists();
  });

  test('calls onClick when card is clicked', async function (assert) {
    this.set('result', '');
    this.set('buttonAction', function (a, b) {
      this.set('result', a + ' ' + b);
    });
    await render(
      hbs`<Card @onClick={{action  this.buttonAction 'Hello' 'World'  }}>{{this.text}}</Card>  <div id="result">{{ this.result }}</div>`
    );
    await click('div');
    assert.dom('#result').hasText('Hello World');
    assert.dom('div').hasClass(CARD);
  });
});
