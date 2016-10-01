import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    transitionToHowTo() {
      this.transitionTo('title.how-to');
    }
  }
});
