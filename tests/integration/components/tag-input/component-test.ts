import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, triggerKeyEvent, fillIn, blur, focus, } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const TAG = ".bp3-tag";
const PRIMARY_INTENT = ".bp3-intent-primary";
const TAG_INPUT_ICON = ".bp3-tag-input-icon";
const DISABLED = ".bp3-disabled";
module('Integration | Component | tag-input', function (hooks) {
  setupRenderingTest(hooks);

  test('passes inputProps to input element', async function (assert) {
    this.set('inputProps', { autofocus: true });
    this.set('VALUES', ["one", "two", "three"]);
    await render(hbs` <TagInput @values={{VALUES}} @inputProps={{inputProps}} >
             </TagInput>`);
    assert.ok((this.element.querySelector('input') as HTMLInputElement).autofocus, "inputProps is rendering");
  });
  test('renders a Tag for each value', async function (assert) {
    this.set('values', ["one", "two", "three"]);
    await render(hbs` <TagInput @values={{values}}  >
             </TagInput>`);
    assert.equal((this.element.querySelectorAll(TAG)).length, this.get('values').length);
  });
  test('values can be valid html element', async function (assert) {
    this.set('values', [
      '<strong key="al" > Albert < /strong>',
      undefined,
      ["Bar", '<em key="thol" > thol < /em>', "omew"],
      "Casper"
    ]);
    await render(hbs` <TagInput @values={{values}}  >
             </TagInput>`);
    // undefined does not produce a tag
    assert.equal((this.element.querySelectorAll(TAG)).length, 3);
    assert.equal((this.element.querySelectorAll("strong")).length, 1);
    assert.equal((this.element.querySelectorAll("em")).length, 1);
  });
  test('leftIcon renders an icon as first child', async function (assert) {
    this.set('values', ["one", "two", "three"]);
    await render(hbs` <TagInput @values={{values}} @leftIcon="add"  >
             </TagInput>`);
    assert.ok((this.element.querySelector(TAG_INPUT_ICON)));
  });
  test('Yield value should render at right side', async function (assert) {
    this.set('values', ["one", "two", "three"]);
    await render(hbs` <TagInput @values={{values}} @leftIcon="add"  >
             <Button @class="plus-button">plus</Button>
             </TagInput>`);
    assert.equal(((this.element.querySelector('button.plus-button') as HTMLElement).textContent as String).trim(), "plus");
  });
  test('tagProps object is applied to each Tag', async function (assert) {
    this.set('values', ["one", "two", "three"]);
    this.set('tagProps', { intent: "primary" });
    await render(hbs` <TagInput @values={{values}} @tagProps={{tagProps}}  >
             </TagInput>`);
    assert.equal((this.element.querySelectorAll(TAG + PRIMARY_INTENT)).length, 3);
  });
  test('clicking Tag remove button invokes onRemove with that value', async function (assert) {
    this.set('values', ["one", "two", "three"]);
    let that = this;
    this.set('onRemove', function (value: string, index: number) {
      that.set('value', value);
      that.set('index', index);
    });
    this.set('onChange', function (value: Array<any>) {
      that.set('values', value);
    });
    await render(hbs` <TagInput @values={{values}} @onRemove={{action onRemove}} @onChange={{action onChange}}/>`);
    await click('button');
    assert.equal((this.element.querySelectorAll(TAG)).length, 2);
    assert.equal(this.get('value'), "one");
    assert.equal(this.get('index'), 0);
  });

  test('onAdd:- is not invoked on enter when input is empty', async function (assert) {
    this.set('values', ["one", "two", "three"]);
    let that = this;
    this.set('onAdd', function () {
      that.set('isCalledOnAdd', true);
    });
    await render(hbs` <TagInput @values={{values}} @onAdd={{action onAdd}} />`);
    await triggerKeyEvent('input', 'keydown', 'Enter');
    assert.notOk(this.get('isCalledOnAdd'));
  });

  test('onAdd:- is invoked on enter when input is empty', async function (assert) {
    this.set('values', ["one", "two", "three"]);
    let that = this;
    this.set('onAdd', function () {
      that.set('isCalledOnAdd', true);
    });
    await render(hbs` <TagInput @values={{values}} @onAdd={{action onAdd}} />`);
    await fillIn('input', 'hello world');
    await triggerKeyEvent('input', 'keydown', 'Enter');
    assert.ok(this.get('isCalledOnAdd'));
  });

  // test('onAdd:- is invoked on blur when addOnBlur=true', async function (assert) {
  //   this.set('values', ["one", "two", "three"]);
  //   let that = this;
  //   this.set('onAdd', function (value: Array<any>) {
  //     that.set('onAddValue1', value);
  //   });
  //   await render(hbs` <TagInput @values={{values}} @onAdd={{action onAdd}} @addOnBlur=true />`);
  //   await focus('input');
  //   await fillIn('input', 'hello world');
  //   await blur('input');
  //   assert.equal(this.get('onAddValue1'), "hello world");
  // });

  test('onAdd:- is not invoked on blur when addOnBlur=true but inputValue is empty', async function (assert) {
    this.set('values', ["one", "two", "three"]);
    let that = this;
    this.set('onAdd', function (value: Array<any>) {
      that.set('onAddValue', value);
    });
    await render(hbs` <TagInput @values={{values}} @onAdd={{action onAdd}} @addOnBlur=true />`);
    await focus('input');
    await blur('input');
    assert.equal(this.get('onAddValue'), undefined);
  });

  test('onAdd:- is not invoked on blur when addOnBlur=false', async function (assert) {
    this.set('values', ["one", "two", "three"]);
    let that = this;
    this.set('onAdd', function (value: Array<any>) {
      that.set('onAddValue', value);
    });
    await render(hbs` <TagInput @values={{values}} @onAdd={{action onAdd}} @addOnBlur={{false}} />`);
    await fillIn('input', 'hello world');
    await focus('input');
    await blur('input');
    assert.equal(this.get('onAddValue'), undefined);
  });
  // when addOnPaste = true


  //onRemove
  test('onRemove:- pressing backspace focuses last item', async function (assert) {
    this.set('values', ["one", "two", "three"]);
    await render(hbs` <TagInput @values={{values}} />`);
    await triggerKeyEvent('input', 'keydown', 8);
    let doc: any = await this.element.querySelector('.bp3-active');
    assert.equal(doc.querySelector('span').textContent.trim(), 'three');
  });

  test('onRemove:- pressing left arrow key navigates active item and backspace removes it', async function (assert) {
    this.set('values', ["one", "two", "three"]);
    let that = this;
    this.set('onRemove', function (value: string, _index: number) {
      that.set('value', value)
    })
    await render(hbs` <TagInput @values={{values}}  @onRemove={{action onRemove	}}/>`);
    await triggerKeyEvent('input', 'keydown', 37);
    await triggerKeyEvent('input', 'keydown', 37);
    await triggerKeyEvent('input', 'keydown', 8);
    let doc: any = await this.element.querySelector('.bp3-active');
    assert.equal(doc.querySelector('span').textContent.trim(), 'one');
    assert.equal(this.get('value'), 'two');
  });

  test('onRemove:- pressing right arrow key in initial state does nothing', async function (assert) {
    this.set('values', ["one", "two", "three"]);
    await render(hbs` <TagInput @values={{values}} />`);
    await triggerKeyEvent('input', 'keydown', 39);
    let doc: any = await this.element.querySelector('.bp3-active');
    assert.equal(doc, undefined);
  });

  //onChange event
  test('onChange:- is not invoked on enter when input is empty', async function (assert) {
    this.set('values', ["one", "two", "three"]);
    let that = this;
    this.set('onChange', function (value: Array<string>) {
      that.set('isEntered', value)
    })
    await render(hbs` <TagInput @values={{values}}  @onChange={{action onChange	}}/>`);
    await triggerKeyEvent('input', 'keydown', 'Enter');
    assert.notOk(this.get('isEntered'));
  });

  test('onChange:- is invoked on enter with non-empty input', async function (assert) {
    this.set('values', ["one", "two", "three"]);
    let that = this;
    this.set('onChange', function (value: Array<string>) {
      that.set('values', value)
    })
    await render(hbs` <TagInput @values={{values}}  @onChange={{action onChange	}}/>`);
    await fillIn('input', "hii");
    await triggerKeyEvent('input', 'keydown', 'Enter');
    assert.equal(this.get('values').length, 4);
  });

  test('onChange:- can add multiple tags at once with separator', async function (assert) {
    this.set('values', ["one", "two", "three"]);
    let that = this;
    this.set('onChange', function (value: Array<string>) {
      that.set('values', value)
    })
    await render(hbs` <TagInput @values={{values}}  @onChange={{action onChange	}}/>`);
    await fillIn('input', "hii,hii,hii");
    await triggerKeyEvent('input', 'keydown', 'Enter');
    assert.equal(this.get('values').length, 6);
  });

  test('onChange:- is invoked when a tag is removed by clicking', async function (assert) {
    this.set('values', ["one", "two", "three"]);
    let that = this;
    this.set('onChange', function (value: Array<string>) {
      that.set('values', value)
    })
    await render(hbs` <TagInput @values={{values}}  @onChange={{action onChange	}}/>`);
    await click('button');
    assert.equal(this.get('values').length, 2);
  });

  test('onChange:- is invoked when a tag is removed by backspace', async function (assert) {
    this.set('values', ["one", "two", "three"]);
    let that = this;
    this.set('onChange', function (value: Array<string>) {
      that.set('values', value)
      that.set('isInvokde', true);
    })
    await render(hbs` <TagInput @values={{values}}  @onChange={{action onChange	}}/>`);
    await triggerKeyEvent('input', 'keydown', 8);
    await triggerKeyEvent('input', 'keydown', 8);
    assert.equal(this.get('values').length, 2);
    assert.ok(this.get('isInvokde'));
  });

  test('onChange:- does not clear the input if onChange not found', async function (assert) {
    this.set('values', ["one", "two", "three"]);
    await render(hbs` <TagInput @values={{values}} />`);
    await fillIn('input', "hii");
    await triggerKeyEvent('input', 'keydown', 'Enter');
    assert.equal(this.get('values').length, 3);
    assert.equal((this.element.querySelector('input') as any).value.trim(), "hii");
  });

  test('onChange:- does not clear the input if onChange returns set value', async function (assert) {
    this.set('values', ["one", "two", "three"]);
    let that = this;
    this.set('onChange', function (value: Array<string>) {
      that.set('values', value);
    })
    await render(hbs` <TagInput @values={{values}}  @onChange={{action onChange	}}/>`);
    await fillIn('input', "hii");
    await triggerKeyEvent('input', 'keydown', 'Enter');
    assert.equal(this.get('values').length, 4);
    assert.equal((this.element.querySelector('input') as any).textContent.trim(), "");
  });
  // test('onChange:- does not clear the input if the input is controlled', async function (assert) {
  //   this.set('values', ["one", "two", "three"]);
  //   let that = this;
  //   this.set('onChange', function (value: Array<string>) {
  //     that.set('values', value);
  //   })
  //   await render(hbs` <TagInput @values={{values}}  @onChange={{action onChange	}} @inputValue="hii"/>`);
  //   await triggerKeyEvent('input', 'keydown', 'Enter');
  //   assert.equal(this.get('values').length, 4);
  //   assert.equal((this.element.querySelector('input') as any).value, "hii");
  // });
  test('onKeyDown:-emits the active tag index on key down', async function (assert) {
    let that = this;
    this.set('onKeyDown', function (_event: any, index: number) {
      that.set('index', index);
    })
    this.set('values', ["one", "two", "three"]);
    await render(hbs` <TagInput @values={{values}} @onKeyDown={{action onKeyDown}} />`);
    await triggerKeyEvent('input', 'keydown', 8);
    await triggerKeyEvent('input', 'keydown', 8);
    assert.equal(this.get('index'), 2);
  });

  test('onKeyDown:-emits undefined on key down if active index == NONE (-1)', async function (assert) {
    let that = this;
    this.set('onKeyDown', function (_event: any, index: number) {
      that.set('index', index);
    })
    this.set('values', ["one", "two", "three"]);
    await render(hbs` <TagInput @values={{values}} @onKeyDown={{action onKeyDown}} />`);
    await triggerKeyEvent('input', 'keydown', 8);
    assert.equal(this.get('index'), undefined);
  });

  test('onKeyUp:-emits the active tag index on key down', async function (assert) {
    let that = this;
    this.set('onKeyUp', function (_event: any, index: number) {
      that.set('index', index);
    })
    this.set('values', ["one", "two", "three"]);
    await render(hbs` <TagInput @values={{values}} @onKeyUp={{action onKeyUp}} />`);
    await triggerKeyEvent('input', 'keydown', 8);
    await triggerKeyEvent('input', 'keyup', 8);
    assert.equal(this.get('index'), 2);
  });

  test('onKeyUp:-emits undefined on key down if active index == NONE (-1)', async function (assert) {
    let that = this;
    this.set('onKeyUp', function (_event: any, index: number) {
      that.set('index', index);
    })
    this.set('values', ["one", "two", "three"]);
    await render(hbs` <TagInput @values={{values}} @onKeyUp={{action onKeyUp}} />`);
    await triggerKeyEvent('input', 'keydown', 8);
    assert.equal(this.get('index'), undefined);
  });

  // placeholder

  test('placeholder:-appears only when values is empty', async function (assert) {
    this.set('values', []);
    await render(hbs` <TagInput @placeholder="hold the door" @values={{values}}  />`);
    assert.equal((this.element.querySelector('input') as any).placeholder.trim(), "hold the door");
    this.set('values', [undefined]);
    assert.equal((this.element.querySelector('input') as any).placeholder.trim(), "hold the door");
  });


  test('placeholder:-inputProps.placeholder appears all the time', async function (assert) {
    this.set('values', []);
    this.set('inputProps', { placeholder: "hold the door" });
    await render(hbs` <TagInput  @values={{values}} @inputProps={{inputProps}}  />`);
    assert.equal((this.element.querySelector('input') as any).placeholder.trim(), "hold the door");
    this.set('values', [undefined]);
    assert.equal((this.element.querySelector('input') as any).placeholder.trim(), "hold the door");
    this.set('values', ["one", "two", "three"]);
    assert.equal((this.element.querySelector('input') as any).placeholder.trim(), "hold the door");

  });

  test('placeholder:-setting both shows placeholder when empty and inputProps.placeholder otherwise', async function (assert) {
    this.set('values', []);
    this.set('inputProps', { placeholder: "inputProps" });
    await render(hbs` <TagInput  @values={{values}} @placeholder="props" @inputProps={{inputProps}}  />`);
    assert.equal((this.element.querySelector('input') as any).placeholder.trim(), "props");
    this.set('values', ["one", "two", "three"]);
    assert.equal((this.element.querySelector('input') as any).placeholder.trim(), "inputProps");

  });

  test('when input is not empty:-pressing backspace does not remove item', async function (assert) {
    let that = this;
    this.set('onChange', function (values: Array<string>) {
      that.set('values', values);
    })
    this.set('values', ["one", "two", "three"]);
    await render(hbs` <TagInput @values={{values}} @onChange={{action onChange}} />`);
    await triggerKeyEvent('input', 'keydown', 8);
    assert.equal(this.get('values').length, 3);
  });

  test('when input is not empty:-arrow key interactions ignore falsy values', async function (assert) {
    let that = this;
    this.set('onChange', function (values: Array<string>) {
      that.set('values', values);
    })
    this.set('values', [undefined,
      '<strong key="al" > Albert < /strong>',
      false,
      ["Bar", '<em key="thol" > thol < /em>', "omew"],
      null,
      "Casper",
      undefined,]);
    await render(hbs` <TagInput @values={{values}} @onChange={{action onChange}} />`);
    await triggerKeyEvent('input', 'keydown', 8);
    await triggerKeyEvent('input', 'keydown', 8);
    assert.equal((this.element.querySelectorAll(TAG)).length, 2);
    assert.equal(this.get('values').length, 6);
  });

  //disabled
  test('is non-interactive when disabled', async function (assert) {
    let that = this;
    this.set('onChange', function (values: Array<string>) {
      that.set('values', values);
    })
    this.set('values', ["one", "two", "three"]);
    await render(hbs` <TagInput @values={{values}} @disabled=true @onChange={{action onChange}} />`);
    assert.ok((this.element.querySelector(DISABLED) as HTMLElement));
    assert.ok((this.element.querySelector('input') as any).disabled);
    assert.notOk((this.element.querySelector('button') as HTMLInputElement), "tag should not have tag-remove button");
  });

  //onInputChange
  test('onInputChange:- is not invoked on enter when input is empty', async function (assert) {
    this.set('values', ["one", "two", "three"]);
    let that = this;
    this.set('onInputChange', function () {
      that.set('isEntered', true)
    })
    await render(hbs` <TagInput @values={{values}}  @onInputChange={{action onInputChange	}}/>`);
    await triggerKeyEvent('input', 'keydown', 'Enter');
    assert.notOk(this.get('isEntered'));
  });

  test('onInputChange:- is invoked when input text changes', async function (assert) {
    this.set('values', ["one", "two", "three"]);
    let that = this;
    this.set('onInputChange', function (e: any) {
      that.set('isEnteredValue', e.target.value);
    })
    await render(hbs` <TagInput @values={{values}}  @onInputChange={{action onInputChange	}}/>`);
    await fillIn('input', 'hii');
    assert.equal(this.get('isEnteredValue'), "hii");
  });

  // inputValue
  test('inputValue:- passes initial inputValue to input elements', async function (assert) {
    this.set('values', ["one", "two", "three"]);
    let that = this;
    this.set('onInputChange', function (e: any) {
      that.set('isEnteredValue', e.target.value);
    })
    await render(hbs` <TagInput @values={{values}}  @onInputChange={{action onInputChange	}} @inputValue="new value" />`);
    assert.equal((this.element.querySelector('input') as any).value.trim(), "new value");
  });

  test('inputValue:- prop changes are reflected in state', async function (assert) {
    this.set('values', ["one", "two", "three"]);
    let that = this;
    this.set('onInputChange', function (e: any) {
      that.set('isEnteredValue', e.target.value);
    })
    await render(hbs` <TagInput @values={{values}}  @onInputChange={{action onInputChange	}} @inputValue={{inputValue}} />`);
    assert.equal((this.element.querySelector('input') as any).value.trim(), "");
    this.set('inputValue', 'a');
    assert.equal((this.element.querySelector('input') as any).value.trim(), "a");

    this.set('inputValue', 'b');
    assert.equal((this.element.querySelector('input') as any).value.trim(), "b");

    this.set('inputValue', 'c');
    assert.equal((this.element.querySelector('input') as any).value.trim(), "c");
  });

  test('inputValue:- Updating inputValue updates input element', async function (assert) {
    this.set('values', ["one", "two", "three"]);
    let that = this;
    this.set('onInputChange', function (e: any) {
      that.set('isEnteredValue', e.target.value);
    });
    this.set('inputValue', 'new value')
    await render(hbs` <TagInput @values={{values}}  @onInputChange={{action onInputChange	}} @inputValue={{inputValue}} />`);
    assert.equal((this.element.querySelector('input') as any).value.trim(), "new value");
    await fillIn('input', "ab")
    assert.equal((this.element.querySelector('input') as any).value.trim(), "ab");
  });

  test('inputValue:- has a default empty string value', async function (assert) {
    this.set('values', ["one", "two", "three"]);
    let that = this;
    this.set('onInputChange', function (e: any) {
      that.set('isEnteredValue', e.target.value);
    });
    this.set('inputValue', 'new value')
    await render(hbs` <TagInput @values={{values}}  @onInputChange={{action onInputChange	}} />`);
    assert.equal((this.element.querySelector('input') as any).value.trim(), "");
  });

});
