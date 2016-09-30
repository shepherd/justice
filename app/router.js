import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {

  this.route('title', { path: '/' }, function() {
    this.route('overview');
    this.route('how-to');
    this.route('why');
    this.route('ready');
  });

  this.route('experience', function() {
    this.route('story', function() {
      this.route('1', function() {
        this.route('charge');
        this.route('sentence');
        this.route('effects');
      });
      this.route('2', function() {
        this.route('charge');
        this.route('sentence');
        this.route('effects');
      });
    });
    this.route('end', function() {
      this.route('index', { path: '/' });
      this.route('thank-you');
    });
  });

});

export default Router;
