import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | radio-group/radio', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{radio-group/radio}}`);

    assert.equal((this.element.textContent as any).trim(), '');

    // Template block usage:
    await render(hbs`
      {{#radio-group/radio}}
        template block text
      {{/radio-group/radio}}
    `);

    assert.equal((this.element.textContent as any).trim(), 'template block text');
  });
});
