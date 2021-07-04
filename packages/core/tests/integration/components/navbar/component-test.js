import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

import hbs from 'htmlbars-inline-precompile';

import * as Classes from '../classes';

module('Integration | Component | navbar', function (hooks) {
  setupRenderingTest(hooks);

  test('has the correct className', async function (assert) {
    await render(hbs`<Navbar/>`);
    assert.dom('div').hasClass(Classes.NAVBAR);
  });

  test('FIXED_TOP', async function (assert) {
    await render(hbs`<Navbar @fixedToTop={{true}}/>`);
    assert.dom('div').hasClass(Classes.FIXED_TOP);
  });
});
