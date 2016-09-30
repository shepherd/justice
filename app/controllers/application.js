import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Controller.extend({
  backgroundImages: Ember.inject.service(),
  choices: storageFor('choices'),

  actions: {
    resetChoices() {
      this.get('choices').clear();
      console.log( this.get('choices.content') );
    }
  }

});
