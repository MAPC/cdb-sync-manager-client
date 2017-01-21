import DS from 'ember-data';

export default DS.Model.extend({
  database: DS.attr('string'),
  get_table_names: DS.attr()
});
