import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { click } from '@ember/test-helpers';

module('Integration | Component | switch', function (hooks) {
  setupRenderingTest(hooks);

  test('Check alignIndicator with left ', async function (assert) {
    await render(hbs`
      <Switch @alignIndicator="left"/>
    `);
    assert.ok(document.getElementsByClassName('bp3-align-left'));
  });

  test('Check alignIndicator with default left align ', async function (assert) {
    await render(hbs`
      <Switch />
    `);
    assert.ok(document.getElementsByClassName('bp3-align-left'));
  });

  test('Check alignIndicator with right ', async function (assert) {
    await render(hbs`
      <Switch @alignIndicator="right"/>
    `);
    assert.ok(document.getElementsByClassName('bp3-align-right'));
  });

  test('Check alignIndicator with center ', async function (assert) {
    await render(hbs`
      <Switch @alignIndicator="center"/>
    `);
    assert.ok(document.getElementsByClassName('bp3-align-center'));
  });

  test('Check alignIndicator with null data ', async function (assert) {
    await render(hbs`
      <Switch @alignIndicator=""/>
    `);
    assert.ok(document.querySelector('.bp3-align-left'));
    assert.notOk(document.querySelector('.bp3-align-center'));
    assert.notOk(document.querySelector('.bp3-align-right'));
  });

  test('Check alignIndicator with number data ', async function (assert) {
    await render(hbs`
      <Switch @alignIndicator={{123}}/>
    `);
    assert.notOk(document.querySelector('.bp3-align-left'));
    assert.notOk(document.querySelector('.bp3-align-center'));
    assert.notOk(document.querySelector('.bp3-align-right'));
  });

  test('Switch checked true value is rendering ', async function (assert) {
    await render(hbs`
      <Switch @checked=true/>
    `);
    assert.equal((this.element.querySelector('input') as any).checked, true);
  });
  test('checked with false value is rendering ', async function (assert) {
    await render(hbs`
      <Switch @checked={{false}}/>
    `);
    assert.equal((this.element.querySelector('input') as any).checked, false);
  });

  test('checked with string value to render Switch ', async function (assert) {
    await render(hbs`
      <Switch @checked="hii"/>
    `);
    assert.equal((this.element.querySelector('input') as any).checked, true);
  });

  test('checked with number value to render Switch ', async function (assert) {
    await render(hbs`
      <Switch @checked={{123}}/>
    `);
    assert.equal((this.element.querySelector('input') as any).checked, true);
  });

  test('checked with null value to  Switch ', async function (assert) {
    await render(hbs`
      <Switch @checked=""/>
    `);
    assert.equal((this.element.querySelector('input') as any).checked, false);
  });

  test('yield value to check box', async function (assert) {
    await render(hbs`
      <Switch >Switch</Switch>
    `);
    assert.equal((this.element.textContent as any).trim(), 'Switch');
  });

  test('yield value and label value to switch', async function (assert) {
    await render(hbs`
      <Switch @label="Hii" >Switch</Switch>
    `);
    assert.equal((this.element.textContent as any).trim(), 'Hii\n\nSwitch');
  });

  test('label value to Switch', async function (assert) {
    await render(hbs`
      <Switch @label="hellow"/>
    `);

    assert.equal((this.element.textContent as any).trim(), 'hellow');
  });

  test('label number value to Switch', async function (assert) {
    await render(hbs`
      <Switch @label={{123}}/>
    `);

    assert.equal((this.element.textContent as any).trim(), 123);
  });

  test('label do not render HtmlElement', async function (assert) {
    await render(hbs`
      <Switch @label="<div>hii</div>"/>
    `);

    assert.equal((this.element.textContent as any).trim(), "<div>hii</div>");
  });

  test('custom class is working on Switch', async function (assert) {
    await render(hbs`
      <Switch @class="hello"/>
    `);
    assert.ok(document.getElementsByName('hello'));
  });

  test('switch defaultChecked is activate state ', async function (assert) {
    await render(hbs`
      <Switch @defaultChecked=true/>
    `);
    assert.equal((this.element.querySelector('input') as any).checked, true);
  });

  test('switch defaultChecked is inactivate state ', async function (assert) {
    await render(hbs`
      <Switch @defaultChecked={{false}}/>
    `);
    assert.equal((this.element.querySelector('input') as any).checked, false);
  });

  test('switch defaultChecked with string value ', async function (assert) {
    await render(hbs`
      <Switch @defaultChecked="hii"/>
    `);
    assert.equal((this.element.querySelector('input') as any).checked, true);
  });

  test('switch defaultChecked with null value ', async function (assert) {
    await render(hbs`
      <Switch @defaultChecked=""/>
    `);
    assert.equal((this.element.querySelector('input') as any).checked, false);
  });

  test('switch defaultChecked with number value ', async function (assert) {
    await render(hbs`
      <Switch @defaultChecked={{123}}/>
    `);
    assert.equal((this.element.querySelector('input') as any).checked, true);
  });

  test('disabled true value to switch', async function (assert) {
    await render(hbs`
      <Switch @disabled=true/>
    `);
    assert.ok(document.getElementsByClassName('bp3-disabled'));
  });

  test('disabled false value to switch', async function (assert) {
    await render(hbs`
      <Switch @disabled={{false}}/>
    `);
    assert.notOk(document.querySelector('.bp3-disabled'));
  });

  test('disabled string value to switch', async function (assert) {
    await render(hbs`
      <Switch @disabled="hii"/>
    `);
    assert.ok(document.getElementsByClassName('bp3-disabled'));
  });

  test('disabled number value to switch', async function (assert) {
    await render(hbs`
      <Switch @disabled={{123}}/>
    `);
    assert.ok(document.getElementsByClassName('bp3-disabled'));
  });

  test('set inline true to switch ', async function (assert) {
    await render(hbs`
      <Switch @inline=true/>
    `);
    assert.ok(document.getElementsByClassName('bp3-inline'));
  });

  test('set inline false to switch ', async function (assert) {
    await render(hbs`
      <Switch @inline={{false}}/>
    `);
    assert.notOk(document.querySelector('.bp3-inline'));
  });

  test('set inline string to switch ', async function (assert) {
    await render(hbs`
      <Switch @inline="hii"/>
    `);
    assert.ok(document.getElementsByClassName('bp3-inline'));
  });

  test('set inline number to switch ', async function (assert) {
    await render(hbs`
      <Switch @inline={{123}}/>
    `);
    assert.ok(document.getElementsByClassName('bp3-inline'));
  });

  test('set innerLabel set off to unchecked switch ', async function (assert) {
    await render(hbs`
      <Switch @innerLabel="off"/>
    `);
    assert.equal((document.querySelector('.bp3-switch-inner-text') as any).textContent.trim(), 'off');
  });

  test('set innerLabel set null to unchecked switch ', async function (assert) {
    await render(hbs`
      <Switch @innerLabel=""/>
    `);
    assert.notOk(document.querySelector('.bp3-switch-inner-text'));
  });

  test('set innerLabelChecked set on to unchecked switch ', async function (assert) {
    await render(hbs`
      <Switch @innerLabelChecked="on"/>
    `);
    assert.equal((document.querySelector('.bp3-switch-inner-text') as any).textContent.trim(), 'on');
  });

  test('set innerLabelChecked set null to unchecked switch ', async function (assert) {
    await render(hbs`
      <Switch @innerLabelChecked=""/>
    `);
    assert.notOk(document.querySelector('.bp3-switch-inner-text'));
  });

  test('labelElement with string value to switch', async function (assert) {
    await render(hbs`
      <Switch @labelElement="hellow"/>
    `);
    assert.equal((this.element.textContent as any).trim(), 'hellow');
  });
  test('labelElement with htmlElement value to switch', async function (assert) {
    await render(hbs`
      <Switch @labelElement="<div>hellow<div>"/>
    `);
    assert.equal((this.element.textContent as any).trim(), 'hellow');
  });


  test('large prop set true value to switch  ', async function (assert) {
    await render(hbs`
      <Switch @large=true/>
    `);
    assert.ok(document.getElementsByClassName('bp3-large'));
  });

  test('large prop set false value to switch  ', async function (assert) {
    await render(hbs`
      <Switch @large={{false}}/>
    `);
    assert.notOk(document.querySelector('.bp3-large'));
  });

  test('large prop set string value to switch  ', async function (assert) {
    await render(hbs`
      <Switch @large="hello"/>
    `);
    assert.ok(document.getElementsByClassName('bp3-large'));
  });

  test('large prop set number value to switch  ', async function (assert) {
    await render(hbs`
      <Switch @large={{123}}/>
    `);
    assert.ok(document.getElementsByClassName('bp3-large'));
  });

  test('onchange function for switch ', async function (assert) {
    var that = this;
    this.set('onChange', function (e: any, value: boolean) {
      e = e;
      that.set('value', value);
    })

    await render(hbs`
      <Switch @onChange={{action onChange}}/>
    `);
    await click('input');
    assert.equal(this.get('value'), true);
  });

});
