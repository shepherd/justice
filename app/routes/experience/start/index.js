import Ember from 'ember';

export default Ember.Route.extend({

  model() { // why model ?
    var self = this;
    Ember.run.later((function() {
      self.transitionTo('experience.start.button');
    }), 5000);
  }

});
