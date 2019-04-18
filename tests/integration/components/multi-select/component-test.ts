import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { click } from '@ember/test-helpers';

module('Integration | Component | multi-select', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{multi-select}}`);
    var element: any = this.element;
    assert.equal(element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#multi-select}}
        template block text
      {{/multi-select}}
    `);
    assert.equal(element.textContent.trim(), 'template block text');
  });
  test('multi selectbox is close before click', async function (assert) {
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
    assert.expect(1);
    await render(hbs`{{multi-select data=this.data}}`);
    await click('input');
    assert.equal(document.querySelectorAll('.bp3-popover-open').length, 1, 'select is class changed on click');
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
    this.set('selected', ['hi1']);
    await render(hbs`{{multi-select data=this.data selected=selected isDefaultOpen= true}}`);
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
    this.set('selected', ['hi1']);
    await render(hbs`{{multi-select data=this.data selected=selected }}`);
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
    this.set('selected', ['hi1']);
    await render(hbs`{{multi-select data=this.data selected=selected class='mult-select-rendering' }}`);
    assert.equal(document.querySelectorAll('.mult-select-rendering').length, 1);
  });
  test(' check style arg rendering', async function (assert) {
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
    this.set('selected', ['hi1']);
    await render(hbs`{{multi-select data=this.data selected=selected style='width:50%' class='mult-select-rendering' }}`);
    var width: any = document.querySelector('.mult-select-rendering');
    assert.equal(width.style.width, '50%');
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
    let d = ['hi1'];
    this.set('selected', d);
    await render(hbs`{{multi-select data=this.data   selected=this.selected style='width:50%' class='mult-select-rendering' }}`);
    var innerText: any = document.querySelector('.bp3-text-overflow-ellipsis');
    assert.equal(innerText.textContent.trim(), 'hi1');
  });
  test(' multiple selected value are rendering @ui', async function (assert) {
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
    let d = ['hi1', 'hi2'];
    this.set('selected', d);
    await render(hbs`{{multi-select data=this.data selected=this.selected style='width:50%' class='mult-select-rendering' }}`);
    assert.equal(document.querySelectorAll('.bp3-text-overflow-ellipsis').length, 2);
  });
  test(' multi-select popover is rendering @ui', async function (assert) {
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
    let d = ['hi1', 'hi2'];
    this.set('selected', d);

    await render(hbs`{{multi-select data=this.data selected=this.selected  }}`);
    await click('input');
    assert.equal(document.querySelectorAll('.popper').length, 1);
  });
  test(' multi-select options are rendering  @ui', async function (assert) {
    let data = [
      'hi1',

    ];
    this.set('data', data);
    let d:Array<string> = [];
    this.set('selected', d);

    await render(hbs`{{multi-select data=this.data selected=this.selected  }}`);
    await click('input');
    var innerText: any = document.querySelector('.bp3-text-overflow-ellipsis');
    assert.equal(innerText.textContent.trim(), 'hi1');
  });
  test('multi-select all options are rendering  @ui', async function (assert) {
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
    let d:Array<string> = [];
    this.set('selected', d);

    await render(hbs`{{multi-select data=this.data selected=this.selected  }}`);
    await click('input');
    assert.equal(document.querySelectorAll('.bp3-text-overflow-ellipsis').length, 12);
  });
  test('multi-select all options are rendering  @ui except select values', async function (assert) {
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
    let d = ['hi1', 'hi2'];
    this.set('selected', d);

    await render(hbs`{{multi-select data=this.data selected=this.selected  }}`);
    await click('input');
    let doc:any = document.querySelector('.popper')
    assert.equal(doc.querySelectorAll('.bp3-text-overflow-ellipsis').length, 10);
  });
  test('placeholder is rendering', async function (assert) {
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
    let d = ['hi1', 'hi2'];
    this.set('selected', d);

    await render(hbs`{{multi-select data=this.data selected=this.selected placeholder='add items' }}`);
    var placeholder: any = document.querySelector('.bp3-input-ghost');
    assert.equal(placeholder.placeholder, 'add items');
  });
  test('disabled is rendering', async function (assert) {
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
    let d = ['hi1', 'hi2'];
    this.set('selected', d);

    await render(hbs`{{multi-select data=this.data selected=this.selected disabled=true placeholder='add items' }}`);
    var disable: any = document.querySelector('.bp3-input-ghost');
    assert.equal(disable.disabled, true);
    assert.equal(document.querySelectorAll('.bp3-tag-remove').length, 0);
  });
  test('isDeleteButtonRequired =false ', async function (assert) {
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
    let d = ['hi1', 'hi2'];
    this.set('selected', d);

    await render(hbs`{{multi-select data=this.data selected=this.selected isDBrequired=false }}`);
    assert.equal(document.querySelectorAll('.bp3-button').length, 0);
  });
  test('isDeleteButtonRequired =true ', async function (assert) {
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
    let d = ['hi1', 'hi2'];
    this.set('selected', d);

    await render(hbs`{{multi-select data=this.data selected=this.selected isDBrequired=true }}`);
    assert.equal(document.querySelectorAll('.bp3-button').length, 1);
  });
  test('isDefaultOpen =true ', async function (assert) {
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
    let d = ['hi1', 'hi2'];
    this.set('selected', d);

    await render(hbs`{{multi-select data=this.data selected=this.selected isDefaultOpen=true }}`);
    assert.equal(document.querySelectorAll('.popper').length, 1);
  });
  test('isDefaultOpen =false ', async function (assert) {
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
    let d = ['hi1', 'hi2'];
    this.set('selected', d);

    await render(hbs`{{multi-select data=this.data selected=this.selected isDefaultOpen=false }}`);
    assert.equal(document.querySelectorAll('.popper').length, 0);
  });
  
});
