import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    Ember.run.later( function() {
      console.log('...ok... loading should be done... The point, would to be to have a min time for loading spinner...');
    }, 3000);
  }
});
