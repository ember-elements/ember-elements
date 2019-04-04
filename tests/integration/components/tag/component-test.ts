import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { click } from '@ember/test-helpers';

module('Integration | Component | tag', function (hooks) {
  setupRenderingTest(hooks);

  test('rendering tags', async function (assert) {

    await render(hbs`<Tag  @value="hellow"/>`);
    var doc: any = document.querySelector('.bp3-text-overflow-ellipsis');
    assert.equal(doc.innerText, "hellow")
  });
  test('active=true', async function (assert) {
    await render(hbs`<Tag  @value="hellow" @active=true/>`);
    assert.equal(document.querySelectorAll('.bp3-active').length, 1);
  });
  test('fill=true', async function (assert) {
    await render(hbs`<Tag  @value="hellow" @fill=true/>`);
    assert.equal(document.querySelectorAll('.bp3-fill').length, 2);
  });
  test('large=true', async function (assert) {
    await render(hbs`<Tag  @value="hellow" @large=true/>`);
    assert.equal(document.querySelectorAll('.bp3-large').length, 1);
  });
  test('minimal=true', async function (assert) {
    await render(hbs`<Tag  @value="hellow" @minimal=true/>`);
    assert.equal(document.querySelectorAll('.bp3-minimal').length, 1);
  });
  test('removable', async function (assert) {
    await render(hbs`<Tag  @value="hellow" @removable=true/>`);
    assert.equal(document.querySelectorAll('.bp3-tag-remove').length, 1);
  });
  test('interactive=true', async function (assert) {
    await render(hbs`<Tag  @value="hellow" @interactive=true/>`);
    assert.equal(document.querySelectorAll('.bp3-interactive').length, 1);
  });
  test('round=true', async function (assert) {
    await render(hbs`<Tag  @value="hellow" @round=true/>`);
    assert.equal(document.querySelectorAll('.bp3-round').length, 1);
  });
  test('left icon', async function (assert) {
    await render(hbs`<Tag  @value="hellow" @icon="home"/>`);
    assert.equal(document.querySelectorAll('svg').length, 1);
  });
  test('right icon', async function (assert) {
    await render(hbs`<Tag  @value="hellow" @rightIcon="home"/>`);
    assert.equal(document.querySelectorAll('svg').length, 1);
  });
  test('primary=true', async function (assert) {
    await render(hbs`<Tag  @value="hellow" @intent="primary"/>`);
    assert.equal(document.querySelectorAll('.bp3-intent-primary').length, 1);
  });
  test('success=true', async function (assert) {
    await render(hbs`<Tag  @value="hellow" @intent="success"/>`);
    assert.equal(document.querySelectorAll('.bp3-intent-success').length, 1);
  }); test('warning=true', async function (assert) {
    await render(hbs`<Tag  @value="hellow" @intent="warning"/>`);
    assert.equal(document.querySelectorAll('.bp3-intent-warning').length, 1);
  });
  test('danger=true', async function (assert) {
    await render(hbs`<Tag  @value="hellow" @intent="danger"/>`);
    assert.equal(document.querySelectorAll('.bp3-intent-danger').length, 1);
  });
  test('onClick on tag', async function (assert) {
    var that=this;
    this.set('myAction', function() {
     that.set('data',true);
     });
    await render(hbs`<Tag  @onClick={{action myAction}} @value="hellow" />`);
    await click('.bp3-tag');
    assert.equal(this.get('data'), true);
  });
  test('onRemove function is returned', async function (assert) {
    var that=this;
    this.set('myAction', function(value:string) {
     that.set('data',value);
     });
    await render(hbs`<Tag @removable=true @onRemove={{action myAction}} @value="hellow" />`);
    await click('.bp3-tag-remove');
    assert.equal(this.get('data'), "hellow");
  });

});
