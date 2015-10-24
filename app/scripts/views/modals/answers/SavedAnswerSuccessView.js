/*global define*/

define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        JST = require('templates');

    var SavedAnswerSuccessView = Backbone.View.extend({
        tagName: 'div',
        template: JST['app/scripts/templates/SavedAnswerSuccessView.ejs'],

        events: {
            'click #create-new-modal': '_loadNewAnswer',
            'click #close-modal': '_closeModal',
            'click #show-answer-modal': '_showAnswer'
        },

        initialize: function (options) {
            this.parentView = options.parentView;
            this.answerId = options.answerId;
        },

        _loadNewAnswer: function(e) {
            e.preventDefault();
            this.parentView.loadNewAnswerView();
            this.close()
        },

        _closeModal: function(e) {
            e.preventDefault();
            this.parentView.hide();
        },

        _showAnswer: function(e) {
            e.preventDefault();
            this.parentView.teardown();
            Backbone.history.navigate('/answer/' + this.answerId, true);
        },

        render: function () {
            this.$el.html(this.template());
        },

        close: function() {
            this.parentView = undefined;
            this.remove();
        }

    });

    return SavedAnswerSuccessView;

});
