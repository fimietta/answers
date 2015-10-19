/*global define*/

define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        JST = require('templates'),
        _ = require('underscore');

    var AnswerDetailView = Backbone.View.extend({
        template: JST['app/scripts/templates/AnswerDetailView.ejs'],

        className: 'answer-item-view',

        events: {},

        initialize: function () {
            this.model.fetch().done(_.bind(function() {
                this.render()
            }, this));

            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }
    });

    return AnswerDetailView;
});
