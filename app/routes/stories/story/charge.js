import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    didTransition() {
      Ember.run.later(() => this.controller.set('showData', true), 500);
    },
    willTransition() {
      this.controller.set('showData', false);
    }
  }

});
