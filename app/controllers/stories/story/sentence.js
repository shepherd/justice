import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    transitionToEffects() {
      const currentStoryId = this.get('model.story.id');
      this.transitionToRoute('stories.story.effect', currentStoryId);
    }
  }
});
