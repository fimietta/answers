/*global define*/

define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        JST = require('templates');

    var AnswersCollectionView = Backbone.View.extend({
        template: JST['app/scripts/templates/AnswersCollectionView.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html('Welcome to AnswersCollectionView');
        }
    });

    return AnswersCollectionView;
});
