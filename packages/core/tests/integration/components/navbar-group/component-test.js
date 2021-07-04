import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

import hbs from 'htmlbars-inline-precompile';

import * as Classes from '../classes';

module('Integration | Component | navbar-group', function (hooks) {
  setupRenderingTest(hooks);

  test('has the correct className', async function (assert) {
    await render(hbs`<NavbarGroup/>`);
    assert.dom('div').hasClass(Classes.NAVBAR_GROUP);
  });

  test('align = right', async function (assert) {
    await render(hbs`<NavbarGroup @align='right'/>`);
    assert.dom('div').hasClass(Classes.alignmentClass('right'));
  });

  test('align default', async function (assert) {
    await render(hbs`<NavbarGroup />`);
    assert.dom('div').hasClass(Classes.alignmentClass('left'));
  });
});
