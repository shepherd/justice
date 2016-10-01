import Ember from 'ember';

export default Ember.Service.extend({
  values: Ember.A(),

  pushValue(id, value) {
    this.get('values').pushObject({ id, value });
  },

  getValueFor(id) {
    const requestedObject = this.get('values').findBy('id', id);

    if (requestedObject && requestedObject.value) {
      return requestedObject.value;
    }
  },

  clearState() {
    this.set('values', Ember.A());
  }
});
