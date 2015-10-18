/*global define*/

define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        JST = require('templates');

    require('../../bower_components/select2/select2');

    var AnswersSearchBox = Backbone.View.extend({
        template: JST['app/scripts/templates/AnswersSearchBoxView.ejs'],

        events: {},

        initialize: function () {

        },

        _format: function (object){
            return object.title;
        },

        _setupSearchboxPlugin: function() {

            $('#searchbox').select2({
                escapeMarkup: function(m) {
                    return m;
                },
                formatResult: _.bind(this._format, this),
                formatSelection: _.bind(this._format, this),
                minimumInputLength: 2,
                tags: [],
                tokenSeparators: [',', ' '],
                createSearchChoicePosition: 'top',
                multiple: true,
                maximumSelectionSize: 1,
                ajax: {
                    url: 'http://answers.getsandbox.com/answers/search',
                    dataType: 'json',
                    data: function(term) {
                        return {
                            query: term,
                        };
                    },

                    results: function(data) {
                        return {
                            results: data
                        };
                    }
                },
                tokenizer: function(input) {
                    self.inputText = input;
                }
            });

        },

        render: function () {
            this.$el.html(this.template());
            this._setupSearchboxPlugin();
        }
    });

    return AnswersSearchBox;
});
