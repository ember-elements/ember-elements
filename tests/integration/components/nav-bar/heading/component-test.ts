import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nav-bar/heading', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{nav-bar/heading}}`);

    assert.equal((this.element as any).textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#nav-bar/heading}}
        template block text
      {{/nav-bar/heading}}
    `);
    assert.equal((this.element as any).textContent.trim(), 'template block text');
  });
  test('navbar-heading class is rendering', async function (assert) {
    await render(hbs`{{nav-bar/heading }}`);
    assert.ok(document.getElementsByName("bp3-navbar-heading"));
  });
  test('Custom class name to Heading', async function (assert) {
    await render(hbs`{{nav-bar/heading class="hellow"}}`);
    assert.ok(document.getElementsByName("hellow"));
  });
  test('Custom style to Heading', async function (assert) {
    await render(hbs`{{nav-bar/heading class="hellow" style="width:150px"}}`);
    assert.ok((document.querySelector('.hellow') as HTMLInputElement).style.width);
  });
  test('Yeild value is rendering', async function (assert) {
    await render(hbs`
      {{#nav-bar/heading}}
        template block text
      {{/nav-bar/heading}}
    `);
    assert.equal((this.element as any).textContent.trim(), 'template block text');
  });
});
