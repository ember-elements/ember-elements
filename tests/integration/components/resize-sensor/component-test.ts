import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

module('Integration | Component | resize-sensor', function (hooks) {
  setupRenderingTest(hooks);


  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    var that = this;
    this.set('onResize', function (entries: any) {
      for (const entry of entries) {
        const { width } = entry.contentRect;
        that.set('width', Ember.String.htmlSafe(`width:${width}px`));
        that.set('actualWidth', width + "px")
      }
    });
    // Template block usage:
    await render(hbs`
      {{#resize-sensor class='resize' onResize=(action onResize)}}
        <div id="sensorWidth" style={{width}}>
         width is rendering @ DOM
         </div>
      {{/resize-sensor}}
    `);
    assert.equal((document.querySelector('#sensorWidth') as HTMLInputElement).style.width, this.get('actualWidth'));
  });


  // test('it renders based on parents', async function (assert) {
  //   // Set any properties with this.set('myProperty', 'value');
  //   // Handle any actions with this.set('myAction', function(val) { ... });
  //   var that = this;
  //   this.set('onResize', function (entries: any) {
  //     for (const entry of entries) {
  //       const { width } = entry.contentRect;
  //       that.set('width1', width);
  //     }
  //   });
  //   // Template block usage:
  //   await render(hbs`
  //     {{#resize-sensor class='resize' onResize=(action onResize) observeParents=true}}
  //       template block text
  //     {{/resize-sensor}}
  //   `);

  //   assert.equal(document.body.clientWidth, this.get('width1'));
  // });

});
