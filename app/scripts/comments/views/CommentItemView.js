/*global define*/

define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        JST = require('templates');

    var CommentItemView = Backbone.View.extend({
        template: JST['app/scripts/comments/templates/CommentItemView.ejs'],

        className: 'comment-item-view',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }
    });

    return CommentItemView;
});
