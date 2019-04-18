import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { triggerEvent } from '@ember/test-helpers';

module('Integration | Component | tool-tip', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{tool-tip}}`);
    var element: any = this.element;

    assert.equal(element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#tool-tip}}
        template block text
      {{/tool-tip}}
    `);

    assert.equal(element.textContent.trim(), 'template block text');
  });
  test('render | content', async function (assert) {

    await render(hbs`{{#tool-tip class='bp3-tooltip-indicator' content="it is tooltip"}}it is tooltip{{/tool-tip}}`);
    await triggerEvent('.bp3-tooltip-indicator', 'mouseover');
    assert.ok((document.querySelector('.tooltip-popper') as any).textContent.trim());

  });
  test('MouseEnter event is working', async function (assert) {

    await render(hbs`{{#tool-tip class='bp3-tooltip-indicator' content="it is tooltip"}}it is tooltip{{/tool-tip}}`);
    await triggerEvent('.bp3-tooltip-indicator', 'mouseover');
    assert.ok((document.querySelector('.tooltip-popper') as any).textContent.trim());

  });
  test('MouseLeave event is working', async function (assert) {
    await render(hbs`{{#tool-tip class='bp3-tooltip-indicator' content="it is tooltip"}}it is tooltip{{/tool-tip}}`);
    await triggerEvent('.bp3-tooltip-indicator', 'mouseover');
    assert.ok((document.querySelector('.tooltip-popper') as any).textContent.trim());
    await triggerEvent('.bp3-tooltip-indicator', 'mouseout');
    assert.equal(document.querySelector('.tooltip-popper'), null);
  });
  test('default content', async function (assert) {
    await render(hbs`{{#tool-tip class='bp3-tooltip-indicator' }}it is tooltip{{/tool-tip}}`);
    await triggerEvent('.bp3-tooltip-indicator', 'mouseover');
    assert.ok((document.querySelector('.tooltip-popper') as any).textContent.trim());
  });
  test('defaultIsOpen=true', async function (assert) {
    await render(hbs`{{#tool-tip class='bp3-tooltip-indicator' defaultIsOpen=true }}it is tooltip{{/tool-tip}}`);
    assert.ok((document.querySelector('.tooltip-popper') as any).textContent.trim());
  });
  test('disabled=true with mouseEnter to open tooltip', async function (assert) {
    await render(hbs`{{#tool-tip class='bp3-tooltip-indicator'  disabled=true content="it is tooltip"}}it is tooltip{{/tool-tip}}`);
    await triggerEvent('.bp3-tooltip-indicator', 'mouseover');
    assert.equal(document.querySelector('.tooltip-popper'), null);

  });
  test('disabled=true with isOpen to open tooltip', async function (assert) {
    await render(hbs`{{#tool-tip class='bp3-tooltip-indicator'  disabled=true isOpen=true content="it is tooltip"}}it is tooltip{{/tool-tip}}`);
    assert.equal(document.querySelector('.tooltip-popper'), null);
  });

  test('targetClassName is rendering', async function (assert) {
    await render(hbs`{{#tool-tip class='bp3-tooltip-indicator'  targetClassName="hellow" content="it is tooltip"}}it is tooltip{{/tool-tip}}`);
    await triggerEvent('.bp3-tooltip-indicator', 'mouseover');
    assert.ok(document.querySelector('.hellow'));

  });
  test('placement', async function (assert) {
    await render(hbs`{{#tool-tip class='bp3-tooltip-indicator'  placement='top' content="it is tooltip"}}it is tooltip{{/tool-tip}}`);
    await triggerEvent('.bp3-tooltip-indicator', 'mouseover');
    assert.ok($('.tooltip-popper').attr('x-placement'));

  });
  test('intent=primary', async function (assert) {
    await render(hbs`{{#tool-tip class='bp3-tooltip-indicator' intent="primary" content="it is tooltip"}}it is tooltip{{/tool-tip}}`);
    await triggerEvent('.bp3-tooltip-indicator', 'mouseover');
    assert.ok(document.getElementsByClassName('primary'));
  });
  test('intent=success', async function (assert) {
    await render(hbs`{{#tool-tip class='bp3-tooltip-indicator' intent="success" content="it is tooltip"}}it is tooltip{{/tool-tip}}`);
    await triggerEvent('.bp3-tooltip-indicator', 'mouseover');
    assert.ok(document.getElementsByClassName('success'));
  });
  test('intent=warning', async function (assert) {
    await render(hbs`{{#tool-tip class='bp3-tooltip-indicator' intent="warning" content="it is tooltip"}}it is tooltip{{/tool-tip}}`);
    await triggerEvent('.bp3-tooltip-indicator', 'mouseover');
    assert.ok(document.getElementsByClassName('warning'));
  });
  test('intent=danger', async function (assert) {
    await render(hbs`{{#tool-tip class='bp3-tooltip-indicator' intent="danger" content="it is tooltip"}}it is tooltip{{/tool-tip}}`);
    await triggerEvent('.bp3-tooltip-indicator', 'mouseover');
    assert.ok(document.getElementsByClassName('danger'));
  });
});
