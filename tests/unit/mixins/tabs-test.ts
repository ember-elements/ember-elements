import EmberObject from '@ember/object';
import TabsMixin from 'ember-elements/mixins/tabs';
import { module, test } from 'qunit';

module('Unit | Mixin | tabs', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let TabsObject = EmberObject.extend(TabsMixin);
    let subject = TabsObject.create();
    assert.ok(subject);
  });
});
