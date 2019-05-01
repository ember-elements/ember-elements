import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { click } from '@ember/test-helpers';

module('Integration | Component | radio-group', function (hooks) {
  setupRenderingTest(hooks);
  test('it renders', async function (assert) {

    await render(hbs`{{radio-group}}`);

    assert.equal((this.element.textContent as any).trim(), '');

    // Template block usage:
    await render(hbs`
      {{#radio-group}}
        template block text
      {{/radio-group}}
    `);

    assert.equal((this.element.textContent as any).trim(), 'template block text');
  });
  test('Radio button is rendering ', async function (assert) {
    // Template block usage:
    await render(hbs`
     <RadioGroup  as |T| >
       <T.Radio  @label="Soup" @value="one"    />
       <T.Radio  @label="Salad" @value="two"  />
       <T.Radio  @label="Sandwich" @value="three" />
     </RadioGroup>
    `);
    assert.equal((this.element.querySelectorAll('input') as any).length, 3);
  });
  test('alignIndicator default to left ', async function (assert) {
    // Template block usage:
    await render(hbs`
     <RadioGroup  as |T| >
       <T.Radio  @label="Soup" @value="one"    />
       <T.Radio  @label="Salad" @value="two"  />
       <T.Radio  @label="Sandwich" @value="three" />
     </RadioGroup>
    `);
    assert.equal((this.element.querySelectorAll('.bp3-align-left') as any).length, 3);
  });
  test('alignIndicator set to right ', async function (assert) {
    // Template block usage:
    await render(hbs`
     <RadioGroup  as |T| >
       <T.Radio  @label="Soup" @value="one" @alignIndicator="right"    />
       <T.Radio  @label="Salad" @value="two" @alignIndicator="right"  />
       <T.Radio  @label="Sandwich" @value="three" @alignIndicator="right" />
     </RadioGroup>
    `);
    assert.equal((this.element.querySelectorAll('.bp3-align-right') as any).length, 3);
  });
  test(' checked radio button ', async function (assert) {
    // Template block usage:
    await render(hbs`
     <RadioGroup  as |T| >
       <T.Radio  @label="Soup" @value="one"  @checked=true  />
       <T.Radio  @label="Salad" @value="two"  />
       <T.Radio  @label="Sandwich" @value="three" />
     </RadioGroup>
    `);
    assert.equal((this.element.querySelector('input') as any).checked, true);
  });
  test(' checked radio button ', async function (assert) {
    // Template block usage:
    await render(hbs`
     <RadioGroup  as |T| >
       <T.Radio  @label="Soup" @value="one"  @checked=true  />
       <T.Radio  @label="Salad" @value="two"  />
       <T.Radio  @label="Sandwich" @value="three" />
     </RadioGroup>
    `);
    assert.equal((this.element.querySelector('input') as any).checked, true);
  });
  test(' unchecked radio button ', async function (assert) {
    // Template block usage:
    await render(hbs`
     <RadioGroup  as |T| >
       <T.Radio  @label="Soup" @value="one"  @checked={{false}}  />
       <T.Radio  @label="Salad" @value="two"  />
       <T.Radio  @label="Sandwich" @value="three" />
     </RadioGroup>
    `);
    assert.equal((this.element.querySelector('input') as any).checked, false);
  });
  test(' custom class name to radio radio button ', async function (assert) {
    // Template block usage:
    await render(hbs`
     <RadioGroup  as |T| >
       <T.Radio  @label="Soup" @value="one"  @class="hii"  />
       <T.Radio  @label="Salad" @value="two"  />
       <T.Radio  @label="Sandwich" @value="three" />
     </RadioGroup>
    `);
    assert.ok((this.element.querySelector('.hii') as any));
  });
  test(' defaultChecked radio button ', async function (assert) {
    // Template block usage:
    await render(hbs`
     <RadioGroup  as |T| >
       <T.Radio  @label="Soup" @value="one"  @defaultChecked=true  />
       <T.Radio  @label="Salad" @value="two"  />
       <T.Radio  @label="Sandwich" @value="three" />
     </RadioGroup>
    `);
    assert.equal((this.element.querySelector('input') as any).checked, true);
  });
  test(' defaultChecked set to false in radio button ', async function (assert) {
    // Template block usage:
    await render(hbs`
     <RadioGroup  as |T| >
       <T.Radio  @label="Soup" @value="one"  @defaultChecked={{false}}  />
       <T.Radio  @label="Salad" @value="two"  />
       <T.Radio  @label="Sandwich" @value="three" />
     </RadioGroup>
    `);
    assert.equal((this.element.querySelector('input') as any).checked, false);
  });
  test(' disabled single radio button ', async function (assert) {
    // Template block usage:
    await render(hbs`
     <RadioGroup  as |T| >
       <T.Radio  @label="Soup" @value="one"  @disabled={{true}}  />
       <T.Radio  @label="Salad" @value="two"  />
       <T.Radio  @label="Sandwich" @value="three" />
     </RadioGroup>
    `);
    assert.equal((this.element.querySelector('input') as any).disabled, true);
  });
  test(' disabled =false for single radio button ', async function (assert) {
    // Template block usage:
    await render(hbs`
     <RadioGroup  as |T| >
       <T.Radio  @label="Soup" @value="one"  @disabled={{false}}  />
       <T.Radio  @label="Salad" @value="two"  />
       <T.Radio  @label="Sandwich" @value="three" />
     </RadioGroup>
    `);
    assert.equal((this.element.querySelector('input') as any).disabled, false);
  });
  test(' inline for single radio button ', async function (assert) {
    // Template block usage:
    await render(hbs`
     <RadioGroup  as |T| >
       <T.Radio  @label="Soup" @value="one"  @inline={{true}}  />
       <T.Radio  @label="Salad" @value="two"  />
       <T.Radio  @label="Sandwich" @value="three" />
     </RadioGroup>
    `);
    assert.ok((this.element.querySelector('.bp3-inline') as any));
  });
  test(' inline set to false for single radio button ', async function (assert) {
    // Template block usage:
    await render(hbs`
     <RadioGroup  as |T| >
       <T.Radio  @label="Soup" @value="one"  @inline={{false}}  />
       <T.Radio  @label="Salad" @value="two"  />
       <T.Radio  @label="Sandwich" @value="three" />
     </RadioGroup>
    `);
    assert.notOk((this.element.querySelector('.bp3-inline') as any));
  });
  test('radio label content is rendering', async function (assert) {
    // Template block usage:
    await render(hbs`
     <RadioGroup  as |T| >
       <T.Radio  @label="Soup" @value="one"  @inline={{false}}  />
       <T.Radio  @label="Salad" @value="two"  />
       <T.Radio  @label="Sandwich" @value="three" />
     </RadioGroup>
    `);
    assert.equal((this.element.querySelector('.bp3-radio') as any).textContent.trim(), "Soup");
  });
  test('labelElement with string value is rendering', async function (assert) {
    // Template block usage:
    await render(hbs`
     <RadioGroup  as |T| >
       <T.Radio  @labelElement="Soup" @value="one"  @inline={{false}}  />
       <T.Radio  @label="Salad" @value="two"  />
       <T.Radio  @label="Sandwich" @value="three" />
     </RadioGroup>
    `);
    assert.equal((this.element.querySelector('.bp3-radio') as any).textContent.trim(), "Soup");
  });
  test('labelElement with HtmlElement is rendering', async function (assert) {
    // Template block usage:
    await render(hbs`
     <RadioGroup  as |T| >
       <T.Radio  @labelElement="<div>Soup</div>" @value="one"  @inline={{false}}  />
       <T.Radio  @label="Salad" @value="two"  />
       <T.Radio  @label="Sandwich" @value="three" />
     </RadioGroup>
    `);
    assert.equal((this.element.querySelector('.bp3-radio') as any).textContent.trim(), "Soup");
  });
  test('labelElement  and label is rendering on Radio button', async function (assert) {
    // Template block usage:
    await render(hbs`
     <RadioGroup  as |T| >
       <T.Radio  @labelElement="<div>Soup</div>" @label="Soup" @value="one"  @inline={{false}}  />
       <T.Radio  @label="Salad" @value="two"  />
       <T.Radio  @label="Sandwich" @value="three" />
     </RadioGroup>
    `);
    assert.equal((this.element.querySelector('.bp3-radio') as any).textContent.trim(), "Soup\nSoup");
  });
  test(' large for single radio button ', async function (assert) {
    // Template block usage:
    await render(hbs`
     <RadioGroup  as |T| >
       <T.Radio  @label="Soup" @value="one"  @large={{true}}  />
       <T.Radio  @label="Salad" @value="two"  />
       <T.Radio  @label="Sandwich" @value="three" />
     </RadioGroup>
    `);
    assert.ok((this.element.querySelector('.bp3-large') as any));
  });
  test(' large set to false  for single radio button ', async function (assert) {
    // Template block usage:
    await render(hbs`
     <RadioGroup  as |T| >
       <T.Radio  @label="Soup" @value="one"  @inline={{false}}  />
       <T.Radio  @label="Salad" @value="two"  />
       <T.Radio  @label="Sandwich" @value="three" />
     </RadioGroup>
    `);
    assert.notOk((this.element.querySelector('.bp3-large') as any));
  });
  test('Custom style is rendering ', async function (assert) {
    // Template block usage:
    await render(hbs`
     <RadioGroup  as |T| >
       <T.Radio  @label="Soup" @value="one"  @style="color:red"  />
       <T.Radio  @label="Salad" @value="two"  />
       <T.Radio  @label="Sandwich" @value="three" />
     </RadioGroup>
    `);
    assert.equal((this.element.querySelector('.bp3-radio') as any).style.color, "red");
  });
  test(' onChange function is returned  ', async function (assert) {
    // Template block usage:
    let that = this;
    this.set('onchange', function (e: any) {
      that.set('value', e.target.value)
    })
    await render(hbs`
     <RadioGroup  as |T| >
       <T.Radio  @label="Soup" @value="one"  @onChange={{action onchange}}  />
       <T.Radio  @label="Salad" @value="two"  />
       <T.Radio  @label="Sandwich" @value="three" />
     </RadioGroup>
    `);
    await click('input');

    assert.ok((this.element.querySelector('input') as any).checked);
    assert.ok(this.get('value'), "one");
  });

  //RadioGroup test cases ---------------------------------------------------------------------------------




























  test(' custom class name to RadioGroup ', async function (assert) {
    // Template block usage:
    await render(hbs`
     <RadioGroup @class="hii" as |T| >
       <T.Radio  @label="Soup" @value="one"    />
       <T.Radio  @label="Salad" @value="two"  />
       <T.Radio  @label="Sandwich" @value="three" />
     </RadioGroup>
    `);
    assert.ok((this.element.querySelector('.hii') as any));
  });

  test('disable option set to RadioGroup ', async function (assert) {
    // Template block usage:
    await render(hbs`
     <RadioGroup @disabled=true as |T| >
       <T.Radio  @label="Soup" @value="one"    />
       <T.Radio  @label="Salad" @value="two"  />
       <T.Radio  @label="Sandwich" @value="three" />
     </RadioGroup>
    `);
    assert.ok((this.element.querySelector('.bp3-disabled') as any));
  });
  test('disable option set false to RadioGroup ', async function (assert) {
    // Template block usage:
    await render(hbs`
     <RadioGroup @disabled={{false}} as |T| >
       <T.Radio  @label="Soup" @value="one"    />
       <T.Radio  @label="Salad" @value="two"  />
       <T.Radio  @label="Sandwich" @value="three" />
     </RadioGroup>
    `);
    assert.notOk((this.element.querySelector('.bp3-disabled') as any));
  });

  test('RadioGroup disabled true reflected to child also', async function (assert) {
    // Template block usage:
    await render(hbs`
     <RadioGroup @disabled=true as |T| >
       <T.Radio  @label="Soup" @value="one"    />
       <T.Radio  @label="Salad" @value="two"  />
       <T.Radio  @label="Sandwich" @value="three" />
     </RadioGroup>
    `);
    assert.equal((this.element.querySelector('input') as any).disabled, true);
  });
  test('inline property  to RadioGroup ', async function (assert) {
    // Template block usage:
    await render(hbs`
     <RadioGroup @inline={{true}} as |T| >
       <T.Radio  @label="Soup" @value="one"    />
       <T.Radio  @label="Salad" @value="two"  />
       <T.Radio  @label="Sandwich" @value="three" />
     </RadioGroup>
    `);
    assert.ok((this.element.querySelector('.bp3-inline') as any));
  });
  test('inline prop set false to RadioGroup ', async function (assert) {
    // Template block usage:
    await render(hbs`
     <RadioGroup @inline={{false}} as |T| >
       <T.Radio  @label="Soup" @value="one"    />
       <T.Radio  @label="Salad" @value="two"  />
       <T.Radio  @label="Sandwich" @value="three" />
     </RadioGroup>
    `);
    assert.notOk((this.element.querySelector('.bp3-inline') as any));
  });
  test('inline property  to RadioGroup and it reflected to child also ', async function (assert) {
    // Template block usage:
    await render(hbs`
     <RadioGroup @inline={{true}} as |T| >
       <T.Radio  @label="Soup" @value="one"    />
       <T.Radio  @label="Salad" @value="two"  />
       <T.Radio  @label="Sandwich" @value="three" />
     </RadioGroup>
    `);
    assert.ok((this.element.querySelector('label.bp3-inline') as any));
  });

  test('label property  to RadioGroup ', async function (assert) {
    // Template block usage:
    await render(hbs`
     <RadioGroup @label="hii" as |T| >
       <T.Radio  @label="Soup" @value="one"    />
       <T.Radio  @label="Salad" @value="two"  />
       <T.Radio  @label="Sandwich" @value="three" />
     </RadioGroup>
    `);
    assert.ok((this.element.querySelector('.bp3-label') as any));
  });

  test('name property  to RadioGroup ', async function (assert) {
    // Template block usage:
    await render(hbs`
     <RadioGroup @name="hii" as |T| >
       <T.Radio  @label="Soup" @value="one"    />
       <T.Radio  @label="Salad" @value="two"  />
       <T.Radio  @label="Sandwich" @value="three" />
     </RadioGroup>
    `);
    assert.equal((this.element.querySelector('input') as any).name, 'hii');
  });

  test(' onChange function is returned  ', async function (assert) {
    // Template block usage:
    let that = this;
    this.set('onchange', function (e: any) {
      that.set('value', e.target.value)
    })
    await render(hbs`
     <RadioGroup @onChange={{action onchange}}  as |T| >
       <T.Radio  @label="Soup" @value="one"    />
       <T.Radio  @label="Salad" @value="two"  />
       <T.Radio  @label="Sandwich" @value="three" />
     </RadioGroup>
    `);
    await click('input');

    assert.ok((this.element.querySelector('input') as any).checked);
    assert.ok(this.get('value'), "one");
  });

  test('selectedValue to select radio button ', async function (assert) {
    // Template block usage:
    await render(hbs`
     <RadioGroup @selectedValue="one" as |T| >
       <T.Radio  @label="Soup" @value="one"    />
       <T.Radio  @label="Salad" @value="two"  />
       <T.Radio  @label="Sandwich" @value="three" />
     </RadioGroup>
    `);
    assert.equal((this.element.querySelector('input') as any).checked, true);
  });


  // RadioGroup with Options to render radio buttons












  test('RadioGroup with Options array object to create radio list buttons ', async function (assert) {
    // Template block usage:
    var options: Array<object> = [{
      label: "Soup",
      value: 'one',
      class: 'hii'
    }, {
      label: "Soup",
      value: 'two'
    }];
    this.set('options', options)

    await render(hbs`
     <RadioGroup @options={{options}} />
    `);
    assert.equal((this.element.querySelectorAll('input') as any).length, 2);
  });

  test('RadioGroup with Options array object with disabled ', async function (assert) {
    // Template block usage:
    var options: Array<object> = [{
      label: "Soup",
      value: 'one',
      class: 'hii',
      disabled: true
    }, {
      label: "Soup",
      value: 'two'
    }];
    this.set('options', options)

    await render(hbs`
     <RadioGroup @options={{options}} />
    `);
    assert.equal((this.element.querySelector('input') as any).disabled, true);
    assert.equal((this.element.querySelectorAll('input') as any)[1].disabled, false);
  });
  test('RadioGroup with Options array object with class ', async function (assert) {
    // Template block usage:
    var options: Array<object> = [{
      label: "Soup",
      value: 'one',
      class: 'hii',
      disabled: true
    }, {
      label: "Soup",
      value: 'two'
    }];
    this.set('options', options)

    await render(hbs`
     <RadioGroup @options={{options}} />
    `);
    assert.ok((this.element.querySelector('.hii') as any));
  });
  test('RadioGroup with Options array object with label is rendering ', async function (assert) {
    // Template block usage:
    var options: Array<object> = [{
      label: "Soup",
      value: 'one',
      class: 'hii',
      disabled: true
    }, {
      label: "Soup",
      value: 'two'
    }];
    this.set('options', options)

    await render(hbs`
     <RadioGroup @options={{options}} />
    `);
    assert.ok((this.element.querySelector('input') as any).disabled);
  });


});
