import Ember from 'ember';

export default Ember.Controller.extend({
  applicationController: Ember.inject.controller('application'),
  database_id: null,
  currentConnection: Ember.computed('database_id', function() {
    return this.get('model').findBy('id', this.get('database_id'));
  }),
  selected_table: null,
  entered_schema: null,
  isCompleted: Ember.computed('database_id,selected_table,entered_schema', function() {
    let { database_id,selected_table,entered_schema } 
      = this.getProperties('database_id', 'selected_table', 'entered_schema');
    console.log(database_id);
    if (database_id && selected_table && entered_schema) { 
      return true
    } else {
      return false
    } 
  }),
  actions: {
    createSync() {
      let service_item_id = 
        { 
          "table": this.get('selected_table'), 
          "schema": this.get('entered_schema')
        };

      let stringified_json = JSON.stringify(service_item_id);

      let record = this.store.createRecord('synchronization', {
        'service-item-id': stringified_json,
        connection_id: this.get('currentConnection.id'),
        state: 'queued'
      });

      record.save().then((sync) => {
        this.get('applicationController').send('syncNow', sync);
        this.setProperties({'database_id':null, 'selected_table':null, 'entered_schema':null});
        this.transitionToRoute('application');
      });
    }
  }
});
