import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // /
  // - /index - default
  // - /overview
  // - /how-to
  // - /why

  // /stories/dynamic_id
  // - /charge
  // - /sentence
  //  -/effect // societal effects ~

  // /conclusion
  // - /index
  // - /email-sign-up
  // - /thank-you
  // - /return to loading state or welcome page etc.
});

export default Router;
