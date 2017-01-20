import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('connector');
    // return Ember.RSVP.hash({
    //   connectors: this.store.findAll('connector'),
    //   newConnector: this.store.createRecord('connector')
    // })
  }
});