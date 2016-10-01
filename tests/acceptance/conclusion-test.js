import { test } from 'qunit';
import moduleForAcceptance from 'justice-for-us/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | conclusion');

test('visiting /conclusion', function(assert) {
  visit('/conclusion');

  andThen(function() {
    assert.equal(currentURL(), '/conclusion');
  });
});
