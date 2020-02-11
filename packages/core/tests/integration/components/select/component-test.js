import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | select', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Select/>`);

    assert.equal(this.element.textContent.trim(), '');
    this.set('text', 'template block text');
    // Template block usage:
    await render(hbs`
      <Select>
        {{this.text}}
      </Select>
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
