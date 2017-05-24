/*
 * Toastr
 * Copyright 2015-2020
 * Author: ark1ee.
 * All Rights Reserved.
 * Use, reproduction, distribution, and modification of this code is subject to the terms and
 * conditions of the MIT license, available at http://www.opensource.org/licenses/mit-license.php
 *
 *
 * Project: https://github.com/lfzark/modal_j
 */
/* global define */


    (function ($) {

        $.fn.modal_j = function (options) {

            var defaults = {
                modalClass: '.modal',
                modal_content: 'Hello I\'m Mr.Modal J',
                modal_title: 'model_j default title',
                modal_size: 'modal-primary',
                modal_footer: ''
            };

            var settings = $.extend({}, defaults, options);

            this.addClass('modal fade');
            this.attr('tabindex', '-1');
            this.attr('role', 'dialog');

            var content = '  <div class="modal-dialog modal-large" role="document"> '
                + '<div class="modal-content"> '
                + '<div class="modal-header">'
                + '<h5 class="modal-title" >Modal title</h5> '
                + '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> '
                + '</div>'
                + '<div class="modal-body">' + settings['modal_content']
                + '</div>' + '<div class="modal-footer">'
                + settings['modal_footer'] + '</div>' + '</div>' + '</div>';

            this.html(content);
            $(this).find('.modal-dialog').addClass(settings['modal_size']);
            $(this).find('.modal-title').html(settings['modal_title']);
            $('.modal_j').addClass('modal fade');

        };

    })(jQuery);
