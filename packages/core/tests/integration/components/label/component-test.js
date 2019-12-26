import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

import { LABEL } from '../classes';

module('Integration | Component | control-group', function(hooks) {
  setupRenderingTest(hooks);
  test('supports className & fill & vertical ', async function(assert) {
    await render(hbs`<Label />`);

    assert.dom('label').exists();
    assert.dom('label').hasClass(LABEL);
  });
});
