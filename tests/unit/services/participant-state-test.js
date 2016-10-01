import { moduleFor, test } from 'ember-qunit';

moduleFor('service:participant-state', 'Unit | Service | participant state', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});

test('it has a "pushValue" method that pushes a POJO into the "values" array', function(assert) {
  let service = this.subject();
  service.pushValue(1, 55);
  assert.deepEqual(service.get('values')[0], { id: 1, value: 55 });
});

test('"pushValue" will accept and set a value of number 0', function(assert) {
  let service = this.subject();
  service.pushValue(1, 0);
  assert.deepEqual(service.get('values')[0], { id: 1, value: 0 });
});

test('reusing the same ID overwrites instead of appends', function(assert) {
  let service = this.subject();

  service.pushValue(1, 55);
  assert.deepEqual(service.get('values')[0], { id: 1, value: 55 });

  service.pushValue(1, 54);
  assert.deepEqual(service.get('values')[0], { id: 1, value: 54 });

  service.pushValue(1, 53);
  assert.deepEqual(service.get('values')[0], { id: 1, value: 53 });
});

test('it has a "getValueFor" method that gets the "value" key from a given POJO from the "values" array', function(assert) {
  let service = this.subject();
  service.get('values').pushObject({ id: 1, value: 55 });
  assert.deepEqual(service.getValueFor(1), 55);
});

test('"getValueFor" properly returns a value of number 0', function(assert) {
  let service = this.subject();
  service.get('values').pushObject({ id: 1, value: 0 });
  assert.deepEqual(service.getValueFor(1), 0);
});

test('it has a "clearState" method that removes all stored values from the "values" array', function(assert) {
  let service = this.subject();
  service.pushValue(1, 55);

  assert.equal(service.getValueFor(1), 55);
  service.clearState();
  assert.notOk(service.getValueFor(1));
});
