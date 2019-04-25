import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nav-bar', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{nav-bar}}`);

    assert.equal((this.element as any).textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#nav-bar}}
        template block text
      {{/nav-bar}}
    `);

    assert.equal((this.element as any).textContent.trim(), 'template block text');
  });
  test('custom Class name to NavBar ', async function (assert) {
    await render(hbs`{{nav-bar class="hellow"}}`);
    assert.ok(document.getElementsByClassName("hellow"));
  });
  test('custom style to NavBar ', async function (assert) {
    await render(hbs`{{nav-bar class="hellow" style="width:150px"}}`);
    assert.ok((document.querySelector('.hellow') as HTMLInputElement).style.width);
  });
  test('yeild value is rendering  ', async function (assert) {
    await render(hbs`
      {{#nav-bar}}
        template block text
      {{/nav-bar}}
    `);
    assert.equal((this.element as any).textContent.trim(), 'template block text');
  });
  test('fixedToTop=true to generate fixed-top class ', async function (assert) {
    await render(hbs`{{nav-bar fixedToTop=true}}`);
    assert.ok(document.getElementsByClassName("bp3-fixed-top"));
  });
  test('fixedToTop=true check the placement of NavBar ', async function (assert) {
    await render(hbs`{{nav-bar fixedToTop=true}}`);
    assert.ok(document.getElementsByClassName("bp3-fixed-top"));
    assert.equal((document.querySelector('.bp3-navbar') as HTMLInputElement).style.top, 0, "top is 0");
    assert.equal((document.querySelector('.bp3-navbar') as HTMLInputElement).style.left, 0, "left is 0");
    assert.equal((document.querySelector('.bp3-navbar') as HTMLInputElement).style.right, 0, "right is 0");
  });
  test('fixedToTop=false  ', async function (assert) {
    await render(hbs`{{nav-bar fixedToTop=false }}`);
    assert.equal(document.getElementsByClassName("bp3-fixed-top").length, "");
  });
  test('fixedToTop="hi" with some text  ', async function (assert) {
    await render(hbs`{{nav-bar fixedToTop="hi" }}`);
    assert.ok(document.getElementsByClassName("bp3-fixed-top"));
  });


});
