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

    /* Create Off Canvas */

    $('#openCanvas').on('click', function() {

      $('ul li .offCanvas').css('transform', 'translate(0%, 0)');

    });

    $('#closeCanvas').on('click', function() {

      $('ul li .offCanvas').css('transform', 'translate(100%, 0)');

    });
});
/* Jquery Trigger */


/*
 * Start Ecommerce Charts
 * 
 * (Index.html)
*/

// First Chart 
var options = {
    chart: {
      type: 'line'
    },
    series: [{
      name: 'sales',
      data: [30,40,35,50,49,60,70,91,125]
    }],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    }
}
  
var lineChart = new ApexCharts(document.querySelector("#chart"), options);
  
lineChart.render();

// Second Chart
var options = {
    chart: {
      type: 'bar'
    },
    series: [{
      name: 'sales',
      data: [30,40,45,50,49,60,70,91,125]
    }],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    }
  }
  
var barChart = new ApexCharts(document.querySelector("#barchart"), options);
  
barChart.render();

/* End Ecommerce Charts (Index.html) */