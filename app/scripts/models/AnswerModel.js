/*global define*/

define(function (require) {
    'use strict';

    var Backbone = require('backbone');

    var AnswerModel = Backbone.Model.extend({
        url: '',

        initialize: function() {
        },

        defaults: {
            'title': undefined,
            'description': undefined,
            'uri': undefined
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

    return AnswerModel;
});
