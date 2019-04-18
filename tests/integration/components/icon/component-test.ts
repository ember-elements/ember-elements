import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | icon', function(hooks) {
  setupRenderingTest(hooks);

  test('icon is rendering', async function (assert) {
    await render(hbs`<Icon @icon="sort" />`);
    assert.ok(this.element.querySelector('path'));
  });
  test('iconSize=16 renders standard size', async function (assert) {
    await render(hbs`<Icon @icon="sort" @iconSize={{16 }}/>`);
    var svgDoc:any=document.querySelector('svg');
    assert.equal(svgDoc.viewBox.animVal.height, 16);
    assert.equal(svgDoc.viewBox.animVal.width, 16);
    assert.equal(svgDoc.viewBox.animVal.x, 0);
    assert.equal(svgDoc.viewBox.animVal.y, 0);
  });

  test('iconSize=20 renders large size', async function (assert) {
    await render(hbs`<Icon @icon="sort" @iconSize={{20 }}/>`);
    var svgDoc:any=document.querySelector('svg');
    assert.equal(svgDoc.viewBox.animVal.height, 20);
    assert.equal(svgDoc.viewBox.animVal.width, 20);
    assert.equal(svgDoc.viewBox.animVal.x, 0);
    assert.equal(svgDoc.viewBox.animVal.y, 0);
  });

  test('renders intent class', async function (assert) {
    await render(hbs`<Icon @icon="sort" @intent='primary' />`);
    assert.ok(document.querySelector('.bp3-intent-primary'));
  });

  test('renders icon name', async function (assert) {
    await render(hbs`<Icon   @icon="sort" />`);
    assert.ok(document.getElementById('sort'));
  });
  test('renders icon title', async function (assert) {
    await render(hbs`<Icon @title='hellow'   @icon="sort" />`);
    assert.ok(document.getElementById('hellow'));
  });

  test('renders icon without color', async function (assert) {
    await render(hbs`<Icon @icon="sort" />`);
    var svgDoc:any=document.querySelector('svg');
    assert.equal(svgDoc.style.color,'');
  });
  // test('unknown icon name renders blank icon', async function (assert) {
  //   await render(hbs`<Icon @icon="unknown" />`);
  //   assert.notOk(document.querySelector('path'));
  // });
  test('style is rendering', async function (assert) {
    await render(hbs`<Icon @icon="sort" @style="color:red" />`);
    let element: any = this.element;
    assert.equal(element.querySelector('span').style.color, "red");
  });
  test('class is rendering', async function (assert) {
    await render(hbs`<Icon @icon="sort" @class='hellow' />`);
    let element: any = this.element;
    assert.ok(element.querySelector('span.hellow'));
  });

});
