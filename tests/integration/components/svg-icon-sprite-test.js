import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('svg-icon-sprite', 'Integration | Component | svg icon sprite', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{svg-icon-sprite}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#svg-icon-sprite}}
      template block text
    {{/svg-icon-sprite}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
