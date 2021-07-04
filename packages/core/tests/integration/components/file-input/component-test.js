import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

import hbs from 'htmlbars-inline-precompile';

import * as Classes from '../classes';
module('Integration | Component | forms/file-input', function (hooks) {
  setupRenderingTest(hooks);
  test('supports className, fill, & large', async function (assert) {
    await render(hbs`<FileInput @className='foo' @fill={{true}} @large={{true}} />`);
    assert.dom('label').hasClass(Classes.FILE_INPUT);
    assert.dom('label').hasClass(Classes.FILL);
    assert.dom('label').hasClass(Classes.LARGE);
    assert.dom('label').hasClass(Classes.FILE_INPUT);
    assert.dom('label').hasClass('foo');
  });

  test('renders default or custom text', async function (assert) {
    this.set('text', undefined);
    await render(hbs`<FileInput @text={{this.text}}/>`);

    assert.dom('.' + Classes.FILE_UPLOAD_INPUT).hasText('Choose file...');

    this.set('text', 'Input file...');
    assert.dom('.' + Classes.FILE_UPLOAD_INPUT).hasText('Input file...');
  });
});
