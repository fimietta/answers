/* global mocha */

'use strict';

require.config({
    baseUrl: 'scripts/',
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap'
    }
});

// the tests to be run should be added here
var specs = [
    'spec/collections/AnswersCollection.spec.js',
    'spec/models/AnswerModel.spec.js',
    'spec/views/AnswersCollectionView.spec.js',
    'spec/views/MostSearchedAnswersView.spec.js',
    'spec/views/DashboardView.spec.js',
    'spec/views/AnswersSearchBox.spec.js',
    'spec/views/ContentView.spec.js'
];

require(['require'], function (require) {
        require(specs, function() {
            (window.mochaPhantomJS || mocha).run();
        });
});
