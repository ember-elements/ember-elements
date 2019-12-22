import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const NS = 'ee';
const INTERACTIVE = `${NS}-interactive`;
const HTML_TABLE = `${NS}-html-table`;
const HTML_TABLE_BORDERED = `${HTML_TABLE}-bordered`;
const HTML_TABLE_CONDENSED = `${HTML_TABLE}-condensed`;
const HTML_TABLE_STRIPED = `${HTML_TABLE}-striped`;

module('Integration | Component | html-table', function(hooks) {
  setupRenderingTest(hooks);

  // this component is simple enough that tests would be purely tautological.

  test('supports bordered, interactive, stripped, condensed and className props', async function(assert) {
    await render(
      hbs`<HtmlTable @bordered={{true}} @className='foo' @interactive={{true}} @striped={{true}} @condensed={{true}}/>`
    );
    assert.dom('table').hasClass(HTML_TABLE);
    assert.dom('table').hasClass(HTML_TABLE_BORDERED);
    assert.dom('table').hasClass('foo');
    assert.dom('table').hasClass(INTERACTIVE);
    assert.dom('table').hasClass(HTML_TABLE_STRIPED);
    assert.dom('table').hasClass(HTML_TABLE_CONDENSED);
  });
});
