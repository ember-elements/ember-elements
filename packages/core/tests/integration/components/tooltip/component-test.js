import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, triggerEvent } from '@ember/test-helpers';

import hbs from 'htmlbars-inline-precompile';
import * as Classes from '../classes';
module('Integration | Component | tooltip', function(hooks) {
  setupRenderingTest(hooks);

  test('tooltip render', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<p class='target' ><Tooltip></Tooltip></p>`);
    await triggerEvent('.target', 'mouseenter');
    assert.dom(`.${Classes.TOOLTIP}`).exists();
  });

  test('tooltip content render', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('text', 'hii');
    await render(hbs`<p class='target' ><Tooltip>{{this.text}}</Tooltip></p>`);
    await triggerEvent('.target', 'mouseenter');
    assert.dom(`.${Classes.POPOVER_CONTENT}`).exists();
    assert.dom(`.${Classes.POPOVER_CONTENT}`).hasText('hii');
  });

  test('default open by controlled variable', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<p class='target' ><Tooltip @event='none' @isOpen={{true}}></Tooltip></p>`);
    assert.dom(`.${Classes.TOOLTIP}`).exists();
  });

  test('event type click', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<p class='target' ><Tooltip @event='click'></Tooltip></p>`);
    await click('.target');
    assert.dom(`.${Classes.TOOLTIP}`).exists();
  });

  test('intent primary', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<p class='target' ><Tooltip @intent='primary'></Tooltip></p>`);
    await triggerEvent('.target', 'mouseenter');
    assert.dom(`.${Classes.intentClass('primary')}`).exists();
  });

  test('targetId', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<p id='target' ><Tooltip @targetId='target'></Tooltip></p>`);
    await triggerEvent('#target', 'mouseenter');
    assert.dom(`.${Classes.TOOLTIP}`).exists();
  });
});
