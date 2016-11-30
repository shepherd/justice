import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div', // this should probably be an 'a' tag with attribute binding
  classNames: ['warn-link'],
  message: "Are you sure?",
  href: null,
  click() {
    let destination = this.get('href');
    if ( destination ) {
      let thisMessage = this.get('message');
      var confirmation = confirm(thisMessage);
      if ( confirmation ) {
        location.href = destination;
        // Ember.$('body').velocity({
        //   opacity: 0 // fading out the body in an attempt to smooth the transition to the new URL
        // }, {
        //   duration: 300,
        //   complete() {
        //     location.href = destination;
        //     // window.location(destination); // wehich version is best?
        //   }
        // });
        return true;
        // $todo
        // this should trigger the action that clears the user
      }
      console.log('User pressed home, but deciced not to leave the experience');
      return false;
    }
    alert('There is no destination for this link.');
    return false;
  }
});
