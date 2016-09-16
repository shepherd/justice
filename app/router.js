import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  // 'application' is the end-all parent route

  this.route('about', { path: '/' });

  this.route('experience', function() {
    this.route('index');
    this.route('start', function() {
      this.route('index');
      this.route('button');
      this.route('slider');
    });
    this.route('intro');
    this.route('crime', function() {
      this.route('1', function() {
        this.route('index');
        this.route('result');
        this.route('effect');
      });
      this.route('2', function() {
        this.route('index');
        this.route('effect');
        this.route('result');
      });
    });
    this.route('end');
    this.route('thank-you');
  });
});

export default Router;
