import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about', { path: '/' });
  this.route('experience', function() {
    this.route('start', function() {
      this.route('button');
      this.route('slider');
    });
    this.route('crime', function() {
      this.route('1', function() {
        this.route('result');
        this.route('effect');
      });

      this.route('2', function() {
        this.route('effect');
        this.route('result');
      });
    });
    this.route('end');
  });
});

export default Router;
