import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

import * as Classes from '../classes';

module('Integration | Component | collapse', function(hooks) {
  setupRenderingTest(hooks);

  test('has the correct className', async function(assert) {
    this.set('text', 'template block text');
    await render(hbs`
     <Collapse>{{this.text}}</Collapse>
    `);
    assert.ok(this.element.querySelector('.' + Classes.COLLAPSE));
  });
  test('is closed', async function(assert) {
    this.set('text', 'template block text');
    await render(hbs`
     <Collapse @isOpen={{false}}>{{this.text}}</Collapse>
    `);
    assert.equal(this.element.querySelector('.' + Classes.COLLAPSE).style.height, '');
  });
  test('is open', async function(assert) {
    this.set('text', 'template block text');
    await render(hbs`
     <Collapse @isOpen={{true}}>{{this.text}}</Collapse>
    `);
    assert.equal(this.element.querySelector('.' + Classes.COLLAPSE).style.height, 'auto');
  });
  test('is opening', async function(assert) {
    this.set('text', 'template block text');
    await render(hbs`
     <Collapse @isOpen={{true}}>{{this.text}}</Collapse>
    `);
    assert.equal(this.element.querySelector('.' + Classes.COLLAPSE).style.height, 'auto');
  });
  test('unmounts children by default', async function(assert) {
    await render(hbs`
     <Collapse @isOpen={{false}}><div class='removed-child'></div></Collapse>
    `);
    assert.notOk(this.element.querySelector('.removed-child'));
  });
  test('keepChildrenMounted keeps child mounted', async function(assert) {
    await render(hbs`
     <Collapse @isOpen={{false}} @keepChildrenMounted={{true}}><div class='hidden-child'> </div></Collapse>
    `);
    assert.ok(this.element.querySelector('.hidden-child'));
  });
});
