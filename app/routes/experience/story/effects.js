import Ember from 'ember';

export default Ember.Route.extend({
  backgroundImages: Ember.inject.service(),

  actions: {
    didTransition() {
      const currentStoryId = Ember.get(this.currentModel, 'story.id');
      this.get('backgroundImages').registerCurrentPath(currentStoryId, 'effects');
    }
  }
});
