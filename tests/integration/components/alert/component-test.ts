import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, triggerKeyEvent } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
const ALERT = ".bp3-alert";
const ALERT_BODY = ".bp3-alert-body";
const ALERT_CONTENTS = ".bp3-alert-contents";
const ALERT_FOOTER = ".bp3-alert-footer";
const INTENT_PRIMARY = ".bp3-intent-primary";
module('Integration | Component | alert', function (hooks) {
  setupRenderingTest(hooks);

  test('renders its content correctly', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('isOpen', true);
    let that = this;
    this.set('onClose', function () {
      that.set('isOpen', false);
    });

    await render(hbs`
                     <Alert
                      @dialogClassName="test-class"
                      @isOpen={{true}}
                      @confirmButtonText="Delete"
                      @cancelButtonText="Cancel"
                      @onClose={{action onClose}}
                     >
                      <p>Are you sure you want to delete this file?</p>
                      <p>There is no going back.</p>
                     </Alert>
                     <div id="destination"/>
                `);

    assert.equal(document.querySelectorAll(ALERT + "." + "test-class").length, 1);
    assert.equal(document.querySelectorAll(ALERT_BODY).length, 1);
    assert.equal(document.querySelectorAll(ALERT_CONTENTS).length, 1);
    assert.equal(document.querySelectorAll(ALERT_FOOTER).length, 1);
  });

  test('renders the icon correctly', async function (assert) {
    this.set('isOpen', true);
    let that = this;
    this.set('onClose', function () {
      that.set('isOpen', false);
    });

    await render(hbs`
                     <Alert
                      @dialogClassName="test-class"
                      @isOpen={{true}}
                      @confirmButtonText="Delete"
                      @cancelButtonText="Cancel"
                      @onClose={{action onClose}}
                      @icon="warning-sign"
                     >
                      <p>Are you sure you want to delete this file?</p>
                      <p>There is no going back.</p>
                     </Alert>
                     <div id="destination"/>
                `);

    assert.equal(document.querySelectorAll('svg').length, 1);
  });

  test('text is confirmButtonText', async function (assert) {
    this.set('isOpen', true);
    let that = this;
    this.set('onClose', function () {
      that.set('isOpen', false);
    });

    this.set('onConfirm', function () {
      that.set('isOpen', false);
    });

    await render(hbs`
                     <Alert
                      @dialogClassName="test-class"
                      @isOpen={{true}}
                      @confirmButtonText="Delete"
                      @onClose={{action onClose}}
                      @icon="warning-sign"
                      @onConfirm={{action onConfirm}}
                      @intent="primary"
                     >
                      <p>Are you sure you want to delete this file?</p>
                      <p>There is no going back.</p>
                     </Alert>
                     <div id="destination"/>
                `);

    assert.equal((document.querySelector('button span') as any).textContent.trim(), "Delete");
  });

  test('intent inherited from prop', async function (assert) {
    this.set('isOpen', true);
    let that = this;
    this.set('onClose', function () {
      that.set('isOpen', false);
    });

    this.set('onConfirm', function () {
      that.set('isOpen', false);
    });

    await render(hbs`
                     <Alert
                      @dialogClassName="test-class"
                      @isOpen={{true}}
                      @confirmButtonText="Delete"
                      @onClose={{action onClose}}
                      @icon="warning-sign"
                      @onConfirm={{action onConfirm}}
                      @intent="primary"
                     >
                      <p>Are you sure you want to delete this file?</p>
                      <p>There is no going back.</p>
                     </Alert>
                     <div id="destination"/>
                `);

    assert.equal(document.querySelectorAll('button' + INTENT_PRIMARY).length, 1);
  });

  test('onConfirm and onClose triggered on click', async function (assert) {
    this.set('isOpen', true);
    let that = this;
    this.set('onClose', function () {
      that.set('isOpen', false);
      that.set('onCloseClick', true);
    });

    this.set('onConfirm', function () {
      that.set('isOpen', false);
      that.set('onConfirmClick', true);

    });

    await render(hbs`
                     <Alert
                      @dialogClassName="test-class"
                      @isOpen={{true}}
                      @confirmButtonText="Delete"
                      @onClose={{action onClose}}
                      @icon="warning-sign"
                      @onConfirm={{action onConfirm}}
                      @intent="primary"
                     >
                      <p>Are you sure you want to delete this file?</p>
                      <p>There is no going back.</p>
                     </Alert>
                     <div id="destination"/>
                `);
    await click('button');
    assert.ok(this.get('onCloseClick'));
    assert.ok(this.get('onConfirmClick'));
  });
  //cancel button
  test('cancel button:- ', async function (assert) {
    this.set('isOpen', true);
    let that = this;
    this.set('onClose', function () {
      that.set('isOpen', false);
      that.set('onCloseClick', true);
    });

    this.set('onCancel', function () {
      that.set('isOpen', false);
      that.set('onCancelClick', true);

    });

    await render(hbs`
                     <Alert
                      @isOpen={{true}}
                      @cancelButtonText="Cancel"
                      @confirmButtonText="Delete"
                      @onClose={{action onClose}}
                      @icon="warning-sign"
                      @onCancel={{action onCancel}}
                      @intent="primary"
                     >
                      <p>Are you sure you want to delete this file?</p>
                      <p>There is no going back.</p>
                     </Alert>
                     <div id="destination"/>
                `);
    let cancelButton: any = this.element.querySelectorAll('button')[1];
    assert.equal(cancelButton.querySelector('span').textContent.trim(), "Cancel", "text is cancelButtonText");
    assert.equal(cancelButton.querySelector(INTENT_PRIMARY), null, "intent is undefined");
    await click(cancelButton);
    assert.ok(this.get('onCloseClick'));
    assert.ok(this.get('onCancelClick'));

  });

  test('canEscapeKeyCancel enables escape key', async function (assert) {
    this.set('isOpen', true);
    let that = this;
    this.set('onClose', function () {
      that.set('isOpen', false);
      that.set('onCloseClick', true);
    });

    this.set('onConfirm', function () {
      that.set('isOpen', false);
      that.set('onConfirmClick', true);

    });

    await render(hbs`
                     <Alert
                      @dialogClassName="test-class"
                      @isOpen={{true}}
                      @confirmButtonText="Delete"
                      @onClose={{action onClose}}
                      @icon="warning-sign"
                      @onConfirm={{action onConfirm}}
                      @intent="primary"
                      @canEscapeKeyCancel={{true}}
                     >
                      <p>Are you sure you want to delete this file?</p>
                      <p>There is no going back.</p>
                     </Alert>
                     <div id="destination"/>
                `);
    await triggerKeyEvent('.bp3-overlay-backdrop', 'keydown', 27);
    assert.ok(this.get('onCloseClick'));
  });

  test('canEscapeKeyCancel enables escape key', async function (assert) {
    this.set('isOpen', true);
    let that = this;
    this.set('onClose', function () {
      that.set('isOpen', false);
      that.set('onCloseClick', true);
    });

    this.set('onConfirm', function () {
      that.set('isOpen', false);
      that.set('onConfirmClick', true);

    });

    await render(hbs`
                     <Alert
                      @dialogClassName="test-class"
                      @isOpen={{true}}
                      @confirmButtonText="Delete"
                      @onClose={{action onClose}}
                      @icon="warning-sign"
                      @onConfirm={{action onConfirm}}
                      @intent="primary"
                      @canOutsideClickCancel={{true}}
                     >
                      <p>Are you sure you want to delete this file?</p>
                      <p>There is no going back.</p>
                     </Alert>
                     <div id="destination"/>
                `);
    await click('.bp3-overlay-backdrop');
    assert.ok(this.get('onCloseClick'));
  });
});

