import Ember from 'ember';

export default Ember.Route.extend({
  model({ story_id }) {
    // ember's params are always passed as strings
    const id = parseInt(story_id);
    return {
      story: this.modelFor('experience').findBy('id', id),
      selectedSentence: 0
    };
  }
});
