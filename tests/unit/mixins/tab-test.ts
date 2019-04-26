import EmberObject from '@ember/object';
import TabMixin from 'ember-elements/mixins/tab';
import { module, test } from 'qunit';

module('Unit | Mixin | tab', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let TabObject = EmberObject.extend(TabMixin);
    let subject = TabObject.create();
    assert.ok(subject);
  });
});
