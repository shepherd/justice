import Ember from 'ember';

export default Ember.Service.extend({
  currentPath: '',

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
  },

  registerCurrentPath(id, section) {
    this.set('currentPath', `experience-story experience-story-${id} experience-story-${id}-${section}`);
  },

  removeBackgroundImages() {
    this.set('currentPath', '');
  }
});
