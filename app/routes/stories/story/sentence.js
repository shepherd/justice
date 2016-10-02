import Ember from 'ember';

export default Ember.Route.extend({
  backgroundImages: Ember.inject.service(),

  actions: {
    didTransition() {
      Ember.run.later(() => this.controller.set('showData', true), 300);
    },

    willTransition() {
      this.controller.set('showData', false);
    }
  }
});
