/* global define, describe, it, sinon  */

define(function (require) {
    'use strict';

    var MostSearchedAnswersView = require('views/MostSearchedAnswersView'),
        MostSearchedAnswersCollection = require('collections/MostSearchedAnswersCollection'),
        AnswerModel = require('models/AnswerModel');

    describe('MostSearchedAnswersView Test', function () {

        beforeEach(function() {
            this.fetchSpy = sinon.spy(MostSearchedAnswersCollection.prototype, 'fetch');
            this.mostSearchedView = new MostSearchedAnswersView();
        });

        afterEach(function() {
            this.fetchSpy.restore();
        });

        describe('Init', function() {
            it('should should have a reference to the MostAnswersCollection', function() {
                expect(this.mostSearchedView.collection).to.be.an.instanceOf(MostSearchedAnswersCollection);
            });

            it('should fetch the answers collection', function() {
                expect(this.fetchSpy).to.have.been.called;
            });

        });

        describe('Events ', function() {
            it('should add the answers when the collection has been sync', function() {
                // Arrange
                var addAnswersSpy = sinon.spy(MostSearchedAnswersView.prototype, '_addAnswers');

                // Act
                this.mostSearchedView.collection.trigger('sync');

                // Expect
                expect(addAnswersSpy).to.have.been.called;

                // Teardown
                addAnswersSpy.restore();

            });

            it('should append the answers to the html', function() {
                // Arrange
                this.mostSearchedView.collection.add(new AnswerModel({title: 'My Answer', description: 'My Description', uri: '/my'}));

                // Act
                this.mostSearchedView.render();
                this.mostSearchedView.collection.trigger('sync');
                var item = this.mostSearchedView.ui.list.find('.answer-item-view');

                // Expect
                expect(item.length).to.be.equal(1);

            });

        });

    });
});
