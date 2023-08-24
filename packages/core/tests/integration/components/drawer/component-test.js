import { click, render, triggerKeyEvent } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

import hbs from 'htmlbars-inline-precompile';

import * as Classes from '../classes';

const DrawerContents = `
 <div class='${Classes.DRAWER_BODY}' key={1}>
      <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna alqua. Ut enim ad minimum veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
      </p>
  </div>
  <div class='${Classes.DRAWER_FOOTER}' key={2}>
      <div class='${Classes.DIALOG_FOOTER_ACTIONS}'>
          <Button>Secondary</Button>
          <Button class='${Classes.INTENT_PRIMARY}' type='submit'>Primary</Button>
      </div>
  </div>
`;

module('Integration | Component | drawer', function (hooks) {
  setupRenderingTest(hooks);

  test('<Drawer>: renders its content correctly', async function (assert) {
    this.set('DrawerContents', DrawerContents);
    this.set('isOpen', true);

    await render(hbs`
     {{! template-lint-disable no-triple-curlies }}
       <Drawer @transitionDuration={{10}} @isOpen={{this.isOpen}}>
         {{{this.DrawerContents}}}
       </Drawer>
    `);
    await assert.dom(`.${Classes.DRAWER}`).exists();
    await assert.dom(`.${Classes.DRAWER_BODY}`).exists();
    await assert.dom(`.${Classes.DRAWER_FOOTER}`).exists();
    await assert.dom(`.${Classes.OVERLAY_BACKDROP}`).exists();
    await this.set('isOpen', false);
  });

  test('<Drawer>: overrides vertical', async function (assert) {
    this.set('DrawerContents', DrawerContents);
    this.set('isOpen', true);

    await render(hbs`
     {{! template-lint-disable no-triple-curlies }}
       <Drawer @transitionDuration={{10}} @isOpen={{this.isOpen}} @position='left'  @vertical={{true}} @size='100px'>
         {{{this.DrawerContents}}}
       </Drawer>
    `);
    // vertical size becomes height (opposite test)
    await assert.dom(`.${Classes.DRAWER}`).hasStyle({ width: '100px' });
    // vertical adds class (opposite test)
    await assert.dom(`.${Classes.VERTICAL}`).doesNotExist();
    await this.set('isOpen', false);
  });

  test('<Drawer>: position right is default', async function (assert) {
    this.set('DrawerContents', DrawerContents);
    this.set('isOpen', true);

    await render(hbs`
     {{! template-lint-disable no-triple-curlies }}
       <Drawer @transitionDuration={{10}} @isOpen={{this.isOpen}}>
         {{{this.DrawerContents}}}
       </Drawer>
    `);
    await assert.dom(`.${Classes.DRAWER}`).hasStyle({ right: '0px' });
    await this.set('isOpen', false);
  });

  test('<Drawer>: position right, size becomes width', async function (assert) {
    this.set('DrawerContents', DrawerContents);
    this.set('isOpen', true);

    await render(hbs`
     {{! template-lint-disable no-triple-curlies }}
       <Drawer @transitionDuration={{10}} @isOpen={{this.isOpen}} @position='right' @size='100px'>
         {{{this.DrawerContents}}}
       </Drawer>
    `);
    await assert.dom(`.${Classes.DRAWER}`).hasStyle({ width: '100px' });
    await this.set('isOpen', false);
  });

  test('<Drawer>: position right, adds appropriate classes (default behavior)', async function (assert) {
    this.set('DrawerContents', DrawerContents);
    this.set('isOpen', true);

    await render(hbs`
     {{! template-lint-disable no-triple-curlies }}
       <Drawer @transitionDuration={{10}} @isOpen={{this.isOpen}} @position='right'>
         {{{this.DrawerContents}}}
       </Drawer>
    `);
    await assert.dom(`.${Classes.POSITION_RIGHT}`).exists();
    await this.set('isOpen', false);
  });

  test('<Drawer>: position top, size becomes height', async function (assert) {
    this.set('DrawerContents', DrawerContents);
    this.set('isOpen', true);

    await render(hbs`
     {{! template-lint-disable no-triple-curlies }}
       <Drawer @transitionDuration={{10}} @isOpen={{this.isOpen}} @position='top' @size='100px'>
         {{{this.DrawerContents}}}
       </Drawer>
    `);
    await assert.dom(`.${Classes.DRAWER}`).hasStyle({ height: '100px' });
    await this.set('isOpen', false);
  });

  test('<Drawer>: position top, adds appropriate classes (vertical, reverse)', async function (assert) {
    this.set('DrawerContents', DrawerContents);
    this.set('isOpen', true);

    await render(hbs`
     {{! template-lint-disable no-triple-curlies }}
       <Drawer @transitionDuration={{10}} @isOpen={{this.isOpen}} @position='top' >
         {{{this.DrawerContents}}}
       </Drawer>
    `);
    await assert.dom(`.${Classes.POSITION_TOP}`).exists();
    await this.set('isOpen', false);
  });

  test('<Drawer>: position bottom, size becomes height', async function (assert) {
    this.set('DrawerContents', DrawerContents);
    this.set('isOpen', true);

    await render(hbs`
     {{! template-lint-disable no-triple-curlies }}
       <Drawer @transitionDuration={{10}} @isOpen={{this.isOpen}} @position='bottom' @size='100px'>
         {{{this.DrawerContents}}}
       </Drawer>
    `);
    await assert.dom(`.${Classes.DRAWER}`).hasStyle({ height: '100px' });
    await this.set('isOpen', false);
  });

  test('<Drawer>: position bottom, adds appropriate classes (vertical)', async function (assert) {
    this.set('DrawerContents', DrawerContents);
    this.set('isOpen', true);

    await render(hbs`
     {{! template-lint-disable no-triple-curlies }}
       <Drawer @transitionDuration={{10}} @isOpen={{this.isOpen}} @position='bottom' >
         {{{this.DrawerContents}}}
       </Drawer>
    `);
    await assert.dom(`.${Classes.POSITION_BOTTOM}`).exists();
    await this.set('isOpen', false);
  });

  test('<Drawer>: position left, size becomes width', async function (assert) {
    this.set('DrawerContents', DrawerContents);
    this.set('isOpen', true);

    await render(hbs`
     {{! template-lint-disable no-triple-curlies }}
       <Drawer @transitionDuration={{10}} @isOpen={{this.isOpen}} @position='left' @size='100px'>
         {{{this.DrawerContents}}}
       </Drawer>
    `);
    await assert.dom(`.${Classes.DRAWER}`).hasStyle({ width: '100px' });
    await this.set('isOpen', false);
  });

  test('<Drawer>: position left, adds appropriate classes (reverse)', async function (assert) {
    this.set('DrawerContents', DrawerContents);
    this.set('isOpen', true);

    await render(hbs`
     {{! template-lint-disable no-triple-curlies }}
       <Drawer @transitionDuration={{10}} @isOpen={{this.isOpen}} @position='left' >
         {{{this.DrawerContents}}}
       </Drawer>
    `);
    await assert.dom(`.${Classes.POSITION_BOTTOM}`).exists();
    await this.set('isOpen', false);
  });

  test('<Drawer>: size becomes width', async function (assert) {
    this.set('DrawerContents', DrawerContents);
    this.set('isOpen', true);

    await render(hbs`
     {{! template-lint-disable no-triple-curlies }}
       <Drawer @transitionDuration={{10}} @isOpen={{this.isOpen}} @size='100px'>
         {{{this.DrawerContents}}}
       </Drawer>
    `);
    await assert.dom(`.${Classes.DRAWER}`).hasStyle({ width: '100px' });
    await this.set('isOpen', false);
  });

  test('<Drawer>: vertical size becomes height', async function (assert) {
    this.set('DrawerContents', DrawerContents);
    this.set('isOpen', true);

    await render(hbs`
     {{! template-lint-disable no-triple-curlies }}
       <Drawer @transitionDuration={{10}} @isOpen={{this.isOpen}} @size='100px' @vertical={{true}}>
         {{{this.DrawerContents}}}
       </Drawer>
    `);
    await assert.dom(`.${Classes.DRAWER}`).hasStyle({ height: '100px' });
    await this.set('isOpen', false);
  });

  test('<Drawer>: vertical adds class', async function (assert) {
    this.set('DrawerContents', DrawerContents);
    this.set('isOpen', true);

    await render(hbs`
     {{! template-lint-disable no-triple-curlies }}
       <Drawer @transitionDuration={{10}} @isOpen={{this.isOpen}} @vertical={{true}}>
         {{{this.DrawerContents}}}
       </Drawer>
    `);
    await assert.dom(`.${Classes.VERTICAL}`).exists();
    await this.set('isOpen', false);
  });

  test('<Drawer>: portalClassName appears on Portal', async function (assert) {
    this.set('DrawerContents', DrawerContents);
    this.set('isOpen', true);
    this.set('testClassName', 'test-class');

    await render(hbs`
     {{! template-lint-disable no-triple-curlies }}
       <Drawer @transitionDuration={{10}} @isOpen={{this.isOpen}} @portalClassName={{this.testClassName}}>
         {{{this.DrawerContents}}}
       </Drawer>
    `);
    await assert.dom(`.${Classes.PORTAL}.${this.testClassName}`).exists();
    await this.set('isOpen', false);
  });

  test('<Drawer>: does not close when canOutsideClickClose=false and overlay backdrop element is moused down', async function (assert) {
    this.set('DrawerContents', DrawerContents);
    this.set('isOpen', true);
    this.set('onClose', function () {
      this.set('isOpen', false);
    });

    await render(hbs`
     {{! template-lint-disable no-triple-curlies }}
       <Drawer @transitionDuration={{10}} @isOpen={{this.isOpen}} @canOutsideClickClose={{false}} @onClose={{action this.onClose}}>
         {{{this.DrawerContents}}}
       </Drawer>
    `);

    await assert.dom(`.${Classes.DRAWER}`).exists();
    await click(`.${Classes.OVERLAY_BACKDROP}`);
    await this.set('isOpen', false);
  });

  test('<Drawer>: does not close when canEscapeKeyClose=false and escape key is pressed', async function (assert) {
    this.set('DrawerContents', DrawerContents);
    this.set('isOpen', true);
    this.set('onClose', function () {
      this.set('isOpen', false);
    });

    await render(hbs`
     {{! template-lint-disable no-triple-curlies }}
       <Drawer @transitionDuration={{10}} @isOpen={{this.isOpen}} @canEscapeKeyClose={{false}} @onClose={{action this.onClose}}>
         {{{this.DrawerContents}}}
       </Drawer>
    `);

    await assert.dom(`.${Classes.DRAWER}`).exists();
    await triggerKeyEvent(`.${Classes.OVERLAY_BACKDROP}`, 'keydown', 27);
    assert.ok(this.isOpen);

    await this.set('isOpen', false);
  });
});
