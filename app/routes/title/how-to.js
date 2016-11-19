import Ember from 'ember';

export default Ember.Route.extend({
  pace: null,
  actions: {
    transitionToWhy() {
      this.transitionTo('title.why');
    },
    didTransition() {
      this.controllerFor('title').activateBlocks();

      console.log('did:', 'start');
      let thisRoute = this;
      let timer = Ember.run.later(( function() {
        // thisRoute.transitionTo('title.why');
      }), 7000);
      Ember.set(this, 'pace', timer);
    },
    willTransition() {
      console.log('will:', 'cancel');
      Ember.run.cancel( this.get('pace') );
    }
  }
});
