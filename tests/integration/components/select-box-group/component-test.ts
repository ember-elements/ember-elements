import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { click } from '@ember/test-helpers';

module('Integration | Component | select-box-group', function (hooks) {
  setupRenderingTest(hooks);
  test('selected value is rendering (type =input box )', async function (assert) {
    this.set(' data', [
      { groupName: 'address', options: ['address', 'city', 'state'] },
      { groupName: 'address1', options: ['address1', 'city1', 'state1'] },
      { groupName: 'address2', options: ['address2', 'city2', 'state2'] },
      { options: ['hi12', 'hi13'] }

    ]);
    this.set('selected', 'city');
    await render(hbs`{{select-box-group data=data selected=selected }}`);
    var inputData: any = document.querySelector('input');
    assert.equal(inputData.value, 'city');
  });
  test('selectbox  active on click (type=input box)', async function (assert) {
    this.set(' data', [
      { groupName: 'address', options: ['address', 'city', 'state'] },
      { groupName: 'address1', options: ['address1', 'city1', 'state1'] },
      { groupName: 'address2', options: ['address2', 'city2', 'state2'] },
      { options: ['hi12', 'hi13'] }

    ]);
    this.set('selected', 'city');
    await render(hbs`{{select-box-group  data=this.data selected=this.selected  }}`);
    await click('input');
    assert.equal(document.querySelectorAll('.popper').length, 1)

  });
  test(' check isDefaultOpen true', async function (assert) {
    this.set(' data', [
      { groupName: 'address', options: ['address', 'city', 'state'] },
      { groupName: 'address1', options: ['address1', 'city1', 'state1'] },
      { groupName: 'address2', options: ['address2', 'city2', 'state2'] },
      { options: ['hi12', 'hi13'] }

    ]);
    this.set('selected', 'city');
    await render(hbs`{{select-box-group data=data selected=selected isDefaultOpen=true}}`);
    assert.equal(document.querySelectorAll('.popper').length, 1)
  });
  test(' check isDefaultOpen false', async function (assert) {
    this.set(' data', [
      { groupName: 'address', options: ['address', 'city', 'state'] },
      { groupName: 'address1', options: ['address1', 'city1', 'state1'] },
      { groupName: 'address2', options: ['address2', 'city2', 'state2'] },
      { options: ['hi12', 'hi13'] }

    ]);
    this.set('selected', 'city');
    await render(hbs`{{select-box-group  data=data selected=selected }}`);
    assert.equal(document.querySelectorAll('.popper').length, 0);
  });
});
