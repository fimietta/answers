/*global define*/

define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        JST = require('templates'),
        CommentModel = require('comments/models/CommentModel');

    require('jquery');
    require('tmpl');
    require('load-image');
    require('canvas-to-blob');
    require('jquery.iframe-transport');
    require('jquery.fileupload-ui');


    var CommentFormView = Backbone.View.extend({
        tagName: 'div',
        template: JST['app/scripts/modals/comments/templates/CommentFormView.ejs'],

        events: {},

        ui: {
            title: undefined,
            description: undefined,
            fileUploadInput: undefined,
            dropZone: undefined
        },

        initialize: function (options) {
            this.answerModel = options.answerModel;
        },

        render: function () {
            this.$el.html(this.template());
            this.ui.description = this.$el.find('#comment-description');
            this.ui.fileUploadInput = this.$el.find('#fileupload');

            this._setupFileUpload();
        },

        getData: function() {
            return {
                text: this.ui.description.val(),
                createdBy: 'John Smith',
                createdAt: new Date()
            }
        },

        saveData: function() {
            var commentModel = new CommentModel(this.getData());
            this.answerModel.get('comments').add(commentModel);
            return this.answerModel.save();
        },

        _setupFileUpload: function() {
            this.ui.fileUploadInput.fileupload({
                dataType:'json'
            });
        }

    });

    return CommentFormView;
});
