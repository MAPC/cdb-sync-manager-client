import DS from 'ember-data';
import config from '../config/environment';

const { underscore, pluralize } = Ember.String;

export default DS.JSONAPIAdapter.extend({
  host: config.host,
  pathForType: function(type) {
    let underscored = underscore(type);
    return pluralize(underscored);
  }
});
