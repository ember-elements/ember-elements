import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

import hbs from 'htmlbars-inline-precompile';

import * as Classes from '../classes';

const SIZE_SMALL = 20;
const SIZE_LARGE = 100;

module('Integration | Component | spinner', function (hooks) {
  setupRenderingTest(hooks);

  test('renders a spinner and two paths', async function (assert) {
    await render(hbs`<Spinner></Spinner>`);
    assert.dom('div').hasClass(Classes.SPINNER);
    assert.dom('path').exists();
    assert.dom('path').exists({ count: 2 });
  });

  test('Classes.LARGE/SMALL determine default size', async function (assert) {
    this.set('sizeClass', Classes.SMALL);
    await render(hbs`<Spinner @className={{this.sizeClass}}></Spinner>`);
    assert.dom('svg').hasAttribute('width', `${SIZE_SMALL}`);

    this.set('sizeClass', Classes.LARGE);
    assert.dom('svg').hasAttribute('width', `${SIZE_LARGE}`);
  });

  test('defaults to spinning quarter circle', async function (assert) {
    await render(hbs`<Spinner></Spinner>`);
    assert.dom(`.${Classes.SPINNER}`).doesNotHaveClass(Classes.SPINNER_NO_SPIN);

    const head = await this.element.querySelector(`.${Classes.SPINNER_HEAD}`);
    // NOTE: strokeDasharray is string "X X", but parseInt terminates at non-numeric character
    const pathLength = parseInt(
      head.getAttribute('stroke-dasharray').toString(),
      10
    );
    const offset = head.getAttribute('stroke-dashoffset');

    assert.strictEqual(parseInt(offset), pathLength * (1 - 0.25));
  });

  test('value sets stroke-dashoffset', async function (assert) {
    await render(hbs`<Spinner @value={{0.35}}></Spinner>`);
    assert.dom(`.${Classes.SPINNER}`).hasClass(Classes.SPINNER_NO_SPIN);

    const head = await this.element.querySelector(`.${Classes.SPINNER_HEAD}`);
    // NOTE: strokeDasharray is string "X X", but parseInt terminates at non-numeric character
    const pathLength = parseInt(
      head.getAttribute('stroke-dasharray').toString(),
      10
    );
    const offset = head.getAttribute('stroke-dashoffset');

    assert.strictEqual(parseInt(offset), pathLength * (1 - 0.35));
  });

  test('viewBox adjusts based on size', async function (assert) {
    this.set('size', SIZE_SMALL);
    await render(hbs`<Spinner @size={{this.size}}></Spinner>`);

    const firstVewBox = await this.element
      .querySelector('svg')
      .getAttribute('viewBox');

    this.set('size', SIZE_LARGE);

    const secondVewBox = await this.element
      .querySelector('svg')
      .getAttribute('viewBox');

    assert.notDeepEqual(firstVewBox, secondVewBox);
  });
});
