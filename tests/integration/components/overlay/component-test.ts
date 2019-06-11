import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, triggerKeyEvent } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

let index = 0;
const BACKDROP = ".bp3-overlay-backdrop";
const OVERLAY_OPEN = "bp3-overlay-open";
module('Integration | Component | overlay', function (hooks) {
  setupRenderingTest(hooks);

  test('Overlay', async function (assert) {
    // renders its content correctly

    this.set('content', `<strong id="overlay-${index++} "> Overlay content! < /strong>`);
    await render(hbs`<div id="destination"/> <Overlay @isOpen={{true}} @usePortal={{false}}>{{{content}}}</Overlay>`);

    assert.equal(this.element.querySelectorAll('strong').length, 1);
    assert.equal(this.element.querySelectorAll(BACKDROP).length, 1);
  });

  test('renders contents to specified container correctly', async function (assert) {

    const CLASS_TO_TEST = "bp-test-content";
    this.set('content', `<div class="${CLASS_TO_TEST}">test</div>`);
    const that = this;
    this.set('toggleOverlay', function () {
      that.set('isOpen', true);
      that.set('destinationElement', document.querySelector("#destination1"));
    });
    await render(hbs`<div id="destination"/><div id="destination1"/> <Overlay @isOpen={{isOpen}} @destinationElement={{destinationElement}}>{{{content}}}</Overlay>  <button id='buttonToggle' onclick={{action toggleOverlay}}></button>`);
    await click('#buttonToggle');
    assert.equal(this.get('destinationElement').getElementsByClassName(CLASS_TO_TEST).length, 1);
  });

  test('portalClassName appears on Portal', async function (assert) {
    const CLASS_TO_TEST = "bp-test-content";
    this.set('CLASS_TO_TEST', CLASS_TO_TEST);
    await render(hbs`<div id="destination"/> <Overlay @isOpen={{true}} @portalClassName={{CLASS_TO_TEST}}><p>test</p></Overlay>`);

    assert.equal(document.getElementsByClassName(CLASS_TO_TEST).length, 1);
  });

  test('renders Portal after first opened', async function (assert) {
    this.set('isOpen', false);
    this.set('content', `<strong id="overlay-${index++} "> Overlay content! < /strong>`);
    await render(hbs`<div id="destination"/> <Overlay @isOpen={{isOpen}}>{{{content}}}</Overlay>`);

    assert.equal(document.querySelector("#destination span"), null);

    await this.set('isOpen', true);

    await render(hbs`<div id="destination"/> <Overlay @isOpen={{isOpen}}>{{{content}}}</Overlay>`);

    assert.ok(document.querySelector("#destination span"));
  });

  test('hasBackdrop=false does not render backdrop', async function (assert) {

    this.set('content', `<strong id="overlay-${index++} "> Overlay content! < /strong>`);
    await render(hbs`<div id="destination"/> <Overlay @isOpen={{true}} @usePortal={{false}} @hasBackdrop={{false}}>{{{content}}}</Overlay>`);

    assert.equal(this.element.querySelectorAll('strong').length, 1);
    assert.equal(this.element.querySelectorAll(BACKDROP).length, 0);
  });
  test('renders portal attached to body when not inline after first opened', async function (assert) {

    this.set('content', `<strong id="overlay-${index++} "> Overlay content! < /strong>`);
    const that = this;
    this.set('toggleOverlay', function () {
      that.set('isOpen', true);
    });
    await render(hbs`<div id="destination"/> <Overlay @isOpen={{isOpen}} >{{{content}}}</Overlay> <button id='buttonToggle' onclick={{action toggleOverlay}}></button>`);

    assert.equal(this.element.querySelectorAll('strong').length, 0);
    await click('#buttonToggle');
    assert.equal(this.element.querySelectorAll('strong').length, 1);
  });

  // onClose-------------------------------
  test('invoked on backdrop mousedown when canOutsideClickClose=true', async function (assert) {

    this.set('content', `<strong id="overlay-${index++} "> Overlay content! < /strong>`);

    const that = this;
    this.set('onClose', function () {
      that.set('IsOnCloseIsWorking', true);
    });

    await render(hbs`<div id="destination"/> <Overlay @isOpen={{true}} @onClose={{action onClose}} >{{{content}}}</Overlay>`);

    await click(BACKDROP);

    assert.ok(this.get('IsOnCloseIsWorking'));
  });

  test('not invoked on backdrop mousedown when canOutsideClickClose=false', async function (assert) {

    this.set('content', `<strong id="overlay-${index++} "> Overlay content! < /strong>`);

    const that = this;
    this.set('onClose', function () {
      that.set('IsOnCloseIsWorking', true);
    });

    await render(hbs`<div id="destination"/> <Overlay @isOpen={{true}} @onClose={{action onClose}} @canOutsideClickClose={{false}}>{{{content}}}</Overlay>`);

    await click(BACKDROP);

    assert.notOk(this.get('IsOnCloseIsWorking'));
  });

  test('invoked on document mousedown when hasBackdrop=false', async function (assert) {

    this.set('content', `<strong id="overlay-${index++} "> Overlay content! < /strong>`);

    const that = this;
    this.set('onClose', function () {
      that.set('IsOnCloseIsWorking', true);
    });

    await render(hbs`<div id="destination"/> <Overlay @isOpen={{true}} @onClose={{action onClose}} @usePortal={{false}} @hasBackdrop={{false}} >{{{content}}}</Overlay>`);

    await click(document.documentElement);

    assert.ok(this.get('IsOnCloseIsWorking'));
  });

  test('not invoked on document mousedown when hasBackdrop=false and canOutsideClickClose=false', async function (assert) {

    this.set('content', `<strong id="overlay-${index++} "> Overlay content! < /strong>`);

    const that = this;
    this.set('onClose', function () {
      that.set('IsOnCloseIsWorking', true);
    });

    await render(hbs`<div id="destination"/> <Overlay @isOpen={{true}} @canOutsideClickClose={{false}} @onClose={{action onClose}} @usePortal={{false}} @hasBackdrop={{false}} >{{{content}}}</Overlay>`);

    await click(document.documentElement);

    assert.notOk(this.get('IsOnCloseIsWorking'));
  });

  test('invoked on escape key', async function (assert) {

    this.set('content', `<strong id="overlay-${index++} "> Overlay content! < /strong>`);

    const that = this;
    this.set('onClose', function () {
      that.set('IsOnCloseIsWorking', true);
    });

    await render(hbs`<div id="destination"/> <Overlay @isOpen={{true}} @onClose={{action onClose}} @usePortal={{false}}>{{{content}}}</Overlay>`);

    await triggerKeyEvent(BACKDROP, 'keydown', 27);

    assert.ok(this.get('IsOnCloseIsWorking'));
  });

  test('not invoked on escape key when canEscapeKeyClose=false', async function (assert) {

    this.set('content', `<strong id="overlay-${index++} "> Overlay content! < /strong>`);

    const that = this;
    this.set('onClose', function () {
      that.set('IsOnCloseIsWorking', true);
    });

    await render(hbs`<div id="destination"/> <Overlay @canEscapeKeyClose={{false}} @isOpen={{true}} @onClose={{action onClose}} @usePortal={{false}}>{{{content}}}</Overlay>`);

    await triggerKeyEvent(BACKDROP, 'keydown', 27);

    assert.notOk(this.get('IsOnCloseIsWorking'));
  });

  // Focus management
  test('brings focus to overlay if autoFocus=true', async function (assert) {

    await render(hbs`<div id="destination"/> <Overlay @isOpen={{true}} @autoFocus=true ><input type="text" /></Overlay>`);
    assert.ok((document.activeElement as any).querySelector(BACKDROP));
  });

  test('does not bring focus to overlay if autoFocus=false', async function (assert) {

    await render(hbs`<div id="destination"/> <Overlay @isOpen={{true}} @autoFocus={{false}} ><input type="text" /></Overlay>`);
    assert.ok((document.activeElement as any).querySelector(BACKDROP));
  });

  test('autoFocus element inside overlay gets the focus', async function (assert) {

    await render(hbs`<div id="destination"/> <Overlay @isOpen={{true}} ><input autoFocus="true" type="text" /></Overlay>`);
    assert.equal((document.activeElement as any), this.element.querySelector('input'));
  });

  test('returns focus to overlay after clicking the backdrop if enforceFocus=true', async function (assert) {

    await render(hbs`<div id="destination"/> <Overlay @isOpen={{true}} @canOutsideClickClose={{false}} @usePortal={{false}} @enforceFocus={{true}} ><input tabIndex="0" type="text" /></Overlay>`);
    await click(BACKDROP);
    await triggerKeyEvent(BACKDROP, 'keydown', 9);

    assert.equal((document.activeElement as any), this.element.querySelector('input'));
  });

  // Background scrolling
  test('disables document scrolling by default', async function (assert) {

    await render(hbs`<div id="destination"/> <Overlay @isOpen={{true}}  ><input tabIndex="0" type="text" /></Overlay>`);

    const hasClass = document.body.classList.contains(OVERLAY_OPEN);
    assert.equal(hasClass, true);
  });

  test('disables document scrolling if hasBackdrop=true and usePortal=true', async function (assert) {

    await render(hbs`<div id="destination"/> <Overlay @isOpen={{true}} @hasBackdrop={{true}} @usePortal={{true}}  ><input tabIndex="0" type="text" /></Overlay>`);

    const hasClass = document.body.classList.contains(OVERLAY_OPEN);
    assert.equal(hasClass, true);
  });

  test('does not disable document scrolling if hasBackdrop=true and usePortal=false', async function (assert) {
    document.body.classList.remove(OVERLAY_OPEN);

    await render(hbs`<div id="destination"/> <Overlay @isOpen={{true}} @hasBackdrop={{true}} @usePortal={{false}}  ><input tabIndex="0" type="text" /></Overlay>`);

    const hasClass = document.body.classList.contains(OVERLAY_OPEN);
    assert.equal(hasClass, false);
  });

  test('does not disable document scrolling if hasBackdrop=false and usePortal=true', async function (assert) {
    document.body.classList.remove(OVERLAY_OPEN);

    await render(hbs`<div id="destination"/> <Overlay @isOpen={{true}} @hasBackdrop={{false}} @usePortal={{true}}  ><input tabIndex="0" type="text" /></Overlay>`);

    const hasClass = document.body.classList.contains(OVERLAY_OPEN);
    assert.equal(hasClass, false);
  });

  test('does not disable document scrolling if hasBackdrop=false and usePortal=false', async function (assert) {

    await render(hbs`<div id="destination"/> <Overlay @isOpen={{true}} @hasBackdrop={{false}} @usePortal={{false}}  ><input tabIndex="0" type="text" /></Overlay>`);

    const hasClass = document.body.classList.contains(OVERLAY_OPEN);
    assert.equal(hasClass, false);
  });

  test('keeps scrolling disabled if hasBackdrop=true overlay exists following unmount', async function (assert) {

    await render(hbs`<div id="destination"/> <Overlay @isOpen={{true}} @hasBackdrop={{true}}   ><input tabIndex="0" type="text" /></Overlay>`);

    const hasClass = document.body.classList.contains(OVERLAY_OPEN);
    assert.equal(hasClass, true);
  });
  test('keeps scrolling disabled if hasBackdrop=true overlay exists following unmount', async function (assert) {

    await render(hbs`<div id="destination"/> <Overlay @isOpen={{true}} @hasBackdrop={{true}}   ><input tabIndex="0" type="text" /></Overlay>`);

    const hasClass = document.body.classList.contains(OVERLAY_OPEN);
    assert.equal(hasClass, true);
  });


});
