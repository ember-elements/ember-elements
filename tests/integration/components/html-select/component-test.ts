import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | html-select', function (hooks) {
  setupRenderingTest(hooks);

  test('<HtmlSelect>: renders options strings', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('options', ["a", "b"]);
    await render(hbs`<HtmlSelect @options={{options}}/>`);

    assert.equal((this.element.querySelectorAll('option')[0] as any).textContent.trim(), 'a');
    assert.equal((this.element.querySelectorAll('option')[1] as any).textContent.trim(), 'b');
  });
  test('<HtmlSelect>:renders options props', async function (assert) {
    this.set('options', [
      { value: "a" },
      { value: "b", class: "foo" },
      { value: "c", disabled: true },
      { label: "Dog" },
    ]);
    await render(hbs`<HtmlSelect @options={{options}}/>`);

    assert.equal((this.element.querySelectorAll('option')[0] as any).textContent.trim(), 'a', 'value');
    assert.ok(this.element.querySelector('.foo'), 'class Name');
    assert.ok((this.element.querySelectorAll('option')[2] as any).disabled, 'disabled');
    assert.equal((this.element.querySelectorAll('option')[3] as any).textContent.trim(), 'Dog', 'label');

  });
});
