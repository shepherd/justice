import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  classNames: ['button', 'next-button'],

  text: 'Next',
  icon: true,
  sound: 'jail-door',

  audio: Ember.inject.service(),

  initAudioFile: Ember.on('init', function() {
    // Eb5.mp3 is an mp3 file located in the "public" folder
    this.get('audio').load('/audio/' + this.get('sound') + '.mp3').asSound('thisSound');
  }),

  click() {
    this.get('audio').getSound('thisSound').play();
    this.get('router').transitionTo( this.destination );
    console.log('dude, you made a ' + this.get('sound'));
  }

});
