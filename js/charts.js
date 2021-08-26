/**
 * Chart Page
 * Pages/charts.html
 * More Than Chart here You Can Select what you want and Render it on Your page
 * there are alot of Examples
 * and You can Modify 
 * Read: https://apexcharts.com/docs/installation/#
 */

/* Start Chart */
var options = {
  chart: {
    height: 350,
    type: "line",
    stacked: false
  },
  dataLabels: {
    enabled: false
  },
  colors: ["#FF1654", "#247BA0"],
  series: [
    {
      name: "Series A",
      data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
    },
    {
      name: "Series B",
      data: [20, 29, 37, 36, 44, 45, 50, 58]
    }
  ],
  stroke: {
    width: [4, 4]
  },
  plotOptions: {
    bar: {
      columnWidth: "20%"
    }
  },
  xaxis: {
    categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
  },
  yaxis: [
    {
      axisTicks: {
        show: true
      },
      axisBorder: {
        show: true,
        color: "#FF1654"
      },
      labels: {
        style: {
          colors: "#FF1654"
        }
      },
      title: {
        text: "Series A",
        style: {
          color: "#FF1654"
        }
      }
    },
    {
      opposite: true,
      axisTicks: {
        show: true
      },
      axisBorder: {
        show: true,
        color: "#247BA0"
      },
      labels: {
        style: {
          colors: "#247BA0"
        }
      },
      title: {
        text: "Series B",
        style: {
          color: "#247BA0"
        }
      }
    }
  ],
  tooltip: {
    shared: false,
    intersect: true,
    x: {
      show: false
    }
  },
  legend: {
    horizontalAlign: "left",
    offsetX: 40
  }
};

var chartPage1 = new ApexCharts(document.querySelector("#chartPage1"), options);

chartPage1.render();

/* Start Chart */

var options = {
  chart: {
    height: 280,
    type: "area"
  },
  dataLabels: {
    enabled: false
  },
  series: [
    {
      name: "Series 1",
      data: [45, 52, 38, 45, 19, 23, 2]
    }
  ],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100]
    }
  },
  xaxis: {
    categories: [
      "01 Jan",
      "02 Jan",
      "03 Jan",
      "04 Jan",
      "05 Jan",
      "06 Jan",
      "07 Jan"
    ]
  }
};

var chart = new ApexCharts(document.querySelector("#chartPage2"), options);

chart.render();

