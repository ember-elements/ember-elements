import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | date-picker', function (hooks) {
  setupRenderingTest(hooks);


  test('default date format', async function (assert) {
    let element: any = this.element;
    await render(hbs`<DatePicker @date='2016-08-26'/>`);
    assert.equal(element.querySelector('input').value, '26/08/2016');
  });
  test('date format DD/MM/YYYY', async function (assert) {
    let element: any = this.element;
    await render(hbs`<DatePicker @date="2016-08-26" @format="DD/MM/YYYY"/>`);
    assert.equal(element.querySelector('input').value, '26/08/2016');
  });
  test('date format DD-MM-YYYY', async function (assert) {
    let element: any = this.element;
    await render(hbs`<DatePicker @date='2016-08-26' @format="DD-MM-YYYY"/>`);
    assert.equal(element.querySelector('input').value, '26-08-2016')
  });
  test(' new Date() value', async function (assert) {
    let element: any = this.element;
    let d = new Date('11-14-2018');
    this.set('date1', d);
    await render(hbs`<DatePicker @date={{date1}} @format="DD-MM-YYYY"/>`);
    assert.equal(element.querySelector('input').value, '14-11-2018')
  });

  test(' date object to date object', async function (assert) {
    let element: any = this.element;
    await render(hbs`<DatePicker @date='08-26-2016' />`);
    assert.equal(element.querySelector('input').value, '26/08/2016')
  });
  test(' check isDefaultOpen true', async function (assert) {
    await render(hbs`<DatePicker @date='08-26-2016' @isDefaultOpen=true />`);
    assert.equal(document.querySelectorAll('.popper').length, 1)
  });
  test(' check isDefaultOpen false', async function (assert) {
    await render(hbs`<DatePicker @date='08-26-2016' @isDefaultOpen={{false }}/>`);
    assert.equal(document.querySelectorAll('.popper').length, 0);

  });
});
