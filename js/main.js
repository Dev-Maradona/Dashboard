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

      $('.offCanvas').css('transform', 'translate(0%, 0)');

    });

    $('#closeCanvas').on('click', function() {

      $('.offCanvas').css('transform', 'translate(100%, 0)');

    });
});
/* Jquery Trigger */


/* Spark Line Chart */
$(function() {
  /** This code runs when everything has been loaded on the page */
  /* Inline sparklines take their values from the contents of the tag */
  $('.inlinesparkline').sparkline();

  /* Sparklines can also take their values from the first argument passed to the sparkline() function */
  var myvalues = [10,8,5,7,4,4,1];
  $('.dynamicsparkline').sparkline(myvalues);

  /* The second argument gives options such as specifying you want a bar chart */
  $('.dynamicbar').sparkline(myvalues, {type: 'bar', barColor: 'green'} );

  /* Use 'html' instead of an array of values to pass options to a sparkline with data in the tag */
  $('.inlinebar').sparkline('html', {type: 'bar', barColor: 'red'} );

});

/* Main Chart */
var chart = c3.generate({
  bindto: '#chart',
  data: {
    columns: [
      ['data1', 30, 200, 100, 400, 150, 250],
      ['data2', 50, 20, 10, 40, 15, 25]
    ],
    axes: {
      data2: 'y2'
    },
    types: {
      data2: 'bar' // ADD
    }
  },
  axis: {
    y: {
      label: {
        text: 'Y Label',
        position: 'outer-middle'
      }
    },
    y2: {
      show: true,
      label: {
        text: 'Y2 Label',
        position: 'outer-middle'
      }
    }
  }
});

/* Gauge Chart */

var chart = c3.generate({
  bindto: '#gaugeChart',
  data: {
      columns: [
          ['data', 91.4]
      ],
      type: 'gauge',
      onclick: function (d, i) { console.log("onclick", d, i); },
      onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      onmouseout: function (d, i) { console.log("onmouseout", d, i); }
  },
  gauge: {
  },
  color: {
      pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
      threshold: {
          values: [30, 60, 90, 100]
      }
  },
  size: {
      height: 180
  }
});

setTimeout(function () {
  chart.load({
      columns: [['data', 10]]
  });
}, 1000);

setTimeout(function () {
  chart.load({
      columns: [['data', 50]]
  });
}, 2000);

setTimeout(function () {
  chart.load({
      columns: [['data', 70]]
  });
}, 3000);

setTimeout(function () {
  chart.load({
      columns: [['data', 0]]
  });
}, 4000);

setTimeout(function () {
  chart.load({
      columns: [['data', 100]]
  });
}, 5000);


var chart = c3.generate({
  bindto: '#donutChart',
  data: {
      columns: [
          ['data1', 30],
          ['data2', 120],
      ],
      type : 'donut',
      onclick: function (d, i) { console.log("onclick", d, i); },
      onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      onmouseout: function (d, i) { console.log("onmouseout", d, i); }
  },
  donut: {
      title: "Iris Petal Width"
  }
});

setTimeout(function () {
  chart.load({
      columns: [
          ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
          ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
          ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
      ]
  });
}, 1500);

setTimeout(function () {
  chart.unload({
      ids: 'data1'
  });
  chart.unload({
      ids: 'data2'
  });
}, 2500);
