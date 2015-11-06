/* global define, it, beforeEach, afterEach */

define(function (require) {
    'use strict';

    var AnswersCollection = require('answers/collections/AnswersCollection');

    describe('Answers Collection Test', function () {
        describe('Initialize', function () {
            beforeEach(function() {

                this.collection = new AnswersCollection();

            });

            it('should have a proper url pointing to the endpoint', function () {
                var expectedEndpoint = 'http://answers.getsandbox.com/answers';
                expect(this.collection.url).to.be.equal(expectedEndpoint);
            });
        });
    });
});
