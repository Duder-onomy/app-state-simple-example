'use strict';

var state = require('app-state').init({
    devTools : true
});

state('duder.galt', true);

setInterval(function() {
    state('duder.galt', !state('duder.galt'));
    console.log('setting to ', !state('duder.galt'));
}, 2000);
