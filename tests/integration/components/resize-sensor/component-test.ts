import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | resize-sensor', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{resize-sensor}}`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#resize-sensor}}
        template block text
      {{/resize-sensor}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
  var that=this;
   this.set('onResize',function(entries) { 
    for (const entry of entries) {
      const { left, top, width, height } = entry.contentRect;
      that.set('width', width);
    }
   });
    // Template block usage:
    await render(hbs`
      {{#resize-sensor class='resize' onResize=(action onResize)}}
        template block text
      {{/resize-sensor}}
    `);

    assert.equal(this.element.clientWidth, this.width);
  });


  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
  var that=this;
   this.set('onResize',function(entries) { 
    for (const entry of entries) {
      const { left, top, width, height } = entry.contentRect;
      that.set('width1', width);
    }
   });
    // Template block usage:
    await render(hbs`
      {{#resize-sensor class='resize' onResize=(action onResize) observeParents=true}}
        template block text
      {{/resize-sensor}}
    `);

    assert.equal(document.body.clientWidth, this.width1);
  });
  
});
