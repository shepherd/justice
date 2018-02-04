import { test } from 'qunit';
import moduleForAcceptance from 'justice-for-us/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | app entrance');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('visiting /overview', function(assert) {
  visit('/overview');

  andThen(function() {
    assert.equal(currentURL(), '/overview');
  });
});