/* global define, describe, it, sinon  */

define(function (require) {
    'use strict';

    var ContentView = require('dashboard/views/ContentView'),
        AnswersStatisticView = require('statistics/views/AnswersStatisticsView');

    describe('ContentView Test', function () {

        beforeEach(function() {
            this.contentView = new ContentView();
        });


        it('should load the statistics view', function() {
            // Act
            this.contentView.loadStatisticsView();

            // Assert
            expect(this.contentView.childView).to.be.an.instanceOf(AnswersStatisticView);
        });

    });
});
