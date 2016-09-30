import Ember from 'ember';

export default Ember.Controller.extend({

  currentPosition: null,

  participantReady: Ember.computed('currentPosition', function() {
    if ( this.get('currentPosition') > 9 ) {
      return true;
    } else {
      return false;
    }
  })

});
