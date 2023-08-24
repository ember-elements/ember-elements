import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | html-select', function (hooks) {
  setupRenderingTest(hooks);

  test('<HtmlSelect>: renders options strings', async function (assert) {
    this.set('options', ['a', 'b']);

    await render(hbs`<HtmlSelect @options={{this.options}}/>`);

    assert.strictEqual(
      this.element.querySelectorAll('option')[0].textContent.trim(),
      'a'
    );
    assert.strictEqual(
      this.element.querySelectorAll('option')[1].textContent.trim(),
      'b'
    );
  });
  test('<HtmlSelect>:renders options props', async function (assert) {
    this.set('options', [
      { value: 'a' },
      { value: 'b', className: 'foo' },
      { value: 'c', disabled: true },
      { label: 'Dog' },
    ]);
    await render(hbs`<HtmlSelect @options={{this.options}}/>`);

    assert.strictEqual(
      this.element.querySelectorAll('option')[0].textContent.trim(),
      'a',
      'value'
    );
    assert.ok(this.element.querySelector('.foo'), 'class Name');
    assert.ok(this.element.querySelectorAll('option')[2].disabled, 'disabled');
    assert.strictEqual(
      this.element.querySelectorAll('option')[3].textContent.trim(),
      'Dog',
      'label'
    );
  });
});
