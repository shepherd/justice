import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    transitionToTitle() {
      this.transitionTo('title');
    }
  }
});
