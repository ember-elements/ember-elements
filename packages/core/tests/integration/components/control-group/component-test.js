import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

import hbs from 'htmlbars-inline-precompile';

import { CONTROL_GROUP, FILL, VERTICAL } from '../classes';

module('Integration | Component | control-group', function (hooks) {
  setupRenderingTest(hooks);
  test('supports className & fill & vertical ', async function (assert) {
    await render(
      hbs`<ControlGroup @className='foo' @fill={{true}} @vertical={{true}}/>`
    );

    assert.dom('div').hasClass('foo');
    assert.dom('div').hasClass(CONTROL_GROUP);
    assert.dom('div').hasClass(FILL);
    assert.dom('div').hasClass(VERTICAL);
  });
});
