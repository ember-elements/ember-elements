/* eslint-disable qunit/no-commented-tests */
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, triggerKeyEvent } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

import * as Classes from '../classes';
module('Integration | Component | overlay', function(hooks) {
  setupRenderingTest(hooks);

  test('Overlay', async function(assert) {
    // renders its content correctly
    this.set('isOpen', true);
    await render(
      hbs`{{! template-lint-disable }}
      <div id='destination'/> <Overlay @isOpen={{this.isOpen}} @usePortal={{false}}><strong> Overlay content! </strong></Overlay>`
    );
    assert.dom('span').exists();
    assert.dom('.' + Classes.OVERLAY_BACKDROP).exists();
    await this.set('isOpen', false);
  });

  test('renders contents to specified container correctly', async function(assert) {
    const CLASS_TO_TEST = 'ee-test-content';
    this.set('content', `<div class='${CLASS_TO_TEST}'>test</div>`);
    this.set('toggleOverlay', function() {
      this.set('isOpen', true);
    });

    await render(
      hbs`<Overlay @isOpen={{this.isOpen}}><strong class='ee-test-content'> Overlay content! </strong></Overlay>  <button id='buttonToggle' onclick={{action this.toggleOverlay}}></button>`
    );
    await click('#buttonToggle');
    assert.dom('.' + CLASS_TO_TEST).exists();
    await this.set('isOpen', false);
  });

  test('portalClassName appears on Portal', async function(assert) {
    const CLASS_TO_TEST = 'bp-test-content';
    this.set('CLASS_TO_TEST', CLASS_TO_TEST);
    this.set('isOpen', true);

    await render(hbs`<Overlay @isOpen={{this.isOpen}} class={{this.CLASS_TO_TEST}}>
    </Overlay>`);

    assert.dom('.' + CLASS_TO_TEST).exists();
    await this.set('isOpen', false);
  });

  test('renders Portal after first opened', async function(assert) {
    this.set('isOpen', false);

    await render(hbs`<Overlay @isOpen={{this.isOpen}}><span class='exists'> hi </span></Overlay>`);

    assert.dom('.exists').doesNotExist();
    await this.set('isOpen', true);

    await render(hbs`<Overlay @isOpen={{this.isOpen}}><span class='exists'> hi </span></Overlay>`);
    assert.dom('.exists').exists();
    await this.set('isOpen', false);
  });

  test('hasBackdrop=false does not render backdrop', async function(assert) {
    this.set('isOpen', true);

    await render(
      hbs`<Overlay @isOpen={{isOpen}} @usePortal={{false}} @hasBackdrop={{false}}><strong/></Overlay>`
    );
    assert.dom('strong').exists();
    assert.dom('.' + Classes.OVERLAY_BACKDROP).doesNotExist();
    await this.set('isOpen', false);
  });

  test('renders portal attached to body when not inline after first opened', async function(assert) {
    this.set('toggleOverlay', function() {
      this.set('isOpen', true);
    });
    await render(
      hbs`<Overlay @isOpen={{this.isOpen}} ><strong/></Overlay> <button id='buttonToggle' onclick={{action toggleOverlay}}></button>`
    );

    assert.equal(this.element.querySelectorAll('strong').length, 0);
    await click('#buttonToggle');
    assert.equal(this.element.querySelectorAll('strong').length, 1);
    await this.set('isOpen', false);
  });

  // onClose-------------------------------
  test('invoked on backdrop mousedown when canOutsideClickClose=true', async function(assert) {
    this.set('onClose', function() {
      this.set('IsOnCloseIsWorking', true);
    });
    this.set('isOpen', true);

    await render(
      hbs`<Overlay @isOpen={{this.isOpen}} @onClose={{action this.onClose}} ></Overlay>`
    );

    await click('.' + Classes.OVERLAY_BACKDROP);

    assert.ok(this.get('IsOnCloseIsWorking'));
    await this.set('isOpen', false);
  });

  test('not invoked on backdrop mousedown when canOutsideClickClose=false', async function(assert) {
    this.set('onClose', function() {
      this.set('IsOnCloseIsWorking', true);
    });
    this.set('isOpen', true);

    await render(
      hbs`<Overlay @isOpen={{this.isOpen}} @onClose={{action onClose}} @canOutsideClickClose={{false}}><strong/></Overlay>`
    );

    await click('.' + Classes.OVERLAY_BACKDROP);

    assert.notOk(this.get('IsOnCloseIsWorking'));
    await this.set('isOpen', false);
  });

  test('invoked on document mousedown when hasBackdrop=false', async function(assert) {
    this.set('onClose', function() {
      this.set('IsOnCloseIsWorking', true);
    });
    await this.set('isOpen', true);

    await render(
      hbs`<Overlay @isOpen={{this.isOpen}} @onClose={{action this.onClose}} @usePortal={{false}} @hasBackdrop={{false}} ><strong/></Overlay>`
    );

    await click(document.documentElement);

    assert.ok(this.get('IsOnCloseIsWorking'));
    await this.set('isOpen', false);
  });

  test('not invoked on document mousedown when hasBackdrop=false and canOutsideClickClose=false', async function(assert) {
    this.set('onClose', function() {
      this.set('IsOnCloseIsWorking', true);
    });
    this.set('isOpen', true);

    await render(
      hbs`<Overlay @isOpen={{this.isOpen}} @canOutsideClickClose={{false}} @onClose={{action this.onClose}} @usePortal={{false}} @hasBackdrop={{false}} ><strong/></Overlay>`
    );

    await click(document.documentElement);

    assert.notOk(this.get('IsOnCloseIsWorking'));
    await this.set('isOpen', false);
  });

  test('invoked on escape key', async function(assert) {
    this.set('onClose', function() {
      this.set('IsOnCloseIsWorking', true);
    });
    this.set('isOpen', true);

    await render(
      hbs`<Overlay @isOpen={{this.isOpen}} @onClose={{action this.onClose}} @usePortal={{false}}><strong/></Overlay>`
    );

    await triggerKeyEvent('.' + Classes.OVERLAY_BACKDROP, 'keydown', 27);

    assert.ok(this.get('IsOnCloseIsWorking'));
    await this.set('isOpen', false);
  });

  test('not invoked on escape key when canEscapeKeyClose=false', async function(assert) {
    this.set('onClose', function() {
      this.set('IsOnCloseIsWorking', true);
    });
    this.set('isOpen', true);

    await render(
      hbs`<Overlay @canEscapeKeyClose={{false}} @isOpen={{this.isOpen}} @onClose={{action onClose}} @usePortal={{false}}><strong/></Overlay>`
    );

    await triggerKeyEvent('.' + Classes.OVERLAY_BACKDROP, 'keydown', 27);

    assert.notOk(this.get('IsOnCloseIsWorking'));
    await this.set('isOpen', false);
  });

  // Focus management
  // test('brings focus to overlay if autoFocus=true', async function(assert) {
  //   this.set('isOpen', true);

  //   await render(
  //     hbs`<Overlay @isOpen={{this.isOpen}} @autoFocus={{true}} ><input type="text" /></Overlay>`
  //   );
  //   console.log(document.activeElement.classList);
  //   assert.ok(document.activeElement.classList.contains(Classes.OVERLAY_CONTENT));
  //   await this.set('isOpen', false);
  // });

  test('does not bring focus to overlay if autoFocus=false', async function(assert) {
    this.set('isOpen', true);

    await render(
      hbs`<Overlay @isOpen={{this.isOpen}} @autoFocus={{false}} ><input type="text" /></Overlay>`
    );
    assert.ok(document.activeElement.querySelector('.' + Classes.OVERLAY_BACKDROP));

    await this.set('isOpen', false);
  });

  // test('autoFocus element inside overlay gets the focus', async function(assert) {
  //   this.set('isOpen', true);
  //   await render(
  //     hbs`<Overlay @isOpen={{this.isOpen}} ><input autoFocus="true" type="text" /></Overlay>`
  //   );
  //   assert.equal(document.activeElement, this.element.querySelector('input'));
  //   await this.set('isOpen', false);
  // });

  // test('returns focus to overlay after clicking the backdrop if enforceFocus=true', async function(assert) {
  //   this.set('isOpen', true);
  //   await render(
  //     hbs`<Overlay @isOpen={{this.isOpen}} @canOutsideClickClose={{false}} @usePortal={{false}} @enforceFocus={{true}} ><input tabIndex="0" type="text" /></Overlay>`
  //   );
  //   await click('.' + Classes.OVERLAY_BACKDROP);
  //   await triggerKeyEvent('.' + Classes.OVERLAY_BACKDROP, 'keydown', 9);
  //   assert.ok(document.activeElement.classList.contains(Classes.OVERLAY_CONTENT));
  //   await this.set('isOpen', false);
  // });

  // Background scrolling
  test('disables document scrolling by default', async function(assert) {
    this.set('isOpen', true);

    await render(
      hbs`<Overlay @isOpen={{this.isOpen}}><input tabIndex="0" type="text" /></Overlay>`
    );
    const hasClass = await document.body.classList.contains(Classes.OVERLAY_OPEN);
    assert.equal(hasClass, true);
    await this.set('isOpen', false);
  });

  test('disables document scrolling if hasBackdrop=true and usePortal=true', async function(assert) {
    this.set('isOpen', true);
    await render(
      hbs`<Overlay @isOpen={{this.isOpen}} @hasBackdrop={{true}} @usePortal={{true}}  ><input tabIndex="0" type="text" /></Overlay>`
    );

    const hasClass = document.body.classList.contains(Classes.OVERLAY_OPEN);

    assert.equal(hasClass, true);
    await this.set('isOpen', false);
  });

  test('does not disable document scrolling if hasBackdrop=true and usePortal=false', async function(assert) {
    document.body.classList.remove(Classes.OVERLAY_OPEN);
    this.set('isOpen', true);

    await render(
      hbs`<Overlay @isOpen={{this.isOpen}} @hasBackdrop={{true}} @usePortal={{false}}  ><input tabIndex="0" type="text" /></Overlay>`
    );

    const hasClass = document.body.classList.contains(Classes.OVERLAY_OPEN);
    assert.equal(hasClass, false);
    await this.set('isOpen', false);
  });

  test('does not disable document scrolling if hasBackdrop=false and usePortal=true', async function(assert) {
    document.body.classList.remove(Classes.OVERLAY_OPEN);
    this.set('isOpen', true);

    await render(
      hbs`<Overlay @isOpen={{this.isOpen}} @hasBackdrop={{false}} @usePortal={{true}}  ><input tabIndex="0" type="text" /></Overlay>`
    );

    const hasClass = document.body.classList.contains(Classes.OVERLAY_OPEN);

    assert.equal(hasClass, false);
    await this.set('isOpen', false);
  });

  test('does not disable document scrolling if hasBackdrop=false and usePortal=false', async function(assert) {
    this.set('isOpen', true);

    await render(
      hbs`<Overlay @isOpen={{this.isOpen}} @hasBackdrop={{false}} @usePortal={{false}}  ><input tabIndex="0" type="text" /></Overlay>`
    );

    const hasClass = document.body.classList.contains(Classes.OVERLAY_OPEN);

    assert.equal(hasClass, false);
    await this.set('isOpen', false);
  });

  test('keeps scrolling disabled if hasBackdrop=true overlay exists following unmount', async function(assert) {
    this.set('isOpen', true);

    await render(
      hbs`<Overlay @isOpen={{this.isOpen}} @hasBackdrop={{true}}   ><input tabIndex="0" type="text" /></Overlay>`
    );

    const hasClass = document.body.classList.contains(Classes.OVERLAY_OPEN);

    assert.equal(hasClass, true);
    await this.set('isOpen', false);
  });
});
