/*global define*/

define(function (require) {
    'use strict';

    var Backbone = require('backbone');

    var AnswerModel = Backbone.Model.extend({
        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

    return AnswerModel;
});
