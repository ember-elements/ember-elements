import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

var CALLOUT = ".bp3-callout";
var DANGER = ".bp3-intent-danger";

module('Integration | Component | callout', function (hooks) {
  setupRenderingTest(hooks);

  test('supports className', async function (assert) {
    await render(hbs`<Callout @class="foo"/>`);

    assert.ok(this.element.querySelector(".foo"));
    assert.notOk(this.element.querySelector("h4"), "expected no H4");
    assert.ok(this.element.querySelector(CALLOUT), "default CALLOUT class");
  });
  test('supports icon', async function (assert) {
    await render(hbs`<Callout @icon="lock"/>`);

    assert.ok(this.element.querySelector("svg"));
  });
  test('supports intent', async function (assert) {
    await render(hbs`<Callout @intent="danger"/>`);

    assert.ok(this.element.querySelector(DANGER));
  });
  test('intent renders default icon', async function (assert) {
    await render(hbs`<Callout @intent="danger"/>`);

    assert.ok(this.element.querySelector("svg"));
  });
  test('icon=null removes intent icon', async function (assert) {
    await render(hbs`<Callout @icon={{null}} @intent="danger"/>`);

    assert.notOk(this.element.querySelector("svg"));
  });
  test('renders optional title element', async function (assert) {
    await render(hbs`<Callout @title="title"/>`);

    assert.ok(this.element.querySelector("h4"));
  });
  test('renders optional title element ss html element', async function (assert) {
    await render(hbs`<Callout @title="<em>typings fail</em>"/>`);

    assert.ok(this.element.querySelector("em"));
  });

});
