import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.modelFor('experience.story.2');
  }
});
