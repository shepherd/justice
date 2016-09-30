import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // 'application' is the end-all parent route


  this.route('title', { path: '/' });

  // this.route('about', { path: '/' });


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


  this.route('experience', function() {
    this.route('index', { path: '/' });
    // this.route('start', function() {
    //   this.route('index', { path: '/' });
    //   this.route('button');
    //   this.route('slider');
    // });
    this.route('intro');
    this.route('story', { path: ':story_id' }, function() {
      this.route('charge');
      this.route('sentence');
      this.route('effects');
    });
    this.route('end');
    this.route('thank-you');
  });
});

export default Router;
