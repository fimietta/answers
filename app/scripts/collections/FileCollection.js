/*global define*/

define(function (require) {
    'use strict';

    var Backbone = require('backbone');
    var FileModel = require('models/FileModel');

    var FileCollection = Backbone.Collection.extend({
        model: FileModel
    });

    return FileCollection;
});
