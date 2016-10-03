import Ember from 'ember';
import storyData from 'justice-for-us/storyData';
import RemoveBackgroundImage from 'justice-for-us/mixins/remove-background-image';

export default Ember.Route.extend(RemoveBackgroundImage, {
  participantState: Ember.inject.service(),

  model() {
    // return this.get('store').findAll('story'); // when a real API
    return storyData;
  },

  actions: {
    transitionToTitle() {
      this.get('participantState').clearState();
      this.transitionTo('title.index');
    }
  }
});
