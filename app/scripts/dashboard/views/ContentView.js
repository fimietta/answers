/*global define*/

define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        JST = require('templates'),
        AnswersStatisticsView = require('statistics/views/AnswersStatisticsView'),
        AnswerDetailView = require('answers/views/AnswerDetailView'),
        AnswersTableView = require('answers/views/AnswersTableView');

    var ContentView = Backbone.View.extend({
        template: JST['app/scripts/dashboard/templates/ContentView.ejs'],

        className: 'content',

        events: {},

        childView: undefined,

        initialize: function () {
            this.loadStatisticsView();
        },

        loadAllAnswersView: function() {
            this._cleanChildView();

            this.childView = new AnswersTableView();
            this.render();
        },

        loadStatisticsView: function() {
            this._cleanChildView();

            this.childView = new AnswersStatisticsView();
        },

        loadAnswerDetailView: function(model) {
            this._cleanChildView();

            this.childView = new AnswerDetailView({
                model: model
            });

            this.render();
        },

        render: function () {
            this.$el.html(this.childView.el);
            this.childView.render();
        },

        _cleanChildView: function() {
            if(this.childView) {
                this.childView.remove();
            }
        },

        close: function() {
            this._cleanChildView();
            this.remove();
        }

    });

    return ContentView;
});

