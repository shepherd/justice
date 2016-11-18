import Ember from 'ember';

export default Ember.Route.extend({
  pace: null,
  audio: Ember.inject.service(),

  initAudioFile: Ember.on('init', function() {
    // Eb5.mp3 is an mp3 file located in the "public" folder
    this.get('audio').load('/audio/track.mp3').asSound('track');
    //this.get('audio').getSound('track').play();
  }),

  actions: {

    stopTrack() {
      this.get('audio').getSound('track').stop();
    },
    playTrack() {
      this.get('audio').getSound('track').play();
    },

    transitionToWelcome() {
      this.get('audio').getSound('track').play();
      this.transitionTo('title.welcome');
    },
    didTransition() {
      this.controllerFor('title').activateBlocks();
      let thisRoute = this;
      let timer = Ember.run.later( (function() {
        thisRoute.transitionTo('title.welcome');
      } ), 5000 );
      Ember.set(this, 'pace', timer);
    },
    willTransition() {
      Ember.run.cancel( this.get('pace') );
    }

  }
});
