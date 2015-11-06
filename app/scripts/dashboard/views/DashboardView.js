/*global define*/

define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        JST = require('templates'),
        ContentView = require('dashboard/views/ContentView'),
        SearchView = require('dashboard/views/SearchView'),
        MenuView = require('menu/views/MenuView');

    var DashboardView = Backbone.View.extend({
        template: JST['app/scripts/dashboard/templates/DashboardView.ejs'],

        childViews:  {
            contentRegion: undefined,
            searchRegion: undefined,
            menuRegion: undefined
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
            this._loadMenuRegion();
        },

        _loadMenuRegion: function() {
            this.childViews.menuRegion = new MenuView({
                el: '#menu-region',
                dashboard: this
            });

            this.childViews.menuRegion.render();
        },

        _loadContentRegion: function() {
            this.childViews.contentRegion = new ContentView({
                el: '#content-region'
            });

            this.childViews.contentRegion.render();
        },

        _loadSearchRegion: function() {
            this.childViews.searchRegion = new SearchView({
                el: '#search-box-region'
            });

            this.childViews.searchRegion.render();
        },

        openAnswer: function(model) {
            this.childViews.contentRegion.loadAnswerDetailView(model)
        },

        showAnswersTable: function() {
            this.childViews.contentRegion.loadAllAnswersView();
        }

    });

    return DashboardView;
});
