import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    transitionToWhy() {
      this.transitionTo('title.why');
    },

    didTransition() {
      this.controllerFor('title').activateBlocks();
    }
  }
});
