import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { click } from '@ember/test-helpers';

const TAB_SELECTOR = `.bp3-tab`;
module('Integration | Component | tabs', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{tabs}}`);

    assert.equal((this.element.textContent as any).trim(), '');

    // Template block usage:
  });

  test('default animate is working', async function (assert) {
    // Template block usage:
    await render(hbs`
    <Tabs as |T|>
      <T.tab @title="Ember" >
        1
      </T.tab>
      <T.tab @title="Angular">
        2
      </T.tab>
      <T.tab @title="React">
          3
      </T.tab>
     </Tabs>
    `);

    assert.ok(document.getElementsByClassName('bp3-tab-indicator-wrapper'));
    assert.ok(document.querySelector(('.bp3-tab-indicator-wrapper') as any).style.height, "40px");
    assert.ok(document.querySelector(('.bp3-tab-indicator-wrapper') as any).style.width, "47px");
    assert.ok(document.querySelector(('.bp3-tab-indicator-wrapper') as any).style.transform);

  });
  test('animate  set to false', async function (assert) {
    await render(hbs`
    <Tabs @animate={{false}} as |T|>
      <T.tab @title="Ember" >
        1
      </T.tab>
      <T.tab @title="Angular">
        2
      </T.tab>
      <T.tab @title="React">
          3
      </T.tab>
     </Tabs>
    `);
    assert.notOk(document.querySelector('.bp3-tab-indicator-wrapper'));
  });
  test('onChange tab animate changes', async function (assert) {
    await render(hbs`
    <Tabs  as |T|>
      <T.tab @title="Ember" >
        1
      </T.tab>
      <T.tab @title="Angular">
        2
      </T.tab>
      <T.tab @title="React">
          3
      </T.tab>
     </Tabs>
    `);
    const tabIdSelector = `${TAB_SELECTOR}[title-tab-id]`;
    const selectedTabElement = await this.element.querySelectorAll(tabIdSelector)[1] as HTMLElement;
    await click(selectedTabElement);
    assert.ok(document.querySelector(('.bp3-tab-indicator-wrapper') as any).style.height);
    assert.ok(document.querySelector(('.bp3-tab-indicator-wrapper') as any).style.width);
    assert.ok(document.getElementsByClassName('bp3-tab-indicator-wrapper'));
  });
  test('Custom class name to Tabs', async function (assert) {
    await render(hbs`
    <Tabs class='hii'  as |T|>
      <T.tab @title="Ember" >
        1
      </T.tab>
      <T.tab @title="Angular">
        2
      </T.tab>
      <T.tab @title="React">
          3
      </T.tab>
     </Tabs>
    `);
    assert.equal(document.querySelectorAll('.hii').length, 1);
  });
  test('defaultSelectedTabIndex set to 2', async function (assert) {
    await render(hbs`
    <Tabs @defaultSelectedTabIndex={{2}}  as |T|>
      <T.tab @title="Ember" >
        1
      </T.tab>
      <T.tab @title="Angular">
        2
      </T.tab>
      <T.tab @title="React">
          3
      </T.tab>
     </Tabs>
    `);
    const tabIdSelector = `${TAB_SELECTOR}[title-tab-id]`;
    const selectedTabElement: any = await this.element.querySelectorAll(tabIdSelector)[1] as HTMLElement;
    assert.equal(selectedTabElement.getAttribute('aria-selected'), "true");
  });
  test('defaultSelectedTabIndex set to 0(set default first tab)', async function (assert) {
    await render(hbs`
    <Tabs @defaultSelectedTabIndex={{0}}  as |T|>
      <T.tab @title="Ember" >
        1
      </T.tab>
      <T.tab @title="Angular">
        2
      </T.tab>
      <T.tab @title="React">
          3
      </T.tab>
     </Tabs>
    `);
    const tabIdSelector = `${TAB_SELECTOR}[aria-selected="true"]`;
    const selectedTabElement: any = await this.element.querySelectorAll(tabIdSelector);
    assert.equal(selectedTabElement.length, 1);
    const selectedTabElement2: any = await this.element.querySelectorAll(`${TAB_SELECTOR}[title-tab-id]`)[0] as HTMLElement;
    assert.equal(selectedTabElement2.getAttribute('aria-selected'), "true");


  });
  test('defaultSelectedTabIndex if it is grater than tab length (set default first tab)', async function (assert) {
    await render(hbs`
    <Tabs @defaultSelectedTabIndex={{5}}  as |T|>
      <T.tab @title="Ember" >
        1
      </T.tab>
      <T.tab @title="Angular">
        2
      </T.tab>
      <T.tab @title="React">
          3
      </T.tab>
     </Tabs>
    `);
    const tabIdSelector = `${TAB_SELECTOR}[aria-selected="true"]`;
    const selectedTabElement: any = await this.element.querySelectorAll(tabIdSelector);
    assert.equal(selectedTabElement.length, 1);
    const selectedTabElement2: any = await this.element.querySelectorAll(`${TAB_SELECTOR}[title-tab-id]`)[0] as HTMLElement;
    assert.equal(selectedTabElement2.getAttribute('aria-selected'), "true");


  });
  test('defaultSelectedTabIndex is string (default to first tab)', async function (assert) {
    await render(hbs`
    <Tabs @defaultSelectedTabIndex="hi"  as |T|>
      <T.tab @title="Ember" >
        1
      </T.tab>
      <T.tab @title="Angular">
        2
      </T.tab>
      <T.tab @title="React">
          3
      </T.tab>
     </Tabs>
    `);
    const tabIdSelector = `${TAB_SELECTOR}[aria-selected="true"]`;
    const selectedTabElement: any = await this.element.querySelectorAll(tabIdSelector);
    assert.equal(selectedTabElement.length, 1);
    const selectedTabElement2: any = await this.element.querySelectorAll(`${TAB_SELECTOR}[title-tab-id]`)[0] as HTMLElement;
    assert.equal(selectedTabElement2.getAttribute('aria-selected'), "true");
  });

  test('Without defaultSelectedTabIndex and selectedTabIndex (default to first tab)', async function (assert) {
    await render(hbs`
    <Tabs   as |T|>
      <T.tab @title="Ember" >
        1
      </T.tab>
      <T.tab @title="Angular">
        2
      </T.tab>
      <T.tab @title="React">
          3
      </T.tab>
     </Tabs>
    `);
    const tabIdSelector = `${TAB_SELECTOR}[aria-selected="true"]`;
    const selectedTabElement: any = await this.element.querySelectorAll(tabIdSelector);
    assert.equal(selectedTabElement.length, 1);
    const selectedTabElement2: any = await this.element.querySelectorAll(`${TAB_SELECTOR}[title-tab-id]`)[0] as HTMLElement;
    assert.equal(selectedTabElement2.getAttribute('aria-selected'), "true");
  });

  test('selectedTabIndex set to 2', async function (assert) {
    await render(hbs`
    <Tabs @selectedTabIndex={{2}}  as |T|>
      <T.tab @title="Ember" >
        1
      </T.tab>
      <T.tab @title="Angular">
        2
      </T.tab>
      <T.tab @title="React">
          3
      </T.tab>
     </Tabs>
    `);
    const tabIdSelector = `${TAB_SELECTOR}[title-tab-id]`;
    const selectedTabElement: any = await this.element.querySelectorAll(tabIdSelector)[1] as HTMLElement;
    assert.equal(selectedTabElement.getAttribute('aria-selected'), "true");
  });
  test('selectedTabIndex set to 0(set default first tab)', async function (assert) {
    await render(hbs`
    <Tabs @selectedTabIndex={{0}}  as |T|>
      <T.tab @title="Ember" >
        1
      </T.tab>
      <T.tab @title="Angular">
        2
      </T.tab>
      <T.tab @title="React">
          3
      </T.tab>
     </Tabs>
    `);
    const tabIdSelector = `${TAB_SELECTOR}[aria-selected="true"]`;
    const selectedTabElement: any = await this.element.querySelectorAll(tabIdSelector);
    assert.equal(selectedTabElement.length, 1);
    const selectedTabElement2: any = await this.element.querySelectorAll(`${TAB_SELECTOR}[title-tab-id]`)[0] as HTMLElement;
    assert.equal(selectedTabElement2.getAttribute('aria-selected'), "true");


  });
  test('selectedTabIndex if it is grater than tab length (set default first tab)', async function (assert) {
    await render(hbs`
    <Tabs @selectedTabIndex={{5}}  as |T|>
      <T.tab @title="Ember" >
        1
      </T.tab>
      <T.tab @title="Angular">
        2
      </T.tab>
      <T.tab @title="React">
          3
      </T.tab>
     </Tabs>
    `);
    const tabIdSelector = `${TAB_SELECTOR}[aria-selected="true"]`;
    const selectedTabElement: any = await this.element.querySelectorAll(tabIdSelector);
    assert.equal(selectedTabElement.length, 1);
    const selectedTabElement2: any = await this.element.querySelectorAll(`${TAB_SELECTOR}[title-tab-id]`)[0] as HTMLElement;
    assert.equal(selectedTabElement2.getAttribute('aria-selected'), "true");


  });
  test('selectedTabIndex is string (default to first tab)', async function (assert) {
    await render(hbs`
    <Tabs @selectedTabIndex="hi"  as |T|>
      <T.tab @title="Ember" >
        1
      </T.tab>
      <T.tab @title="Angular">
        2
      </T.tab>
      <T.tab @title="React">
          3
      </T.tab>
     </Tabs>
    `);
    const tabIdSelector = `${TAB_SELECTOR}[aria-selected="true"]`;
    const selectedTabElement: any = await this.element.querySelectorAll(tabIdSelector);
    assert.equal(selectedTabElement.length, 1);
    const selectedTabElement2: any = await this.element.querySelectorAll(`${TAB_SELECTOR}[title-tab-id]`)[0] as HTMLElement;
    assert.equal(selectedTabElement2.getAttribute('aria-selected'), "true");
  });

  test('Large Tabs', async function (assert) {
    await render(hbs`
    <Tabs @large={{true}} as |T|>
      <T.tab @title="Ember" >
        1
      </T.tab>
      <T.tab @title="Angular">
        2
      </T.tab>
      <T.tab @title="React">
          3
      </T.tab>
     </Tabs>
    `);

    assert.ok(this.element.querySelector('.bp3-large'));
  });
  test('should not render default Large Tabs', async function (assert) {
    await render(hbs`
    <Tabs  as |T|>
      <T.tab @title="Ember" >
        1
      </T.tab>
      <T.tab @title="Angular">
        2
      </T.tab>
      <T.tab @title="React">
          3
      </T.tab>
     </Tabs>
    `);

    assert.notOk(this.element.querySelector('.bp3-large'));
  });
  test('large set to false', async function (assert) {
    await render(hbs`
    <Tabs @large={{false}} as |T|>
      <T.tab @title="Ember" >
        1
      </T.tab>
      <T.tab @title="Angular">
        2
      </T.tab>
      <T.tab @title="React">
          3
      </T.tab>
     </Tabs>
    `);

    assert.notOk(this.element.querySelector('.bp3-large'));
  });
  test('onChange function returns values', async function (assert) {
    var that = this;
    this.set('onChange1', function (newTabIndex: number, prevTabIndex: number) {
      that.set('newTabIndex', newTabIndex);
      that.set('prevTabIndex', prevTabIndex);
    })
    await render(hbs`
    <Tabs @onChange={{action onChange1}} as |T|>
      <T.tab @title="Ember" >
        1
      </T.tab>
      <T.tab @title="Angular">
        2
      </T.tab>
      <T.tab @title="React">
          3
      </T.tab>
     </Tabs>
    `);

    const tabIdSelector = `${TAB_SELECTOR}[title-tab-id]`;
    const selectedTabElement = await this.element.querySelectorAll(tabIdSelector)[2] as HTMLElement;
    await click(selectedTabElement);
    assert.equal(this.get('newTabIndex'), 3);
    assert.equal(this.get('prevTabIndex'), 1);
  });
  test('renderActiveTabPanelOnly is active', async function (assert) {

    await render(hbs`
    <Tabs @renderActiveTabPanelOnly={{true}} as |T|>
      <T.tab @title="Ember" >
        1
      </T.tab>
      <T.tab @title="Angular">
        2
      </T.tab>
      <T.tab @title="React">
          3
      </T.tab>
     </Tabs>
    `);

    assert.equal(this.element.querySelectorAll('.bp3-tab-panel')[2].innerHTML, "<!---->");
  });

  test('renderActiveTabPanelOnly is set to false', async function (assert) {

    await render(hbs`
    <Tabs @renderActiveTabPanelOnly={{false}} as |T|>
      <T.tab @title="Ember" >
        1
      </T.tab>
      <T.tab @title="Angular">
        2
      </T.tab>
      <T.tab @title="React">
          3
      </T.tab>
     </Tabs>
    `);

    assert.notEqual(this.element.querySelectorAll('.bp3-tab-panel')[2].innerHTML, "<!---->");
  });
  test('vertical is true', async function (assert) {

    await render(hbs`
    <Tabs @vertical={{true}} as |T|>
      <T.tab @title="Ember" >
        1
      </T.tab>
      <T.tab @title="Angular">
        2
      </T.tab>
      <T.tab @title="React">
          3
      </T.tab>
     </Tabs>
    `);

    assert.equal(this.element.querySelectorAll('.bp3-vertical').length, 1);
  });
  test('vertical is false', async function (assert) {

    await render(hbs`
    <Tabs @vertical={{false}} as |T|>
      <T.tab @title="Ember" >
        1
      </T.tab>
      <T.tab @title="Angular">
        2
      </T.tab>
      <T.tab @title="React">
          3
      </T.tab>
     </Tabs>
    `);

    assert.equal(this.element.querySelectorAll('.bp3-vertical').length, 0);
  });
  test('style is  rendering', async function (assert) {

    await render(hbs`
    <Tabs @style="color:red" as |T|>
      <T.tab @title="Ember" >
        1
      </T.tab>
      <T.tab @title="Angular">
        2
      </T.tab>
      <T.tab @title="React">
          3
      </T.tab>
     </Tabs>
    `);

    assert.equal((this.element.querySelector('.bp3-tabs') as any).style.color, "red");
  });
  test('class name is rendering in tab', async function (assert) {

    await render(hbs`
    <Tabs  as |T|>
      <T.tab @class="hii" @title="Ember" >
        1
      </T.tab>
      <T.tab @title="Angular">
        2
      </T.tab>
      <T.tab @title="React">
          3
      </T.tab>
     </Tabs>
    `);

    assert.ok(this.element.querySelector('.hii'));
  });
  test('title is rendering in tab', async function (assert) {

    await render(hbs`
    <Tabs  as |T|>
      <T.tab  @title="Ember" >
        1
      </T.tab>
      <T.tab @title="Angular">
        2
      </T.tab>
      <T.tab @title="React">
          3
      </T.tab>
     </Tabs>
    `);

    assert.ok((this.element.querySelector('.bp3-tab') as any).textContent.trim(), "Ember");
  });
  test('tab is disabled', async function (assert) {
    await render(hbs`
    <Tabs @defaultSelectedTabIndex={{0}}  as |T|>
      <T.tab @disabled=true @title="Ember" >
        1
      </T.tab>
      <T.tab @title="Angular">
        2
      </T.tab>
      <T.tab @title="React">
          3
      </T.tab>
     </Tabs>
    `);
    const tabIdSelector = `${TAB_SELECTOR}[aria-disabled="true"]`;
    const selectedTabElement: any = await this.element.querySelectorAll(tabIdSelector);
    assert.equal(selectedTabElement.length, 1);
  });
  test('disabled set to false', async function (assert) {
    await render(hbs`
    <Tabs @defaultSelectedTabIndex={{0}}  as |T|>
      <T.tab @disabled={{false}} @title="Ember" >
        1
      </T.tab>
      <T.tab @title="Angular">
        2
      </T.tab>
      <T.tab @title="React">
          3
      </T.tab>
     </Tabs>
    `);
    const tabIdSelector = `${TAB_SELECTOR}[aria-disabled="true"]`;
    const selectedTabElement: any = await this.element.querySelectorAll(tabIdSelector);
    assert.equal(selectedTabElement.length, 0);
  });
  test('titleClassName  is rendering in tab', async function (assert) {

    await render(hbs`
    <Tabs  as |T|>
      <T.tab @titleClassName="hii" @title="Ember" >
        1
      </T.tab>
      <T.tab @title="Angular">
        2
      </T.tab>
      <T.tab @title="React">
          3
      </T.tab>
     </Tabs>
    `);

    assert.ok(this.element.querySelector('.hii'));
  });

});
