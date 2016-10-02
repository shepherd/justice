import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    returnHome() {
      this.transitionTo('application');
    }
  }
});
