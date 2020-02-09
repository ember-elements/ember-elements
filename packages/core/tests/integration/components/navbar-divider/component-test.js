import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

import * as Classes from '../classes';

module('Integration | Component | navbar-divider', function(hooks) {
  setupRenderingTest(hooks);

  test('has the correct className', async function(assert) {
    await render(hbs`<NavbarDivider/>`);
    assert.dom('div').hasClass(Classes.NAVBAR_DIVIDER);
  });
});
