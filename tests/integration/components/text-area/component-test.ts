import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, triggerKeyEvent } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | text-area', function (hooks) {
  setupRenderingTest(hooks);

  test('can resize automatically', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('onChange1', function (e: any) {
      e.target.scrollHeight = 500;
    })
    await render(hbs`<TextArea @textAreaId="textAreaId1" @growVertically=true @onChange={{action onChange1}}>hii</TextArea>`);
    await triggerKeyEvent('textarea', 'keypress', "Enter")

    assert.equal((this.element.querySelector('textarea') as any).style.height, "");

  });

  test('intent changes render', async function (assert) {
    this.set('intent', "primary");
    await render(hbs`<TextArea @intent={{intent}}></TextArea>`);

    assert.ok(this.element.querySelector('.bp3-intent-primary'));

  });
});
