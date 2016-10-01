import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    transitionToOverview() {
      // I'm interested in why you went this route / let's discuss
      this.transitionTo('title.overview');
    }
  }
});
