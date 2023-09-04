// global $*\
$(function () {
    'use strict';
    $('.info-list li').click(function () {
        $(this).addclass('selected').sibling('li').removeclass('selected');
        $('info-content div').hide();
        $('.' + $(this).data('class')).fadeIn();
    })
})