import Ember from 'ember';

export default Ember.Route.extend({
  backgrounds: Ember.inject.service(),
  beforeModel() {
    var thisRoute = this;
    Ember.run.later( function() {
      thisRoute.transitionTo('title');
    }, 5000);
    this.get('backgrounds').loadImages();
  },

});
