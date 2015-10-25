/*global define*/

define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        JST = require('templates');

    require('datatables');

    var AnswersTableView = Backbone.View.extend({
        template: JST['app/scripts/templates/AnswersTableView.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.render();
        },

        _setupDataTablePlugin: function() {
            $('#all-answers-table').DataTable( {
                ajax: {
                    url: 'http://answers.getsandbox.com/answers',
                    dataSrc: ''
                },
                columns: [
                    { data: 'title' },
                    { data: 'createdBy' },
                    { data: 'createdAt' },
                    { data: 'comments'}
                ]

            });
        },

        render: function () {
            this.$el.html(this.template());
            this._setupDataTablePlugin();
        }
    });

    return AnswersTableView;
});
