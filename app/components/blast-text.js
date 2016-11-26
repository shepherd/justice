import Ember from 'ember';

export default Ember.Component.extend({
  speed: 10,
  delimiter: 'character',
  typeIn(type, speed) {
    Ember.$('.blast').css({
      opacity: 0
    });
    let thisLength = Ember.$('.blast').length;
    let counter = 0;
    Ember.$('.blast').each(function(index) {
      var $this = Ember.$(this);
      setTimeout(function() {
        $this.velocity({
          opacity: [1, 0]
        });
        counter++;
        console.log(thisLength, counter);
        if ( counter >= thisLength ) {
          Ember.$('body').find('.next-button').velocity({
            opacity: [1, 0],
            translateY: [0, -3]
          }, {
            delay: 500
          });
          // send action up to controller or to component to show button instead of querying the dom
        }
      }, speed * index);

    });
  },
  didInsertElement() {
    let delimeter = this.get('delimiter');
    this.$().blast({
      "delimiter": delimeter
    });
    this.typeIn('a special type(not actually defined)', this.get('speed') );
  },
  willDestroyElement() {
    this.$().blast(false); // should get cleaned up somehow.
  }

});
