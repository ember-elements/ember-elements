import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | tag-item', function (hooks) {
  setupRenderingTest(hooks);
   test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('data',['sku1','sku2']);
    await render(hbs`
    {{#each data as |item index|}}
    <TagItem @item={{item}} @index={{index}} @disabled={{disabled}}   @defaultBg_color={{defaultBgcolor}} @defaultFg_color={{defaultFgcolor}}/>
     {{/each}}
    `);

    assert.equal(document.querySelectorAll('.bp3-text-overflow-ellipsis strong').length, 2);
  });
  test('disable=true', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('data',['sku1','sku2']);
    await render(hbs`
    {{#each data as |item index|}}
    <TagItem @item={{item}} @index={{index}} @disabled=true   @defaultBg_color={{defaultBgcolor}} @defaultFg_color={{defaultFgcolor}}/>
     {{/each}}
    `);

    assert.equal(document.querySelectorAll('.bp3-tag .bp3-tag-remove').length, 0);
  });
  test('disable=false', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('data',['sku1','sku2']);
    await render(hbs`
    {{#each data as |item index|}}
    <TagItem @item={{item}} @index={{index}} @disabled={{false}}   @defaultBg_color={{defaultBgcolor}} @defaultFg_color={{defaultFgcolor}}/>
     {{/each}}
    `);

    assert.equal(document.querySelectorAll('.bp3-tag .bp3-tag-remove').length, 2);
  });

  test('default bg color is rendering', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('data',['sku1','sku2']);
    await render(hbs`
    {{#each data as |item index|}}
    <TagItem @item={{item}} @index={{index}} @disabled={{false}}   @defaultBg_color={{defaultBgcolor}} @defaultFg_color={{defaultFgcolor}}/>
     {{/each}}
    `);

    assert.equal(document.querySelector('.bp3-tag').style.backgroundColor, 'rgb(221, 221, 221)');
  });
  test(' bg color is rendering', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('data',['sku1','sku2']);
    await render(hbs`
    {{#each data as |item index|}}
    <TagItem @item={{item}} @index={{index}} @disabled={{false}}   @defaultBg_color="red" @defaultFg_color={{defaultFgcolor}}/>
     {{/each}}
    `);

    assert.equal(document.querySelector('.bp3-tag').style.backgroundColor, 'red');
  });

  test('default fg color is rendering', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('data',['sku1','sku2']);
    await render(hbs`
    {{#each data as |item index|}}
    <TagItem @item={{item}} @index={{index}} @disabled={{false}}   @defaultBg_color={{defaultBgcolor}} @defaultFg_color={{defaultFgcolor}}/>
     {{/each}}
    `);

    assert.equal(document.querySelector('.bp3-tag').style.color, 'rgb(92, 112, 128)');
  });
  test(' bg color is rendering', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('data',['sku1','sku2']);
    await render(hbs`
    {{#each data as |item index|}}
    <TagItem @item={{item}} @index={{index}} @disabled={{false}}   @defaultBg_color="red" @defaultFg_color="green"/>
     {{/each}}
    `);

    assert.equal(document.querySelector('.bp3-tag').style.color, 'green');
  });
});

