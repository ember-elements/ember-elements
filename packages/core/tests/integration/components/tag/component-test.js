import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

import * as Classes from '../classes';

module('Integration | Component | tag', function(hooks) {
  setupRenderingTest(hooks);
  test('renders its text', async function(assert) {
    this.set('text', 'hello');
    await render(hbs`<Tag>{{this.text}}</Tag>`);

    assert.dom('.' + Classes.TEXT_OVERFLOW_ELLIPSIS).hasText('hello');
  });

  test('text is not rendered if omitted', async function(assert) {
    await render(hbs`<Tag/>`);

    assert.dom('.' + Classes.TEXT_OVERFLOW_ELLIPSIS).doesNotExist();
  });

  test('render icon', async function(assert) {
    await render(hbs`<Tag @icon='home'/>`);

    assert.dom('svg').exists();
  });

  test('render rightIcon', async function(assert) {
    await render(hbs`<Tag @rightIcon='home'/>`);

    assert.dom('svg').exists();
  });

  test('renders close button when onRemove is a function', async function(assert) {
    this.set('onRemove', function() {});
    await render(hbs`<Tag @onRemove={{action this.onRemove}}/>`);

    assert.dom('.' + Classes.TAG_REMOVE).exists();
  });

  test('passes other props onto', async function(assert) {
    await render(hbs`<Tag title='home'/>`);

    assert.dom('span').hasAttribute('title', 'home');
  });
});
