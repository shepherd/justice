import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['brand-icon', 'touchable'],
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
    alert('You have tapped the brand-icon.');
  }
});
