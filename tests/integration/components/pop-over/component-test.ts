import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { click } from '@ember/test-helpers';

module('Integration | Component | pop-over', function(hooks) {
  setupRenderingTest(hooks);

  test('popover close before click', async function (assert) {
    assert.expect(2);
    await render(hbs`<PopOver/>`);
    assert.equal(document.querySelectorAll('.bp3-popover-open').length, 0, 'popover is class changed on click');
    assert.equal(document.querySelectorAll('.bp3-active').length, 0, 'button is active on click');
  });

  test('popover active on click', async function (assert) {
    assert.expect(2);
    await render(hbs`<PopOver @active=true/>`);
    await click('button');
    assert.equal(document.querySelectorAll('.bp3-popover-open').length, 1, 'popover is class changed on click');
    assert.equal(document.querySelectorAll('.bp3-active').length, 1, 'button is active on click');
  });

  test('popover open on button click', async function (assert) {
    assert.expect(1);
    await render(hbs`<PopOver/>`);
    await click('button');
    let d = await document.querySelectorAll('.bp3-transition-container').length;
    assert.equal(d, 1, 'popover is opened on button click');
  });

  test('popover close on button click', async function (assert) {
    assert.expect(1);
    await render(hbs`<PopOver/>`);
    await click('button');
    await click('button');
    let d = await document.querySelectorAll('.bp3-transition-container').length;
    assert.equal(d, 0, 'popover is close on button click');
  });
});
