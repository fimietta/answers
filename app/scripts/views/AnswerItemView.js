/*global define*/

define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        JST = require('templates');

    var AnswerItemView = Backbone.View.extend({
        template: JST['app/scripts/templates/AnswerItemView.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }
    });

    return AnswerItemView;
});
