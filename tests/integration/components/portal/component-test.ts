import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

module('Integration | Component | portal', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    await render(hbs`
     <div id="destination"></div>
      <Portal @destinationElementId="destination">
        template block text
      </Portal>
    `);

    assert.equal((this.element.querySelector('#destination') as any).textContent.trim(), 'template block text');
  });

  test('if `renderInPlace` is truthy, the given `destinationElement` is ignored', async function (assert) {
    this.set('renderEnabled', false);
    this.set('renderInPlace', true);

    await render(hbs`
     <div id="destination-element"></div>
     {{#if renderEnabled}}
      <Portal  @renderInPlace={{renderInPlace}} @destinationElement={{destinationElement}}>
        <span id="portal-content">template block text</span>
      </Portal>
    {{/if}}
    `);

    Ember.run(() => {
      this.set('destinationElement', document.querySelector('#destination-element'));
      this.set('renderEnabled', true);
    });

    let content: any = document.querySelector('#portal-content');
    assert.notEqual(content.parentElement.id, 'destination-element');

    Ember.run(() => {
      this.set('renderInPlace', false);
    });

    assert.equal(content.parentElement.id, 'destination-element');

  });

  test('can switch `renderInPlace` with `destinationElementId`', async function (assert) {
    this.set('renderInPlace', true);

    await render(hbs`
     <div id="destination-element"></div>
      <Portal  @renderInPlace={{renderInPlace}} @destinationElementId="destination-element">
        <span id="portal-content">template block text</span>
      </Portal>
    `);

    let content: any = document.querySelector('#portal-content');
    assert.notEqual(content.parentElement.id, 'destination-element');

    Ember.run(() => {
      this.set('renderInPlace', false);
    });

    assert.equal(content.parentElement.id, 'destination-element');

    Ember.run(() => {
      // switch back
      this.set('renderInPlace', true);
    });

    assert.notEqual(content.parentElement.id, 'destination-element');

  });
});
