/*global define*/

define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        JST = require('templates'),
        AnswerFormView = require('views/modals/answers/AnswerFormView'),
        AnswerModalView = require('views/modals/answers/AnswerModalView');

    var MenuView = Backbone.View.extend({
        template: JST['app/scripts/templates/MenuView.ejs'],

        className: 'answer-item-view',

        events: {
            'click #create-new-answer': '_createNewAnswer',
            'click #show-all': '_showAllAnswers'
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
        },

        _showAllAnswers: function(e) {
            e.preventDefault();

        }
    });

    return MenuView;
});
