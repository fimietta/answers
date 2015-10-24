/*global define*/

define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        FileCollection = require('collections/FileCollection');

    var CommentModel = Backbone.Model.extend({

        initialize: function() {

        },

        defaults: {
            id: undefined,
            text: undefined,
            createdBy: undefined,
            createdAt: undefined,
            files: new FileCollection()
        }
    });

    return CommentModel;
});
