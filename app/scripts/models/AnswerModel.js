/*global define*/

define(function (require) {
    'use strict';

    var Backbone = require('backbone');

    var AnswerModel = Backbone.Model.extend({
        url: function() {
            return 'http://answers.getsandbox.com/answers/' + this.get('id');
        },

        initialize: function() {

        },

        sync: function (method, model, options) {
            options = options || {};
            if(method === 'create') {
                options.url = 'http://answers.getsandbox.com/answers/new';
            }

            return Backbone.sync.call(this, method, model, options);
        },


        defaults: {
            'title': undefined,
            'description': undefined,
            'uri': undefined,
            'createdAt': undefined,
            'createdBy': undefined,
            files: [],
            comments: []
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

    return AnswerModel;
});
