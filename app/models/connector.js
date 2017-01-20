import Model from 'ember-pouch/model';
import DS from 'ember-data';

const {
  attr,
  hasMany,
  belongsTo
} = DS;

export default Model.extend({
  provider: DS.attr('string'),
  server: DS.attr('string'),
  database: DS.attr('string'),
  username: DS.attr('string'),
  password: DS.attr('string'),
  table: DS.attr('string'),
  schema: DS.attr('string'),
  interval: DS.attr('string')
});
