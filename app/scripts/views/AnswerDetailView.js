/*global define*/

define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        JST = require('templates'),
        _ = require('underscore'),
        CommentsView = require('views/CommentsView');

    var AnswerDetailView = Backbone.View.extend({
        template: JST['app/scripts/templates/AnswerDetailView.ejs'],

        className: 'answer-item-view',

        events: {},

        childView: undefined,

        initialize: function () {
            this.model.fetch().done(_.bind(function() {
                this.render()
            }, this));

            this.listenTo(this.model, 'change', this.render);
        },

        _setupCommentsView: function() {
            this.childView = new CommentsView({
                el: '#comments-container',
                collection: this.model.get('comments')
            });

            this.childView.render();
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            this._setupCommentsView();
        },

        close: function() {
            if(this.childView) {
                this.childView.remove();
            }
        }
    });

    return AnswerDetailView;
});