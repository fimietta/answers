/*global define*/

define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        JST = require('templates'),
        ContentView = require('views/ContentView'),
        AnswersSearchBoxView = require('views/AnswersSearchBoxView');

    var DashboardView = Backbone.View.extend({
        template: JST['app/scripts/templates/DashboardView.ejs'],

        events: {},

        childViews:  {
            contentRegion: undefined,
            searchRegion: undefined
        },

        initialize: function () {
        },

        render: function () {
            this.$el.html(this.template());

            this._setupRegions();
        },

        _setupRegions: function() {
            this._loadContentRegion();
            this._loadSearchRegion();
        },

        _loadContentRegion: function() {
            this.childViews.contentRegion = new ContentView({
                el: '#content-region'
            });

            this.childViews.contentRegion.render();
        },

        _loadSearchRegion: function() {
            this.childViews.searchRegion = new AnswersSearchBoxView({
                el: '#search-box-region'
            });

            this.childViews.searchRegion.render();
        }

    });

    return DashboardView;
});
