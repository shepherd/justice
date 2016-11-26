import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['warn-link'],
  message: "Are you sure?",
  x: null,
  click() {
    alert('hello');
    // let destination = this.get('x');
    // if ( destination ) {
    //   let thisMessage = this.get('message');
    //   var confirmation = confirm(thisMessage)
    //   if ( confirmation ) {
    //     // location.href = destination;
    //     window.location(destination);
    //     return true;
    //   }
    //   console.log('User pressed home, but deciced not to leave the experience');
    //   return false;
    // }
    // alert('There is no destination for this link.');
    // return false;
  }
});
