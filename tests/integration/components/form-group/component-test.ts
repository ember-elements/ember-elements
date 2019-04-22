import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | form-group', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });


    // Template block usage:
    await render(hbs`
      {{#form-group}}
        template block text
      {{/form-group}}
    `);

    assert.equal((this.element as any).textContent.trim(), 'template block text');
  });
  test('Custom class to FormGroup ', async function (assert) {
    await render(hbs`
      <FormGroup @class="hellow">
      <InputGroup @placeholder="Enter text..."/>
      </FormGroup>
    `);

    assert.ok(document.getElementsByName('hellow'));
  });
  test('Yield value is rendering ', async function (assert) {
    await render(hbs`
      <FormGroup >
      <InputGroup @placeholder="Enter text..."/>
      </FormGroup>
    `);

    assert.ok(document.getElementsByName('bp3-input-group'));
  });
  test('contentClassName class to FormGroup ', async function (assert) {
    await render(hbs`
      <FormGroup @contentClassName="hellow">
      <InputGroup @placeholder="Enter text..."/>
      </FormGroup>
    `);

    assert.ok(document.getElementsByName('hellow'));
  });
  test('disabled FormGroup ', async function (assert) {
    await render(hbs`
      <FormGroup @disabled=true>
      <InputGroup @placeholder="Enter text..."/>
      </FormGroup>
    `);

    assert.ok(document.getElementsByName('bp3-disabled'));
  });
  test('helperText for  FormGroup ', async function (assert) {
    await render(hbs`
      <FormGroup @helperText="helper text is rendering">
      <InputGroup @placeholder="Enter text..."/>
      </FormGroup>
    `);
    assert.equal((document.querySelector(".bp3-form-helper-text") as any).textContent.trim(), "helper text is rendering");
  });
  test('inline prop for  FormGroup ', async function (assert) {
    await render(hbs`
      <FormGroup @inline=true>
      <InputGroup @placeholder="Enter text..."/>
      </FormGroup>
    `);

    assert.ok(document.getElementsByName('bp3-inline'));
  });
  test('intent=primary prop for  FormGroup ', async function (assert) {
    await render(hbs`
      <FormGroup @intent="primary">
      <InputGroup @placeholder="Enter text..."/>
      </FormGroup>
    `);

    assert.ok(document.getElementsByName('bp3-intent-primary'));
  });
  test('intent=success prop for  FormGroup ', async function (assert) {
    await render(hbs`
      <FormGroup @intent="success">
      <InputGroup @placeholder="Enter text..."/>
      </FormGroup>
    `);

    assert.ok(document.getElementsByName('bp3-intent-success'));
  });
  test('intent=warning prop for  FormGroup ', async function (assert) {
    await render(hbs`
      <FormGroup @intent="warning">
      <InputGroup @placeholder="Enter text..."/>
      </FormGroup>
    `);

    assert.ok(document.getElementsByName('bp3-intent-warning'));
  });
  test('intent=danger prop for  FormGroup ', async function (assert) {
    await render(hbs`
      <FormGroup @intent="danger">
      <InputGroup @placeholder="Enter text..."/>
      </FormGroup>
    `);

    assert.ok(document.getElementsByName('bp3-intent-danger'));
  });
  test('label prop for  FormGroup ', async function (assert) {
    await render(hbs`
      <FormGroup @label="danger">
      <InputGroup @placeholder="Enter text..."/>
      </FormGroup>
    `);

    assert.equal((document.querySelector('.bp3-label') as any).textContent.trim(), "danger");
  });
  test('labelFor prop for  FormGroup ', async function (assert) {
    await render(hbs`
      <FormGroup @label="hi" @labelFor="text-input">
      <InputGroup @placeholder="Enter text..."/>
      </FormGroup>
    `);

    assert.ok(document.getElementsByTagName("label")[0].getAttribute("for"));
  });
  test('labelInfo prop for  FormGroup ', async function (assert) {
    await render(hbs`
      <FormGroup @label="hi" @labelInfo="hellow" @labelFor="text-input">
      <InputGroup @placeholder="Enter text..."/>
      </FormGroup>
    `);

    assert.equal((document.querySelector(".bp3-text-muted") as any).textContent.trim(), "hellow");
  });
  test('Custom style  ', async function (assert) {
    await render(hbs`
      <FormGroup @style="width:20px">
      <InputGroup @placeholder="Enter text..."/>
      </FormGroup>
    `);

    assert.equal((document.querySelector('.bp3-form-group') as HTMLInputElement).style.width, "20px");
  });

});

