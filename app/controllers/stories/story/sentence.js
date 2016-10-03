import Ember from 'ember';

export default Ember.Controller.extend({
  participantState: Ember.inject.service(),
  showData: false,

  selectedSentence: Ember.computed('model.story.id', 'participantState.values.[]', function() {
    const currentStoryId = this.get('model.story.id');
    return this.get('participantState').getValueFor(currentStoryId) || 0;
  }),

  actions: {
    transitionToEffects() {
      const currentStoryId = this.get('model.story.id');
      this.transitionToRoute('stories.story.effect', currentStoryId);
    },
    didTransition() {
      Ember.run.later(() => this.controller.set('showData', true), 500);
    },
    willTransition() {
      this.controller.set('showData', false);
    }
  }
});
