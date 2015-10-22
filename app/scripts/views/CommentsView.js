/*global define*/

define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        JST = require('templates'),
        CommentItemView = require('views/CommentItemView');

    var CommentsView = Backbone.View.extend({
        template: JST['app/scripts/templates/CommentsView.ejs'],

        events: {},

        ui: {
            list: undefined
        },

        initialize: function () {

        },

        _addComments: function() {
            _.each(this.collection.models, _.bind(function(model) {
                var itemView = new CommentItemView({
                    model: model
                });

                itemView.render();

                this.ui.list.append(itemView.el);

            }, this));
        },

        render: function () {
            this.$el.html(this.template());
            this.ui.list = this.$el.find('#comments-list');
            this._addComments();
        }
    });

    return CommentsView;
});
