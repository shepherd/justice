import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({
  tagName: 'section',
  classNames: ['charge-block'],
  willRender() {
    console.log( Ember.$(this).css('color', 'red') );
  },
  choices: storageFor('choices'),
  actions: {
    clearChoices() {
      this.get('choices').clear();
      console.log( this.get('choices') );
    }
  }
});
