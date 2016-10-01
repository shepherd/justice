import { test } from 'qunit';
import moduleForAcceptance from 'justice-for-us/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index');

test('visiting / (title)', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('visiting /how-to', function(assert) {
  visit('/how-to');

  andThen(function() {
    assert.equal(currentURL(), '/how-to');
  });
});

test('visiting /overview', function(assert) {
  visit('/overview');

  andThen(function() {
    assert.equal(currentURL(), '/overview');
  });
});

test('visiting /why', function(assert) {
  visit('/why');

  andThen(function() {
    assert.equal(currentURL(), '/why');
  });
});
