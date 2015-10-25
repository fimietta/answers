/*global define*/

define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        JST = require('templates'),
        AnswerModel = require('models/AnswerModel');

    require('jquery');
    require('tmpl');
    require('load-image');
    require('canvas-to-blob');
    require('jquery.iframe-transport');
    require('jquery.fileupload-ui');


    var AnswerFormView = Backbone.View.extend({
        tagName: 'div',
        template: JST['app/scripts/templates/AnswerFormView.ejs'],

        events: {},

        ui: {
            title: undefined,
            description: undefined,
            fileUploadInput: undefined,
            dropZone: undefined
        },

        initialize: function () {

        },

        render: function () {
            this.$el.html(this.template());

            this.ui.title = this.$el.find('#answer-title');
            this.ui.description = this.$el.find('#answer-description');
            this.ui.fileUploadInput = this.$el.find('#fileupload');

            this._setupFileUpload();
        },

        getData: function() {
            return {
                title: this.ui.title.val(),
                description: this.ui.description.val(),
                createdBy: window.Answers.user.name,
                createdAt: new Date()
            }
        },

        saveData: function() {
            var answerModel = new AnswerModel(this.getData());
            return answerModel.save();
        },

        _setupFileUpload: function() {
            this.ui.fileUploadInput.fileupload({
                dataType:'json'
            });
        }



    });

    return AnswerFormView;
});
