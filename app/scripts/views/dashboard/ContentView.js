/*global define*/

define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        JST = require('templates'),
        AnswersStatisticsView = require('views/statistics/AnswersStatisticsView'),
        AnswerDetailView = require('views/AnswerDetailView');

    var ContentView = Backbone.View.extend({
        template: JST['app/scripts/templates/ContentView.ejs'],

        className: 'content',

        events: {},

        childView: undefined,

        initialize: function () {
            this.loadStatisticsView();
        },

        loadStatisticsView: function() {
            this.childView = new AnswersStatisticsView();
        },

        loadAnswerDetailView: function(model) {
            this.childView = new AnswerDetailView({
                model: model
            });

            this.render();
        },

        render: function () {
            this.$el.html(this.childView.el);
            this.childView.render();
        },

        close: function() {
            this.childView.remove();
            this.remove();
        }

    });

    return ContentView;
});

