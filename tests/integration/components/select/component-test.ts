import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { click } from '@ember/test-helpers';

module('Integration | Component | select', function(hooks) {
  setupRenderingTest(hooks);

  // test('selected value is rendering (type =input box )', async function (assert) {
  //   this.set(' data', [
  //     'hi1',
  //     'hi2',
  //     'hi3',
  //     'hi4',
  //     'hi5',
  //     'hi6',
  //     'hi7',
  //     'hi8',
  //     'hi9',
  //     'hi10',
  //     'hi11',
  //     'hi12',
  //   ]);
  //   this.set('selected', 'hi1');
  //   await render(hbs`<Select @data={{data}} @selected={{selected}}/>`);
  //   var docInput: any = document.querySelector('input');
  //   assert.equal(docInput.value, 'hi1');
  // });

  test('selectbox  active on click (type=input box)', async function (assert) {
    this.set(' data', [
      'hi1',
      'hi2',
      'hi3',
      'hi4',
      'hi5',
      'hi6',
      'hi7',
      'hi8',
      'hi9',
      'hi10',
      'hi11',
      'hi12',
    ]);
    this.set('selected', 'hi1');
    await render(hbs`<Select  @data={{this.data}} @selected={{this.selected  }}/>`);
    await click('input');
    assert.equal(document.querySelectorAll('.popper').length, 1)

  });

  test(' check isDefaultOpen true', async function (assert) {
    this.set(' data', [
      'hi1',
      'hi2',
      'hi3',
      'hi4',
      'hi5',
      'hi6',
      'hi7',
      'hi8',
      'hi9',
      'hi10',
      'hi11',
      'hi12',
    ]);
    this.set('selected', 'hi1');
    await render(hbs`<Select  @data={{data}} @selected={{selected}} @isDefaultOpen=true/>`);
    assert.equal(document.querySelectorAll('.popper').length, 1)
  });
  test(' check isDefaultOpen false', async function (assert) {
    this.set(' data', [
      'hi1',
      'hi2',
      'hi3',
      'hi4',
      'hi5',
      'hi6',
      'hi7',
      'hi8',
      'hi9',
      'hi10',
      'hi11',
      'hi12',
    ]);
    this.set('selected', 'hi1');
    await render(hbs`<Select  @data={{data}} @selected={{selected }}/>`);
    assert.equal(document.querySelectorAll('.popper').length, 0);
  });
  test(' check class arg rendering', async function (assert) {
    this.set(' data', [
      'hi1',
      'hi2',
      'hi3',
      'hi4',
      'hi5',
      'hi6',
      'hi7',
      'hi8',
      'hi9',
      'hi10',
      'hi11',
      'hi12',
    ]);
    this.set('selected', 'hi1');
    await render(hbs`<Select  @data={{data}} @selected={{selected}}  @class='select-rendering' />`);
    assert.equal(document.querySelectorAll('.select-rendering').length, 1);
  });
  test('  value is rendering @ui', async function (assert) {
    let data = [
      'hi1',
      'hi2',
      'hi3',
      'hi4',
      'hi5',
      'hi6',
      'hi7',
      'hi8',
      'hi9',
      'hi10',
      'hi11',
      'hi12',
    ];
    this.set('data', data);
    this.set('selected', 'hi1');
    await render(hbs`<Select  @data={{data}} @selected={{selected   }}/>`);
    await click('input');
    var innerText: any = document.querySelector('.bp3-text-overflow-ellipsis');
    assert.equal(innerText.innerText, 'hi1');
  });

  test('  value is rendering @popover', async function (assert) {
    let data = [
      'hi1',
      'hi2',
      'hi3',
      'hi4',
      'hi5',
      'hi6',
      'hi7',
      'hi8',
      'hi9',
      'hi10',
      'hi11',
      'hi12',
    ];
    this.set('data', data);
    this.set('selected', 'hi2');
    await render(hbs`<Select @type='button'  @data={{data}} @selected={{selected}} @isDefaultOpen=true  />`);
    let doc:any = await document.querySelector('.popper');
    assert.equal(doc.querySelector('.bp3-text-overflow-ellipsis').innerText, 'hi1');
  });
  test('  all value is rendering @popover', async function (assert) {
    let data = [
      'hi1',
      'hi2',
      'hi3',
      'hi4',
      'hi5',
      'hi6',
      'hi7',
      'hi8',
      'hi9',
      'hi10',
      'hi11',
      'hi12',
    ];
    this.set('data', data);
    this.set('selected', 'hi2');
    await render(hbs`<Select @type='button'  @data={{data}} @selected={{selected}} @isDefaultOpen=true  />`);
    assert.equal(document.querySelectorAll('.bp3-text-overflow-ellipsis').length, 12);
  });
  test(' placeholder is rendering ', async function (assert) {
    let data = [
      'hi1',
      'hi2',
      'hi3',
      'hi4',
      'hi5',
      'hi6',
      'hi7',
      'hi8',
      'hi9',
      'hi10',
      'hi11',
      'hi12',
    ];
    this.set('data', data);
    this.set('selected', 'hi2');
    await render(hbs`<Select  @data={{data}} @selected={{selected}} @placeholder='any text' />`);
    var placeHolder:any=document.querySelector('.bp3-input');
    assert.equal(placeHolder.placeholder, 'any text');
  });
  test(' active=true is rendering ', async function (assert) {
    let data = [
      'hi1',
      'hi2',
      'hi3',
      'hi4',
      'hi5',
      'hi6',
      'hi7',
      'hi8',
      'hi9',
      'hi10',
      'hi11',
      'hi12',
    ];
    this.set('data', data);
    this.set('selected', 'hi2');
    await render(hbs`<Select @type='button' @data={{data}} @selected={{selected}} @active=true @placeholder='any text'  />`);
    assert.ok(document.querySelector('.bp3-active'));
  });
  test(' minimal=true is rendering ', async function (assert) {
    let data = [
      'hi1',
      'hi2',
      'hi3',
      'hi4',
      'hi5',
      'hi6',
      'hi7',
      'hi8',
      'hi9',
      'hi10',
      'hi11',
      'hi12',
    ];
    this.set('data', data);
    this.set('selected', 'hi2');
    await render(hbs`<Select @type='button' @data={{data}} @selected={{selected}} @minimal=true @placeholder='any text'  />`);
    assert.ok(document.querySelector('.bp3-minimal'));
  });
});
