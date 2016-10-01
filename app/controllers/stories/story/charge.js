import Ember from 'ember';

export default Ember.Controller.extend({
  valueSelected: Ember.computed('model.selectedSentence', function() {
    const value = this.get('model.selectedSentence');
    const min = this.get('model.story.charge.min');

    if (value < min) {
      return false;
    } else {
      return true;
    }
  }),

  actions: {
    transitionToSentence() {
      const currentStoryId = this.get('model.story.id');
      // do awesome stuff ? and .then(
      this.transitionToRoute('stories.story.sentence', currentStoryId);
    }
  }
});
