/*!
 * jQuery Block
 * https://github.com/tropperstyle/jquery-block
 *
 * Copyright, Jonathan Tropper.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * MIT-LICENSE.txt
 * GPL-LICENSE.txt
 */
 
(function($) {
    $.widget('ui.block', {
        options: {
            message: '<img src="/images/loading_icons/loading_dark_transparent.gif" alt="loading" />Please Wait'
        },
        _create: function() {
            this.overlay = $('<div class="ui-block-overlay"></div>').appendTo(this.element).bgiframe().disableSelection();
    		this.message = $('<div class="ui-block-message">' + this.options.message + '</div>').appendTo(this.element).disableSelection();
        },
        _init: function() {
    		this._block();
        },
        destroy: function() {
            this._unblock();
            $.Widget.prototype.destroy.apply(this, arguments);
            return this;
        },
        _setOption: function(key, value) {
    		switch (key) {
    			case 'message':
    				this.options.message = value;
    				this.message.html(value);
    				break;
    		}
    		$.Widget.prototype._setOption.apply(this, arguments);
    	},
        _block: function() {
            this.element.addClass('ui-block-blocked').attr('role', 'blocked');
        },
        _unblock: function() {
            this.element.removeClass('ui-block-blocked').removeAttr('role');
    		this.overlay.remove();
    		this.message.remove();
        }
    });

    $.extend($.ui.block, {
        version: '1'
    });
})(jQuery);
