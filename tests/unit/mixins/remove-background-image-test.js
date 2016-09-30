import Ember from 'ember';
import RemoveBackgroundImageMixin from 'justice-for-us/mixins/remove-background-image';
import { module, test } from 'qunit';

module('Unit | Mixin | remove background image');

// Replace this with your real tests.
test('it works', function(assert) {
  let RemoveBackgroundImageObject = Ember.Object.extend(RemoveBackgroundImageMixin);
  let subject = RemoveBackgroundImageObject.create();
  assert.ok(subject);
});
