/* global define, describe, it, sinon  */

define(function (require) {
    'use strict';

    var AnswersSearchBoxView = require('views/AnswersSearchBoxView');

    describe('AnswersSearchBoxView Test', function () {

        beforeEach(function() {
            this.answersSearchBoxView = new AnswersSearchBoxView();
        });

        describe('Render', function() {

            it('should setup the searchBoxPlugin', function() {
                // Arrange
                var stubSetupPlugin = sinon.stub(AnswersSearchBoxView.prototype, '_setupSearchboxPlugin');

                // Act
                this.answersSearchBoxView.render();

                // Expect
                expect(stubSetupPlugin).to.have.been.called;

                // Teardown
                stubSetupPlugin.restore();
            });
        });

    });
});
