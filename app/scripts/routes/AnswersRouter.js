/*global define*/

define(function (require) {
    'use strict';

    var DashboardView = require('views/DashboardView'),
        AnswerModel = require('models/AnswerModel');

    var AnswersRouter = Backbone.Router.extend({
        routes: {
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

            this.dashboard.childViews.contentRegion.loadAnswerDetailView(model);
        },

        openDashboard: function() {
            this.dashboard.render();
        }

    });

    return AnswersRouter;
});
