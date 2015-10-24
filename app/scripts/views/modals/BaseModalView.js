define(function (require) {
    var JST = require('templates'),
        Backbone = require('backbone');

    require('bootstrap');

    var BaseModalView = Backbone.View.extend({
        template: JST['app/scripts/templates/BaseModalView.ejs'],

        id: 'base-modal',
        className: 'modal fade',


        events: {
            'hidden.bs.modal': 'hide',
            'click #save-button': 'onSave'
        },

        initialize: function (options) {
            _.bindAll(this, 'show', 'hide', 'render');
            this.title = options.title || '';
            this._loadTemplate();
        },

        _loadTemplate: function() {
            this.$el.html(this.template());
            this.setTitle(this.title);
            this.$el.modal({show: false});
        },

        show: function (options) {
            this.$el.modal('show');

            if(options && options.hideFooter) {
                this.hideModalFooter();
            }
        },

        hide: function () {
            this.$el.modal('hide');
        },

        setTitle: function(title) {
            this.$el.find('.modal-title').html(title);
        },

        hideModalFooter: function() {
            this.$el.find('.modal-footer').hide();
        },

        showModalFooter: function() {
            this.$el.find('.modal-footer').show();
        }
    });

    BaseModalView.extend = function(child) {
        var view = Backbone.View.extend.apply(this, arguments);
        view.prototype.events = _.extend({}, this.prototype.events, child.events);
        return view;
    };

    return BaseModalView;
});
