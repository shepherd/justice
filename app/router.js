import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // 'application' is the end-all parent route

  this.route('load', { path: '/' });
  this.route('title', { path: '/welcome' });

  // this.route('about', { path: '/' });

  this.route('experience', function() {
    this.route('index', { path: '/' });
    // this.route('start', function() {
    //   this.route('index', { path: '/' });
    //   this.route('button');
    //   this.route('slider');
    // });
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

  this.route('load');
});

export default Router;
