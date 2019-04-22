import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { click } from '@ember/test-helpers';

module('Integration | Component | check-box', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{check-box}}`);

    assert.equal((this.element.textContent as any).trim(), '');

    // Template block usage:
    await render(hbs`
      {{#check-box}}
        template block text
      {{/check-box}}
    `);

    assert.equal((this.element.textContent as any).trim(), 'template block text');
  });
  test('label value is rendering', async function (assert) {
    await render(hbs`
      <CheckBox @label="hellow"/>
    `);

    assert.equal((this.element.textContent as any).trim(), 'hellow');
  });
  test('checked =true ', async function (assert) {
    await render(hbs`
      <CheckBox @checked=true/>
    `);
    assert.equal((this.element.querySelector('input') as any).checked, true);
  });
  test('checked =false ', async function (assert) {
    await render(hbs`
      <CheckBox @checked={{false}}/>
    `);
    assert.equal((this.element.querySelector('input') as any).checked, false);
  });
  test('custom class is working ', async function (assert) {
    await render(hbs`
      <CheckBox @class="hellow"/>
    `);
    assert.ok(document.getElementsByName('hellow'));
  });

  test('defaultChecked =true ', async function (assert) {
    await render(hbs`
      <CheckBox @defaultChecked=true/>
    `);
    assert.equal((this.element.querySelector('input') as any).checked, true);
  });
  test('defaultIndeterminate =true ', async function (assert) {
    await render(hbs`
      <CheckBox @defaultIndeterminate=true/>
    `);
    assert.equal((this.element.querySelector('input') as any).indeterminate, true);
  });
  test('indeterminate =true ', async function (assert) {
    await render(hbs`
      <CheckBox @indeterminate=true/>
    `);
    assert.equal((this.element.querySelector('input') as any).indeterminate, true);
  });
  test('disabled=true ', async function (assert) {
    await render(hbs`
      <CheckBox @disabled=true/>
    `);
    assert.ok(document.getElementsByClassName('bp3-disabled'));
  });
  test('large=true ', async function (assert) {
    await render(hbs`
      <CheckBox @large=true/>
    `);
    assert.ok(document.getElementsByClassName('bp3-large'));
  });
  test('alignIndicator=left ', async function (assert) {
    await render(hbs`
      <CheckBox @alignIndicator="left"/>
    `);
    assert.ok(document.getElementsByClassName('bp3-align-left'));
  });
  test('alignIndicator=right ', async function (assert) {
    await render(hbs`
      <CheckBox @alignIndicator="right"/>
    `);
    assert.ok(document.getElementsByClassName('bp3-align-right'));
  });
  test('onchange function  ', async function (assert) {
    var that = this;
    this.set('onChange', function (e: any, value: boolean) {
      e = e;
      that.set('value', value);
    })

    await render(hbs`
      <CheckBox @onChange={{action onChange}}/>
    `);
    await click('input');
    assert.equal(this.get('value'), true);
  });
  test('indeterminate first priority ', async function (assert) {
    await render(hbs`
      <CheckBox @indeterminate=true @checked=true/>
    `);
    assert.equal((this.element.querySelector('input') as any).checked, false);
    assert.equal((this.element.querySelector('input') as any).indeterminate, true);

  });
  test('defaultIndeterminate first priority ', async function (assert) {
    await render(hbs`
      <CheckBox @defaultIndeterminate=true @checked=true/>
    `);
    assert.equal((this.element.querySelector('input') as any).checked, false);
    assert.equal((this.element.querySelector('input') as any).indeterminate, true);

  });

});
