import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, triggerKeyEvent, click, doubleClick } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | input-group', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });


    // Template block usage:
    await render(hbs`
      <InputGroup @value="hellow"/>
    `);

    assert.equal((this.element as any).querySelector('input').value, 'hellow');
  });
  test('disabled=true', async function (assert) {
    await render(hbs`
      <InputGroup @disabled=true />
    `);
    assert.ok((this.element as any).querySelector('.bp3-disabled'));
  });
  test('intent=primary', async function (assert) {
    await render(hbs`
      <InputGroup @intent='primary' />
    `);
    assert.ok((this.element as any).querySelector('.bp3-intent-primary'));
  });
  test('intent=danger', async function (assert) {
    await render(hbs`
      <InputGroup @intent='danger' />
    `);
    assert.ok((this.element as any).querySelector('.bp3-intent-danger'));
  });
  test('intent=none', async function (assert) {
    await render(hbs`
      <InputGroup @intent='none' />
    `);
    assert.notOk((this.element as any).querySelector('.bp3-intent-none'));
  });
  test('intent=success', async function (assert) {
    await render(hbs`
      <InputGroup @intent='success' />
    `);
    assert.ok((this.element as any).querySelector('.bp3-intent-success'));
  });
  test('intent=warning', async function (assert) {
    await render(hbs`
      <InputGroup @intent='warning' />
    `);
    assert.ok((this.element as any).querySelector('.bp3-intent-warning'));
  });
  test('large=true', async function (assert) {
    await render(hbs`
      <InputGroup @large='true' />
    `);
    assert.ok((this.element as any).querySelector('.bp3-large'));
  });
  test('placeholder', async function (assert) {
    await render(hbs`
      <InputGroup @placeholder='placeholder' />
    `);
    assert.ok((this.element as any).querySelector('input').placeholder);
  });
  test('default placeholder null', async function (assert) {
    await render(hbs`
      <InputGroup  />
    `);
    assert.notOk((this.element as any).querySelector('input').placeholder);
  });
  test('leftIcon', async function (assert) {
    await render(hbs`
      <InputGroup @leftIcon='lock' />
    `);
    assert.ok((this.element as any).querySelector('svg'));
  });

  test('rightIcon', async function (assert) {
    await render(hbs`
      <InputGroup @rightIcon='lock' />
    `);
    assert.ok((this.element as any).querySelector('svg'));
  });
  test('not render rightIcon ', async function (assert) {
    await render(hbs`
      <InputGroup @rightIcon='lock' >
       <ToolTip @content="ToolTip">
       </ToolTip>
      </InputGroup>
    `);
    assert.notOk((this.element as any).querySelector('svg'));
  });
  test('yield for rightElement', async function (assert) {
    await render(hbs`
      <InputGroup @placeholder='placeholder' >
       <ToolTip @content="ToolTip">
         <Button @icon="lock" @intent="warning" @minimal="true" />
       </ToolTip>
      </InputGroup>
    `);
    assert.ok((this.element as any).querySelector('.bp3-input-action'));
  });
  test('round=true', async function (assert) {
    await render(hbs`
      <InputGroup @round='true' />
    `);
    assert.ok((this.element as any).querySelector('.bp3-round'));
  });
  test('small=true', async function (assert) {
    await render(hbs`
      <InputGroup @small='true' />
    `);
    assert.ok((this.element as any).querySelector('.bp3-small'));
  });
  test('value', async function (assert) {
    await render(hbs`
      <InputGroup @value='hellow' />
    `);
    assert.equal((this.element as any).querySelector('input').value, 'hellow');
  });
  test('type', async function (assert) {
    await render(hbs`
      <InputGroup @type='number' />
    `);
    assert.equal((this.element as any).querySelector('input').type, 'number');
  });
  test('keyUp event', async function (assert) {
    var that = this;
    this.set('keyUp', function (value: string) {
      that.set('value', value);
    });
    await render(hbs`
      <InputGroup @value='hellow' @onkeyUp={{action keyUp}} />
    `);

    await triggerKeyEvent('input', 'keyup', "Enter")
    assert.equal((this.element as any).querySelector('input').value, this.get('value'));
  });
  test('click event', async function (assert) {
    var that = this;
    this.set('click', function (value: string) {
      that.set('value', value);
    });
    await render(hbs`
      <InputGroup @value='hellow' @onClick={{action click}} />
    `);
    await click('input');
    assert.equal((this.element as any).querySelector('input').value, this.get('value'));
  });
  test('doubleClick event', async function (assert) {
    var that = this;
    this.set('doubleClick', function (value: string) {
      that.set('value', value);
    });
    await render(hbs`
      <InputGroup @value='hellow' @onDoubleClick={{action doubleClick}} />
    `);
    await doubleClick('input');
    // await triggerKeyEvent('input', 'click', "Enter")
    assert.equal((this.element as any).querySelector('input').value, this.get('value'));
  });
  test('keyDown event', async function (assert) {
    var that = this;
    this.set('keyDown', function (value: string) {
      that.set('value', value);
    });
    await render(hbs`
      <InputGroup @value='hellow' @onkeyDown={{action keyDown}} />
    `);
    await triggerKeyEvent('input', 'keydown', "Enter")
    assert.equal((this.element as any).querySelector('input').value, this.get('value'));
  });

});
