import Ember from 'ember';

export default Ember.Controller.extend({
  stories: [1,2,3,4,5],
  types: ['charge', 'sentence', 'effect'],
  sides: ['left', 'right'],
});
