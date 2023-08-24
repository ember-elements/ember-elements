import {
  blur,
  click,
  fillIn,
  focus,
  render,
  triggerKeyEvent,
} from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

import hbs from 'htmlbars-inline-precompile';

import * as Classes from '../classes';

module('Integration | Component | tag-input', function (hooks) {
  setupRenderingTest(hooks);
  test('passes inputProps to input element', async function (assert) {
    this.set('inputProps', { autofocus: true });
    this.set('VALUES', ['one', 'two', 'three1']);
    await render(hbs` <TagInput @values={{this.VALUES}} autofocus={{true}} />`);
    assert.ok(
      this.element.querySelector('input').autofocus,
      'inputProps is rendering'
    );
  });

  test('renders a Tag for each value', async function (assert) {
    this.set('values', ['one', 'two', 'three2']);
    await render(hbs` <TagInput @values={{this.values}}  />`);
    assert.strictEqual(
      this.element.querySelectorAll('.' + Classes.TAG).length,
      this.values.length
    );
  });

  test('values can be valid html element', async function (assert) {
    this.set('values', [
      '<strong key="al" > Albert < /strong>',
      undefined,
      ['Bar', '<em key="thol" > thol < /em>', 'omew'],
      'Casper',
    ]);
    await render(hbs` <TagInput @values={{this.values}} />`);
    // undefined does not produce a tag
    assert.strictEqual(
      this.element.querySelectorAll('.' + Classes.TAG).length,
      3
    );
    assert.strictEqual(this.element.querySelectorAll('strong').length, 1);
    assert.strictEqual(this.element.querySelectorAll('em').length, 1);
  });

  test('leftIcon renders an icon as first child', async function (assert) {
    this.set('values', ['one', 'two', 'three3']);
    await render(hbs` <TagInput @values={{this.values}} @leftIcon='add' />`);
    assert.ok(this.element.querySelector('.' + Classes.TAG_INPUT_ICON));
  });

  test('Yield value should render at right side', async function (assert) {
    this.set('values', ['one', 'two', 'three4']);
    this.set('plus', 'plus');
    await render(
      hbs` <TagInput @values={{this.values}} @leftIcon='add'  ><Button @className='plus-button'>{{this.plus}}</Button></TagInput>`
    );
    assert.strictEqual(
      this.element.querySelector('button.plus-button').textContent.trim(),
      'plus'
    );
  });

  test('tagProps object is applied to each Tag', async function (assert) {
    this.set('values', ['one', 'two', 'three5']);
    this.set('tagProps', { intent: 'primary' });
    await render(
      hbs` <TagInput @values={{this.values}} @tagProps={{this.tagProps}}  ></TagInput>`
    );
    assert.strictEqual(
      this.element.querySelectorAll(
        '.' + Classes.TAG + '.' + Classes.intentClass('primary')
      ).length,
      3
    );
  });

  test('clicking Tag remove button invokes onRemove with that value', async function (assert) {
    this.set('values', ['one', 'two', 'three6']);
    this.set('onRemove', function (value, index) {
      this.set('value', value);
      this.set('index', index);
    });
    this.set('onChange', function (value) {
      this.set('values', value);
    });
    await render(
      hbs` <TagInput @values={{this.values}} @onRemove={{action this.onRemove}} @onChange={{action this.onChange}}/>`
    );
    await click('button');
    assert.strictEqual(
      this.element.querySelectorAll('.' + Classes.TAG).length,
      2
    );
    assert.strictEqual(this.value, 'one');
    assert.strictEqual(this.index, 0);
  });

  test('onAdd:- is not invoked on enter when input is empty', async function (assert) {
    this.set('values', ['one', 'two', 'three7']);
    this.set('onAdd', function () {
      this.set('isCalledOnAdd', true);
    });
    await render(
      hbs` <TagInput @values={{this.values}} @onAdd={{action this.onAdd}} />`
    );
    await triggerKeyEvent('input', 'keydown', 'Enter'); //01
    assert.notOk(this.isCalledOnAdd);
  });

  test('onAdd:- is invoked on enter when input is empty', async function (assert) {
    this.set('values', ['one', 'two', 'three8']);
    this.set('onAdd', function () {
      this.set('isCalledOnAdd', true);
    });
    await render(
      hbs` <TagInput @values={{this.values}} @onAdd={{action this.onAdd}} />`
    );
    await fillIn('input', 'hello world');
    await triggerKeyEvent('input', 'keydown', 'Enter'); //02
    assert.ok(this.isCalledOnAdd);
  });

  test('onAdd:- is not invoked on blur when addOnBlur=true but inputValue is empty', async function (assert) {
    this.set('values', ['one', 'two', 'three9']);
    this.set('onAdd', function (value) {
      this.set('onAddValue', value);
    });
    await render(
      hbs` <TagInput @values={{this.values}} @onAdd={{action this.onAdd}} @addOnBlur={{true}} />`
    );
    await focus('input');
    await blur('input');
    assert.strictEqual(this.onAddValue, undefined);
  });

  test('onAdd:- is not invoked on blur when addOnBlur=false', async function (assert) {
    this.set('values', ['one', 'two', 'three10']);
    this.set('onAdd', function (value) {
      this.set('onAddValue', value);
    });
    await render(
      hbs` <TagInput @values={{this.values}} @onAdd={{action this.onAdd}} @addOnBlur={{false}} />`
    );
    await fillIn('input', 'hello world');
    await focus('input');
    await blur('input');
    assert.strictEqual(this.onAddValue, undefined);
  });
  // when addOnPaste = true

  //onRemove
  test('onRemove:- pressing backspace focuses last item', async function (assert) {
    this.set('values', ['one', 'two', 'three11']);
    await render(hbs` <TagInput @values={{this.values}} />`);
    await triggerKeyEvent('input', 'keydown', 8); //last item
    assert.strictEqual(
      this.element
        .querySelector('.' + Classes.ACTIVE)
        .querySelector('span')
        .textContent.trim(),
      'three11'
    );
  });

  test('onRemove:- pressing left arrow key navigates active item and backspace removes it', async function (assert) {
    this.set('values', ['one', 'two', 'three12']);
    this.set('onRemove', function (value) {
      this.set('value', value);
    });
    await render(
      hbs` <TagInput @values={{this.values}}  @onRemove={{action this.onRemove	}}/>`
    );
    await triggerKeyEvent('input', 'keydown', 37); //first
    await triggerKeyEvent('input', 'keydown', 37); // second
    await triggerKeyEvent('input', 'keydown', 8); // key 8 to remove 3rd
    assert.strictEqual(
      this.element
        .querySelector('.' + Classes.ACTIVE)
        .querySelector('span')
        .textContent.trim(),
      'one'
    );
    assert.strictEqual(this.value, 'two');
  });

  test('onRemove:- pressing right arrow key in initial state does nothing', async function (assert) {
    this.set('values', ['one', 'two', 'three13']);
    await render(hbs` <TagInput @values={{this.values}} />`);
    await triggerKeyEvent('input', 'keydown', 39);
    assert.strictEqual(
      this.element.querySelector('.' + Classes.ACTIVE),
      null
    );
  });

  //onChange event
  test('onChange:- is not invoked on enter when input is empty', async function (assert) {
    this.set('values', ['one', 'two', 'three14']);
    this.set('onChange', function (value) {
      this.set('isEntered', value);
    });
    await render(
      hbs` <TagInput @values={{this.values}}  @onChange={{action this.onChange	}}/>`
    );
    await triggerKeyEvent('input', 'keydown', 'Enter'); //03
    assert.notOk(this.isEntered);
  });

  test('onChange:- is invoked on enter with non-empty input', async function (assert) {
    this.set('values', ['one', 'two', 'three15']);
    this.set('onChange', function (value) {
      this.set('values', value);
    });
    await render(
      hbs` <TagInput @values={{this.values}}  @onChange={{action this.onChange	}}/>`
    );
    await fillIn('input', 'hii');
    await triggerKeyEvent('input', 'keydown', 'Enter'); //04
    assert.strictEqual(this.values.length, 4);
  });

  test('onChange:- can add multiple tags at once with separator', async function (assert) {
    this.set('values', ['one', 'two', 'three16']);
    this.set('onChange', function (value) {
      this.set('values', value);
    });
    await render(
      hbs` <TagInput @values={{this.values}}  @onChange={{action this.onChange	}}/>`
    );
    await fillIn('input', 'hii,hii,hii');
    await triggerKeyEvent('input', 'keydown', 'Enter'); //05
    assert.strictEqual(this.values.length, 6);
  });

  test('onChange:- is invoked when a tag is removed by clicking', async function (assert) {
    this.set('values', ['one', 'two', 'three17']);
    this.set('onChange', function (value) {
      this.set('values', value);
    });
    await render(
      hbs` <TagInput @values={{this.values}}  @onChange={{action this.onChange	}}/>`
    );
    await click('button');
    assert.strictEqual(this.values.length, 2);
  });

  test('onChange:- is invoked when a tag is removed by backspace', async function (assert) {
    this.set('values', ['one', 'two', 'three18']);
    this.set('onChange', function (value) {
      this.set('values', value);
      this.set('isInvokde', true);
    });
    await render(
      hbs` <TagInput @values={{this.values}}  @onChange={{action this.onChange	}}/>`
    );
    await triggerKeyEvent('input', 'keydown', 8); // key 8 press1
    await triggerKeyEvent('input', 'keydown', 8); // press 2
    assert.strictEqual(this.values.length, 2);
    assert.ok(this.isInvokde);
  });

  test('onChange:- does not clear the input if onChange not found', async function (assert) {
    this.set('values', ['one', 'two', 'three19']);
    await render(hbs` <TagInput @values={{this.values}} />`);
    await fillIn('input', 'hii');
    await triggerKeyEvent('input', 'keydown', 'Enter'); //06
    assert.strictEqual(this.values.length, 3);
    assert.strictEqual(this.element.querySelector('input').value.trim(), 'hii');
  });

  test('onChange:- does not clear the input if onChange returns set value', async function (assert) {
    this.set('values', ['one', 'two', 'three20']);
    this.set('onChange', function (value) {
      this.set('values', value);
    });
    await render(
      hbs` <TagInput @values={{this.values}}  @onChange={{action this.onChange	}}/>`
    );
    await fillIn('input', 'hii');
    await triggerKeyEvent('input', 'keydown', 'Enter'); //07
    assert.strictEqual(this.values.length, 4); //get  4 values
    assert.strictEqual(
      this.element.querySelector('input').textContent.trim(),
      ''
    );
  });

  test('onKeyDown:-emits the active tag index on key down', async function (assert) {
    this.set('onKeyDown', function (_event, index) {
      this.set('index', index);
    });
    this.set('values', ['one', 'two', 'three21']);
    await render(
      hbs` <TagInput @values={{this.values}} @onKeyDown={{action this.onKeyDown}} />`
    );
    await triggerKeyEvent('input', 'keydown', 8); //keydown 8 -01
    await triggerKeyEvent('input', 'keydown', 8); //keydown 8 -02
    assert.strictEqual(this.index, 2);
  });

  test('onKeyDown:-emits undefined on key down if active index == NONE (-1)', async function (assert) {
    this.set('onKeyDown', function (_event, index) {
      this.set('index', index);
    });
    this.set('values', ['one', 'two', 'three22']);
    await render(
      hbs` <TagInput @values={{this.values}} @onKeyDown={{action this.onKeyDown}} />`
    );
    await triggerKeyEvent('input', 'keydown', 8); //keydown 8 -03
    assert.strictEqual(this.index, undefined);
  });

  test('onKeyUp:-emits the active tag index on key down', async function (assert) {
    this.set('onKeyUp', function (_event, index) {
      this.set('index', index);
    });
    this.set('values', ['one', 'two', 'three23']);
    await render(
      hbs` <TagInput @values={{this.values}} @onKeyUp={{action this.onKeyUp}} />`
    );
    await triggerKeyEvent('input', 'keydown', 8);
    await triggerKeyEvent('input', 'keyup', 8);
    assert.strictEqual(this.index, 2);
  });

  test('onKeyUp:-emits undefined on key down if active index == NONE (-1)', async function (assert) {
    this.set('onKeyUp', function (_event, index) {
      this.set('index', index);
    });
    this.set('values', ['one', 'two', 'three24']);
    await render(
      hbs` <TagInput @values={{this.values}} @onKeyUp={{action this.onKeyUp}} />`
    );
    await triggerKeyEvent('input', 'keydown', 8); //keydown 8 -04
    assert.strictEqual(this.index, undefined);
  });

  // placeholder

  test('placeholder:-appears only when values is empty', async function (assert) {
    this.set('values', []);
    await render(
      hbs` <TagInput @placeholder='hold the door' @values={{this.values}}  />`
    );
    assert.strictEqual(
      this.element.querySelector('input').placeholder.trim(),
      'hold the door'
    );
    this.set('values', [undefined]);
    assert.strictEqual(
      this.element.querySelector('input').placeholder.trim(),
      'hold the door'
    );
  });

  test('when input is not empty:-pressing backspace does not remove item', async function (assert) {
    this.set('onChange', function (values) {
      this.set('values', values);
    });
    this.set('values', ['one', 'two', 'three25']);
    await render(
      hbs` <TagInput @values={{this.values}} @onChange={{action this.onChange}} />`
    );
    await triggerKeyEvent('input', 'keydown', 8); //keydown 8 -05
    assert.strictEqual(this.values.length, 3);
  });

  test('when input is not empty:-arrow key interactions ignore falsy values', async function (assert) {
    this.set('onChange', function (values) {
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
    await render(
      hbs` <TagInput @values={{this.values}} @onChange={{action this.onChange}} />`
    );
    await triggerKeyEvent('input', 'keydown', 8); // keydown 8 0-05
    await triggerKeyEvent('input', 'keydown', 8); // keydown 8 0-05
    assert.strictEqual(
      this.element.querySelectorAll('.' + Classes.TAG).length,
      2
    ); //02
    assert.strictEqual(this.values.length, 6); //02
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
  test('onInputChange:- is not invoked on enter when input is empty', async function (assert) {
    this.set('values', ['one', 'two', 'three26']);
    this.set('onInputChange', function () {
      this.set('isEntered', true);
    });
    await render(
      hbs` <TagInput @values={{this.values}}  @onInputChange={{action this.onInputChange	}}/>`
    );
    await triggerKeyEvent('input', 'keydown', 'Enter');
    assert.notOk(this.isEntered);
  });

  test('onInputChange:- is invoked when input text changes', async function (assert) {
    this.set('values', ['one', 'two', 'three27']);
    this.set('onInputChange', function (e) {
      this.set('isEnteredValue', e.target.value);
    });
    await render(
      hbs` <TagInput @values={{this.values}}  @onInputChange={{action this.onInputChange	}}/>`
    );
    await fillIn('input', 'hii');
    assert.strictEqual(this.isEnteredValue, 'hii');
  });

  // inputValue
  test('inputValue:- passes initial inputValue to input elements', async function (assert) {
    this.set('values', ['one', 'two', 'three28']);
    this.set('onInputChange', function (e) {
      this.set('isEnteredValue', e.target.value);
    });
    await render(
      hbs` <TagInput @values={{this.values}}  @onInputChange={{action this.onInputChange	}} @inputValue='new value' />`
    );
    assert.strictEqual(
      this.element.querySelector('input').value.trim(),
      'new value'
    );
  });

  test('inputValue:- Updating inputValue updates input element', async function (assert) {
    this.set('values', ['one', 'two', 'three29']);
    this.set('onInputChange', function (e) {
      this.set('isEnteredValue', e.target.value);
    });
    this.set('inputValue', 'new value');
    await render(
      hbs` <TagInput @values={{this.values}}  @onInputChange={{action this.onInputChange	}} @inputValue={{this.inputValue}} />`
    );
    assert.strictEqual(
      this.element.querySelector('input').value.trim(),
      'new value'
    ); //02
    await fillIn('input', 'ab');
    assert.strictEqual(this.element.querySelector('input').value.trim(), 'ab');
  });

  test('inputValue:- has a default empty string value', async function (assert) {
    this.set('values', ['one', 'two', 'three30']);
    this.set('onInputChange', function (e) {
      this.set('isEnteredValue', e.target.value);
    });
    this.set('inputValue', 'new value');
    await render(
      hbs` <TagInput @values={{this.values}}  @onInputChange={{action this.onInputChange	}} />`
    );
    assert.strictEqual(this.element.querySelector('input').value.trim(), '');
  });
});
