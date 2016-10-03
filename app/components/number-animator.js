import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['number-animator'],
  showDecimal: false,
  life: false,
  showLife: false,
  showDecimalValue: false,

  value: Ember.computed.reads('startValue'),

  firstDigit: Ember.computed('value', function() {
    const value = this.get('value');
    return String(value).charAt(0);
  }),

  secondDigit: Ember.computed('value', function() {
    const value = this.get('value');
    return String(value).charAt(1);
  }),

  didInsertElement() {
    let speed = 100;

    if (this.get('endValue') === 'Life') {
      this.set('life', true);
      speed = 30;
    }

    const incrementValue = () => {
      this.incrementProperty('value');
      const value = this.get('value');

      if (this.get('life') && value < 60 || value < parseInt(this.get('endValue')).toFixed(2)) {
        Ember.run.later(() => requestAnimationFrame(incrementValue), speed);
      } else {
        if (this.get('life')) {
          this.set('showLife', true);
        } else {
          Ember.run.later(() => this.set('showYears', true), speed);
        }
      }
    };

    Ember.run.later(() => requestAnimationFrame(incrementValue), speed * 5);
  }
});
