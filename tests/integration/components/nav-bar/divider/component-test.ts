import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nav-bar/divider', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{nav-bar/divider}}`);
    assert.equal((this.element as any).textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#nav-bar/divider}}
        template block text
      {{/nav-bar/divider}}
    `);
    assert.equal((this.element as any).textContent.trim(), '');
  });
  test('navbar-divider class is rendering', async function (assert) {
    await render(hbs`{{nav-bar/divider }}`);
    assert.ok(document.getElementsByName("bp3-navbar-divider"));
  });
  test('Custom class name to divider', async function (assert) {
    await render(hbs`{{nav-bar/divider class="hellow"}}`);
    assert.ok(document.getElementsByName("hellow"));
  });
  test('Custom style to divider', async function (assert) {
    await render(hbs`{{nav-bar/divider class="hellow" style="width:150px"}}`);
    assert.ok((document.querySelector('.hellow') as HTMLInputElement).style.width);
  });
  test('Yeild value should not render', async function (assert) {
    await render(hbs`
      {{#nav-bar/divider}}
        template block text
      {{/nav-bar/divider}}
    `);
    assert.equal((this.element as any).textContent.trim(), '');
  });
});
