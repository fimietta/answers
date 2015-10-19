/*global define*/

define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        JST = require('templates'),
        AnswerModel = require('models/AnswerModel');


    var NewAnswerView = Backbone.View.extend({
        tagName: 'div',
        template: JST['app/scripts/templates/NewAnswerView.ejs'],

        events: {},

        ui: {
            title: undefined,
            description: undefined
        },

        initialize: function () {

        },

        render: function () {
            this.$el.html(this.template());

            this.ui.title = this.$el.find('#answer-title');
            this.ui.description = this.$el.find('#answer-description');

            // this._setupFileUploadPlugin();
            // this._setupDropZoneCSSTransiction();
        },

        getData: function() {
            return {
                title: this.ui.title.val(),
                description: this.ui.description.val()
            }
        },

        saveData: function() {
            var answerModel = new AnswerModel(this.getData());

            return answerModel.save();
        },

        _setupFileUploadPlugin: function() {
            $('#fileupload').fileupload({
                dropZone: $('#dropzone')
            });
        },

        _setupDropZoneCSSTransiction: function() {
            $(document).bind('dragover', function (e) {
                var dropZone = $('#dropzone'),
                    timeout = window.dropZoneTimeout;
                if (!timeout) {
                    dropZone.addClass('in');
                } else {
                    clearTimeout(timeout);
                }
                var found = false,
                    node = e.target;
                do {
                    if (node === dropZone[0]) {
                        found = true;
                        break;
                    }
                    node = node.parentNode;
                } while (node != null);
                if (found) {
                    dropZone.addClass('hover');
                } else {
                    dropZone.removeClass('hover');
                }
                window.dropZoneTimeout = setTimeout(function () {
                    window.dropZoneTimeout = null;
                    dropZone.removeClass('in hover');
                }, 100);
            });
        }
    });

    return NewAnswerView;
});
