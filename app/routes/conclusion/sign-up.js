import Ember from 'ember';

export default Ember.Route.extend({
  participantState: Ember.inject.service(),

  actions: {
    transitionToTitle() {
      this.get('participantState').clearState();
      this.transitionTo('title');
    },
    emberChimpDidSubmit(promise) {
      promise
      .then(response => {
        if (response.result === 'success') {
          console.log("Ember Chimp submitted Successfully!");
          // transition to "conclusion.thank-you"
        } else {
          console.log("Ember Chimp error message:" + response.msg);
        }
      })
      .catch(error => console.log("Ember Chimp had an Ajax Error."));
    }
  }
});
