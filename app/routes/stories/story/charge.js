import Ember from 'ember';
import BaseRoute from 'justice-for-us/routes/base';

export default BaseRoute.extend({
  audio: Ember.inject.service(),

  initAudioFile: Ember.on('init', function() {
    // Eb5.mp3 is an mp3 file located in the "public" folder
    this.get('audio').load('/audio/track.mp3').asSound('track');
  }),
  doSomething: function() {
    if (!this._didSomethingAlready) {

      this.get('audio').getSound('track').play();
      console.log('Sound is being played.');
      this._didSomethingAlready = true;
    }
  }.on('activate'),
  actions: {
    didTransition() {
      Ember.run.later(() => this.controller.set('showData', true), 500);
    },
    willTransition() {
      this.controller.set('showData', false);
    }
  }

});
