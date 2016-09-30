import Ember from 'ember';
import storyData from 'justice-for-us/storyData';

export default Ember.Route.extend({
  model() {
    // return this.get('store').findAll('story');
    return storyData;
  }
});
