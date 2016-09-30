import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  classNames: ['button', 'next-button'],

  text: 'Next', // default unless specified
  icon: true, // specify false to remove

  audio: Ember.inject.service(),
  sound: 'alert', // default unless specified

  initAudioFile: Ember.on('init', function() {
    // load all UI audio files here:
    const audioService = this.get('audio');
    let loadSound = function(soundName) {
      audioService.load('/audio/' + soundName + '.mp3').asSound( soundName );
    };
    loadSound('alert');
    loadSound('jail-door');
  }),

  click() {
    this.get('audio').getSound(this.get('sound')).play();
    this.sendAction();
  }
});
