'use strict';

var state = require('app-state').init({
    devTools : true
});

state('app.shouldDoSomething', true);

setInterval(function() {
    state('app.shouldDoSomething', !state('app.shouldDoSomething'));
    console.log('setting to ', !state('app.shouldDoSomething'));
}, 2000);
