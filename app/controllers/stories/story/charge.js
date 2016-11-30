import Ember from 'ember';

export default Ember.Controller.extend({
  participantState: Ember.inject.service(),
  showData: false,

  detailsOpen: false,

  selectedSentence: Ember.computed('model.story.id', 'participantState.values.[]', {
    // Have to specify a getter/setter here because we're inadvertently setting
    // (via 2-way binding) from the slider, but we don't want that to change
    // the actual data, because we're handling that in the "selectSentence" action
    get() {
      const currentStoryId = this.get('model.story.id');
      return this.get('participantState').getValueFor(currentStoryId) || 0;
    },
    set(key, value) {
      return value;
    }
  }),

  qualitative(value) {
    if (value === 0) {
      return 'Fine';
    } else if (value === 40 ) {
      return 'Life';
    } else {
      return value;
    }
  },

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

      // if value has not been set by user, use default which is set by slider
      if (participantState.getValueFor(currentStoryId) === undefined) {
        participantState.pushValue(currentStoryId, this.get('selectedSentence'));
      }

      this.transitionToRoute('stories.story.sentence', currentStoryId);
    },

    // openDetails() {
    //   this.set('detailsOpen', true);
    //   console.log('detailsOpen:', this.get('detailsOpen') );
    //   $('body').find('.details').animate( {
    //     scrollTop: 0
    //   }, 1); // not sure why this can't be 0...
    //   $('body').addClass('modal-open');
    // },
    // closeDetails() {
    //   this.set('detailsOpen', false);
    //   console.log('detailsOpen:', this.get('detailsOpen') );
    //   $('body').removeClass('modal-open');
    // }
  }
});
