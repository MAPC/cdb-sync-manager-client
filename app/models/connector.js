import DS from 'ember-data';

export default DS.Model.extend({
  provider: DS.attr('string'),
  server: DS.attr('string'),
  database: DS.attr('string'),
  username: DS.attr('string'),
  password: DS.attr('string'),
  table: DS.attr('string'),
  schema: DS.attr('string'),
  interval: DS.attr('string'),
});
