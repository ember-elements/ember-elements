import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
// import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
// import Ember from 'ember';
import { click } from '@ember/test-helpers';

module('Integration | Component | dom-outer-render', async function(hooks) {
  setupRenderingTest(hooks);

  
  

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
  
    // Template block usage:
    var that=this;
    this.set('buttonAction', function () {
      that.set('open', true);
    });
    this.render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#if open}}
      <DomOuterRender @destinationElementId="outerDom">
        template block text
      </DomOuterRender>
      {{/if}}
      <div id="outerDom"></div>
    `);
    await click('button');
  
    assert.equal((document.querySelector('#outerDom') as HTMLInputElement).innerText, 'template block text');
  });
});
