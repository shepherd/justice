import Ember from 'ember';

export default Ember.Controller.extend({
  active: false,

  activateBlocks() {
    this.set('active', true);
  },

  hideBlocks() {
    this.set('active', false);
  }
});
