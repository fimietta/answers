/*global define*/

define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        JST = require('templates'),
        MostSearchedAnswersView = require('views/MostSearchedAnswersView'),
        NewestAnswersView = require('views/NewestAnswersView');

    var AnswersStatisticView = Backbone.View.extend({
        template: JST['app/scripts/templates/AnswersStatisticsView.ejs'],

        events: {},

        childViews:  {
            mostSearchedAnswersView: undefined,
            newestAnswersView: undefined
        },

        initialize: function () {
        },

        render: function () {
            this.$el.html(this.template());

            this._setupRegions();
        },

        _setupRegions: function() {
            this._loadMostSearchedAnswersRegion();
            this._loadNewestAnswersRegion();
        },

        _loadNewestAnswersRegion: function() {
            this.childViews.newestAnswersView = new NewestAnswersView({
                el: '#newest-answers-region'
            });

            this.childViews.newestAnswersView.render();
        },

        _loadMostSearchedAnswersRegion: function() {
            this.childViews.mostSearchedAnswersView = new MostSearchedAnswersView({
                el: '#most-searched-answers-region'
            });

            this.childViews.mostSearchedAnswersView.render();
        }

    });

    return AnswersStatisticView;
});

