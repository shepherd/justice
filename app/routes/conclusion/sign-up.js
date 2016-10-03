import Ember from 'ember';

export default Ember.Route.extend({
  participantState: Ember.inject.service(),

  actions: {
    transitionToTitle() {
      this.get('participantState').clearState();
      this.transitionTo('application');
    }
  }
});
