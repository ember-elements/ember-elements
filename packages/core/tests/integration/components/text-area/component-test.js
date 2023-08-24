import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

import hbs from 'htmlbars-inline-precompile';

import * as Classes from '../classes';
module('Integration | Component | text-area', function (hooks) {
  setupRenderingTest(hooks);

  test('supports className, fill, & large & small', async function (assert) {
    await render(
      hbs`<TextArea @className='foo' @fill={{true}} @large={{true}} @small={{true}} />`
    );

    assert.dom('textarea').hasClass(Classes.INPUT);
    assert.dom('textarea').hasClass(Classes.FILL);
    assert.dom('textarea').hasClass(Classes.LARGE);
    assert.dom('textarea').hasClass(Classes.SMALL);
    assert.dom('textarea').hasClass('foo');
  });

  test('can resize automatically', async function (assert) {
    this.set('text', 'hii');

    await render(
      hbs`<TextArea @growVertically={{true}} @value={{this.text}} />`
    );

    const height = await this.element.querySelector('textarea').style.height;

    this.set(
      'text',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean finibus eget enim non accumsan'
    );

    assert.notEqual(
      height,
      this.element.querySelector('textarea').style.height
    );
  });

  test('doesnt clobber user-supplied styles', async function (assert) {
    this.set('text', 'hii');

    await render(
      hbs`<TextArea @growVertically={{true}} @value={{this.text}} style='margin-top:10px'/>`
    );

    this.set(
      'text',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean finibus eget enim non accumsan'
    );

    assert
      .dom('textarea')
      .hasAttribute(
        'style',
        `margin-top: 10px; height: ${
          this.element.querySelector('textarea').style.height
        };`
      );
  });

  test('can fit large initial content', async function (assert) {
    this.set(
      'text',
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenean finibus eget enim non accumsan.
        Nunc lobortis luctus magna eleifend consectetur.
        Suspendisse ut semper sem, quis efficitur felis.
        Praesent suscipit nunc non semper tempor.
        Sed eros sapien, semper sed imperdiet sed,
        dictum eget purus. Donec porta accumsan pretium.
        Fusce at felis mattis, tincidunt erat non, varius erat.`
    );

    await render(
      hbs`<TextArea @growVertically={{true}} @value={{this.text}} />`
    );

    const scrollHeightInPixels =
      await this.element.querySelector('textarea').scrollHeight;

    this.set(
      'text',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean finibus eget enim non accumsan'
    );

    assert.strictEqual(
      scrollHeightInPixels + 'px',
      this.element.querySelector('textarea').style.height
    );
  });
});
