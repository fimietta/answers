define(function (require) {
    var BaseModalView = require('views/modals/BaseModalView');

    var CommentModalView = BaseModalView.extend({

        id: 'base-modal',
        className: 'modal fade',

        bodyView: undefined,

        initialize: function (options) {
            BaseModalView.prototype.initialize.apply(this, arguments);

            this.options = options || {};
            this.bodyView = this.options.bodyView;

            this.render();
        },

        _renderChildView: function() {
            this.bodyView.render();
            this.$el.find('.modal-body').append(this.bodyView.el);
        },

        onSave: function(e) {
            e.preventDefault();

            this.bodyView
                .saveData()
                .then(_.bind(function() {
                    this.hide();
                }, this))
                .fail(function() {
                    console.log('Error in saving the answer');
                });
        },

        render: function () {
            this._renderChildView();
        }
    });

    return CommentModalView;
});
