/* Jquery Trigger */
$(document).ready(function() {

    'use strict';

    /* Define Some Variables */
    var body = $('body');
    var openSidebar = $('#openSidebar');
    var sideBar = $('#sidebar');

    /* Open And Close Side Bar */
    openSidebar.on('click', function() {

        body.toggleClass('mleft-20');

        sideBar.toggleClass('sidebar-left-0');

    });

    /* Create Simple Accordion  */
    $('.links li').on('click', function() {

        /* Show Links In Link */
        $(this).find('.myAccordion').toggleClass('ds-block');

        /* Hide Another Accordion Links */
        $(this).siblings().find('.myAccordion').addClass('ds-none');
        $(this).find('.myAccordion').removeClass('ds-none');
    });

});
/* Jquery Trigger */