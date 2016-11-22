import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // this.route('landing', { path: '/' }, function() {
  //   this.route('welcome');
  //   this.route('splash');
  //   this.route('news');
  //   this.route('other');
  //   this.route('action-center');
  // });
  this.route('title', { path: '/'},  function() {
    this.route('welcome', { path: '/'} );
    this.route('overview');
    this.route('how-to');
    this.route('why');
    this.route('why-2');
    this.route('why-3');
  });
  this.route('stories', function() {
    this.route('story', { path: ':story_id' }, function() {
      this.route('charge');
      this.route('sentence');
      this.route('effect');
    });
  });
  this.route('conclusion', function() {
    this.route('sign-up');
  });
  this.route('base');
});

export default Router;
