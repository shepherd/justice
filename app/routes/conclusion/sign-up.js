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
        // This stuff doesn't work, it errors even when the request succeeds
        // if (response.result === 'success') {
          // console.log("Ember Chimp submitted Successfully!");
          // this.send('transitionToTitle');
        // } else {
          // console.log("Ember Chimp error message:" + response.msg);
        // }
      // })
      // .catch(error => console.log("Ember Chimp had an Ajax Error."));
        Ember.run.later(() => this.send('transitionToTitle'), 5000);
      })
      .catch(() => Ember.run.later(() => this.send('transitionToTitle'), 5000));
    }
  }
});
