import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

// window.AudioContext does not exist in safari, must use
// window.webkitAudioContext instead
if (!window.AudioContext && window.webkitAudioContext) {
  window.AudioContext = window.webkitAudioContext;
}

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

Ember.Route.reopen({
  activate: function() {
    var cssClass = this.toCssClass();
    // you probably don't need the application class
    // to be added to the body
    if (cssClass !== 'application') {
      Ember.$('body').addClass(cssClass);
    }
  },
  deactivate: function() {
    Ember.$('body').removeClass(this.toCssClass());
  },
  toCssClass: function() {
    return this.routeName.replace(/\./g, '-').dasherize();
  }
});

loadInitializers(App, config.modulePrefix);

export default App;
