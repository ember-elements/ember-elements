import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
module('Integration | Component | file-input', function (hooks) {
  setupRenderingTest(hooks);

  test('Custom Class is rendering ', async function (assert) {
    await render(hbs`<FileInput @class="Hii"/>`);
    assert.ok(this.element.querySelector('.Hii'));
  });

  test('Custom style to fileInput ', async function (assert) {
    await render(hbs`<FileInput @style="background:red"/>`);
    assert.equal((this.element.querySelector('.bp3-file-input') || {} as any).style.background, 'red');
  });
  test('Custom style to fileInput ', async function (assert) {
    await render(hbs`<FileInput @style="background:red"/>`);
    assert.equal((this.element.querySelector('.bp3-file-input') as any).style.background, 'red');
  });
  test('Disabled FileInput', async function (assert) {
    await render(hbs`<FileInput @disabled={{true}}/>`);
    assert.ok(this.element.querySelector('.bp3-disabled'), "disabled class to label tag");
    assert.ok((this.element.querySelector('input') as any).disabled, "inherit disabled to input");
  });
  test('Disabled false to FileInput', async function (assert) {
    await render(hbs`<FileInput @disabled={{false}}/>`);
    assert.notOk(this.element.querySelector('.bp3-disabled'));
    assert.notOk((this.element.querySelector('input') as any).disabled);
  });
  test('Set FileInput fill with true ', async function (assert) {
    await render(hbs`<FileInput @fill={{true}}/>`);
    assert.ok(this.element.querySelector('.bp3-fill'));
  });
  test('Set FileInput fill false ', async function (assert) {
    await render(hbs`<FileInput @fill={{false}}/>`);
    assert.notOk(this.element.querySelector('.bp3-fill'));
  });
  test('Set FileInput hasSelection with true ', async function (assert) {
    await render(hbs`<FileInput @hasSelection={{true}}/>`);
    assert.ok(this.element.querySelector('.bp3-file-input-has-selection'));
  });
  test('Set FileInput hasSelection false ', async function (assert) {
    await render(hbs`<FileInput @hasSelection={{false}}/>`);
    assert.notOk(this.element.querySelector('.bp3-file-input-has-selection'));
  });
  test('inputProps props are rendering @ FileInput  ', async function (assert) {
    this.set('inputProps', {
      class: "hii",
      style: "background:red",
      name: 'fileInput',
    })
    await render(hbs`<FileInput @inputProps={{inputProps}}/>`);
    assert.equal((this.element.querySelector('input') as any).style.background, "red");
    assert.equal((this.element.querySelector('input') as any).name, "fileInput");
    assert.ok(this.element.querySelector('input.hii'), "class");
  });
  test('large style to FileInput', async function (assert) {
    await render(hbs`<FileInput @large={{true}}/>`);
    assert.ok(this.element.querySelector('.bp3-large'));
  });
  test('large false to FileInput ', async function (assert) {
    await render(hbs`<FileInput @large={{false}}/>`);
    assert.notOk(this.element.querySelector('.bp3-large'));
  });
  test('renders default or custom text', async function (assert) {
    await render(hbs`<FileInput />`);
    assert.equal((this.element.querySelector('.bp3-file-upload-input') as any).textContent.trim(), 'Choose file...');
    await render(hbs`<FileInput @text="fileinput"/>`);
    assert.equal((this.element.querySelector('.bp3-file-upload-input') as any).textContent.trim(), 'fileinput');
  });
  test('renders yield value', async function (assert) {
    await render(hbs`<FileInput>fileinput</FileInput>`);
    assert.equal((this.element.querySelector('.bp3-file-upload-input') as any).textContent.trim(), 'fileinput');
  });

});
