import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'svg',
  attributeBindings: ['xmlns', 'style'],
  style: 'display: none;',
  xmlns: 'http://www.w3.org/2000/svg'
});
