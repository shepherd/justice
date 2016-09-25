import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Route.extend({

  choices: storageFor('choices'),

  actions: {
    collectChoice(thisChoice) {
      this.set('choices.choice01', thisChoice);
      console.log( this.get('choices.content') );
    }
  }

});
