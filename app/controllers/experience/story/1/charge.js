import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

// this needs to be switched out for a component so we can reuse it
export default Ember.Controller.extend({
  rangeMin: 0,
  rangeMax: 45,
  rangeStep: 1,
  rangeCurrent: 20,
  formattedCurrent: Ember.computed('rangeCurrent', function() {
    const current = this.get('rangeCurrent');
    const min = this.get('rangeMin');
    const max = this.get('rangeMax');
    if ( !current ) {
      return 'Use the slider to select';
    } else if ( current >= max  ) {
      return 'Life in prison';
    } else if ( current == min ) {
      return 'Go free';
    } else {
      return current + ' years in prison';
    }
  }),
  choices: storageFor('choices'),
  actions: {
    saveChoice() {
      var choices = this.get('choices');
      Ember.set('choices.thing1', 'adsjkflashfa');
      console.log(choices);
    }
  }
});