var options = {
  chart: {
    height: 350,
    type: "line",
    stacked: false
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#99C2A2', '#C5EDAC', '#66C7F4'],
  series: [
    
    {
      name: 'Column A',
      type: 'column',
      data: [21.1, 23, 33.1, 34, 44.1, 44.9, 56.5, 58.5]
    },
    {
      name: "Column B",
      type: 'column',
      data: [10, 19, 27, 26, 34, 35, 40, 38]
    },
    {
      name: "Line C",
      type: 'line',
      data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
    },
  ],
  stroke: {
    width: [4, 4, 4]
  },
  plotOptions: {
    bar: {
      columnWidth: "20%"
    }
  },
  xaxis: {
    categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
  },
  yaxis: [
    {
      seriesName: 'Column A',
      axisTicks: {
        show: true
      },
      axisBorder: {
        show: true,
      },
      title: {
        text: "Columns"
      }
    },
    {
      seriesName: 'Column A',
      show: false
    }, {
      opposite: true,
      seriesName: 'Line C',
      axisTicks: {
        show: true
      },
      axisBorder: {
        show: true,
      },
      title: {
        text: "Line"
      }
    }
  ],
  tooltip: {
    shared: false,
    intersect: true,
    x: {
      show: false
    }
  },
  legend: {
    horizontalAlign: "left",
    offsetX: 40
  }
};

var chart = new ApexCharts(document.querySelector("#chartPage3"), options);

chart.render();

var data = [
  {
    x: 1994,
    y: 2543763
  },
  {
    x: 1995,
    y: 4486659
  },
  {
    x: 1996,
    y: 7758386
  },
  {
    x: 1997,
    y: 12099221
  },
  {
    x: 1998,
    y: 18850762
  },
  {
    x: 1999,
    y: 28153765
  },
  {
    x: 2000,
    y: 41479495
  },
  {
    x: 2001,
    y: 50229224
  },
  {
    x: 2002,
    y: 66506501
  },
  {
    x: 2003,
    y: 78143598
  },
  {
    x: 2004,
    y: 91332777
  },
  {
    x: 2005,
    y: 103010128
  },
  {
    x: 2006,
    y: 116291681
  },
  {
    x: 2007,
    y: 137322698
  },
  {
    x: 2008,
    y: 157506752
  },
  {
    x: 2009,
    y: 176640381
  },
  {
    x: 2010,
    y: 202320297
  },
  {
    x: 2011,
    y: 223195735
  },
  {
    x: 2012,
    y: 249473624
  },
  {
    x: 2013,
    y: 272842810
  },
  {
    x: 2014,
    y: 295638556
  },
  {
    x: 2015,
    y: 318599615
  },
  {
    x: 2016,
    y: 342497123
  }
];

var labelFormatter = function(value) {
  var val = Math.abs(value);
  if (val >= 1000000) {
    val = (val / 1000000).toFixed(1) + " M";
  }
  return val;
};
var options = {
  chart: {
    height: 350,
    type: "line",
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: "straight"
  },
  series: [
    {
      name: "Logarithmic",
      data: data
    },
    {
      name: "Linear",
      data: data
    }
  ],

  title: {
    text: "Logarithmic Scale",
    align: "left"
  },
  markers: {
    size: 0
  },
  xaxis: {
    type: "datetime"
  },
  yaxis: [
    {
      min: 1000000,
      max: 500000000,
      tickAmount: 4,
      logarithmic: true,
      seriesName: "Logarithmic",
      labels: {
        formatter: labelFormatter,
      }
    },
    {
      min: 1000000,
      max: 500000000,
      opposite: true,
      tickAmount: 4,
      seriesName: "Linear",
      labels: {
        formatter: labelFormatter
      }
    }
  ]
};

var chart = new ApexCharts(document.querySelector("#chartPage4"), options);
chart.render();

/* Start Chart */
var options = {
  chart: {
      height: 350,
      type: 'radialBar',
  },
  series: [70],
  labels: ['Progress'],
}

var chart = new ApexCharts(document.querySelector("#chartPage5"), options);
chart.render();

/* Start Chart */
var options = {
    
  chart: {
    height: 280,
    type: "radialBar",
  },

  series: [67],
  colors: ["#20E647"],
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: "70%",
        background: "#293450"
      },
      track: {
        dropShadow: {
          enabled: true,
          top: 2,
          left: 0,
          blur: 4,
          opacity: 0.15
        }
      },
      dataLabels: {
        name: {
          offsetY: -10,
          color: "#fff",
          fontSize: "13px"
        },
        value: {
          color: "#fff",
          fontSize: "30px",
          show: true
        }
      }
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      gradientToColors: ["#87D4F9"],
      stops: [0, 100]
    }
  },
  stroke: {
    lineCap: "round"
  },
  labels: ["Progress"]
};

var chart = new ApexCharts(document.querySelector("#chartPage6"), options);
chart.render();

/* Start Chart */

var options1 = {
  chart: {
    height: 280,
    type: "radialBar",
  },
  series: [67],
  colors: ["#20E647"],
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      track: {
        background: '#333',
        startAngle: -135,
        endAngle: 135,
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          fontSize: "30px",
          show: true
        }
      }
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "horizontal",
      gradientToColors: ["#87D4F9"],
      stops: [0, 100]
    }
  },
  stroke: {
    lineCap: "butt"
  },
  labels: ["Progress"]
};

new ApexCharts(document.querySelector("#chart1"), options1).render();

/* Start Chart */
var options2 = {
  chart: {
    height: 280,
    type: "radialBar",
  },
  series: [67],
  colors: ["#20E647"],
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      track: {
        background: '#333',
        startAngle: -90,
        endAngle: 90,
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          fontSize: "30px",
          show: true
        }
      }
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "horizontal",
      gradientToColors: ["#87D4F9"],
      stops: [0, 100]
    }
  },
  stroke: {
    lineCap: "butt"
  },
  labels: ["Progress"]
};
new ApexCharts(document.querySelector("#chart2"), options2).render();

/* Start Chart */
var options1 = {
  chart: {
    height: 280,
    type: "radialBar",
  },
  series: [67, 84, 97, 61],
  plotOptions: {
    radialBar: {
      dataLabels: {
        total: {
          show: true,
          label: 'TOTAL'
        }
      }
    }
  },
  labels: ['TEAM A', 'TEAM B', 'TEAM C', 'TEAM D']
};

new ApexCharts(document.querySelector("#chartPage7"), options1).render();