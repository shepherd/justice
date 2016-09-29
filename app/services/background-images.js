import Ember from 'ember';

export default Ember.Service.extend({
  charge: {
    one: 'c-one',
    two: 'c-two'
  },
  sentence: {
    one: 's-one',
    two: 's-two'
  },
  effects: {
    one: 'e-one',
    two: 'e-two'
  },
  loadImages() {
    alert('loading images');
  }
});
