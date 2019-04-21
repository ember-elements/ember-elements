import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { triggerKeyEvent } from '@ember/test-helpers';
import { click } from '@ember/test-helpers';

module('Integration | Component | db-drawer', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{db-drawer}}`);
    var element: any = this.element;

    assert.equal(element.textContent.trim(), '');

    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });

    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=this.open}}
      {{#db-drawer/body}}
        template block text
        {{/db-drawer/body}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await click('button');
    assert.equal(element.textContent.trim(), 'template block text');
  });
  test('render Header component', async function (assert) {
    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });
    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=this.open}}
      {{#db-drawer/header}}
        template block text
        {{/db-drawer/header}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await click('button');
    var element: any = this.element;
    assert.equal(element.textContent.trim(), 'template block text');
  });
  test('render Footer component', async function (assert) {
    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });
    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=this.open}}
      {{#db-drawer/footer}}
        template block text
        {{/db-drawer/footer}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await click('button');
    var element: any = this.element;
    assert.equal(element.textContent.trim(), 'template block text');
  });
  test('Default size for drawer', async function (assert) {
    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });
    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=this.open}}
      {{#db-drawer/body}}
        template block text
        {{/db-drawer/body}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await click('button');
    assert.equal((document.querySelector('.bp3-drawer') as HTMLInputElement).style.width, '50%');
  });
  // horizontal drawer size is rendering 
  test('Small size = "SIZE_SMALL" ', async function (assert) {
    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });
    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=this.open size="SIZE_SMALL"}}
      {{#db-drawer/body}}
        template block text
        {{/db-drawer/body}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await click('button');
    assert.equal((document.querySelector('.bp3-drawer') as HTMLInputElement).style.width, '360px');
  });
  test('STANDARD size = "SIZE_STANDARD" ', async function (assert) {
    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });
    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=this.open size="SIZE_STANDARD"}}
      {{#db-drawer/body}}
        template block text
        {{/db-drawer/body}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await click('button');
    assert.equal((document.querySelector('.bp3-drawer') as HTMLInputElement).style.width, '50%');
  });
  test('LARGE size = "SIZE_LARGE" ', async function (assert) {
    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });
    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=this.open size="SIZE_LARGE"}}
      {{#db-drawer/body}}
        template block text
        {{/db-drawer/body}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await click('button');
    assert.equal((document.querySelector('.bp3-drawer') as HTMLInputElement).style.width, '90%');
  });
  test('custom % size = "72%" ', async function (assert) {
    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });
    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=this.open size="72%"}}
      {{#db-drawer/body}}
        template block text
        {{/db-drawer/body}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await click('button');
    assert.equal((document.querySelector('.bp3-drawer') as HTMLInputElement).style.width, '72%');
  });
  test('custom px size = "500px" ', async function (assert) {
    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });
    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=this.open size="500px"}}
      {{#db-drawer/body}}
        template block text
        {{/db-drawer/body}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await click('button');
    assert.equal((document.querySelector('.bp3-drawer') as HTMLInputElement).style.width, '500px');
  });
  test('undefined  size = "abc" ', async function (assert) {
    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });
    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=this.open size="abc"}}
      {{#db-drawer/body}}
        template block text
        {{/db-drawer/body}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await click('button');
    assert.equal((document.querySelector('.bp3-drawer') as HTMLInputElement).style.width, '');
  });
  test('args: vertical=true  ', async function (assert) {
    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });
    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=this.open vertical=true}}
      {{#db-drawer/body}}
        template block text
        {{/db-drawer/body}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await click('button');
    assert.ok(document.querySelectorAll('.bp3-vertical').length > 0);
  });

  test('Small size = "SIZE_SMALL" with vertical=true ', async function (assert) {
    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });
    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=this.open size="SIZE_SMALL" vertical=true}}
      {{#db-drawer/body}}
        template block text
        {{/db-drawer/body}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await click('button');
    assert.equal((document.querySelector('.bp3-drawer') as HTMLInputElement).style.height, '360px');
  });
  test('STANDARD size = "SIZE_STANDARD"  with vertical=true ', async function (assert) {
    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });
    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=this.open size="SIZE_STANDARD" vertical=true}}
      {{#db-drawer/body}}
        template block text
        {{/db-drawer/body}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await click('button');
    assert.equal((document.querySelector('.bp3-drawer') as HTMLInputElement).style.height, '50%');
  });
  test('LARGE size = "SIZE_LARGE"  with vertical=true ', async function (assert) {
    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });
    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=this.open size="SIZE_LARGE" vertical=true}}
      {{#db-drawer/body}}
        template block text
        {{/db-drawer/body}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await click('button');
    assert.equal((document.querySelector('.bp3-drawer') as HTMLInputElement).style.height, '90%');
  });
  test('custom % size = "72%"  with vertical=true ', async function (assert) {
    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });
    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=this.open size="72%" vertical=true}}
      {{#db-drawer/body}}
        template block text
        {{/db-drawer/body}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await click('button');
    assert.equal((document.querySelector('.bp3-drawer') as HTMLInputElement).style.height, '72%');
  });
  test('custom px size = "500px"  with vertical=true ', async function (assert) {
    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });
    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=this.open size="500px" vertical=true}}
      {{#db-drawer/body}}
        template block text
        {{/db-drawer/body}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await click('button');
    assert.equal((document.querySelector('.bp3-drawer') as HTMLInputElement).style.height, '500px');
  });
  test('undefined  size = "abc"  with vertical=true ', async function (assert) {
    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });
    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=this.open size="abc" vertical=true}}
      {{#db-drawer/body}}
        template block text
        {{/db-drawer/body}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await click('button');
    assert.equal((document.querySelector('.bp3-drawer') as HTMLInputElement).style.height, '');
  });
  test('default hasBackdrop ', async function (assert) {
    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });
    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=this.open size="abc" }}
      {{#db-drawer/body}}
        template block text
        {{/db-drawer/body}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await click('button');
    assert.ok(document.querySelectorAll('.bp3-overlay-backdrop').length > 0);
  });
  test('hasBackdrop=true ', async function (assert) {
    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });
    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=this.open size="abc" hasBackdrop=true}}
      {{#db-drawer/body}}
        template block text
        {{/db-drawer/body}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await click('button');
    assert.ok(document.querySelectorAll('.bp3-overlay-backdrop').length > 0);
  });
  test('hasBackdrop=false ', async function (assert) {
    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });
    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=this.open size="abc" hasBackdrop=false}}
      {{#db-drawer/body}}
        template block text
        {{/db-drawer/body}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await click('button');
    assert.equal((document.querySelector('.bp3-overlay-backdrop') as HTMLInputElement).style.backgroundColor, 'inherit');
  });
  test('canOutsideClickClose=true ', async function (assert) {
    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });
    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=this.open size="abc" canOutsideClickClose=true }}
      {{#db-drawer/body}}
        template block text
        {{/db-drawer/body}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await click('button');
    this.$('.bp3-overlay-enter-done').click();
    assert.ok(document.querySelectorAll('.bp3-overlay-enter-done').length == 0);
  });
  test('canOutsideClickClose=false ', async function (assert) {
    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });
    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=this.open  canOutsideClickClose=false }}
      {{#db-drawer/body}}
        template block text
        {{/db-drawer/body}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await click('button');
    await this.$('.bp3-overlay-backdrop').click();
    assert.ok(document.querySelectorAll('.bp3-overlay-backdrop').length == 1);
  });
  test('canEscapeKeyClose=true ', async function (assert) {
    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });
    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=this.open  canEscapeKeyClose=true }}
      {{#db-drawer/body}}
        template block text
        {{/db-drawer/body}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await await click('button');
    await triggerKeyEvent(this.element, 'keydown', 27);
    assert.ok(document.querySelectorAll('.bp3-overlay-backdrop').length == 0);
  });
  test('canEscapeKeyClose=false ', async function (assert) {
    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });
    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=this.open  canEscapeKeyClose=false }}
      {{#db-drawer/body}}
        template block text
        {{/db-drawer/body}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await await click('button');
    await triggerKeyEvent(this.element, 'keydown', 27);
    assert.ok(document.querySelectorAll('.bp3-overlay-backdrop').length == 1);
  });




  //test on portal =false

  test('usePortal=false it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });

    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=open usePortal=false}}
      {{#db-drawer/body}}
        template block text
        {{/db-drawer/body}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await click('button');
    assert.ok(document.querySelector('.bp3-overlay-inline'));
  });
  test('render Header component | usePortal=false', async function (assert) {
    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });
    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=open usePortal=false}}
      {{#db-drawer/header}}
        template block text
        {{/db-drawer/header}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await click('button');
    assert.ok(document.querySelector('.bp3-overlay-inline .bp3-drawer-header'));
  });
  test('render Footer component | usePortal=false', async function (assert) {
    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });
    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=open usePortal=false}}
      {{#db-drawer/footer}}
        template block text
        {{/db-drawer/footer}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await click('button');
    var element: any = element;
    assert.ok(document.querySelector('.bp3-overlay-inline .bp3-drawer-footer'));
  });
  test('Default size for drawer | usePortal=false', async function (assert) {
    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });
    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=this.open usePortal=false}}
      {{#db-drawer/body}}
        template block text
        {{/db-drawer/body}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await click('button');
    assert.equal((document.querySelector('.bp3-drawer') as HTMLInputElement).style.width, '50%');
  });
  // horizontal drawer size is rendering 
  test('Small size = "SIZE_SMALL" | usePortal=false ', async function (assert) {
    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });
    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=this.open size="SIZE_SMALL" usePortal=false}}
      {{#db-drawer/body}}
        template block text
        {{/db-drawer/body}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await click('button');
    assert.equal((document.querySelector('.bp3-drawer') as HTMLInputElement).style.width, '360px');
  });
  test('STANDARD size = "SIZE_STANDARD" | usePortal=false', async function (assert) {
    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });
    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=this.open size="SIZE_STANDARD" usePortal=false}}
      {{#db-drawer/body}}
        template block text
        {{/db-drawer/body}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await click('button');
    assert.equal((document.querySelector('.bp3-drawer') as HTMLInputElement).style.width, '50%');
  });
  test('LARGE size = "SIZE_LARGE" | usePortal=false', async function (assert) {
    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });
    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=this.open size="SIZE_LARGE" usePortal=false}}
      {{#db-drawer/body}}
        template block text
        {{/db-drawer/body}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await click('button');
    assert.equal((document.querySelector('.bp3-drawer') as HTMLInputElement).style.width, '90%');
  });
  test('custom % size = "72%"  | usePortal=false', async function (assert) {
    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });
    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=this.open size="72%" usePortal=false}}
      {{#db-drawer/body}}
        template block text
        {{/db-drawer/body}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await click('button');
    assert.equal((document.querySelector('.bp3-drawer') as HTMLInputElement).style.width, '72%');
  });
  test('custom px size = "500px" |usePortal=false ', async function (assert) {
    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });
    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=this.open size="500px" usePortal=false}}
      {{#db-drawer/body}}
        template block text
        {{/db-drawer/body}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await click('button');
    assert.equal((document.querySelector('.bp3-drawer') as HTMLInputElement).style.width, '500px');
  });
  test('undefined  size = "abc" |usePortal=false ', async function (assert) {
    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });
    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=this.open size="abc" usePortal=false}}
      {{#db-drawer/body}}
        template block text
        {{/db-drawer/body}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await click('button');
    assert.equal((document.querySelector('.bp3-drawer') as HTMLInputElement).style.width, '');
  });
  test('args: vertical=true | usePortal=false  ', async function (assert) {
    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });
    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=this.open vertical=true usePortal=false}}
      {{#db-drawer/body}}
        template block text
        {{/db-drawer/body}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await click('button');
    assert.ok(document.querySelectorAll('.bp3-vertical').length > 0);
  });

  test('Small size = "SIZE_SMALL" with vertical=true | usePortal=false', async function (assert) {
    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });
    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=this.open size="SIZE_SMALL" vertical=true usePortal=false}}
      {{#db-drawer/body}}
        template block text
        {{/db-drawer/body}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await click('button');
    assert.equal((document.querySelector('.bp3-drawer') as HTMLInputElement).style.height, '360px');
  });
  test('STANDARD size = "SIZE_STANDARD"  with vertical=true | usePortal=false', async function (assert) {
    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });
    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=this.open size="SIZE_STANDARD" vertical=true usePortal=false}}
      {{#db-drawer/body}}
        template block text
        {{/db-drawer/body}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await click('button');
    assert.equal((document.querySelector('.bp3-drawer') as HTMLInputElement).style.height, '50%');
  });
  test('LARGE size = "SIZE_LARGE"  with vertical=true | usePortal=false', async function (assert) {
    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });
    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=this.open size="SIZE_LARGE" vertical=true usePortal=false}}
      {{#db-drawer/body}}
        template block text
        {{/db-drawer/body}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await click('button');
    assert.equal((document.querySelector('.bp3-drawer') as HTMLInputElement).style.height, '90%');
  });
  test('custom % size = "72%"  with vertical=true| usePortal=false ', async function (assert) {
    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });
    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=this.open size="72%" vertical=true usePortal=false}}
      {{#db-drawer/body}}
        template block text
        {{/db-drawer/body}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await click('button');
    assert.equal((document.querySelector('.bp3-drawer') as HTMLInputElement).style.height, '72%');
  });
  test('custom px size = "500px"  with vertical=true| usePortal=false ', async function (assert) {
    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });
    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=this.open size="500px" vertical=true usePortal=false}}
      {{#db-drawer/body}}
        template block text
        {{/db-drawer/body}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await click('button');
    assert.equal((document.querySelector('.bp3-drawer') as HTMLInputElement).style.height, '500px');
  });
  test('undefined  size = "abc"  with vertical=true | usePortal=false ', async function (assert) {
    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });
    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=this.open size="abc" vertical=true usePortal=false}}
      {{#db-drawer/body}}
        template block text
        {{/db-drawer/body}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await click('button');
    assert.equal((document.querySelector('.bp3-drawer') as HTMLInputElement).style.height, '');
  });
  test('default hasBackdrop | usePortal=false', async function (assert) {
    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });
    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=this.open size="abc" usePortal=false }}
      {{#db-drawer/body}}
        template block text
        {{/db-drawer/body}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await click('button');
    assert.ok(document.querySelectorAll('.bp3-overlay-backdrop').length > 0);
  });
  test('hasBackdrop=true |usePortal=false', async function (assert) {
    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });
    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=this.open size="abc" hasBackdrop=true usePortal=false}}
      {{#db-drawer/body}}
        template block text
        {{/db-drawer/body}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await click('button');
    assert.ok(document.querySelectorAll('.bp3-overlay-backdrop').length > 0);
  });
  test('hasBackdrop=false | usePortal=false ', async function (assert) {
    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });
    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=this.open size="abc" hasBackdrop=false usePortal=false}}
      {{#db-drawer/body}}
        template block text
        {{/db-drawer/body}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await click('button');
    assert.equal((document.querySelector('.bp3-overlay-backdrop') as HTMLInputElement).style.backgroundColor, 'inherit');
  });
  test('canOutsideClickClose=true | usePortal=false ', async function (assert) {
    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });
    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=this.open size="abc" canOutsideClickClose=true  usePortal=false}}
      {{#db-drawer/body}}
        template block text
        {{/db-drawer/body}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await click('button');
    this.$('.bp3-overlay-enter-done').click();
    assert.ok(document.querySelectorAll('.bp3-overlay-enter-done').length == 0);
  });
  test('canOutsideClickClose=false | usePortal=false', async function (assert) {
    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });
    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=this.open  canOutsideClickClose=false usePortal=false }}
      {{#db-drawer/body}}
        template block text
        {{/db-drawer/body}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await click('button');
    await this.$('.bp3-overlay-backdrop').click();
    assert.ok(document.querySelectorAll('.bp3-overlay-backdrop').length == 1);
  });
  test('canEscapeKeyClose=true | usePortal=false', async function (assert) {
    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });
    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=this.open  canEscapeKeyClose=true usePortal=false}}
      {{#db-drawer/body}}
        template block text
        {{/db-drawer/body}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await await click('button');
    await triggerKeyEvent(this.element, 'keydown', 27);
    assert.ok(document.querySelectorAll('.bp3-overlay-backdrop').length == 0);
  });
  test('canEscapeKeyClose=false | usePortal=false ', async function (assert) {
    let that = this;
    this.set('open', false);
    this.set('buttonAction', function () {
      that.set('open', true);
    });
    await render(hbs` <Button @onClick={{action  buttonAction  }} />
      {{#db-drawer isOpen=this.open  canEscapeKeyClose=false usePortal=false }}
      {{#db-drawer/body}}
        template block text
        {{/db-drawer/body}}
      {{/db-drawer}}
      <div id="destination"></div>
    `);
    await await click('button');
    await triggerKeyEvent(this.element, 'keydown', 27);
    assert.ok(document.querySelectorAll('.bp3-overlay-backdrop').length == 1);
  });


});

