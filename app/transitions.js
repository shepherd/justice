
export default function() {

  this.transition(
    this.fromRoute('load'),
    this.toRoute('title'),
    this.use('fade'),
    this.reverse('fade')
  );

  this.transition(
    this.fromRoute('stories.story.charge'),
    this.toRoute('stories.story.sentence'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('stories.story.sentence'),
    this.toRoute('stories.story.effect'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('stories.story'),
    this.toRoute('stories.story'),
    this.use('toDown'),
    this.reverse('toUp')
  );

  this.transition(
    this.fromRoute('stories.story.charge'),
    this.toRoute('stories.story.sentence'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('stories.story.sentence'),
    this.toRoute('stories.story.effect'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.use('crossFade')
  );

}
