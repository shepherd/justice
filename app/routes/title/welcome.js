import Ember from 'ember';

export default Ember.Route.extend({
  pace: null,
  audio: Ember.inject.service(),
  // initAudioFile: Ember.on('init', function() {
  //   // Eb5.mp3 is an mp3 file located in the "public" folder
  //   this.get('audio').load('/audio/track.mp3').asSound('track');
  //   //this.get('audio').getSound('track').play();
  // }),

  actions: {

    stopTrack() {
      this.get('audio').getSound('track').stop();
    },
    playTrack() {
      this.get('audio').getSound('track').play();
    },

    transitionToOverview() {
      this.transitionTo('title.overview');
    },

    didTransition() {
      this.controllerFor('title').activateBlocks();

      console.log('did:', 'start');
      let thisRoute = this;
      let timer = Ember.run.later(( function() {
        thisRoute.transitionTo('title.overview');
      }), 8000);
      Ember.set(this, 'pace', timer);
    },
    willTransition() {
      console.log('will:', 'cancel');
      Ember.run.cancel( this.get('pace') );
    }
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