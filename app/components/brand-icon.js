import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  classNames: ['brand-icon', 'touchable'],
  audio: Ember.inject.service(),

  initAudioFile: Ember.on('init', function() {
    // Eb5.mp3 is an mp3 file located in the "public" folder
    this.get('audio').load('/audio/jail-door.mp3').asSound('jail-door');
  }),

  didInsertElement() {
    Ember.$('body').find('.brand-icon').css('opacity', 0);
  },
  didRender() {
    Ember.run.later( function() {
      Ember.$('body').find('.brand-icon').animate({
        'opacity': 1
      }, 500);
    }, 2000);
  },
  click() {
    this.get('audio').getSound('jail-door').play();
    alert('You have tapped the brand-icon.');
  }
});
