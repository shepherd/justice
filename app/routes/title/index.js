import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    transitionToOverview() {
      this.transitionTo('title.overview');
    }
  }
});
