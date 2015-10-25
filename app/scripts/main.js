/*global require*/
'use strict';

require.config({
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap',
        'jquery.ui.widget': '../bower_components/jquery-file-upload/js/vendor/jquery.ui.widget',
        'jquery.fileupload': '../bower_components/jquery-file-upload/js/jquery.fileupload',
        'jquery.fileupload-ui': '../bower_components/jquery-file-upload/js/jquery.fileupload-ui',
        'jquery.fileupload-image': '../bower_components/jquery-file-upload/js/jquery.fileupload-image',
        'jquery.fileupload-validate': '../bower_components/jquery-file-upload/js/jquery.fileupload-validate',
        'jquery.fileupload-video': '../bower_components/jquery-file-upload/js/jquery.fileupload-video',
        'jquery.fileupload-audio': '../bower_components/jquery-file-upload/js/jquery.fileupload-audio',
        'jquery.fileupload-process': '../bower_components/jquery-file-upload/js/jquery.fileupload-process',
        'jquery.fileupload-jquery-ui': '../bower_components/jquery-file-upload/js/jquery.fileupload-jquery-ui',
        'jquery.iframe-transport': '../bower_components/jquery-file-upload/js/jquery.iframe-transport',
        'load-image': '../bower_components/blueimp-load-image/js/load-image',
        'load-image-meta': '../bower_components/blueimp-load-image/js/load-image-meta',
        'load-image-exif': '../bower_components/blueimp-load-image/js/load-image-exif',
        'load-image-ios': '../bower_components/blueimp-load-image/js/load-image-ios',
        'canvas-to-blob': '../bower_components/blueimp-canvas-to-blob/js/canvas-to-blob',
        'tmpl': '../bower_components/blueimp-tmpl/js/tmpl',
        'select2': '../bower_components/select2/select2',
        'datatables': '../bower_components/datatables/media/js/jquery.dataTables'
    }
});

require([
    'backbone',
    'routes/AnswersRouter'
], function (Backbone, AnswersRouter) {

    window.Answers = {
        Routers: {},
        Collections: {},
        Views: {},
        user: {
            name: 'Daniela Remogna'
        },
        init: function() {
            this.Routers.answersRouter = new AnswersRouter();
            Backbone.history.start();
        }
    };

    $(document).ready(function () {
        window.Answers.init();
    });

});


