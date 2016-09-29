import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  classNames: ['record-indicator', 'touchable'],
  audio: Ember.inject.service(),

  initAudioFile: Ember.on('init', function() {
    // Eb5.mp3 is an mp3 file located in the "public" folder
    this.get('audio').load('/audio/alert.mp3').asSound('jail-door');
  }),

  didInsertElement() {
    Ember.$('body').find('.record-indicator').css('opacity', 0);
  },
  didRender() {
    Ember.run.later( function() {
      Ember.$('body').find('.record-indicator').animate({
        'opacity': 1
      }, 500);
    }, 2000);
  },
  click() {
    this.get('audio').getSound('jail-door').play();
    alert('When tapping the recording-indicator, it may show the user info as recorded.');
  }
});
