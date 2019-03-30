import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | dialog', function (hooks) {
  setupRenderingTest(hooks);

  // test('it renders', async function (assert) {
  //   // Set any properties with this.set('myProperty', 'value');
  //   // Handle any actions with this.set('myAction', function(val) { ... });

  //   await render(hbs`{{dialog}}`);
  //   var element:any=this.element;
  //   assert.equal(element.textContent.trim(), '');

  //   // Template block usage:
  //   await render(hbs`
  //     {{#dialog}}
  //       template block text
  //     {{/dialog}}
  //   `);
  //   var element:any=this.element;
  //   assert.equal(element.textContent.trim(), 'template block text');
  // });
  test('dialog rendering', async function (assert) {
    await render(hbs` <Dialog @isOpenDialog=true>
  </Dialog> <div id="destination"></div>`);
    console.log(document.querySelector('.bp3-dialog'))
    assert.equal(document.querySelectorAll('.bp3-dialog').length, 1);
  });
  test('dialog height', async function (assert) {
    await render(hbs` <Dialog @isOpenDialog=true @height='100px'/>
   <div id="destination"></div>`);
    var height: any = document.querySelector('.bp3-dialog');
    assert.equal(height.style.height, '100px');
    // document.querySelector('.bp3-dialog')
  });
  test('dialog width', async function (assert) {
    await render(hbs` <Dialog @isOpenDialog=true @width='100px'>
  </Dialog> <div id="destination"></div>`);
    var width: any = document.querySelector('.bp3-dialog');
    assert.equal(width.style.width, '100px');
    // document.querySelector('.bp3-dialog')
  });
  test('dialog marginTop', async function (assert) {
    await render(hbs` <Dialog @isOpenDialog=true @marginTop='100px'>
  </Dialog> <div id="destination"></div>`);
    var marginTop: any = document.querySelector('.bp3-dialog');
    assert.equal(marginTop.style.marginTop, '100px');
    // document.querySelector('.bp3-dialog')
  });
  test('dialog marginLeft', async function (assert) {
    await render(hbs` <Dialog @isOpenDialog=true @marginLeft='100px'>
  </Dialog> <div id="destination"></div>`);
    var marginLeft: any = document.querySelector('.bp3-dialog');
    assert.equal(marginLeft.style.marginLeft, '100px');
    // document.querySelector('.bp3-dialog')
  });
  test('dialog marginRight', async function (assert) {
    await render(hbs` <Dialog @isOpenDialog=true @marginRight='100px'>
  </Dialog> <div id="destination"></div>`);
    var marginRight: any = document.querySelector('.bp3-dialog');
    assert.equal(marginRight.style.marginRight, '100px');
    // document.querySelector('.bp3-dialog')
  });
});
