'use strict';

import BaseView from './base-view';

export default BaseView.extend({
    template: require('../html/main.handlebars'),
    initialize () {
        this.title = 'My title';
    },
    render () {
        var template = this.template(this);
        this.$el.html(template);

        return this;
    }
});
