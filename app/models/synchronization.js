import DS from 'ember-data';
import Ember from 'ember';
import { memberAction, collectionAction } from 'ember-api-actions';

export default DS.Model.extend({
  'service-item-id': DS.attr('string'),
  parsed_config: Ember.computed('service-item-id', function() {
    return JSON.parse(this.get('service-item-id'));
  }),
  table: Ember.computed('service-item-id', function() {
    return this.get('parsed_config.table');
  }),
  schema: Ember.computed('service-item-id', function() {
    return this.get('parsed_config.schema');
  }),
  database: Ember.computed('service-item-id', function() {
    return this.get('parsed_config.connection.database');
  }),
  state: DS.attr('string'),
  "created_at": DS.attr('date'),
  "updated_at": DS.attr('date'),
  "ran_at": DS.attr('date'),
  "run_at": DS.attr('date'),
  sync_now: memberAction({ path: 'sync_now', type: 'get' }),
});
