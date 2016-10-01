import Ember from 'ember';

export default Ember.Controller.extend({
  participantState: Ember.inject.service(),

  selectedSentence: Ember.computed('model.story.id', 'participantState.values.[]', {
    // Have to specify a getter/setter here because we're inadvertently setting
    // (via 2-way binding) from the slider, but we don't want that to change
    // the actual data, because we're handling that in the "selectSentence" action
    get() {
      const currentStoryId = this.get('model.story.id');
      return this.get('participantState').getValueFor(currentStoryId);
    },
    set(key, value) {
      return value;
    }
  }),

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
    selectSentence(value) {
      const currentStoryId = this.get('model.story.id');
      this.get('participantState').pushValue(currentStoryId, value);
    },

    transitionToSentence() {
      const currentStoryId = this.get('model.story.id');
      const participantState = this.get('participantState');
      // do awesome stuff ? and .then(

      // if value has not been set by user, use default which is set by slider
      if (participantState.getValueFor(currentStoryId) === undefined) {
        participantState.pushValue(currentStoryId, this.get('selectedSentence'));
      }

      this.transitionToRoute('stories.story.sentence', currentStoryId);
    }
  }
});
