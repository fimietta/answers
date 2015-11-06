/*global define*/

define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        JST = require('templates'),
        _ = require('underscore'),
        NewAnswersCollection = require('statistics/collections/NewAnswersCollection'),
        AnswerItemView = require('answers/views/AnswerItemView');

    var NewestAnswersView = Backbone.View.extend({
        tagName: 'div',
        template: JST['app/scripts/statistics/templates/NewestAnswersView.ejs'],

        events: {},

        ui: {
            list: undefined
        },

        initialize: function () {
            this.collection = new NewAnswersCollection();

        },

        _bindUI: function() {
            this.ui.list = this.$el.find('#newest-list');
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

            this._bindUI();
        }
    });

    return NewestAnswersView;
});
