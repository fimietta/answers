/*global define*/

define(function (require) {
    'use strict';

    var Backbone = require('backbone');

    var CommentModel = Backbone.Model.extend({

        initialize: function() {

        },

        defaults: {
            text: undefined,
            createdBy: undefined,
            createdAt: undefined,
            files: []
        }
    });

    return CommentModel;
});
