/*global define*/

define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        JST = require('templates');

    require('../../../bower_components/select2/select2');

    var SearchView = Backbone.View.extend({
        template: JST['app/scripts/templates/SearchView.ejs'],

        events: {},

        ui: {
            searchBox: undefined
        },

        modal: undefined,

        initialize: function () {

        },

        _openAnswer: function() {
            var data = this.ui.searchBox.select2('data')[0];
            this.ui.searchBox.select2('val', '');
            Backbone.history.navigate('/answer/' + data.id, true);
        },

        _format: function (object){
            return object.title;
        },

        _setupSearchboxPlugin: function() {

            this.ui.searchBox.select2({
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

            $('#searchbox').on('change', _.bind(this._openAnswer, this));

        },

        render: function () {
            this.$el.html(this.template());
            this.ui.searchBox = this.$el.find('#searchbox');
            this._setupSearchboxPlugin();
        }
    });

    return SearchView;
});
