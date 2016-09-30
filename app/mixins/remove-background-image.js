import Ember from 'ember';

export default Ember.Mixin.create({
  backgroundImages: Ember.inject.service(),

  actions: {
    didTransition() {
      this.get('backgroundImages').removeBackgroundImages();
    }
  }
});
