import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { click } from '@ember/test-helpers';

module('Integration | Component | select', function (hooks) {
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
      { title: 'hi1' },
      { title: 'hi2' },
      { title: 'hi3' },
      { title: 'hi4' },
      { title: 'hi5' },
      { title: 'hi6' },
      { title: 'hi7' },
      { title: 'hi8' },
      { title: 'hi9' },
      { title: 'hi10' },
      { title: 'hi11' },
      { title: 'hi12' },
    ]);
    this.set('selected', { title: 'hi1' });
    await render(hbs`<Select  @data={{this.data}} @selected={{this.selected }}/>`);
    await click('input');
    assert.equal(document.querySelectorAll('.popper').length, 1)

  });

  test(' check isDefaultOpen true', async function (assert) {
    this.set(' data', [
      { title: 'hi1' },
      { title: 'hi2' },
      { title: 'hi3' },
      { title: 'hi4' },
      { title: 'hi5' },
      { title: 'hi6' },
      { title: 'hi7' },
      { title: 'hi8' },
      { title: 'hi9' },
      { title: 'hi10' },
      { title: 'hi11' },
      { title: 'hi12' },
    ]);
    this.set('selected', { title: 'hi1' });
    await render(hbs`<Select  @data={{data}} @selected={{selected}} @isDefaultOpen=true/>`);
    assert.equal(document.querySelectorAll('.popper').length, 1)
  });
  test(' check isDefaultOpen false', async function (assert) {
    this.set('data', [
      { title: 'hi1' },
      { title: 'hi2' },
      { title: 'hi3' },
      { title: 'hi4' },
      { title: 'hi5' },
      { title: 'hi6' },
      { title: 'hi7' },
      { title: 'hi8' },
      { title: 'hi9' },
      { title: 'hi10' },
      { title: 'hi11' },
      { title: 'hi12' },
    ]);
    this.set('selected', { title: 'hi1' });
    await render(hbs`<Select  @data={{data}} @selected={{selected }}/>`);
    assert.equal(document.querySelectorAll('.popper').length, 0);
  });
  test(' check class arg rendering', async function (assert) {
    this.set(' data', [
      { title: 'hi1' },
      { title: 'hi2' },
      { title: 'hi3' },
      { title: 'hi4' },
      { title: 'hi5' },
      { title: 'hi6' },
      { title: 'hi7' },
      { title: 'hi8' },
      { title: 'hi9' },
      { title: 'hi10' },
      { title: 'hi11' },
      { title: 'hi12' },
    ]);
    this.set('selected', { title: 'hi1' });
    await render(hbs`<Select  @data={{data}} @selected={{selected}}  @class='select-rendering' />`);
    assert.equal(document.querySelectorAll('.select-rendering').length, 1);
  });
  test('  value is rendering @ui', async function (assert) {
    this.set('data', [
      { title: 'hi1' },
      { title: 'hi2' },
      { title: 'hi3' },
      { title: 'hi4' },
      { title: 'hi5' },
      { title: 'hi6' },
      { title: 'hi7' },
      { title: 'hi8' },
      { title: 'hi9' },
      { title: 'hi10' },
      { title: 'hi11' },
      { title: 'hi12' },
    ]);
    
    this.set('selected', { title: 'hi1' });
    await render(hbs`<Select  @data={{data}} @selected={{selected   }} as |item|>
    <div class="bp3-text-overflow-ellipsis" > {{item.title}}</div></Select>`);
    await click('input');
    var innerText: any = document.querySelector('.bp3-text-overflow-ellipsis');
    assert.equal(innerText.textContent.trim(), 'hi1');
  });

  test('  value is rendering @popover', async function (assert) {
    this.set('data', [
      { title: 'hi1' },
      { title: 'hi2' },
      { title: 'hi3' },
      { title: 'hi4' },
      { title: 'hi5' },
      { title: 'hi6' },
      { title: 'hi7' },
      { title: 'hi8' },
      { title: 'hi9' },
      { title: 'hi10' },
      { title: 'hi11' },
      { title: 'hi12' },
    ]);
   
    this.set('selected', { title: 'hi1' });    
    await render(hbs`<Select  @data={{data}} @selected={{selected   }} @isDefaultOpen=true  as |item|>
    <div class="bp3-text-overflow-ellipsis" > {{item.title}}</div></Select>`);
    let doc: any = await document.querySelector('.popper');
    assert.equal(doc.querySelector('.bp3-text-overflow-ellipsis').textContent.trim(), 'hi1');
  });
  test('  all value is rendering @popover', async function (assert) {
    this.set('data', [
      { title: 'hi1' },
      { title: 'hi2' },
      { title: 'hi3' },
      { title: 'hi4' },
      { title: 'hi5' },
      { title: 'hi6' },
      { title: 'hi7' },
      { title: 'hi8' },
      { title: 'hi9' },
      { title: 'hi10' },
      { title: 'hi11' },
      { title: 'hi12' },
    ]);
   
    this.set('selected', { title: 'hi1' });    
    await render(hbs`<Select  @data={{data}} @selected={{selected   }} @isDefaultOpen=true  as |item|>
    <div class="bp3-text-overflow-ellipsis" > {{item.title}}</div></Select>`);
    assert.equal(document.querySelectorAll('.bp3-text-overflow-ellipsis').length, 12);
  });
  test(' placeholder is rendering ', async function (assert) {
    this.set(' data', [
      { title: 'hi1' },
      { title: 'hi2' },
      { title: 'hi3' },
      { title: 'hi4' },
      { title: 'hi5' },
      { title: 'hi6' },
      { title: 'hi7' },
      { title: 'hi8' },
      { title: 'hi9' },
      { title: 'hi10' },
      { title: 'hi11' },
      { title: 'hi12' },
    ]);
    
    this.set('selected', {title:'hi2'});
    this.set('InputGroupProps', { placeholder: 'any text' });
    await render(hbs`<Select  @data={{data}} @selected={{selected}} @InputGroupProps={{InputGroupProps}}/>`);
    var placeHolder: any = document.querySelector('.bp3-input');
    assert.equal(placeHolder.placeholder, 'any text');
  });
  test(' active=true is rendering ', async function (assert) {
    this.set(' data', [
      { title: 'hi1' },
      { title: 'hi2' },
      { title: 'hi3' },
      { title: 'hi4' },
      { title: 'hi5' },
      { title: 'hi6' },
      { title: 'hi7' },
      { title: 'hi8' },
      { title: 'hi9' },
      { title: 'hi10' },
      { title: 'hi11' },
      { title: 'hi12' },
    ]);
    
    this.set('selected',{title: 'hi2'});
    this.set('ButtonProps', { active: true });
    await render(hbs`<Select @type='button' @data={{data}} @selected={{selected}} @ButtonProps={{ButtonProps}} @placeholder='any text'  />`);
    assert.ok(document.querySelector('.bp3-active'));
  });
  test(' minimal=true is rendering ', async function (assert) {
   
      this.set(' data', [
        { title: 'hi1' },
        { title: 'hi2' },
        { title: 'hi3' },
        { title: 'hi4' },
        { title: 'hi5' },
        { title: 'hi6' },
        { title: 'hi7' },
        { title: 'hi8' },
        { title: 'hi9' },
        { title: 'hi10' },
        { title: 'hi11' },
        { title: 'hi12' },
      ]);
    this.set('selected', {title:'hi2'});
    this.set('buttonProps', { minimal: true });
    this.set('ButtonProps', { minimal: true });
    await render(hbs`<Select @type='button' @data={{data}} @selected={{selected}} @ButtonProps={{ButtonProps}} @placeholder='any text'  />`);
    assert.ok(document.querySelector('.bp3-minimal'));
  });
});
