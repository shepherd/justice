import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    transitionToThankYou() {
      this.transitionTo('conclusion.thank-you');
    }
  }
});
