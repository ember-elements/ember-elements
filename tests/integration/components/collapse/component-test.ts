import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | collapse', function (hooks) {
  setupRenderingTest(hooks);

  test('has the correct className', async function (assert) {
    await render(hbs`
     <Collapse>
        template block text
      </Collapse>
    `);
    assert.ok(this.element.querySelector('.bp3-collapse'));
  });
  test('is closed', async function (assert) {
    await render(hbs`
     <Collapse @isOpen={{false}}>
        template block text
      </Collapse>
    `);
    assert.equal((this.element.querySelector('.bp3-collapse') as HTMLElement).style.height, "");
  });
  test('is open', async function (assert) {
    await render(hbs`
     <Collapse @isOpen={{true}}>
        template block text
      </Collapse>
    `);
    assert.equal((this.element.querySelector('.bp3-collapse') as HTMLElement).style.height, "auto");
  });
  test('is opening', async function (assert) {
    await render(hbs`
     <Collapse @isOpen={{true}}>
        template block text
      </Collapse>
    `);
    assert.equal((this.element.querySelector('.bp3-collapse') as HTMLElement).style.height, "auto");
  });
  test('unmounts children by default', async function (assert) {
    await render(hbs`
     <Collapse @isOpen={{false}}>
         <div class="removed-child" />
      </Collapse>
    `);
    assert.notOk((this.element.querySelector('.removed-child') as HTMLElement));
  });
  test('keepChildrenMounted keeps child mounted', async function (assert) {
    await render(hbs`
     <Collapse @isOpen={{false}} @keepChildrenMounted={{true}}>
         <div class="hidden-child" />
      </Collapse>
    `);
    assert.ok((this.element.querySelector('.hidden-child') as HTMLElement));
  });

});
