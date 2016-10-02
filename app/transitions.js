
export default function() {

  // titles

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
    this.fromRoute('stories.story.effect'),
    this.toRoute('stories.story.charge'),
    this.use('toUp'),
    this.reverse('toDown')
  );

  // conclusion

  // default?
  this.transition( // default transition for all views
    this.use('wait', 500, { then: 'fade' }),
    this.reverse('wait', 500, { then: 'fade' })
  );

}
