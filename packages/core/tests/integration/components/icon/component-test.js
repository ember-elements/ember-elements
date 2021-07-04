import { render } from '@ember/test-helpers';
// import all icons from '@ember-elements/icons'
import { IconSvgPaths16, IconSvgPaths20 } from '@ember-elements/icons';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

import hbs from 'htmlbars-inline-precompile';

let SIZE_STANDARD = 16;
let SIZE_LARGE = 20;
let DANGER = 'danger';
let INTENT_DANGER = 'ee-intent-danger';

module('Integration | Component | icon', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders <Icon>', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Icon @icon='calendar' />`);
    assert.dom('svg').exists();
    assert.dom('path').hasAttribute('d', IconSvgPaths16['calendar'][0]);
  });

  test('iconSize=16 renders standard size', async function (assert) {
    this.setProperties({
      iconSize: SIZE_STANDARD,
    });
    await render(hbs`<Icon @icon='graph' @iconSize={{this.iconSize}} />`);
    assert.dom('svg').hasAttribute('width', '16');
    assert.dom('svg').hasAttribute('height', '16');
    assert.dom('path').hasAttribute('d', IconSvgPaths16['graph'][0]);
  });

  test('iconSize=20 renders large size', async function (assert) {
    this.setProperties({
      iconSize: SIZE_LARGE,
    });
    await render(hbs`<Icon @icon='graph' @iconSize={{this.iconSize}} />`);
    assert.dom('svg').hasAttribute('width', '20');
    assert.dom('svg').hasAttribute('height', '20');
    assert.dom('path').hasAttribute('d', IconSvgPaths20['graph'][0]);
  });

  test('renders intent class', async function (assert) {
    this.setProperties({
      intent: DANGER,
    });
    await render(hbs`<Icon @icon='graph' @intent={{this.intent}} />`);
    assert.dom('span').hasClass(INTENT_DANGER);
  });

  test('renders icon name', async function (assert) {
    await render(hbs`<Icon @icon='graph' />`);
    assert.dom('svg').hasAttribute('data-icon', 'graph');
    assert.dom('span').hasClass('ee-icon-graph');
  });

  test('renders icon without color', async function (assert) {
    await render(hbs`<Icon @icon='add' @color='red' />`);
    assert.dom('svg').hasAttribute('fill', 'red');
  });

  test('unknown icon name renders blank icon', async function (assert) {
    await render(hbs`<Icon @icon='unknown' />`);
    assert.notOk(this.element.querySelector('path'));
  });

  test('prefixed icon renders blank icon', async function (assert) {
    await render(hbs`<Icon @icon='ee-icon-airplane' />`);
    assert.notOk(this.element.querySelector('path'));
  });

  test('icon=undefined renders nothing', async function (assert) {
    await render(hbs`<Icon @icon={{undefined}} />`);
    assert.notOk(this.element.querySelector('path'));
  });

  test('desc defaults to icon name', async function (assert) {
    await render(hbs`<Icon @icon='airplane' @title='hii'/>`);
    assert.dom('desc').exists();
  });

  test('icon renders with props object', async function (assert) {
    this.setProperties({
      props: {
        icon: 'graph',
        iconSize: SIZE_LARGE,
      },
    });
    await render(hbs`<Icon @props={{this.props}} />`);
    assert.dom('svg').exists();
    assert.dom('svg').hasAttribute('width', '20');
    assert.dom('svg').hasAttribute('height', '20');
    assert.dom('path').hasAttribute('d', IconSvgPaths20['graph'][0]);
  });
});
