import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'a',
  classNames: ['warn-link'],
  message: "Are you sure?",
  href: null,
  click(message) {
    let destination = this.get('href');
    if ( destination ) {
      let thisMessage = this.get('message');
      var confirmation = window.confirm(thisMessage)
      if ( confirmation ) {
        window.location.href = destination;
        return true;
      }
      console.log('User pressed home, but deciced not to leave the experience');
      return false;
    }
    alert('There is no destination for this link.');
    return false;
  }
});
