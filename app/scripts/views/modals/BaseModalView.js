define(function (require) {
    var JST = require('templates'),
        Backbone = require('backbone');

    require('bootstrap');

    var BaseModalView = Backbone.View.extend({
        template: JST['app/scripts/templates/BaseModalView.ejs'],

        id: 'base-modal',
        className: 'modal fade',


        events: {
            'hidden.bs.modal': 'teardown',
            'click #save-button': 'onSave'
        },

        bodyView: undefined,

        initialize: function (options) {
            this.bodyView = options.bodyView;
            _.bindAll(this, 'show', 'teardown', 'render');
            this.render();
        },

        show: function () {
            this.$el.modal('show');
        },

        teardown: function () {
            this.$el.data('modal', null);
            this.remove();
        },

        onSave: function() {
            this.bodyView
                .saveData()
                .then(function() {
                    console.log('Answer Saved');
                })
                .fail(function() {
                    console.log('Error in saving the answer');
                });
        },

        render: function () {
            this.$el.html(this.template());
            this.bodyView.render();
            this.$el.find('.modal-body').append(this.bodyView.el);

            this.$el.modal({show: false});
        }
    });

    return BaseModalView;
});
