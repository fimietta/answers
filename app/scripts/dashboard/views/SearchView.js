/*global define*/

define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        JST = require('templates'),
        _ = require('underscore');

    require('../../../bower_components/select2/select2');

    var SearchView = Backbone.View.extend({
        template: JST['app/scripts/dashboard/templates/SearchView.ejs'],

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
            return "<div class='search-result'><em>" + object.title + '</em></br>' + object.description.substring(0,128).concat('...') + '</div>';
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
            _.defer(_.bind(this._setupSearchboxPlugin, this),500);
        }
    });

    return SearchView;
});
