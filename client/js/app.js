'use strict';

import Router from './router';

(function() {

    $(document).ready(() => {
        new Router();
        Backbone.history.start();
    });

})();
