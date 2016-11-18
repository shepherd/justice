import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'aside',
  classNames: 'progress-bar',
  time: 5, // default if nothing passed
  didInsertElement() {
    var time = this.get('time') * 1000;
    this.$('.meter').animate({
      width: '100%'
    }, time );
  }
});
