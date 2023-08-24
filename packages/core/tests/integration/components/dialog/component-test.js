import { click, render, triggerKeyEvent } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | dialog', function (hooks) {
  setupRenderingTest(hooks);
  test('dialog rendering', async function (assert) {
    this.set('isOpen', true);
    this.set('onClose', function () {
      this.set('isOpen', false);
    });
    await render(
      hbs` {{! template-lint-disable}} <Dialog @isOpen={{this.isOpen}} @onClose={{action this.onClose}}></Dialog>`
    );
    assert.strictEqual(document.querySelectorAll('.ee-dialog').length, 1);
    await click('.ee-overlay-backdrop');
  });

  test('attempts to close when overlay backdrop element is moused down', async function (assert) {
    this.set('isOpen', true);
    this.set('onClose', function () {
      this.set('isOpen', false);
    });
    await render(hbs` <Dialog @isOpen={{this.isOpen}} @portalClassName='test-class' @onClose={{action this.onClose}}>
                <div class='ee-dialog-header' key='0'>
                <Icon @icon='inbox' @iconSize='20' />
                <h4>Dialog header</h4>
            </div>,
            <div class='ee-dialog-body' key='1'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna alqua. Ut enim ad minimum veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </p>
            </div>,
            <div class='ee-dailog-footer' key='2'>
                <div class='ee-dialog-footer-actions'>
                    <Button >Secondary</Button>
                    <Button @intent='primary' @type='submit'  >Primary</Button>
                </div>
            </div>
  </Dialog> `);
    await click('.ee-overlay-backdrop');

    assert.notOk(this.isOpen);
  });

  test('renders its content correctly', async function (assert) {
    this.set('isOpen', true);
    this.set('onClose', function () {
      this.set('isOpen', false);
    });
    await render(hbs`<Dialog @isOpen={{this.isOpen}}  @onClose={{action this.onClose}}>
            <div class='ee-dialog-header'></div>

            <div class='ee-dialog-body'>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna alqua. Ut enim ad minimum veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                </p>
              </div>
              <div class='ee-dailog-footer'>
                <div class='ee-dialog-footer-actions'>
                  <Button>
                    Secondary
                  </Button>
                  <Button @intent='primary' @type='submit'>
                    Primary
                  </Button>
                </div>
              </div>
         </Dialog>`);
    assert.strictEqual(document.querySelectorAll('.ee-dialog').length, 1);
    assert.strictEqual(document.querySelectorAll('.ee-dialog-body').length, 1);
    assert.strictEqual(
      document.querySelectorAll('.ee-dailog-footer').length,
      1
    );
    assert.strictEqual(
      document.querySelectorAll('.ee-dialog-header').length,
      1
    );
    assert.strictEqual(
      document.querySelectorAll('.ee-overlay-backdrop').length,
      1
    );

    await click('.ee-overlay-backdrop');
  });

  test('portalClassName appears on Portal', async function (assert) {
    this.set('isOpen', true);
    this.set('onClose', function () {
      this.set('isOpen', false);
    });
    await render(hbs` <Dialog @isOpen={{this.isOpen}} @portalClassName='test-class'  @onClose={{action this.onClose}}>
                <div class='ee-dialog-header' key='0'>
                <Icon @icon='inbox' @iconSize='20' />
                <h4>Dialog header</h4>
            </div>,
            <div class='ee-dialog-body' key='1'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna alqua. Ut enim ad minimum veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </p>
            </div>,
            <div class='ee-dailog-footer' key='2'>
                <div class='ee-dialog-footer-actions'>
                    <Button >Secondary</Button>
                    <Button @intent='primary' @type='submit'  >Primary</Button>
                </div>
            </div>
  </Dialog> `);
    assert.ok(document.querySelector(`.ee-portal.test-class`));
    await click('.ee-overlay-backdrop');
  });

  test('does not close when canOutsideClickClose = false and overlay backdrop element is moused down', async function (assert) {
    this.set('isOpen', true);
    this.set('onClose', function () {
      this.set('isOpen', false);
    });
    await render(hbs` <Dialog @isOpen={{this.isOpen}} @canOutsideClickClose={{false}} @usePortal={{false}} @onClose={{action this.onClose}}>
                <div class='ee-dialog-header' key='0'>
                <Icon @icon='inbox' @iconSize='20' />
                <h4>Dialog header</h4>
            </div>,
            <div class='ee-dialog-body' key='1'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna alqua. Ut enim ad minimum veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </p>
            </div>,
            <div class='ee-dailog-footer' key='2'>
                <div class='ee-dialog-footer-actions'>
                    <Button >Secondary</Button>
                    <Button @intent='primary' @type='submit'  >Primary</Button>
                </div>
            </div>
  </Dialog> `);
    await click('.ee-overlay-backdrop');

    assert.strictEqual(document.querySelectorAll('.ee-dialog').length, 1);
  });

  test('does not close when canEscapeKeyClose = false and escape key is pressed', async function (assert) {
    this.set('isOpen', true);
    this.set('onClose', function () {
      this.set('isOpen', false);
    });
    await render(hbs` <Dialog @isOpen={{this.isOpen}} @canEscapeKeyClose={{false}} @usePortal={{false}} @onClose={{action this.onClose}}>
                <div class='ee-dialog-header pranav' key='0'>
                <Icon @icon='inbox' @iconSize='20' />
                <h4>Dialog header</h4>
            </div>,
            <div class='ee-dialog-body' key='1'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna alqua. Ut enim ad minimum veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </p>
            </div>,
            <div class='ee-dailog-footer' key='2'>
                <div class='ee-dialog-footer-actions'>
                    <Button >Secondary</Button>
                    <Button @intent='primary' @type='submit'  >Primary</Button>
                </div>
            </div>
  </Dialog> `);
    await triggerKeyEvent('.ee-overlay-backdrop', 'keydown', 27);
    assert.strictEqual(document.querySelectorAll('.ee-dialog').length, 1);
    await click('.ee-overlay-backdrop');
  });
});
