/*global define*/

define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        JST = require('templates'),
        MostSearchedAnswersView = require('views/MostSearchedAnswersView');

    var DashboardView = Backbone.View.extend({
        template: JST['app/scripts/templates/DashboardView.ejs'],

        events: {},

        childViews:  {
            mostSearchedAnswersView: undefined
        },

        initialize: function () {
        },

        render: function () {
            this.$el.html(this.template());

            this._setupRegions();
        },

        _setupRegions: function() {
            this._loadMostSearchedAnswerRegion();
        },

        _loadMostSearchedAnswerRegion: function() {
            this.childViews.mostSearchedAnswersView = new MostSearchedAnswersView({
                el: '#most-searched-answers-region'
            });

            this.childViews.mostSearchedAnswersView.render();
        }

    });

    return DashboardView;
});
