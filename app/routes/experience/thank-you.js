import Ember from 'ember';

const resetTime = function(seconds) {
  return seconds * 1000;
};

export default Ember.Route.extend({

  model() { // why model ?
    var self = this;
    Ember.run.later((function() {
      self.transitionTo('application');
    }), resetTime(15) );
  }
});
