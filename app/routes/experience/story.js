import Ember from 'ember';

export default Ember.Route.extend({
  backgroundImages: Ember.inject.service(),

  model({ story_id }) {
    // ember's params are always passed as strings
    const id = parseInt(story_id);
    const stories = this.modelFor('experience');

    return {
      stories,
      story: stories.findBy('id', id),
      selectedSentence: 0
    };
  }
});
