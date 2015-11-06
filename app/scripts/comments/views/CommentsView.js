/*global define*/

define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        JST = require('templates'),
        CommentItemView = require('comments/views/CommentItemView');

    var CommentsView = Backbone.View.extend({
        template: JST['app/scripts/comments/templates/CommentsView.ejs'],

        events: {},

        ui: {
            list: undefined
        },

        initialize: function () {
            this.listenTo(this.collection, 'add', this._addOneComment);
        },

        _addOneComment: function(model) {
            var itemView = this._buildCommentItemView(model);
            this.ui.list.append(itemView.el);
        },

        _buildCommentItemView: function(model) {
            var itemView = new CommentItemView({
                model: model
            });

            itemView.render();

            return itemView;
        },

        _addComments: function() {
            var itemView;
            _.each(this.collection.models, _.bind(function(model) {

                itemView = this._buildCommentItemView(model);
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
