/* globals Backbone: false */

'use strict';

export default Backbone.View.extend({
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
