import Ember from 'ember';

export default Ember.Route.extend({
  pace: null,
  actions: {
    transitionToHowTo() {
      this.transitionTo('title.how-to');
    },

    didTransition() {
      this.controllerFor('title').activateBlocks();

      console.log('did:', 'start');
      // let thisRoute = this;
      let timer = Ember.run.later(( function() {
        // thisRoute.transitionTo('title.how-to');
      }), 7000);
      Ember.set(this, 'pace', timer);
    },
    willTransition() {
      console.log('will:', 'cancel');
      Ember.run.cancel( this.get('pace') );
    },
  }
});

/*
export default Ember.Route.extend({
  pace: null,
  actions: {
    didTransition() {
      console.log('did:', 'start');
      let thisRoute = this;
      let timer = Ember.run.later(( function() {
        thisRoute.transitionTo('title.how-to');
      }), 5000);
      Ember.set(this, 'pace', timer);
    },
    willTransition() {
      console.log('will:', 'cancel');
      Ember.run.cancel( this.get('pace') );
    },
    transitionToHowTo() {
      this.transitionTo('title.how-to');
    }
  }
});
*/