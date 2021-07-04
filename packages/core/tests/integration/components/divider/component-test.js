import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

import hbs from 'htmlbars-inline-precompile';

import * as Classes from '../classes';

module('Integration | Component | divider', function (hooks) {
  setupRenderingTest(hooks);

  test('has the correct className', async function (assert) {
    await render(hbs`
     <Divider/>
`);
    assert.dom('div').hasClass(Classes.DIVIDER);
  });
});
