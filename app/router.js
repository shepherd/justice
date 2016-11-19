import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('title', { path: '/intro'},  function() {
    this.route('welcome', { path: '/'} );
    this.route('overview');
    this.route('how-to');
    this.route('why');
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
  this.route('landing', { path: '/' }, function() {
    this.route('welcome');
    this.route('splash');
    this.route('news');
    this.route('other');
    this.route('action-center');
  });
});

export default Router;
