import Ember from 'ember';

export default Ember.Controller.extend({
  participantState: Ember.inject.service(),

  selectedSentence: Ember.computed('model.story.id', 'participantState.values.[]', function() {
    const currentStoryId = this.get('model.story.id');
    return this.get('participantState').getValueFor(currentStoryId);
  }),

  actions: {
    transitionToEffects() {
      const currentStoryId = this.get('model.story.id');
      this.transitionToRoute('stories.story.effect', currentStoryId);
    }
  }
});
