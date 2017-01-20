import Ember from 'ember';

export default Ember.Controller.extend({
  currentSort: 'ran_at:desc',
  actions: {
    syncNow(sync) {
      sync.sync_now().then((response) => {
        let store = this.get('store');
        store.push(store.normalize('synchronization', response.data));
        let state = response.data.attributes.state;

        if (state == "syncing" || state == "queued") {
          setTimeout(() => {
            this.send('syncNow',sync);
          },1000)
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
