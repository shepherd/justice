
export default function() {

  this.transition(
    this.fromRoute('load'),
    this.toRoute('title'),
    this.use('fade'),
    this.reverse('fade')
  );

  this.transition(
    this.fromRoute('experience.story.1.charge'),
    this.toRoute('experience.story.1.sentence'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('experience.story.1.sentence'),
    this.toRoute('experience.story.1.effects'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

    this.transition(
    this.fromRoute('experience.story.1'),
    this.toRoute('experience.story.2'),
    this.use('toDown'),
    this.reverse('toUp')
  );

  this.transition(
    this.fromRoute('experience.story.2.charge'),
    this.toRoute('experience.story.2.sentence'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('experience.story.2.sentence'),
    this.toRoute('experience.story.2.effects'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.use('crossFade')
  );

}
