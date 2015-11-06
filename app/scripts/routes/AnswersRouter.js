/*global define*/

define(function (require) {
    'use strict';

    var DashboardView = require('dashboard/views/DashboardView'),
        AnswerModel = require('answers/models/AnswerModel');

    var AnswersRouter = Backbone.Router.extend({
        routes: {
            'answers': 'showAllAnswers',
            'answer/:id': 'openAnswer',
            '': 'openDashboard'
        },

        initialize: function() {
            this.dashboard = window.Answers.Views.dashboard = new DashboardView({
                    el: '#dashboard'
            });
            this.dashboard.render();
        },

        openAnswer: function(id) {
            var model = new AnswerModel({
                id: id
            });

            this.dashboard.openAnswer(model);
        },

        showAllAnswers: function() {
            this.dashboard.showAnswersTable();
        },

        openDashboard: function() {
            this.dashboard.render();
        }

    });

    return AnswersRouter;
});
