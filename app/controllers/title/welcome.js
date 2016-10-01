import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    transitionToOverview() {
      this.transitionTo('title.overview');
    }
  }
});
