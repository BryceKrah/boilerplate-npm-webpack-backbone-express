/* globals describe: false, it: false */

'use strict';

import { expect } from 'chai';

describe('App', function() {
    it('Render', function() {

        require('./../../client/js/app.js');
        const App = $('#app');
        expect(App[0].innerHTML).to.contain('My title');
    });
});