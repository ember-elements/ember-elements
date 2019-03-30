import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | toggle-switch/item', function(hooks) {
  setupRenderingTest(hooks);

  test('Active renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{toggle-switch/item data=true active=true}}`);

    assert.ok(this.element.querySelector('.text-white'));
    assert.ok(this.element.querySelector('.cursor-default'));
    assert.ok(this.element.querySelector('.gray'));
  });
});
