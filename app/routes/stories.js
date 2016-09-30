import Ember from 'ember';
import storyData from 'justice-for-us/storyData';
import RemoveBackgroundImage from 'justice-for-us/mixins/remove-background-image';

export default Ember.Route.extend(RemoveBackgroundImage, {
  model() {
    // return this.get('store').findAll('story');
    return storyData;
  }
});
