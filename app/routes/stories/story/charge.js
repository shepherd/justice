import Ember from 'ember';

export default Ember.Route.extend({
  backgroundImages: Ember.inject.service(),

  actions: {
    didTransition() {
      Ember.run.later(() => this.controller.set('showData', true), 500);
    },

    willTransition() {
      this.controller.set('showData', false);
    }
  }
});
