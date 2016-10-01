import Ember from 'ember';
import Application from '../../app';
import config from '../../config/environment';

// Stubbing some newer browser features that aren't available in phantomjs
window.WeakMap = function() {};
window.AudioContext = function() {};
window.Map = function() {};
window.Map.prototype.has = function() {};

export default function startApp(attrs) {
  let application;

  let attributes = Ember.merge({}, config.APP);
  attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

  Ember.run(() => {
    application = Application.create(attributes);
    application.setupForTesting();
    application.injectTestHelpers();
  });

  return application;
}
