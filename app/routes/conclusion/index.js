import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    transitionToSignUp() {
      this.transitionTo('conclusion.sign-up');
    }
  }
});
