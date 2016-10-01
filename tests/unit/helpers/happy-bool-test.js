import { happyBool } from 'justice-for-us/helpers/happy-bool';
import { module, test } from 'qunit';

module('Unit | Helper | happy bool');

test('boolean "true" returns "yes"', function(assert) {
  let result = happyBool([true]);
  assert.equal(result, 'yes');
});

test('boolean "false" returns "no"', function(assert) {
  let result = happyBool([false]);
  assert.equal(result, 'no');
});

test('non-empty string returns "yes"', function(assert) {
  let result = happyBool(['test']);
  assert.equal(result, 'yes');
});

test('empty string returns "no"', function(assert) {
  let result = happyBool(['']);
  assert.equal(result, 'no');
});
