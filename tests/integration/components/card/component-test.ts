import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | card', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Card/>`);
  var element:any=this.element;
    assert.equal(element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      <Card>
        template block text
      </Card>
    `);

    assert.equal(element.textContent.trim(), 'template block text');
  });

  test('rendering bp3-interactive', async function (assert) {
    await render(hbs`
    <Card @interactive={{true}}>
      template block text
    </Card>
  `);

    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-interactive').length, 1);
  });
  test('rendering bp3-elevation-0', async function (assert) {
    await render(hbs`
    <Card @elevation={{0}}>
      template block text
    </Card>
  `);

    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-elevation-0').length, 1);
  });

  test('rendering bp3-elevation-1', async function (assert) {
    await render(hbs`
    <Card @elevation={{1}}>
      template block text
    </Card>
  `);

    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-elevation-1').length, 1);
  });
  test('rendering bp3-elevation-2', async function (assert) {
    await render(hbs`
    <Card @elevation={{2}}>
      template block text
    </Card>
  `);

    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-elevation-2').length, 1);
  });
  test('rendering bp3-elevation-3', async function (assert) {
    await render(hbs`
    <Card @elevation={{3}}>
      template block text
    </Card>
  `);

    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-elevation-3').length, 1);
  });
  test('rendering bp3-elevation-4', async function (assert) {
    await render(hbs`
    <Card @elevation={{4}}>
      template block text
    </Card>
  `);

    let element = this.element;
    assert.equal(element.querySelectorAll('.bp3-elevation-4').length, 1);
  });
});
