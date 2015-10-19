/*global define*/

define(function (require) {
    'use strict';

    var Backbone = require('backbone');
    var AnswerModel = require('models/AnswerModel');

    var NewAnswersCollection = Backbone.Collection.extend({
        model: AnswerModel,
        url: 'http://answers.getsandbox.com/answers/new'
    });

    return NewAnswersCollection;
});
