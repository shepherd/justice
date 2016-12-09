import { test } from 'qunit';
import moduleForAcceptance from 'justice-for-us/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | app entrance');

test('visiting /app-entrance', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
