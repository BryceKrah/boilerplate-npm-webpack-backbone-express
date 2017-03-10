'use strict';

import MainView from './views/main-view';

export default Backbone.Router.extend({
    initialize: function() {

    },
    routes: {
      '': 'index'
    },
    index: function() {
      let mainView = new MainView({
           collection: this.collection
      });
      $('#app').append(mainView.render().el);
    }
});
