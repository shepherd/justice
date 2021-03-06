import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  classNames: ['button', 'next-button'],

  text: 'Next', // default unless specified
  icon: true, // specify false to remove

  audio: Ember.inject.service(),
  sound: 'jail-door', // default unless specified

  initAudioFile: Ember.on('init', function() {
    this.get('audio').load('/audio/jail-door.mp3').asSound('jail-door');
  }),

  click() {
    this.get('audio').getSound('jail-door').play();
    this.sendAction();
  }
});
