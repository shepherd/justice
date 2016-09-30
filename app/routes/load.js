import Ember from 'ember';
import RemoveBackgroundImage from 'justice-for-us/mixins/remove-background-image';

export default Ember.Route.extend(RemoveBackgroundImage, {
  backgrounds: Ember.inject.service(),
  beforeModel() {
    var thisRoute = this;
    Ember.run.later( function() {
      thisRoute.transitionTo('title');
    }, 2000);
    this.get('backgrounds').loadImages();
  },

});
