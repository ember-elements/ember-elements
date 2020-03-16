import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

import * as Classes from '../../classes';

module('Integration | Component | drawer/header', function(hooks) {
  setupRenderingTest(hooks);

  test('Drawer Header renders <Drawer::Header>', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('text', 'Header is rendering');
    await render(hbs`
      <Drawer::Header>{{this.text}}</Drawer::Header>
    `);

    assert.dom(`.${Classes.DRAWER_HEADER}`).exists();
    assert.dom(`.${Classes.DRAWER_HEADER}`).hasText('Header is rendering');
  });
});
