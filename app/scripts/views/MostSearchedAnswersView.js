/*global define*/

define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        JST = require('templates'),
        _ = require('underscore'),
        AnswersCollection = require('collections/AnswersCollection'),
        AnswerItemView = require('views/AnswerItemView');

    var MostSearchedAnswersView = Backbone.View.extend({
        template: JST['app/scripts/templates/MostSearchedAnswersView.ejs'],

        events: {},

        ui: {
            list: undefined
        },

        initialize: function () {
            this.collection = new AnswersCollection();
            this.collection.fetch();

            this.listenTo(this.collection, 'sync', this._addAnswers);
        },

        _bindUI: function() {
            this.ui.list = this.$el.find('#most-searched-list');
        },

        _addAnswers: function() {

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

            this._bindUI();
        }
    });

    return MostSearchedAnswersView;
});
