/*global define*/

define(function (require) {
    'use strict';

    var Backbone = require('backbone');
    var CommentModel = require('comments/models/CommentModel');

    var CommentsCollection = Backbone.Collection.extend({
        model: CommentModel
    });

    return CommentsCollection;
});
