/*global define*/

define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        JST = require('templates'),
        AnswerFormView = require('modals/answers/views/AnswerFormView'),
        AnswerModalView = require('modals/answers/views/AnswerModalView');

    var MenuView = Backbone.View.extend({
        template: JST['app/scripts/menu/templates/MenuView.ejs'],

        className: 'answer-item-view',

        events: {
            'click #create-new-answer': '_createNewAnswer'
        },

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template());
        },

        _createNewAnswer: function(e) {
            e.preventDefault();

            this.modal = new AnswerModalView({
                bodyView: new AnswerFormView(),
                title: 'Create a New Answer'
            });

            this.modal.show();
        }
    });

    return MenuView;
});
