import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { click } from '@ember/test-helpers';

import * as Classes from '../classes';
import { Alignment } from '../alignment';

module('Integration | Component | switch', function(hooks) {
  setupRenderingTest(hooks);

  test('Check alignIndicator with right ', async function(assert) {
    await render(hbs`<Switch @alignIndicator='right'/>`);

    assert.dom('label').hasClass(Classes.alignmentClass(Alignment.RIGHT));
  });

  test('renders checked property ', async function(assert) {
    await render(hbs`<Switch checked={{true}}/>`);

    assert.equal(this.element.querySelector('input').checked, true);
  });

  test('renders label property ', async function(assert) {
    await render(hbs`<Switch @label='label'/>`);

    assert.dom('label').hasText('label');
  });

  test('label do not render HtmlElement', async function(assert) {
    await render(hbs`<Switch @label='<div>hii</div>'/>`);

    assert.dom('label').hasText('<div>hii</div>');
  });

  test('custom class is working on Switch', async function(assert) {
    await render(hbs`<Switch @className='foo'/>`);

    assert.dom('label').hasClass('foo');
  });

  test('switch defaultChecked is activate state ', async function(assert) {
    await render(hbs`<Switch defaultChecked={{true}}/>`);

    assert.equal(this.element.querySelector('input').checked, true);
  });

  test('disabled true value to switch', async function(assert) {
    await render(hbs`<Switch @disabled={{true}}/>`);

    assert.dom('label').hasClass(Classes.DISABLED);
  });

  test('set inline true to switch ', async function(assert) {
    await render(hbs`<Switch @inline={{true}}/>`);

    assert.dom('label').hasClass(Classes.INLINE);
  });

  test('set innerLabel set off to unchecked switch ', async function(assert) {
    await render(hbs` <Switch @innerLabel='off'/>`);

    assert.dom('.' + Classes.SWITCH_INNER_TEXT).hasText('off');
  });

  test('set innerLabelChecked set on to unchecked switch ', async function(assert) {
    await render(hbs`<Switch @innerLabelChecked='on'/>`);

    assert.dom('.' + Classes.SWITCH_INNER_TEXT).hasText('on');
  });

  test('labelElement with htmlElement value to switch', async function(assert) {
    await render(hbs`<Switch @labelElement='<div>foo<div>'/>`);

    assert.dom('label').hasText('foo');
  });

  test('large prop set true value to switch  ', async function(assert) {
    await render(hbs`<Switch @large={{true}}/>`);

    assert.dom('label').hasClass(Classes.LARGE);
  });

  test('onchange function for switch ', async function(assert) {
    this.set('onChange', function() {
      this.set('value', true);
    });

    await render(hbs`<Switch @onChange={{action this.onChange}}/>`);
    await click('input');

    assert.equal(this.get('value'), true);
  });
});
