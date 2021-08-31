/**
 * This Page For Define Charts For Charts.html
 * you can delete or modify charts as you like
 * Just Read this document to modifiy or change or add new Chart
 * https://c3js.org/examples.html
*/

/* Start Chart */
var chart = c3.generate({
    bindto: '#firstChart',
    data: {
        x: 'x',
        columns: [
            ['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 130, 340, 200, 500, 250, 350]
        ]
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d'
            }
        }
    }
});

setTimeout(function () {
    chart.load({
        columns: [
            ['data3', 400, 500, 450, 700, 600, 500]
        ]
    });
}, 1000);
/* End Chart */

/* Start Chart */
var chart = c3.generate({
    bindto: '#secondChart',
    data: {
        columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 50, 20, 10, 40, 15, 25]
        ],
        regions: {
            'data1': [{'start':1, 'end':2, 'style':'dashed'},{'start':3}], // currently 'dashed' style only
            'data2': [{'end':3}]
        }
    }
});
/* End Chart */

/* Start Chart */
var chart = c3.generate({
    bindto: '#thirdChart',
    data: {
        columns: [
            ['data1', 300, 350, 300, 0, 0, 100],
            ['data2', 130, 100, 140, 200, 150, 50]
        ],
        types: {
            data1: 'step',
            data2: 'area-step'
        }
    }
});
/* End Chart */

/* Start Chart */
var chart = c3.generate({
    bindto: '#forthChart',
    data: {
        columns: [
            ['data1', 300, 350, 300, 0, 0, 0],
            ['data2', 130, 100, 140, 200, 150, 50]
        ],
        types: {
            data1: 'area',
            data2: 'area-spline'
        }
    }
});
/* End Chart */