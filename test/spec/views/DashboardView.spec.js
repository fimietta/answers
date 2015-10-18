/* global define, describe, it, sinon  */

define(function (require) {
    'use strict';

    var DashboardView = require('views/DashboardView'),
        MostSearchedAnswersView = require('views/MostSearchedAnswersView'),
        AnswersSearchBoxView = require('views/AnswersSearchBoxView');

    describe('DashboardView Test', function () {

        beforeEach(function() {
            this.stubSetupPlugin = sinon.stub(AnswersSearchBoxView.prototype, '_setupSearchboxPlugin');
            this.dashboardView = new DashboardView();
        });

        afterEach(function() {
            this.stubSetupPlugin.restore();
        });

        describe('On Render - Regions Setup', function() {
            it('should setup the main regions', function() {
                // Arrange
                var setupRegionsSpy = sinon.spy(DashboardView.prototype, '_setupRegions');

                // Act
                this.dashboardView.render();

                // Assert
                expect(setupRegionsSpy).to.have.been.called;

                // Teardown
                setupRegionsSpy.restore();
            });

            it('should load the most searched answers region', function() {
                // Arrange
                var loadMostSearcheAnswerRegionSpy = sinon.spy(DashboardView.prototype, '_loadMostSearchedAnswerRegion');

                // Act
                this.dashboardView.render();

                // Assert
                expect(loadMostSearcheAnswerRegionSpy).to.have.been.called;
                expect(this.dashboardView.childViews.mostSearchedAnswersView).to.be.an.instanceof(MostSearchedAnswersView);

                // Teardown
                loadMostSearcheAnswerRegionSpy.restore();
            });



        });

    });
});
