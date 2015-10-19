/*global require*/
'use strict';

require.config({
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

require([
    'backbone',
    'routes/AnswersRouter'
], function (Backbone, AnswersRouter) {

    window.Answers = {
        Routers: {},
        Collections: {},
        Views: {},
        init: function() {
            this.Routers.answersRouter = new AnswersRouter();
            Backbone.history.start();
        }
    };

    $(document).ready(function () {
        window.Answers.init();
    });

});


