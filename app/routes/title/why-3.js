import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    transitionToFirstStory() {
      // TODO: Should probably check data for first ID and not assume it starts at 1
      this.transitionTo('stories.story.charge', 1);
    }
  }
});
