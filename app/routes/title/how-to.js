import Ember from 'ember';

export default Ember.Route.extend({
  pace: null,
  actions: {
    transitionToFirstStory() {
      // TODO: Should probably check data for first ID and not assume it starts at 1
      this.transitionTo('stories.story.charge', 1);
    },
    didTransition() {
      this.controllerFor('title').activateBlocks();

      console.log('did:', 'start');
      // let thisRoute = this;
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
