import Ember from 'ember';

export default Ember.Service.extend({
  values: null,

  pushValue(id, value) {
    const values = this.get('values');
    const existingValue = values.findBy('id', id);

    if (existingValue) {
      values.removeObject(existingValue);
    }

    values.pushObject({ id, value });
  },

  getValueFor(id) {
    const requestedObject = this.get('values').findBy('id', id);

    if (requestedObject) {
      return requestedObject.value;
    }
  },

  clearState() {
    this._initValuesArray();
  },

  _initValues: Ember.on('init', function() {
    this._initValuesArray();
  }),

  _initValuesArray() {
    this.set('values', Ember.A());
  }
});
