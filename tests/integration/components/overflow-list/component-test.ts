import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
module('Integration | Component | overflow-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{overflow-list}}`);
    var element: any = this.element;
    assert.equal(element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#overflow-list}}
        template block text
      {{/overflow-list}}
    `);

    assert.equal(element.textContent.trim(), 'template block text');
  });
  test('renders all items', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });


    this.set('items', [
      { icon: "folder-close", text: "All files" },
      { icon: "folder-close", text: "Users" },
      { icon: "folder-close", text: "Janet" },
      { href: "#", icon: "folder-close", text: "Photos" },
      { href: "#", icon: "folder-close", text: "Wednesday" },
      { icon: "document", text: "image.jpg" },

    ]);
    // Template block usage:
    // console.log(items)
    await render(hbs` 
    <div id='overflowListCard1' class="bp3-card bp3-elevation-0" >
    {{#overflow-list items=items}} {{/overflow-list}}

</div>
    `);

    var doc = await document.querySelectorAll('.bp3-overflow-list');
    console.log(doc)
    assert.equal(doc[0].querySelectorAll('li').length, 1);
  });

});
