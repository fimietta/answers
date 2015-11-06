/*global define*/

define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        JST = require('templates'),
        _ = require('underscore'),
        MostSearchedAnswersCollection = require('statistics/collections/MostSearchedAnswersCollection'),
        AnswerItemView = require('answers/views/AnswerItemView');

    var MostSearchedAnswersView = Backbone.View.extend({
        tagName: 'div',

        template: JST['app/scripts/statistics/templates/MostSearchedAnswersView.ejs'],

        events: {},

        ui: {
            list: undefined
        },

        initialize: function () {
            this.collection = new MostSearchedAnswersCollection();
        },

        _bindUIAndEvents: function() {
            this.ui.list = this.$el.find('#most-searched-list');
            this.collection.fetch();
            this.listenTo(this.collection, 'sync', this._addAnswers);
        },

        _addAnswers: function() {
            this.ui.list.empty();
            _.each(this.collection.models, _.bind(function(model) {
                var itemView = new AnswerItemView({
                    model: model
                });

                itemView.render();

                this.ui.list.append(itemView.el);

            }, this));
        },

        render: function () {
            this.$el.html(this.template());

            this._bindUIAndEvents();
        }
    });

    return MostSearchedAnswersView;
});
