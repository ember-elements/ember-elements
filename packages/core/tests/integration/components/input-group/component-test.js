import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

import hbs from 'htmlbars-inline-precompile';

import * as Classes from '../classes';

module('Integration | Component | input-group', function (hooks) {
  setupRenderingTest(hooks);

  test('supports className, fill, & large', async function (assert) {
    await render(
      hbs`<InputGroup @className='foo' @fill={{true}} @large={{true}} />`
    );

    assert.dom('div').hasClass(Classes.INPUT_GROUP);
    assert.dom('div').hasClass(Classes.FILL);
    assert.dom('div').hasClass(Classes.LARGE);
    assert.dom('div').hasClass('foo');
  });

  test('renders leftIcon', async function (assert) {
    await render(hbs`<InputGroup @leftIcon='add' />`);

    assert.dom('svg').exists();
  });

  test('renders rightElement with yield', async function (assert) {
    this.set('text', 'hii');
    await render(hbs`<InputGroup>{{this.text}}</InputGroup>`);

    assert.dom('span').hasClass(Classes.INPUT_ACTION);
    assert.dom('.' + Classes.INPUT_ACTION).hasText(this.text);
  });
});
