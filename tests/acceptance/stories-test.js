import { test } from 'qunit';
import moduleForAcceptance from 'justice-for-us/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | stories');

test('visiting /stories/1/charge', function(assert) {
  visit('/stories/1/charge');

  andThen(function() {
    assert.equal(currentURL(), '/stories/1/charge');
  });
});

test('visiting /stories/1/sentence', function(assert) {
  visit('/stories/1/sentence');

  andThen(function() {
    assert.equal(currentURL(), '/stories/1/sentence');
  });
});

test('visiting /stories/1/effect', function(assert) {
  visit('/stories/1/effect');

  andThen(function() {
    assert.equal(currentURL(), '/stories/1/effect');
  });
});
