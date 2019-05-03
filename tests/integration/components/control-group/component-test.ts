import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | control-group', function (hooks) {
  setupRenderingTest(hooks);

  test('Control group  renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ControlGroup/>`);

    assert.equal((this.element.textContent as any).trim(), '');

    // Template block usage:
    await render(hbs`
     <ControlGroup>
        template block text
      </ControlGroup>
    `);

    assert.equal((this.element.textContent as any).trim(), 'template block text');
  });
  test('Custom class is rendering', async function (assert) {
    await render(hbs`
      <ControlGroup @class="hello">
        template block text
      </ControlGroup>
    `);
    assert.ok((this.element.getElementsByClassName('hello')));
  });
  test('Custom  styles to control group ', async function (assert) {
    await render(hbs`
      <ControlGroup @style="background:red">
        template block text
      </ControlGroup>
    `);
    assert.equal((this.element.querySelector('.bp3-control-group') as any).style.background, "red");
  });
  test('fill property to control group ', async function (assert) {
    await render(hbs`
      <ControlGroup @fill=true>
        template block text
      </ControlGroup>
    `);
    assert.ok((this.element.getElementsByClassName('bp3-fill')));
  });
  test('set fill property false to control group ', async function (assert) {
    await render(hbs`
      <ControlGroup @fill={{false}}>
        template block text
      </ControlGroup>
    `);
    assert.notOk((this.element.querySelector('.bp3-fill')));
  });
  test('vertical property to control group ', async function (assert) {
    await render(hbs`
      <ControlGroup @vertical=true>
        template block text
      </ControlGroup>
    `);
    assert.ok((this.element.getElementsByClassName('bp3-vertical')));
  });


});
