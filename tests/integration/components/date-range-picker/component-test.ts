import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | date-range-picker', function(hooks) {
  setupRenderingTest(hooks);

 
  test('date range picker default', async function (assert) {
    this.set('range', {
      start: new Date('12/1/2018'),
      end: new Date('12/5/2018'),
    });
    var element:any=this.element;
    await render(hbs`<DateRangePicker @range={{this.range}}/>`);
    assert.equal(element.querySelector('input').value, '01-12-2018 - 05-12-2018')
  });
  test('date range picker format DD/MM/YYYY', async function (assert) {
    this.set('range', {
      start: new Date('12/1/2018'),
      end: new Date('12/5/2018'),
    });
    var element:any=this.element;
    await render(hbs`<DateRangePicker @range={{this.range}} @format='DD/MM/YYYY'/>`);
    assert.equal(element.querySelector('input').value, '01/12/2018 - 05/12/2018')
  });
  test('date range picker format `MM/DD/YYYY', async function (assert) {
    this.set('range', {
      start: new Date('12/1/2018'),
      end: new Date('12/5/2018'),
    });
    var element:any=this.element;
    await render(hbs`<DateRangePicker @range={{this.range}} @format='MM/DD/YY'/>`);
    assert.equal(element.querySelector('input').value, '12/01/18 - 12/05/18')
  });

  test(' check isDefaultOpen true', async function (assert) {
    this.set('range', {
      start: new Date('12/1/2018'),
      end: new Date('12/5/2018'),
    });
    await render(hbs`<DateRangePicker @range={{this.range}} @isDefaultOpen=true/>`);
    assert.equal(document.querySelectorAll('.popper').length, 1)
  });
  test(' check isDefaultOpen false', async function (assert) {
    this.set('range', {
      start: new Date('12/1/2018'),
      end: new Date('12/5/2018'),
    });
    await render(hbs`<DateRangePicker @range={{this.range}} @isDefaultOpen={{false}} />`);
    assert.equal(document.querySelectorAll('.popper').length, 0);
});
});