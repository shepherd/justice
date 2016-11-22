import Ember from 'ember';
import BaseRoute from 'justice-for-us/routes/base';

export default BaseRoute.extend({
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
