import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | db-tree', function (hooks) {
  setupRenderingTest(hooks);

  // test('it renders', async function(assert) {
  //   // Set any properties with this.set('myProperty', 'value');
  //   // Handle any actions with this.set('myAction', function(val) { ... });

  //   await render(hbs`{{db-tree}}`);

  //   assert.equal(this.element.textContent.trim(), '');

  //   // Template block usage:
  //   await render(hbs`
  //     {{#db-tree}}
  //       template block text
  //     {{/db-tree}}
  //   `);

  //   assert.equal(this.element.textContent.trim(), 'template block text');
  // });
  test('renders its contents', async function (assert) {
    var content: Array<object> = [{
      id: 0,
      hasCaret: true,
      icon: "folder-close",
      label: "Folder 0",
    },
    {
      id: 1,
      icon: "folder-close",
      isExpanded: true,
      label: 'Folder 1',
      childNodes: [
        {
          id: 2,
          icon: "document",
          label: "Item 0",
          secondaryIcon: "eye-open"
        },
        {
          id: 3,
          icon: "tag",
          label: "Organic meditation gluten-free, sriracha VHS drinking vinegar beard man.",
        },
        {
          id: 4,
          hasCaret: true,
          icon: "folder-close",
          label: " Folder 2",
          isExpanded: true,

          childNodes: [
            { id: 5, label: "No-Icon Item" },
            { id: 6, icon: "tag", label: "Item 1" },
            {
              id: 7,
              hasCaret: true,
              icon: "folder-close",
              label: "Folder 3",
              isExpanded: true,

              childNodes: [
                { id: 8, icon: "document", label: "Item 0" },
                { id: 9, icon: "tag", label: "Item 1" },
                {
                  id: 10,
                  hasCaret: true,
                  icon: "folder-close",
                  label: "Folder 4",
                  isExpanded: true,
                  childNodes: [
                    { id: 11, icon: "document", label: "Item 0" },
                    { id: 12, icon: "tag", label: "Item 1" },
                  ],
                }
              ],
            },




          ],
        },
      ],
    },
    ];
    this.set('content', content);
    await render(hbs`{{db-tree  content=this.content}}`);
    assert.ok(document.querySelectorAll('.bp3-tree-node-list'));
  });
  test('empty array', async function (assert) {
    this.set('content', []);
    await render(hbs`{{db-tree  content=this.content}}`);
    assert.equal(document.querySelectorAll('.bp3-tree-node-label').length, 0);
  });

  test('content =null', async function (assert) {
    this.set('content', null);
    await render(hbs`{{db-tree  content=this.content}}`);
    assert.equal(document.querySelectorAll('.bp3-tree-node-label').length, 0);
  });
  test('default expanded bp3-tree-node-expanded  ', async function (assert) {
    var content: Array<object> = [{
      id: 0,
      hasCaret: true,
      icon: "folder-close",
      label: "Folder 0",
    },
    {
      id: 1,
      icon: "folder-close",
      isExpanded: true,
      label: 'Folder 1',
      childNodes: [
        {
          id: 2,
          icon: "document",
          label: "Item 0",
          secondaryIcon: "eye-open"
        },
        {
          id: 3,
          icon: "tag",
          label: "Organic meditation gluten-free, sriracha VHS drinking vinegar beard man.",
        },
        {
          id: 4,
          hasCaret: true,
          icon: "folder-close",
          label: " Folder 2",
          isExpanded: true,

          childNodes: [
            { id: 5, label: "No-Icon Item" },
            { id: 6, icon: "tag", label: "Item 1" },
            {
              id: 7,
              hasCaret: true,
              icon: "folder-close",
              label: "Folder 3",
              isExpanded: true,

              childNodes: [
                { id: 8, icon: "document", label: "Item 0" },
                { id: 9, icon: "tag", label: "Item 1" },
                {
                  id: 10,
                  hasCaret: true,
                  icon: "folder-close",
                  label: "Folder 4",
                  isExpanded: true,
                  childNodes: [
                    { id: 11, icon: "document", label: "Item 0" },
                    { id: 12, icon: "tag", label: "Item 1" },
                  ],
                }
              ],
            },




          ],
        },
      ],
    },
    ];
    this.set('content', content);
    await render(hbs`{{db-tree  content=this.content}}`);

    assert.ok(document.querySelectorAll('.bp3-tree-node-expanded').length);
  });
});
