import Ember from 'ember';

export function happyBool(params) {
  if (params[0] === true) {
    return 'yes';
  } else {
    return 'no';
  }
}

export default Ember.Helper.helper(happyBool);
