/*global define*/

define(function (require) {
    'use strict';

    var Backbone = require('backbone');
    var AnswerModel = require('answers/models/AnswerModel');

    var MostSearchedAnswersCollection = Backbone.Collection.extend({
        model: AnswerModel,
        url: 'http://answers.getsandbox.com/answers/most'
    });

    return MostSearchedAnswersCollection;
});
