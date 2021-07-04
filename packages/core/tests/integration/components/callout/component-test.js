import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

import hbs from 'htmlbars-inline-precompile';

const NS = 'ee';
const CALLOUT = `${NS}-callout`;
const PRIMARY = `${NS}-intent-primary`;
module('Integration | Component | callout', function (hooks) {
  setupRenderingTest(hooks);

  test('className renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Callout @className='foo' />`);
    assert.dom('div').hasClass('foo');
    assert.dom('h4').doesNotExist();
    assert.dom('div').hasClass(CALLOUT);
  });

  test('supports icon', async function (assert) {
    await render(hbs`<Callout @icon='graph' />`);
    assert.dom('svg').exists();
  });

  test('supports intent', async function (assert) {
    await render(hbs`<Callout @intent='primary' />`);
    assert.dom('div').hasClass(PRIMARY);
  });

  test('intent renders default icon', async function (assert) {
    await render(hbs`<Callout @intent='primary' />`);
    assert.dom('div').hasClass(PRIMARY);
    assert.dom('svg').exists();
  });

  test('icon=null removes intent icon', async function (assert) {
    await render(hbs`<Callout @intent='primary'  @icon={{null}}/>`);
    assert.dom('svg').exists();
  });

  test('renders optional title element', async function (assert) {
    await render(hbs`<Callout @title='title'/>`);
    assert.dom('h4').exists();
  });
});
