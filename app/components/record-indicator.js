import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['record-indicator', 'touchable'],
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
    alert('When tapping the recording-indicator, it may show the user info as recorded.');
  }
});
