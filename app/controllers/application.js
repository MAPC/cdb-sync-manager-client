import Ember from 'ember';

export default Ember.Controller.extend({
  currentSort: 'ran_at:desc',
  actions: {
    syncNow(sync) {
      if(!sync.get('sync_started',)) {
        sync.set('sync_started', true);
        sync.set('state', 'queued');
      }
      sync.sync_now().then((response) => {
        let store = this.get('store');
        sync.rollbackAttributes();
        store.push(store.normalize('synchronization', response.data));
        let state = response.data.attributes.state;

        if (state == "syncing" || state == "queued" || state == "created") {
          setTimeout(() => {
            this.send('syncNow',sync);
          },1000)
        } else {

        }
      });
    },
    sortBy(field) {
      this.set('currentSort', field); 
    },
    newSync() {
      $('.ui.modal').modal('show');
    }
  }
});
