import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { click } from '@ember/test-helpers';

module('Integration | Component | button', function (hooks) {
  setupRenderingTest(hooks);
  test('button is rendering', async function (assert) {
    await render(hbs`<Button >hello</Button>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-button-text').length, 1);
  });
  test('svg margin-right for null text', async function (assert) {
    await render(hbs`<Button @icon='lock' ></Button>`);
    let element: any = this.element;
    assert.equal(element.querySelector('.bp3-icon').style.marginRight, "0px");
  });
  test('svg margin-right for icon only', async function (assert) {
    await render(hbs`<Button @icon='lock' @rightIcon="lock" ></Button>`);
    let element: any = this.element;
    assert.equal(element.querySelector('.bp3-icon').style.marginRight, "0px");
  });
  test('svg margin-left for left icon ', async function (assert) {
    await render(hbs`<Button @rightIcon='lock'  ></Button>`);
    let element: any = this.element;
    assert.equal(element.querySelector('.bp3-icon').style.marginLeft, "-7px");
  });
  test('large button svg margin-left for left icon ', async function (assert) {
    await render(hbs`<Button @rightIcon='lock' @large=true  ></Button>`);
    let element: any = this.element;
    assert.equal(element.querySelector('.bp3-icon').style.marginLeft, "-10px");
  });
  test('disabled is true', async function (assert) {
    await render(hbs`<Button @disabled={{true}} />`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-disabled').length, 1, "occurred 1 input disable");
  });
  test('disabled is false', async function (assert) {
    await render(hbs`<Button @disabled={{false}} />`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-disabled').length, 0);
  });
  test('disabled is undefined', async function (assert) {
    await render(hbs`<Button />`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-disabled').length, 0);
  });

  test(' active is true', async function (assert) {
    await render(hbs`<Button @active={{true}} />`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-active').length, 1);
  });
  test(' active is false', async function (assert) {
    await render(hbs`<Button @active={{false}} />`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-active').length, 0);
  });
  test(' active is undefined', async function (assert) {
    await render(hbs`<Button />`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-active').length, 0);
  });

  test('intent primary is true', async function (assert) {
    await render(hbs`<Button @intent="primary"/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-intent-primary').length, 1);
  });
  test('if input primary is false', async function (assert) {
    await render(hbs`<Button @intent="none"/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-intent-primary').length, 0);
  });
  test(' primary is undefined', async function (assert) {
    await render(hbs`<Button/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-intent-primary').length, 0);
  });

  test('if input success is true', async function (assert) {
    await render(hbs`<Button @intent="success"/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-intent-success').length, 1);
  });
  test(' success is false', async function (assert) {
    await render(hbs`<Button @intent=""/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-intent-success').length, 0);
  });
  test(' success is undefined', async function (assert) {
    await render(hbs`<Button />`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-intent-success').length, 0);
  });

  test('if input warning is true', async function (assert) {
    await render(hbs`<Button @intent="warning"/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-intent-warning').length, 1);
  });
  test(' warning is false', async function (assert) {
    await render(hbs`<Button @intent="" />`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-intent-warning').length, 0);
  });
  test(' warning is undefined', async function (assert) {
    await render(hbs`<Button />`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-intent-warning').length, 0);
  });

  test(' danger is true', async function (assert) {
    await render(hbs`<Button @intent="danger"/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-intent-danger').length, 1);
  });
  test(' danger is false', async function (assert) {
    await render(hbs`<Button @intent=""/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-intent-danger').length, 0);
  });
  test(' danger is undefined', async function (assert) {
    await render(hbs`<Button />`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-intent-danger').length, 0);
  });

  test(' minimal is true', async function (assert) {
    await render(hbs`<Button @minimal={{true}}/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-minimal').length, 1);
  });
  test(' minimal is false', async function (assert) {
    await render(hbs`<Button @minimal={{false}}/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-minimal').length, 0);
  });
  test(' minimal is undefined', async function (assert) {
    await render(hbs`<Button />`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-minimal').length, 0);
  });

  test(' large is true', async function (assert) {
    await render(hbs`<Button @large={{true}}/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-large').length, 1);
  });
  test(' large is false', async function (assert) {
    await render(hbs`<Button @large={{false}}/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-large').length, 0);
  });
  test(' large is undefined', async function (assert) {
    await render(hbs`<Button />`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-large').length, 0);
  });

  test(' small is true', async function (assert) {
    await render(hbs`<Button @small={{true}}/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-small').length, 1);
  });
  test(' small is false', async function (assert) {
    await render(hbs`<Button @small={{false}}/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-small').length, 0);
  });
  test(' small is undefined', async function (assert) {
    await render(hbs`<Button />`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-small').length, 0);
  });

  test(' small is true', async function (assert) {
    await render(hbs`<Button @small={{true}}/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-small').length, 1);
  });
  test(' small is false', async function (assert) {
    await render(hbs`<Button @small={{false}}/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-small').length, 0);
  });
  test(' small is undefined', async function (assert) {
    await render(hbs`<Button />`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-small').length, 0);
  });

  test(' fill is true', async function (assert) {
    await render(hbs`<Button @fill={{true}}/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-fill').length, 1);
  });
  test(' fill is false', async function (assert) {
    await render(hbs`<Button @fill={{false}}/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-fill').length, 0);
  });
  test(' fill is undefined', async function (assert) {
    await render(hbs`<Button />`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-fill').length, 0);
  });

  // test(' border is true', async function (assert) {
  //   await render(hbs`<Button @border={{true}}/>`);
  //   let element = this.element;
  //   assert.equal(element.querySelectorAll('.bp3-border').length, 1);
  // });
  test(' border is false', async function (assert) {
    await render(hbs`<Button @border={{false}}/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-border').length, 0);
  });
  test(' border is undefined', async function (assert) {
    await render(hbs`<Button />`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-border').length, 0);
  });


  test('type', async function (assert) {
    await render(hbs`<Button @type='submit'/>`);
    let element: any = this.element;
    assert.equal(element.querySelector('button').type, "submit");
  });
  test('default type ', async function (assert) {
    await render(hbs`<Button />`);
    let element: any = this.element;
    assert.equal(element.querySelector('button').type, "submit");
  });
  test('set button type as button ', async function (assert) {
    await render(hbs`<Button @type="button"/>`);
    let element: any = this.element;
    assert.equal(element.querySelector('button').type, "button");
  });
  test('set button type as reset ', async function (assert) {
    await render(hbs`<Button @type="reset"/>`);
    let element: any = this.element;
    assert.equal(element.querySelector('button').type, "reset");
  });
  test('inline style ', async function (assert) {
    await render(hbs`<Button @style='color:red' />`);
    let element: any = this.element;
    assert.equal(element.querySelector('button').style.color, "red");
  });

  test('button click ', async function (assert) {
    this.set('result', '');
    let that = this;
    this.set('buttonAction', function (a: any, b: any) {
      that.set('result', a + ' ' + b);
    });
    await render(hbs`<Button onClick={{action  buttonAction 'Hello' 'World'  }} />  <div id="result">{{ this.result }}</div>`);
    await click('button');
    var findResult: any = await document.getElementById('result');
    assert.equal(findResult.textContent.trim(), 'Hello World');
  });
  test('prevent action when  button disabled  ', async function (assert) {
    this.set('result', '');
    let that = this;
    this.set('buttonAction', function (a: any, b: any) {
      that.set('result', a + ' ' + b);
    });
    await render(hbs`<Button @onClick={{action  buttonAction 'Hello' 'World' }} @disabled={{true}}/>  <div id="result">{{ result }}</div>`);
    await click('button');
    var findResult: any = await document.getElementById('result');
    assert.equal(findResult.innerText, '');
  });
});
