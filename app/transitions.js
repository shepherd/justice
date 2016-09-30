
export default function() {

  this.transition(
    this.fromRoute('load'),
    this.toRoute('title'),
    this.use('fade'),
    this.reverse('fade')
  );

  this.transition(
    this.fromRoute('experience.story.charge'),
    this.toRoute('experience.story.sentence'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('experience.story.sentence'),
    this.toRoute('experience.story.effects'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

    this.transition(
    this.fromRoute('experience.story'),
    this.toRoute('experience.story'),
    this.use('toDown'),
    this.reverse('toUp')
  );

  this.transition(
    this.fromRoute('experience.story.charge'),
    this.toRoute('experience.story.sentence'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('experience.story.sentence'),
    this.toRoute('experience.story.effects'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.use('crossFade')
  );

}
