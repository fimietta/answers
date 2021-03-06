/*global define*/

define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        CommentsCollection = require('comments/collections/CommentsCollection'),
        FileCollection = require('common/collections/FileCollection'),
        CommentModel = require('comments/models/CommentModel');

    var AnswerModel = Backbone.Model.extend({
        url: function() {
            return 'http://answers.getsandbox.com/answers/' + this.get('id');
        },

        initialize: function() {

        },

        defaults: {
            'title': undefined,
            'description': undefined,
            'uri': undefined,
            'createdAt': undefined,
            'createdBy': undefined,
            files: new FileCollection(),
            comments: new CommentsCollection()
        },

        sync: function (method, model, options) {
            options = options || {};
            if(method === 'create') {
                options.url = 'http://answers.getsandbox.com/answers';
            }

            return Backbone.sync.call(this, method, model, options);
        },

        parse: function(response, options) {
            response.comments = new CommentsCollection(response.comments);
            response.files = new FileCollection(response.files);
            return response;
        }

    });

    return AnswerModel;
});
