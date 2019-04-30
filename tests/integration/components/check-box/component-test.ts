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

  test('Check alignIndicator with left ', async function (assert) {
    await render(hbs`
      <CheckBox @alignIndicator="left"/>
    `);
    assert.ok(document.getElementsByClassName('bp3-align-left'));
  });

  test('Check alignIndicator with right ', async function (assert) {
    await render(hbs`
      <CheckBox @alignIndicator="right"/>
    `);
    assert.ok(document.getElementsByClassName('bp3-align-right'));
  });

  test('Check alignIndicator with center ', async function (assert) {
    await render(hbs`
      <CheckBox @alignIndicator="center"/>
    `);
    assert.ok(document.getElementsByClassName('bp3-align-center'));
  });

  test('Check alignIndicator with null data ', async function (assert) {
    await render(hbs`
      <CheckBox @alignIndicator=""/>
    `);
    assert.notOk(document.querySelector('.bp3-align-left'));
    assert.notOk(document.querySelector('.bp3-align-center'));
    assert.notOk(document.querySelector('.bp3-align-right'));
  });

  test('Check alignIndicator with number data ', async function (assert) {
    await render(hbs`
      <CheckBox @alignIndicator={{123}}/>
    `);
    assert.notOk(document.querySelector('.bp3-align-left'));
    assert.notOk(document.querySelector('.bp3-align-center'));
    assert.notOk(document.querySelector('.bp3-align-right'));
  });

  test('CheckBox checked true value is rendering ', async function (assert) {
    await render(hbs`
      <CheckBox @checked=true/>
    `);
    assert.equal((this.element.querySelector('input') as any).checked, true);
  });
  test('checked with false value is rendering ', async function (assert) {
    await render(hbs`
      <CheckBox @checked={{false}}/>
    `);
    assert.equal((this.element.querySelector('input') as any).checked, false);
  });

  test('checked with string value to render CheckBox ', async function (assert) {
    await render(hbs`
      <CheckBox @checked="hii"/>
    `);
    assert.equal((this.element.querySelector('input') as any).checked, true);
  });

  test('checked with number value to render CheckBox ', async function (assert) {
    await render(hbs`
      <CheckBox @checked={{123}}/>
    `);
    assert.equal((this.element.querySelector('input') as any).checked, true);
  });

  test('checked with null value to  CheckBox ', async function (assert) {
    await render(hbs`
      <CheckBox @checked=""/>
    `);
    assert.equal((this.element.querySelector('input') as any).checked, false);
  });

  test('yield value to check box', async function (assert) {
    await render(hbs`
      <CheckBox >Check Box</CheckBox>
    `);
    assert.equal((this.element.textContent as any).trim(), 'Check Box');
  });

  test('yield value and label value to check box', async function (assert) {
    await render(hbs`
      <CheckBox @label="Hii" >Check Box</CheckBox>
    `);
    assert.equal((this.element.textContent as any).trim(), 'Hii\nCheck Box');
  });

  test('label value to Check Box', async function (assert) {
    await render(hbs`
      <CheckBox @label="hellow"/>
    `);

    assert.equal((this.element.textContent as any).trim(), 'hellow');
  });

  test('label number value to Check Box', async function (assert) {
    await render(hbs`
      <CheckBox @label={{123}}/>
    `);

    assert.equal((this.element.textContent as any).trim(), 123);
  });

  test('label do not render HtmlElement', async function (assert) {
    await render(hbs`
      <CheckBox @label="<div>hii</div>"/>
    `);

    assert.equal((this.element.textContent as any).trim(), "<div>hii</div>");
  });

  test('custom class is working on CheckBox', async function (assert) {
    await render(hbs`
      <CheckBox @class="hello"/>
    `);
    assert.ok(document.getElementsByName('hello'));
  });

  test('check box defaultChecked is activate state ', async function (assert) {
    await render(hbs`
      <CheckBox @defaultChecked=true/>
    `);
    assert.equal((this.element.querySelector('input') as any).checked, true);
  });

  test('check box defaultChecked is inactivate state ', async function (assert) {
    await render(hbs`
      <CheckBox @defaultChecked={{false}}/>
    `);
    assert.equal((this.element.querySelector('input') as any).checked, false);
  });

  test('check box defaultChecked with string value ', async function (assert) {
    await render(hbs`
      <CheckBox @defaultChecked="hii"/>
    `);
    assert.equal((this.element.querySelector('input') as any).checked, true);
  });

  test('check box defaultChecked with null value ', async function (assert) {
    await render(hbs`
      <CheckBox @defaultChecked=""/>
    `);
    assert.equal((this.element.querySelector('input') as any).checked, false);
  });

  test('check box defaultChecked with number value ', async function (assert) {
    await render(hbs`
      <CheckBox @defaultChecked={{123}}/>
    `);
    assert.equal((this.element.querySelector('input') as any).checked, true);
  });

  test('defaultIndeterminate with true value to check box', async function (assert) {
    await render(hbs`
      <CheckBox @defaultIndeterminate={{true}}/>
    `);
    assert.equal((this.element.querySelector('input') as any).indeterminate, true);
  });

  test('defaultIndeterminate with false value to check box', async function (assert) {
    await render(hbs`
      <CheckBox @defaultIndeterminate={{false}}/>
    `);
    assert.equal((this.element.querySelector('input') as any).indeterminate, false);
  });

  test('defaultIndeterminate with string value to check box', async function (assert) {
    await render(hbs`
      <CheckBox @defaultIndeterminate="hii"/>
    `);
    assert.equal((this.element.querySelector('input') as any).indeterminate, true);
  });

  test('defaultIndeterminate with number value to check box', async function (assert) {
    await render(hbs`
      <CheckBox @defaultIndeterminate={{123}}/>
    `);
    assert.equal((this.element.querySelector('input') as any).indeterminate, true);
  });

  test('defaultIndeterminate with null value to check box', async function (assert) {
    await render(hbs`
      <CheckBox @defaultIndeterminate=""/>
    `);
    assert.equal((this.element.querySelector('input') as any).indeterminate, false);
  });

  test('disabled true value to check box', async function (assert) {
    await render(hbs`
      <CheckBox @disabled=true/>
    `);
    assert.ok(document.getElementsByClassName('bp3-disabled'));
  });

  test('disabled false value to check box', async function (assert) {
    await render(hbs`
      <CheckBox @disabled={{false}}/>
    `);
    assert.notOk(document.querySelector('.bp3-disabled'));
  });

  test('disabled string value to check box', async function (assert) {
    await render(hbs`
      <CheckBox @disabled="hii"/>
    `);
    assert.ok(document.getElementsByClassName('bp3-disabled'));
  });

  test('disabled number value to check box', async function (assert) {
    await render(hbs`
      <CheckBox @disabled={{123}}/>
    `);
    assert.ok(document.getElementsByClassName('bp3-disabled'));
  });


  test('indeterminate true value to check box ', async function (assert) {
    await render(hbs`
      <CheckBox @indeterminate={{true}}/>
    `);
    assert.equal((this.element.querySelector('input') as any).indeterminate, true);
  });

  test('indeterminate false value to check box ', async function (assert) {
    await render(hbs`
      <CheckBox @indeterminate={{false}}/>
    `);
    assert.equal((this.element.querySelector('input') as any).indeterminate, false);
  });

  test('indeterminate string value to check box ', async function (assert) {
    await render(hbs`
      <CheckBox @indeterminate="string"/>
    `);
    assert.equal((this.element.querySelector('input') as any).indeterminate, true);
  });


  test('indeterminate number value to check box ', async function (assert) {
    await render(hbs`
      <CheckBox @indeterminate={{123}}/>
    `);
    assert.equal((this.element.querySelector('input') as any).indeterminate, true);
  });


  test('set inline true to check box ', async function (assert) {
    await render(hbs`
      <CheckBox @inline=true/>
    `);
    assert.ok(document.getElementsByClassName('bp3-inline'));
  });

  test('set inline false to check box ', async function (assert) {
    await render(hbs`
      <CheckBox @inline={{false}}/>
    `);
    assert.notOk(document.querySelector('.bp3-inline'));
  });

  test('set inline string to check box ', async function (assert) {
    await render(hbs`
      <CheckBox @inline="hii"/>
    `);
    assert.ok(document.getElementsByClassName('bp3-inline'));
  });

  test('set inline number to check box ', async function (assert) {
    await render(hbs`
      <CheckBox @inline={{123}}/>
    `);
    assert.ok(document.getElementsByClassName('bp3-inline'));
  });

  test('labelElement with string value to Check Box', async function (assert) {
    await render(hbs`
      <CheckBox @labelElement="hellow"/>
    `);
    assert.equal((this.element.textContent as any).trim(), 'hellow');
  });
  test('labelElement with htmlElement value to Check Box', async function (assert) {
    await render(hbs`
      <CheckBox @labelElement="<div>hellow<div>"/>
    `);
    assert.equal((this.element.textContent as any).trim(), 'hellow');
  });

  test('first priority for labelElement when compared with label', async function (assert) {
    await render(hbs`
      <CheckBox @label="hello" @labelElement="<div>hellow<div>"/>
    `);
    assert.equal((this.element.textContent as any).trim(), 'hellow');
  });


  test('large prop set true value to check box  ', async function (assert) {
    await render(hbs`
      <CheckBox @large=true/>
    `);
    assert.ok(document.getElementsByClassName('bp3-large'));
  });

  test('large prop set false value to check box  ', async function (assert) {
    await render(hbs`
      <CheckBox @large={{false}}/>
    `);
    assert.notOk(document.querySelector('.bp3-large'));
  });

  test('large prop set string value to check box  ', async function (assert) {
    await render(hbs`
      <CheckBox @large="hello"/>
    `);
    assert.ok(document.getElementsByClassName('bp3-large'));
  });

  test('large prop set number value to check box  ', async function (assert) {
    await render(hbs`
      <CheckBox @large={{123}}/>
    `);
    assert.ok(document.getElementsByClassName('bp3-large'));
  });

  test('onchange function for check box ', async function (assert) {
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

  test('indeterminate prop is first priority when check prop occurred', async function (assert) {
    await render(hbs`
      <CheckBox @indeterminate=true @checked=true/>
    `);
    assert.equal((this.element.querySelector('input') as any).checked, false);
    assert.equal((this.element.querySelector('input') as any).indeterminate, true);

  });

  test('defaultIndeterminate first priority when check prop occurred', async function (assert) {
    await render(hbs`
      <CheckBox @defaultIndeterminate=true @checked=true/>
    `);
    assert.equal((this.element.querySelector('input') as any).checked, false);
    assert.equal((this.element.querySelector('input') as any).indeterminate, true);

  });

});
