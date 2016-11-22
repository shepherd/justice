import Ember from 'ember';

export default Ember.Component.extend({
  speed: 10,
  delimiter: 'character',
  typeIn(type, speed) {
    $('.blast').css({
      opacity: 0
    });
    $('.blast').each(function(index) {
      var $this = $(this);
      var x = setTimeout(function() {
        $this.velocity({
          opacity: [1, 0]
        });
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
    this.$().blast(false); // should get cleanup up somehow.
  }

});
