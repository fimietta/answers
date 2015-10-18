/*global define*/

define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        JST = require('templates'),
        MostSearchedAnswersView = require('views/MostSearchedAnswersView'),
        AnswersSearchBoxView = require('views/AnswersSearchBoxView');

    var DashboardView = Backbone.View.extend({
        template: JST['app/scripts/templates/DashboardView.ejs'],

        events: {},

        childViews:  {
            mostSearchedAnswersView: undefined,
            searchAnswersRegion: undefined
        },

        initialize: function () {
        },

        render: function () {
            this.$el.html(this.template());

            this._setupRegions();
        },

        _setupRegions: function() {
            this._loadMostSearchedAnswerRegion();
            this._loadAnswersSearchBoxRegion();
        },

        _loadMostSearchedAnswerRegion: function() {
            this.childViews.mostSearchedAnswersView = new MostSearchedAnswersView({
                el: '#most-searched-answers-region'
            });

            this.childViews.mostSearchedAnswersView.render();
        },

        _loadAnswersSearchBoxRegion: function() {
            this.childViews.searchAnswersRegion = new AnswersSearchBoxView({
                el: '#search-box-region'
            });

            this.childViews.searchAnswersRegion.render();
        }

    });

    return DashboardView;
});
