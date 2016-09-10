import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    var x = this;
    Ember.run.later((function() {
      x.transitionTo('experience.start.button');
    }), 5000);
  }

});
