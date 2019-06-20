import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, triggerKeyEvent } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | dialog', function (hooks) {
  setupRenderingTest(hooks);

  test('dialog rendering', async function (assert) {
    await render(hbs` <Dialog @isOpen=true>
  </Dialog> <div id="destination"></div>`);
    console.log(document.querySelector('.bp3-dialog'))
    assert.equal(document.querySelectorAll('.bp3-dialog').length, 1);
  });

  test('renders its content correctly', async function (assert) {
    await render(hbs` <Dialog @isOpen=true>
                <div class="bp3-dialog-header" >
                <Icon @icon="inbox" @iconSize=20 />
                <h4>Dialog header</h4>
            </div>
            <div class="bp3-dialog-body" >
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna alqua. Ut enim ad minimum veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </p>
            </div>
            <div class="bp3-dailog-footer" >
                <div class="bp3-dialog-footer-actions">
                    <Button >Secondary</Button>
                    <Button @intent="primary" @type="submit"  >Primary</Button>
                </div>
            </div>
  </Dialog> <div id="destination"></div>`);
    assert.equal(document.querySelectorAll('.bp3-dialog').length, 1);
    assert.equal(document.querySelectorAll('.bp3-dialog-body').length, 1);
    assert.equal(document.querySelectorAll('.bp3-dailog-footer').length, 1);
    assert.equal(document.querySelectorAll('.bp3-dialog-footer-actions').length, 1);
    assert.equal(document.querySelectorAll('.bp3-dialog-header').length, 1);
    assert.equal(document.querySelectorAll('.bp3-overlay-backdrop').length, 1);
  });

  test('portalClassName appears on Portal', async function (assert) {
    await render(hbs` <Dialog @isOpen=true @portalClassName="test-class">
                <div class="bp3-dialog-header" key=0>
                <Icon @icon="inbox" @iconSize=20 />
                <h4>Dialog header</h4>
            </div>,
            <div class="bp3-dialog-body" key=1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna alqua. Ut enim ad minimum veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </p>
            </div>,
            <div class="bp3-dailog-footer" key=2>
                <div class="bp3-dialog-footer-actions">
                    <Button >Secondary</Button>
                    <Button @intent="primary" @type="submit"  >Primary</Button>
                </div>
            </div>
  </Dialog> <div id="destination"></div>`);
    assert.ok(document.querySelector(`.bp3-portal.test-class`));
  });

  test('attempts to close when overlay backdrop element is moused down', async function (assert) {
    let that = this;
    this.set('isOpen', true);
    this.set("onClose", function () {
      that.set('isOpen', false);
    })
    await render(hbs` <Dialog @isOpen={{isOpen}} @portalClassName="test-class" @onClose={{action onClose}}>
                <div class="bp3-dialog-header" key=0>
                <Icon @icon="inbox" @iconSize=20 />
                <h4>Dialog header</h4>
            </div>,
            <div class="bp3-dialog-body" key=1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna alqua. Ut enim ad minimum veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </p>
            </div>,
            <div class="bp3-dailog-footer" key=2>
                <div class="bp3-dialog-footer-actions">
                    <Button >Secondary</Button>
                    <Button @intent="primary" @type="submit"  >Primary</Button>
                </div>
            </div>
  </Dialog> <div id="destination"></div>`);
    await click('.bp3-overlay-backdrop');

    assert.equal(document.querySelectorAll('.bp3-dialog').length, 0);

  });

  test('does not close when canOutsideClickClose = false and overlay backdrop element is moused down', async function (assert) {
    let that = this;
    this.set('isOpen', true);
    this.set("onClose", function () {
      that.set('isOpen', false);
    })
    await render(hbs` <Dialog @isOpen={{isOpen}} @canOutsideClickClose={{false}} @usePortal={{false}} @onClose={{action onClose}}>
                <div class="bp3-dialog-header" key=0>
                <Icon @icon="inbox" @iconSize=20 />
                <h4>Dialog header</h4>
            </div>,
            <div class="bp3-dialog-body" key=1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna alqua. Ut enim ad minimum veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </p>
            </div>,
            <div class="bp3-dailog-footer" key=2>
                <div class="bp3-dialog-footer-actions">
                    <Button >Secondary</Button>
                    <Button @intent="primary" @type="submit"  >Primary</Button>
                </div>
            </div>
  </Dialog> <div id="destination"></div>`);
    await click('.bp3-overlay-backdrop');

    assert.equal(document.querySelectorAll('.bp3-dialog').length, 1);

  });

  test('does not close when canEscapeKeyClose = false and escape key is pressed', async function (assert) {
    let that = this;
    this.set('isOpen', true);
    this.set("onClose", function () {
      that.set('isOpen', false);
    })
    await render(hbs` <Dialog @isOpen={{isOpen}} @canEscapeKeyClose={{false}} @usePortal={{false}} @onClose={{action onClose}}>
                <div class="bp3-dialog-header" key=0>
                <Icon @icon="inbox" @iconSize=20 />
                <h4>Dialog header</h4>
            </div>,
            <div class="bp3-dialog-body" key=1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna alqua. Ut enim ad minimum veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </p>
            </div>,
            <div class="bp3-dailog-footer" key=2>
                <div class="bp3-dialog-footer-actions">
                    <Button >Secondary</Button>
                    <Button @intent="primary" @type="submit"  >Primary</Button>
                </div>
            </div>
  </Dialog> <div id="destination"></div>`);
    await triggerKeyEvent('.bp3-overlay-backdrop', 'keydown', 27);

    assert.equal(document.querySelectorAll('.bp3-dialog').length, 1);

  });

  test('header  if title prop is given', async function (assert) {
    await render(hbs` <Dialog @isOpen=true @title="Hello!" @icon="inbox">
  </Dialog> <div id="destination"></div>`);
    assert.ok(document.querySelector('.bp3-dialog-header'));
  });


  test('renders close button if isCloseButtonShown=true', async function (assert) {
    await render(hbs` <Dialog @isOpen=true @isCloseButtonShown=true @title="Hello!" @icon="inbox">
  </Dialog> <div id="destination"></div>`);
    assert.ok(document.querySelector('svg'));
  });

  test('clicking close button triggers onClose', async function (assert) {
    let that = this;
    this.set('isOpen', true);
    this.set("onClose", function () {
      that.set('isOpen', false);
    })
    await render(hbs` <Dialog @isOpen={{isOpen}} @isCloseButtonShown={{true}} @usePortal={{false}} @onClose={{action onClose}}>
                <div class="bp3-dialog-header" key=0>
                <Icon @icon="inbox" @iconSize=20 />
                <h4>Dialog header</h4>
            </div>,
            <div class="bp3-dialog-body" key=1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna alqua. Ut enim ad minimum veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </p>
            </div>,
            <div class="bp3-dailog-footer" key=2>
                <div class="bp3-dialog-footer-actions">
                    <Button >Secondary</Button>
                    <Button @intent="primary" @type="submit"  >Primary</Button>
                </div>
            </div>
  </Dialog> <div id="destination"></div>`);
    await click('button');

    assert.equal(document.querySelectorAll('.bp3-dialog').length, 1);

  });

});
