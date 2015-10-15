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
    'views/AnswersCollectionView',
    'collections/AnswersCollection',
    'views/DashboardView'
], function (Backbone, AnswersCollectionView, AnswersCollection, DashboardView) {

    window.Answers = {
        Collections: {
            answers: new AnswersCollection()
        },
        Views: {},
        init: function() {

            this.Views.dashboard = new DashboardView({
                el: '#dashboard'
            });

            this.Views.answersCollectionView = new AnswersCollectionView({
                collection: this.Collections.answers,
                el: '#answers-list'
            });

            this.Views.dashboard.render();

            this.Collections.answers.fetch();
        }
    };

    $(document).ready(function () {
        window.Answers.init();
    });


    Backbone.history.start();
});


