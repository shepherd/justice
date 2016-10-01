import { moduleFor, test } from 'ember-qunit';

moduleFor('service:participant-state', 'Unit | Service | participant state', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});

test('it has a "clearState" method that removes all stored state', function(assert) {
  let service = this.subject();
  service.set('blah', 5);

  assert.ok(service.get('blah'));
  service.clearState();
  assert.notOk(service.get('blah'));
});
