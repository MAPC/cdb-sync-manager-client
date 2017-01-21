import DS from 'ember-data';
const { underscore, pluralize } = Ember.String;

export default DS.JSONAPIAdapter.extend({
  host: 'https://cdb-sync-manager-api.herokuapp.com',
  pathForType: function(type) {
    let underscored = underscore(type);
    return pluralize(underscored);
  }
});
