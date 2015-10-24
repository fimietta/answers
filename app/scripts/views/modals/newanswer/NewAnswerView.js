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


    var NewAnswerView = Backbone.View.extend({
        tagName: 'div',
        template: JST['app/scripts/templates/NewAnswerView.ejs'],

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
            this.ui.dropzone = this.$el.find('#dropzone');

            //this._setupFileUploadPlugin();

            // this._simpleFileUpload();

            this._setupDropZoneCSSTransiction();
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

        _simpleFileUpload: function() {
            this.ui.fileUploadInput.fileupload({
                dataType:'json',
                add : this.addFile,
                fail: this.addFileFail

            });
        },
        addFile: function(data) {
            console.log('---- addFile ----');
            console.log(data);
        },

        addFileFail: function(data) {
            console.log('---- addFileFail ----');
            console.log(data);
        },



        _TempsetupFileUploadPlugin: function() {
            this.ui.fileUploadInput.fileupload({
                dropZone: this.ui.dropzone,
                add: function (e, data) {

                    var tpl = $('<li class="working"><input type="text" value="0" data-width="48" data-height="48"'+
                    ' data-fgColor="#0788a5" data-readOnly="1" data-bgColor="#3e4043" /><p></p><span></span></li>');

                    // Append the file name and file size
                    tpl.find('p').text(data.files[0].name)
                        .append('<i>' + formatFileSize(data.files[0].size) + '</i>');

                    // Add the HTML to the UL element
                    data.context = tpl.appendTo(ul);

                    // Initialize the knob plugin
                    tpl.find('input').knob();

                    // Listen for clicks on the cancel icon
                    tpl.find('span').click(function(){

                        if(tpl.hasClass('working')){
                            jqXHR.abort();
                        }

                        tpl.fadeOut(function(){
                            tpl.remove();
                        });

                    });

                    // Automatically upload the file once it is added to the queue
                    var jqXHR = data.submit();
                },

                progress: function(e, data){

                    // Calculate the completion percentage of the upload
                    var progress = parseInt(data.loaded / data.total * 100, 10);

                    // Update the hidden input field and trigger a change
                    // so that the jQuery knob plugin knows to update the dial
                    data.context.find('input').val(progress).change();

                    if(progress == 100){
                        data.context.removeClass('working');
                    }
                },

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
