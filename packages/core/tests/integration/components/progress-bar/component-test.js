import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

import hbs from 'htmlbars-inline-precompile';

const NS = 'ee';
const PROGRESS_BAR = `${NS}-progress-bar`;
const PROGRESS_METER = `.${NS}-progress-meter`;

module('Integration | Component | progress-bar', function (hooks) {
  setupRenderingTest(hooks);

  test('renders a PROGRESS_BAR ', async function (assert) {
    await render(hbs`<ProgressBar></ProgressBar>`);
    assert.dom('div').hasClass(PROGRESS_BAR);
  });

  test('does not set width by default', async function (assert) {
    await render(hbs`<ProgressBar></ProgressBar>`);
    assert.strictEqual(
      this.element.querySelector(PROGRESS_METER).style.width,
      ''
    );
  });
  test('value sets width percentage', async function (assert) {
    await render(hbs`<ProgressBar @value={{0.35}}></ProgressBar>`);
    assert.strictEqual(
      this.element.querySelector(PROGRESS_METER).style.width,
      '35%'
    );
  });
});
