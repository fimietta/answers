/*global define*/

define(function (require) {
    'use strict';

    var Backbone = require('backbone');

    var FileModel = Backbone.Model.extend({

        initialize: function() {

        },

        defaults: {
            fileName: undefined,
            fileURI: undefined
        }
    });

    return FileModel;
});
