import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // 'application' is the end-all parent route

  // this.route('title', { path: '/' });

  this.route('about', { path: '/' });

  this.route('experience', function() {
    this.route('index');
    this.route('start', function() {
      this.route('index', { path: '/' });
      this.route('button');
      this.route('slider');
    });
    this.route('intro');
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
    this.route('end');
    this.route('thank-you');
  });
  
});

export default Router;
