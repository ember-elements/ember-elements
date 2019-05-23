import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const PROGRESS_BAR = ".bp3-progress-bar";
const PROGRESS_METER = ".bp3-progress-meter"
module('Integration | Component | progress-bar', function (hooks) {
  setupRenderingTest(hooks);

  test('renders a PROGRESS_BAR', async function (assert) {
    await render(hbs`<ProgressBar/>`);
    assert.ok(this.element.querySelector(PROGRESS_BAR));
  });
  test('does not set width by default', async function (assert) {
    await render(hbs`<ProgressBar/>`);
    assert.equal((this.element.querySelector(PROGRESS_METER) as HTMLInputElement).style.width, "");
  });
  test('value sets width percentage', async function (assert) {
    await render(hbs`<ProgressBar @value={{0.35}}/>`);
    assert.equal((this.element.querySelector(PROGRESS_METER) as HTMLInputElement).style.width, "35%");
  });
});
