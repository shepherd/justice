import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    transitionToWelcome() {
      this.transitionTo('title.welcome');
    },

    didTransition() {
      this.controllerFor('title').activateBlocks();
    }
  }
});
