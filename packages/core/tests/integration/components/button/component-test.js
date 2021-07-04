import { render } from '@ember/test-helpers';
import { click, triggerKeyEvent } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

import hbs from 'htmlbars-inline-precompile';

const NS = 'ee';
const BUTTON = `${NS}-button`;
const ICON = `${NS}-icon-style`;

module('Integration | Component | button', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Button @className='foo' />`);
    assert.dom('button').exists();
    assert.dom('button').hasClass(BUTTON);
    assert.dom('button').hasClass('foo');
  });

  test('icon="style" renders Icon as first child', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Button @icon='style' />`);
    assert.dom('svg').exists();
    assert.dom('span').hasClass(ICON);
    let element = await this.element.querySelectorAll('span');
    assert.ok(element[0].classList.contains(ICON));
  });

  test('renders the button text prop', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('text', 'foo');
    await render(hbs`<Button >{{this.text}}</Button>`);
    assert.dom('button').exists();
    assert.dom('button').hasText('foo');
  });

  test('wraps string children in spans', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('text', 'foo');
    this.set('children', 'foo');
    await render(hbs`<Button >{{this.text}}<em>{{this.children}}</em></Button>`);
    assert.dom('span').exists();
    assert.dom('em').exists();
  });

  test('renders span if text=0', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('text', '0');
    await render(hbs`<Button >{{this.text}}</Button>`);
    assert.dom('span').exists();
  });

  test('doesn\'t render a span if text=""', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    await render(hbs`<Button />`);
    assert.dom('span').doesNotExist();
  });

  test('clicking button triggers onClick prop', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('text', '0');
    this.set('result', '');
    this.set('buttonAction', function (a, b) {
      this.set('result', a + ' ' + b);
    });
    await render(
      hbs`<Button @onClick={{action  this.buttonAction 'Hello' 'World'  }}>{{this.text}}</Button>  <div id="result">{{ this.result }}</div>`
    );
    await click('button');
    assert.dom('span').exists();
    assert.dom('#result').hasText('Hello World');
  });

  test('clicking disabled button does not trigger onClick prop', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('text', '0');
    this.set('result', '');
    this.set('buttonAction', function (a, b) {
      this.set('result', a + ' ' + b);
    });
    await render(
      hbs`<Button @onClick={{action  this.buttonAction 'Hello' 'World'  }} @disabled={{true}}>{{this.text}}</Button>  <div id="result">{{ this.result }}</div>`
    );
    // await click('button'); // TODO error Error: Can not `click` disabled
    assert.dom('span').exists();
    assert.dom('#result').hasNoText();
  });

  test('pressing enter triggers onKeyDown props with any modifier flags', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('text', '0');
    this.set('result', '');
    this.set('buttonAction', function (a, b) {
      this.set('result', a + ' ' + b);
    });
    await render(
      hbs`<Button @onKeyDown={{action  this.buttonAction 'Hello' 'World'  }}>{{this.text}}</Button>  <div id="result">{{ this.result }}</div>`
    );
    await click('button');
    await triggerKeyEvent('button', 'keydown', 'Enter');

    assert.dom('span').exists();
    assert.dom('#result').hasText('Hello World');
  });

  test('pressing space triggers onKeyDown props with any modifier flags', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('text', '0');
    this.set('result', '');
    this.set('buttonAction', function (a, b) {
      this.set('result', a + ' ' + b);
    });
    await render(
      hbs`<Button @onKeyDown={{action  this.buttonAction 'Hello' 'World'  }}>{{this.text}}</Button>  <div id="result">{{ this.result }}</div>`
    );
    await triggerKeyEvent('button', 'keydown', 'Space');

    assert.dom('span').exists();
    assert.dom('#result').hasText('Hello World');
  });

  test('onkeyup with Enter', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('text', '0');
    this.set('result', '');
    this.set('buttonAction', function (a, b) {
      this.set('result', a + ' ' + b);
    });
    await render(
      hbs`<Button @onKeyUp={{action  this.buttonAction 'Hello' 'World'  }}>{{this.text}}</Button>  <div id="result">{{ this.result }}</div>`
    );
    await triggerKeyEvent('button', 'keyup', 'Enter');

    assert.dom('span').exists();
    assert.dom('#result').hasText('Hello World');
  });

  test('onkeyup with Space', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('text', '0');
    this.set('result', '');
    this.set('buttonAction', function (a, b) {
      this.set('result', a + ' ' + b);
    });
    await render(
      hbs`<Button @onKeyUp={{action  this.buttonAction 'Hello' 'World'  }}>{{this.text}}</Button>  <div id="result">{{ this.result }}</div>`
    );
    await triggerKeyEvent('button', 'keyup', 'Space');

    assert.dom('span').exists();
    assert.dom('#result').hasText('Hello World');
  });
});
