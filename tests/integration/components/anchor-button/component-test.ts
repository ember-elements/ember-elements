import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { click } from '@ember/test-helpers';

module('Integration | Component | anchor-button', function (hooks) {
  setupRenderingTest(hooks);
  test('<a> is rendering', async function (assert) {
    await render(hbs`<AnchorButton >hello</AnchorButton>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('a').length, 1);
  });
  test('alignText is left ', async function (assert) {
    await render(hbs`<AnchorButton @alignText="left" >hello</AnchorButton>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-align-left').length, 1);
  });
  test('alignText is right ', async function (assert) {
    await render(hbs`<AnchorButton @alignText="right" >hello</AnchorButton>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-align-right').length, 1);
  });
  test('<a> href attribute not undefined ', async function (assert) {
    await render(hbs`<AnchorButton @href="#" >hello</AnchorButton>`);
    let element = this.element;
    assert.ok(element.querySelector('[href="#"]'));
  });
  test('<a> href attribute default undefined ', async function (assert) {
    await render(hbs`<AnchorButton  >hello</AnchorButton>`);
    let element = this.element;
    assert.notOk((element.querySelector('[href=""]') as any));
  });
  test('<a> role attribute is button ', async function (assert) {
    await render(hbs`<AnchorButton  >hello</AnchorButton>`);
    let element = this.element;
    assert.ok((element.querySelector('[role="button"]') as any));
  });
  test('<a> tabindex attribute default value is 0', async function (assert) {
    await render(hbs`<AnchorButton  >hello</AnchorButton>`);
    let element = this.element;
    assert.ok((element.querySelector('[tabindex="0"]') as any));
  });
  test('disabled with tabindex', async function (assert) {
    await render(hbs`<AnchorButton @disabled=true  >hello</AnchorButton>`);
    let element = this.element;
    assert.ok((element.querySelector('[tabindex="-1"]') as any));
  });
  test('button is rendering', async function (assert) {
    await render(hbs`<AnchorButton >hello</AnchorButton>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-button-text').length, 1);
  });
  test('svg margin-right for null text', async function (assert) {
    await render(hbs`<AnchorButton @icon='lock' ></AnchorButton>`);
    let element: any = this.element;
    assert.equal(element.querySelector('.bp3-icon').style.marginRight, "0px");
  });
  test('svg margin-right for icon only', async function (assert) {
    await render(hbs`<AnchorButton @icon='lock' @rightIcon="lock" ></AnchorButton>`);
    let element: any = this.element;
    assert.equal(element.querySelector('.bp3-icon').style.marginRight, "0px");
  });
  test('svg margin-left for left icon ', async function (assert) {
    await render(hbs`<AnchorButton @rightIcon='lock'  ></AnchorButton>`);
    let element: any = this.element;
    assert.equal(element.querySelector('.bp3-icon').style.marginLeft, "-7px");
  });
  test('large button svg margin-left for left icon ', async function (assert) {
    await render(hbs`<AnchorButton @rightIcon='lock' @large=true  ></AnchorButton>`);
    let element: any = this.element;
    assert.equal(element.querySelector('.bp3-icon').style.marginLeft, "-10px");
  });
  test('disabled is true', async function (assert) {
    await render(hbs`<AnchorButton @disabled={{true}} />`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-disabled').length, 1, "occurred 1 input disable");
  });
  test('disabled is false', async function (assert) {
    await render(hbs`<AnchorButton @disabled={{false}} />`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-disabled').length, 0);
  });
  test('disabled is undefined', async function (assert) {
    await render(hbs`<AnchorButton />`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-disabled').length, 0);
  });

  test(' active is true', async function (assert) {
    await render(hbs`<AnchorButton @active={{true}} />`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-active').length, 1);
  });
  test(' active is false', async function (assert) {
    await render(hbs`<AnchorButton @active={{false}} />`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-active').length, 0);
  });
  test(' active is undefined', async function (assert) {
    await render(hbs`<AnchorButton />`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-active').length, 0);
  });

  test('intent primary is true', async function (assert) {
    await render(hbs`<AnchorButton @intent="primary"/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-intent-primary').length, 1);
  });
  test('if input primary is false', async function (assert) {
    await render(hbs`<AnchorButton @intent="none"/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-intent-primary').length, 0);
  });
  test(' primary is undefined', async function (assert) {
    await render(hbs`<AnchorButton/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-intent-primary').length, 0);
  });

  test('if input success is true', async function (assert) {
    await render(hbs`<AnchorButton @intent="success"/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-intent-success').length, 1);
  });
  test(' success is false', async function (assert) {
    await render(hbs`<AnchorButton @intent=""/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-intent-success').length, 0);
  });
  test(' success is undefined', async function (assert) {
    await render(hbs`<AnchorButton />`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-intent-success').length, 0);
  });

  test('if input warning is true', async function (assert) {
    await render(hbs`<AnchorButton @intent="warning"/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-intent-warning').length, 1);
  });
  test(' warning is false', async function (assert) {
    await render(hbs`<AnchorButton @intent="" />`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-intent-warning').length, 0);
  });
  test(' warning is undefined', async function (assert) {
    await render(hbs`<AnchorButton />`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-intent-warning').length, 0);
  });

  test(' danger is true', async function (assert) {
    await render(hbs`<AnchorButton @intent="danger"/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-intent-danger').length, 1);
  });
  test(' danger is false', async function (assert) {
    await render(hbs`<AnchorButton @intent=""/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-intent-danger').length, 0);
  });
  test(' danger is undefined', async function (assert) {
    await render(hbs`<AnchorButton />`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-intent-danger').length, 0);
  });

  test(' minimal is true', async function (assert) {
    await render(hbs`<AnchorButton @minimal={{true}}/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-minimal').length, 1);
  });
  test(' minimal is false', async function (assert) {
    await render(hbs`<AnchorButton @minimal={{false}}/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-minimal').length, 0);
  });
  test(' minimal is undefined', async function (assert) {
    await render(hbs`<AnchorButton />`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-minimal').length, 0);
  });

  test(' large is true', async function (assert) {
    await render(hbs`<AnchorButton @large={{true}}/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-large').length, 1);
  });
  test(' large is false', async function (assert) {
    await render(hbs`<AnchorButton @large={{false}}/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-large').length, 0);
  });
  test(' large is undefined', async function (assert) {
    await render(hbs`<AnchorButton />`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-large').length, 0);
  });

  test(' small is true', async function (assert) {
    await render(hbs`<AnchorButton @small={{true}}/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-small').length, 1);
  });
  test(' small is false', async function (assert) {
    await render(hbs`<AnchorButton @small={{false}}/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-small').length, 0);
  });
  test(' small is undefined', async function (assert) {
    await render(hbs`<AnchorButton />`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-small').length, 0);
  });

  test(' small is true', async function (assert) {
    await render(hbs`<AnchorButton @small={{true}}/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-small').length, 1);
  });
  test(' small is false', async function (assert) {
    await render(hbs`<AnchorButton @small={{false}}/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-small').length, 0);
  });
  test(' small is undefined', async function (assert) {
    await render(hbs`<AnchorButton />`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-small').length, 0);
  });

  test(' fill is true', async function (assert) {
    await render(hbs`<AnchorButton @fill={{true}}/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-fill').length, 1);
  });
  test(' fill is false', async function (assert) {
    await render(hbs`<AnchorButton @fill={{false}}/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-fill').length, 0);
  });
  test(' fill is undefined', async function (assert) {
    await render(hbs`<AnchorButton />`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-fill').length, 0);
  });

  // test(' border is true', async function (assert) {
  //   await render(hbs`<AnchorButton @border={{true}}/>`);
  //   let element = this.element;
  //   assert.equal(element.querySelectorAll('.bp3-border').length, 1);
  // });
  test(' border is false', async function (assert) {
    await render(hbs`<AnchorButton @border={{false}}/>`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-border').length, 0);
  });
  test(' border is undefined', async function (assert) {
    await render(hbs`<AnchorButton />`);
    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-border').length, 0);
  });


  test('type', async function (assert) {
    await render(hbs`<AnchorButton @type='submit'/>`);
    let element: any = this.element;
    assert.equal(element.querySelector('a').type, "submit");
  });
  test('default type ', async function (assert) {
    await render(hbs`<AnchorButton />`);
    let element: any = this.element;
    assert.equal(element.querySelector('a').type, "");
  });
  test('set button type as button ', async function (assert) {
    await render(hbs`<AnchorButton @type="button"/>`);
    let element: any = this.element;
    assert.equal(element.querySelector('a').type, "button");
  });
  test('set button type as reset ', async function (assert) {
    await render(hbs`<AnchorButton @type="reset"/>`);
    let element: any = this.element;
    assert.equal(element.querySelector('a').type, "reset");
  });
  test('inline style ', async function (assert) {
    await render(hbs`<AnchorButton @style='color:red' />`);
    let element: any = this.element;
    assert.equal(element.querySelector('a').style.color, "red");
  });

  test('button click ', async function (assert) {
    this.set('result', '');
    let that = this;
    this.set('buttonAction', function (a: any, b: any) {
      that.set('result', a + ' ' + b);
    });
    await render(hbs`<AnchorButton onClick={{action  buttonAction 'Hello' 'World'  }} />  <div id="result">{{ this.result }}</div>`);
    await click('a');
    var findResult: any = await document.getElementById('result');
    assert.equal(findResult.textContent.trim(), 'Hello World');
  });
  test('prevent action when  button disabled  ', async function (assert) {
    this.set('result', '');
    let that = this;
    this.set('buttonAction', function (a: any, b: any) {
      that.set('result', a + ' ' + b);
    });
    await render(hbs`<AnchorButton @onClick={{action  buttonAction 'Hello' 'World' }} @disabled={{true}}/>  <div id="result">{{ result }}</div>`);
    await click('a');
    var findResult: any = await document.getElementById('result');
    assert.equal(findResult.innerText, '');
  });
});
