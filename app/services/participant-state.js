import Ember from 'ember';

export default Ember.Service.extend({
  clearState() {
    const keys = Object.keys(this);
    keys.map((key) => this.set(key, undefined));
  }
});
