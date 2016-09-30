import Ember from 'ember';

export default Ember.Controller.extend({
  valueSelected: Ember.computed('model.charge.selectedValue', function() {
    const value = this.get('model.charge.selectedValue');
    const min = this.get('model.charge.min');

    if (value < min) {
      return false;
    } else {
      return true;
    }
  })
});
