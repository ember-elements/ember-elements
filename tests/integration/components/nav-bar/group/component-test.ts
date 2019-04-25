import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nav-bar/group', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{nav-bar/group}}`);
    assert.equal((this.element as any).textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#nav-bar/group}}
        template block text
      {{/nav-bar/group}}
    `);
    assert.equal((this.element as any).textContent.trim(), 'template block text');
  });
  test('navbar-group class is rendering', async function (assert) {
    await render(hbs`{{nav-bar/group }}`);
    assert.ok(document.getElementsByName("bp3-navbar-group"));
  });
  test('Custom class name to group', async function (assert) {
    await render(hbs`{{nav-bar/group class="hellow"}}`);
    assert.ok(document.getElementsByName("hellow"));
  });
  test('Custom style to group', async function (assert) {
    await render(hbs`{{nav-bar/group class="hellow" style="width:150px"}}`);
    assert.ok((document.querySelector('.hellow') as HTMLInputElement).style.width);
  });
  test('Yeild value is rendering', async function (assert) {
    await render(hbs`
      {{#nav-bar/group}}
        template block text
      {{/nav-bar/group}}
    `);
    assert.equal((this.element as any).textContent.trim(), 'template block text');
  });
});
