import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, triggerKeyEvent, fillIn, blur, focus } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

import * as Classes from '../classes';

module('Integration | Component | tag-input', function(hooks) {
  setupRenderingTest(hooks);
  test('passes inputProps to input element', async function(assert) {
    this.set('inputProps', { autofocus: true });
    this.set('VALUES', ['one', 'two', 'three']);
    await render(hbs` <TagInput @values={{this.VALUES}} autofocus={{true}} />`);
    assert.ok(this.element.querySelector('input').autofocus, 'inputProps is rendering');
  });

  test('renders a Tag for each value', async function(assert) {
    this.set('values', ['one', 'two', 'three']);
    await render(hbs` <TagInput @values={{this.values}}  />`);
    assert.equal(
      this.element.querySelectorAll('.' + Classes.TAG).length,
      this.get('values').length
    );
  });

  test('values can be valid html element', async function(assert) {
    this.set('values', [
      '<strong key="al" > Albert < /strong>',
      undefined,
      ['Bar', '<em key="thol" > thol < /em>', 'omew'],
      'Casper',
    ]);
    await render(hbs` <TagInput @values={{this.values}} />`);
    // undefined does not produce a tag
    assert.equal(this.element.querySelectorAll('.' + Classes.TAG).length, 3);
    assert.equal(this.element.querySelectorAll('strong').length, 1);
    assert.equal(this.element.querySelectorAll('em').length, 1);
  });

  test('leftIcon renders an icon as first child', async function(assert) {
    this.set('values', ['one', 'two', 'three']);
    await render(hbs` <TagInput @values={{this.values}} @leftIcon='add' />`);
    assert.ok(this.element.querySelector('.' + Classes.TAG_INPUT_ICON));
  });

  test('Yield value should render at right side', async function(assert) {
    this.set('values', ['one', 'two', 'three']);
    this.set('plus', 'plus');
    await render(
      hbs` <TagInput @values={{this.values}} @leftIcon='add'  ><Button @className='plus-button'>{{this.plus}}</Button></TagInput>`
    );
    assert.equal(this.element.querySelector('button.plus-button').textContent.trim(), 'plus');
  });

  test('tagProps object is applied to each Tag', async function(assert) {
    this.set('values', ['one', 'two', 'three']);
    this.set('tagProps', { intent: 'primary' });
    await render(hbs` <TagInput @values={{this.values}} @tagProps={{this.tagProps}}  ></TagInput>`);
    assert.equal(
      this.element.querySelectorAll('.' + Classes.TAG + '.' + Classes.intentClass('primary'))
        .length,
      3
    );
  });

  test('clicking Tag remove button invokes onRemove with that value', async function(assert) {
    this.set('values', ['one', 'two', 'three']);
    this.set('onRemove', function(value, index) {
      this.set('value', value);
      this.set('index', index);
    });
    this.set('onChange', function(value) {
      this.set('values', value);
    });
    await render(
      hbs` <TagInput @values={{this.values}} @onRemove={{action this.onRemove}} @onChange={{action this.onChange}}/>`
    );
    await click('button');
    assert.equal(this.element.querySelectorAll('.' + Classes.TAG).length, 2);
    assert.equal(this.get('value'), 'one');
    assert.equal(this.get('index'), 0);
  });

  test('onAdd:- is not invoked on enter when input is empty', async function(assert) {
    this.set('values', ['one', 'two', 'three']);
    this.set('onAdd', function() {
      this.set('isCalledOnAdd', true);
    });
    await render(hbs` <TagInput @values={{this.values}} @onAdd={{action this.onAdd}} />`);
    await triggerKeyEvent('input', 'keydown', 'Enter');
    assert.notOk(this.get('isCalledOnAdd'));
  });

  test('onAdd:- is invoked on enter when input is empty', async function(assert) {
    this.set('values', ['one', 'two', 'three']);
    this.set('onAdd', function() {
      this.set('isCalledOnAdd', true);
    });
    await render(hbs` <TagInput @values={{this.values}} @onAdd={{action this.onAdd}} />`);
    await fillIn('input', 'hello world');
    await triggerKeyEvent('input', 'keydown', 'Enter');
    assert.ok(this.get('isCalledOnAdd'));
  });

  test('onAdd:- is not invoked on blur when addOnBlur=true but inputValue is empty', async function(assert) {
    this.set('values', ['one', 'two', 'three']);
    this.set('onAdd', function(value) {
      this.set('onAddValue', value);
    });
    await render(
      hbs` <TagInput @values={{this.values}} @onAdd={{action this.onAdd}} @addOnBlur={{true}} />`
    );
    await focus('input');
    await blur('input');
    assert.equal(this.get('onAddValue'), undefined);
  });

  test('onAdd:- is not invoked on blur when addOnBlur=false', async function(assert) {
    this.set('values', ['one', 'two', 'three']);
    this.set('onAdd', function(value) {
      this.set('onAddValue', value);
    });
    await render(
      hbs` <TagInput @values={{this.values}} @onAdd={{action this.onAdd}} @addOnBlur={{false}} />`
    );
    await fillIn('input', 'hello world');
    await focus('input');
    await blur('input');
    assert.equal(this.get('onAddValue'), undefined);
  });
  // when addOnPaste = true

  //onRemove
  test('onRemove:- pressing backspace focuses last item', async function(assert) {
    this.set('values', ['one', 'two', 'three']);
    await render(hbs` <TagInput @values={{this.values}} />`);
    await triggerKeyEvent('input', 'keydown', 8);
    let doc = await this.element.querySelector('.' + Classes.ACTIVE);
    assert.equal(doc.querySelector('span').textContent.trim(), 'three');
  });

  test('onRemove:- pressing left arrow key navigates active item and backspace removes it', async function(assert) {
    this.set('values', ['one', 'two', 'three']);
    this.set('onRemove', function(value, _index) {
      this.set('value', value);
    });
    await render(hbs` <TagInput @values={{this.values}}  @onRemove={{action this.onRemove	}}/>`);
    await triggerKeyEvent('input', 'keydown', 37);
    await triggerKeyEvent('input', 'keydown', 37);
    await triggerKeyEvent('input', 'keydown', 8);
    let doc = await this.element.querySelector('.' + Classes.ACTIVE);
    assert.equal(doc.querySelector('span').textContent.trim(), 'one');
    assert.equal(this.get('value'), 'two');
  });

  test('onRemove:- pressing right arrow key in initial state does nothing', async function(assert) {
    this.set('values', ['one', 'two', 'three']);
    await render(hbs` <TagInput @values={{this.values}} />`);
    await triggerKeyEvent('input', 'keydown', 39);
    let doc = await this.element.querySelector('.' + Classes.ACTIVE);
    assert.equal(doc, undefined);
  });

  //onChange event
  test('onChange:- is not invoked on enter when input is empty', async function(assert) {
    this.set('values', ['one', 'two', 'three']);
    this.set('onChange', function(value) {
      this.set('isEntered', value);
    });
    await render(hbs` <TagInput @values={{this.values}}  @onChange={{action this.onChange	}}/>`);
    await triggerKeyEvent('input', 'keydown', 'Enter');
    assert.notOk(this.get('isEntered'));
  });

  test('onChange:- is invoked on enter with non-empty input', async function(assert) {
    this.set('values', ['one', 'two', 'three']);
    this.set('onChange', function(value) {
      this.set('values', value);
    });
    await render(hbs` <TagInput @values={{this.values}}  @onChange={{action this.onChange	}}/>`);
    await fillIn('input', 'hii');
    await triggerKeyEvent('input', 'keydown', 'Enter');
    assert.equal(this.get('values').length, 4);
  });

  test('onChange:- can add multiple tags at once with separator', async function(assert) {
    this.set('values', ['one', 'two', 'three']);
    this.set('onChange', function(value) {
      this.set('values', value);
    });
    await render(hbs` <TagInput @values={{this.values}}  @onChange={{action this.onChange	}}/>`);
    await fillIn('input', 'hii,hii,hii');
    await triggerKeyEvent('input', 'keydown', 'Enter');
    assert.equal(this.get('values').length, 6);
  });

  test('onChange:- is invoked when a tag is removed by clicking', async function(assert) {
    this.set('values', ['one', 'two', 'three']);
    this.set('onChange', function(value) {
      this.set('values', value);
    });
    await render(hbs` <TagInput @values={{this.values}}  @onChange={{action this.onChange	}}/>`);
    await click('button');
    assert.equal(this.get('values').length, 2);
  });

  test('onChange:- is invoked when a tag is removed by backspace', async function(assert) {
    this.set('values', ['one', 'two', 'three']);
    this.set('onChange', function(value) {
      this.set('values', value);
      this.set('isInvokde', true);
    });
    await render(hbs` <TagInput @values={{this.values}}  @onChange={{action this.onChange	}}/>`);
    await triggerKeyEvent('input', 'keydown', 8);
    await triggerKeyEvent('input', 'keydown', 8);
    assert.equal(this.get('values').length, 2);
    assert.ok(this.get('isInvokde'));
  });

  test('onChange:- does not clear the input if onChange not found', async function(assert) {
    this.set('values', ['one', 'two', 'three']);
    await render(hbs` <TagInput @values={{this.values}} />`);
    await fillIn('input', 'hii');
    await triggerKeyEvent('input', 'keydown', 'Enter');
    assert.equal(this.get('values').length, 3);
    assert.equal(this.element.querySelector('input').value.trim(), 'hii');
  });

  test('onChange:- does not clear the input if onChange returns set value', async function(assert) {
    this.set('values', ['one', 'two', 'three']);
    this.set('onChange', function(value) {
      this.set('values', value);
    });
    await render(hbs` <TagInput @values={{this.values}}  @onChange={{action this.onChange	}}/>`);
    await fillIn('input', 'hii');
    await triggerKeyEvent('input', 'keydown', 'Enter');
    assert.equal(this.get('values').length, 4);
    assert.equal(this.element.querySelector('input').textContent.trim(), '');
  });

  test('onKeyDown:-emits the active tag index on key down', async function(assert) {
    this.set('onKeyDown', function(_event, index) {
      this.set('index', index);
    });
    this.set('values', ['one', 'two', 'three']);
    await render(hbs` <TagInput @values={{this.values}} @onKeyDown={{action this.onKeyDown}} />`);
    await triggerKeyEvent('input', 'keydown', 8);
    await triggerKeyEvent('input', 'keydown', 8);
    assert.equal(this.get('index'), 2);
  });

  test('onKeyDown:-emits undefined on key down if active index == NONE (-1)', async function(assert) {
    this.set('onKeyDown', function(_event, index) {
      this.set('index', index);
    });
    this.set('values', ['one', 'two', 'three']);
    await render(hbs` <TagInput @values={{this.values}} @onKeyDown={{action this.onKeyDown}} />`);
    await triggerKeyEvent('input', 'keydown', 8);
    assert.equal(this.get('index'), undefined);
  });

  test('onKeyUp:-emits the active tag index on key down', async function(assert) {
    this.set('onKeyUp', function(_event, index) {
      this.set('index', index);
    });
    this.set('values', ['one', 'two', 'three']);
    await render(hbs` <TagInput @values={{this.values}} @onKeyUp={{action this.onKeyUp}} />`);
    await triggerKeyEvent('input', 'keydown', 8);
    await triggerKeyEvent('input', 'keyup', 8);
    assert.equal(this.get('index'), 2);
  });

  test('onKeyUp:-emits undefined on key down if active index == NONE (-1)', async function(assert) {
    this.set('onKeyUp', function(_event, index) {
      this.set('index', index);
    });
    this.set('values', ['one', 'two', 'three']);
    await render(hbs` <TagInput @values={{this.values}} @onKeyUp={{action this.onKeyUp}} />`);
    await triggerKeyEvent('input', 'keydown', 8);
    assert.equal(this.get('index'), undefined);
  });

  // placeholder

  test('placeholder:-appears only when values is empty', async function(assert) {
    this.set('values', []);
    await render(hbs` <TagInput @placeholder='hold the door' @values={{this.values}}  />`);
    assert.equal(this.element.querySelector('input').placeholder.trim(), 'hold the door');
    this.set('values', [undefined]);
    assert.equal(this.element.querySelector('input').placeholder.trim(), 'hold the door');
  });

  test('when input is not empty:-pressing backspace does not remove item', async function(assert) {
    this.set('onChange', function(values) {
      this.set('values', values);
    });
    this.set('values', ['one', 'two', 'three']);
    await render(hbs` <TagInput @values={{this.values}} @onChange={{action this.onChange}} />`);
    await triggerKeyEvent('input', 'keydown', 8);
    assert.equal(this.get('values').length, 3);
  });

  test('when input is not empty:-arrow key interactions ignore falsy values', async function(assert) {
    this.set('onChange', function(values) {
      this.set('values', values);
    });
    this.set('values', [
      undefined,
      '<strong key="al" > Albert < /strong>',
      false,
      ['Bar', '<em key="thol" > thol < /em>', 'omew'],
      null,
      'Casper',
      undefined,
    ]);
    await render(hbs` <TagInput @values={{this.values}} @onChange={{action this.onChange}} />`);
    await triggerKeyEvent('input', 'keydown', 8);
    await triggerKeyEvent('input', 'keydown', 8);
    assert.equal(this.element.querySelectorAll('.' + Classes.TAG).length, 2);
    assert.equal(this.get('values').length, 6);
  });

  //disabled
  // eslint-disable-next-line qunit/no-commented-tests
  // test('is non-interactive when disabled', async function(assert) {
  //   this.set('onChange', function(values) {
  //     this.set('values', values);
  //   });
  //   this.set('values', ['one', 'two', 'three']);
  //   await render(
  //     hbs` <TagInput @values={{this.values}} @disabled={{true}} @onChange={{action this.onChange}} />`
  //   );
  //   assert.ok(this.element.querySelector('.' + Classes.DISABLED));
  //   assert.ok(this.element.querySelector('input').disabled);
  //   assert.notOk(this.element.querySelector('button'), 'tag should not have tag-remove button');
  // });

  //onInputChange
  test('onInputChange:- is not invoked on enter when input is empty', async function(assert) {
    this.set('values', ['one', 'two', 'three']);
    this.set('onInputChange', function() {
      this.set('isEntered', true);
    });
    await render(
      hbs` <TagInput @values={{this.values}}  @onInputChange={{action this.onInputChange	}}/>`
    );
    await triggerKeyEvent('input', 'keydown', 'Enter');
    assert.notOk(this.get('isEntered'));
  });

  test('onInputChange:- is invoked when input text changes', async function(assert) {
    this.set('values', ['one', 'two', 'three']);
    this.set('onInputChange', function(e) {
      this.set('isEnteredValue', e.target.value);
    });
    await render(
      hbs` <TagInput @values={{this.values}}  @onInputChange={{action this.onInputChange	}}/>`
    );
    await fillIn('input', 'hii');
    assert.equal(this.get('isEnteredValue'), 'hii');
  });

  // inputValue
  test('inputValue:- passes initial inputValue to input elements', async function(assert) {
    this.set('values', ['one', 'two', 'three']);
    this.set('onInputChange', function(e) {
      this.set('isEnteredValue', e.target.value);
    });
    await render(
      hbs` <TagInput @values={{this.values}}  @onInputChange={{action this.onInputChange	}} @inputValue='new value' />`
    );
    assert.equal(this.element.querySelector('input').value.trim(), 'new value');
  });

  test('inputValue:- Updating inputValue updates input element', async function(assert) {
    this.set('values', ['one', 'two', 'three']);
    this.set('onInputChange', function(e) {
      this.set('isEnteredValue', e.target.value);
    });
    this.set('inputValue', 'new value');
    await render(
      hbs` <TagInput @values={{this.values}}  @onInputChange={{action this.onInputChange	}} @inputValue={{this.inputValue}} />`
    );
    assert.equal(this.element.querySelector('input').value.trim(), 'new value');
    await fillIn('input', 'ab');
    assert.equal(this.element.querySelector('input').value.trim(), 'ab');
  });

  test('inputValue:- has a default empty string value', async function(assert) {
    this.set('values', ['one', 'two', 'three']);
    this.set('onInputChange', function(e) {
      this.set('isEnteredValue', e.target.value);
    });
    this.set('inputValue', 'new value');
    await render(
      hbs` <TagInput @values={{this.values}}  @onInputChange={{action this.onInputChange	}} />`
    );
    assert.equal(this.element.querySelector('input').value.trim(), '');
  });
});
