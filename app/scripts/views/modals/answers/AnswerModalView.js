define(function (require) {
    var BaseModalView = require('views/modals/BaseModalView'),
        SavedAnswerSuccessView = require('views/modals/answers/SavedAnswerSuccessView');

    require('bootstrap');

    var AnswerModalView = BaseModalView.extend({

        id: 'base-modal',
        className: 'modal fade',

        bodyView: undefined,

        initialize: function (options) {
            BaseModalView.prototype.initialize.apply(this, arguments);

            this.options = options || {};
            this.bodyView = this.options.bodyView;

            this.render();
        },

        _loadNextStep: function(data) {
            this.bodyView.remove();
            this.bodyView = new SavedAnswerSuccessView({
                parentView: this,
                answerId: data.id
            });
            this._renderChildView();

            this.setTitle('Answer saved!');

            this.hideModalFooter();
        },

        _renderChildView: function() {
            this.bodyView.render();
            this.$el.find('.modal-body').append(this.bodyView.el);
        },

        onSave: function() {
            this.bodyView
                .saveData()
                .then(_.bind(function(data) {
                    console.log(data);
                    this._loadNextStep(data);
                }, this))
                .fail(function() {
                    console.log('Error in saving the answer');
                });
        },

        loadNewAnswerView:function() {
            this.bodyView = this.options.bodyView;
            this._renderChildView();
            this.showModalFooter();
        },

        render: function () {
            this._renderChildView();
        }
    });

    return AnswerModalView;
});
