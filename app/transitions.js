
export default function() {

  this.transition(
    this.fromRoute('load'),
    this.toRoute('title'),
    this.use('wait', 500, { then: 'fade' }),
    this.reverse('wait', 200, { then: 'fade' })
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

  this.transition( // trying to get the button to transition in place instead of sliding with it's view....
    this.hasClass('next-button'),
    this.use('fade')
  );

  this.transition( // default transition for all views
    this.use('wait', 500, { then: 'fade' }),
    this.reverse('wait', 200, { then: 'fade' })
  );

}
