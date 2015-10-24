/*global define*/

define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        JST = require('templates'),
        ContentView = require('views/dashboard/ContentView'),
        SearchView = require('views/dashboard/SearchView'),
        MenuView = require('views/menu/MenuView');

    var DashboardView = Backbone.View.extend({
        template: JST['app/scripts/templates/DashboardView.ejs'],

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
                el: '#menu-region'
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
        }

    });

    return DashboardView;
});
