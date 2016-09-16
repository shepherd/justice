
export default function() {

  this.transition(
    this.use('wait', 1000, { then: 'fade' })
  );

}
