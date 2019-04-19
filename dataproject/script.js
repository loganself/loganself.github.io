/* If you're feeling fancy you can add interactivity
    to your site with Javascript */
/****

  Plotly stores data and display options in objects like below.

  Different series of data (e.g., if you want to compare temperature in two different cities) are stored in separate objcects and then combined into one object (named data, below).

  Layout options are stored in their own object (called layout, below).

  We then create the vizualiation by calling Plotly.newPlot and giving it the ID of a container, the data object and the layout object.

****/

var trace1 = {
  x: [1, 2, 3, 4, 5, 6 , 7, 8, 9, 10, 11, 12, 13, 14], // x is an array of values for the x-axis.
  y: [34, 10, 8, 7, 19, 1, 1, 1, 8, 7, 0, 0, 1, 1], // y is an array of values corresponding to the provided x values.
  type: 'bar',
  name: 'Austin',
  marker : {
    color: '#b3cce6'
  }

};

var trace2 = {
  x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], // x is an array of values for the x-axis.
  y: [20, 12, 12,20, 11, 1, 0, 0, 2, 3, 3, 0, 1, 1], // y is an array of values corresponding to the provided x values.
  type: 'bar',
  name: 'San Antonio',
  marker: {
    color: '#ffbf80'
  }
};

// Create the data object as an array of our data series objects:
var data = [trace1, trace2,]

// The layout object provides options for how our visualization will appear:
var layout = {
  title:'Airlines that Serve Each Airport',
  showlegend: true,
  barmode: 'bar',
  yaxis: {
    title: 'Number or Airlines'

  },
  xaxis: {
    title: 'Airlines',
    tickvals: ["1","2","3","4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"], // These should correspond to the x values in your data series objects
    ticktext: ["Southwest","Delta Airlines","American Airlines","United Airlines", "Froniter Airlines", "Sun Country", "British Airways", "Norweigen", "Allegian Air", "ViaAir", "InterJet", "Volaris", "Aeromexico", "Air Canada" ]
  }

}

var options = {
 staticPlot: false, // disable zoom, save and other toolbar options
}

Plotly.newPlot('viz', data, layout, options , {responsive: true});




var trace1 = {
  x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48], // x is an array of values for the x-axis.
  y: [34, 10, 8, 7, 19, 1], // y is an array of values corresponding to the provided x values.
  type: 'line',
  name: 'Austin',
  marker : {
    color: '#b3cce6'
  }

};

var trace2 = {
  x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48 ], // x is an array of values for the x-axis.
  y: [615622, 562266, 740259, 721313, 741014, 776243, 809653, 709237, 636217, 738357, 721962, 726104, 640614, 595286, 711596, 699203, 754257, 800107, 802345, 719761, 683488, 739620, 0, 730551, 652072, 604440, 766593, 737275, 777005, 834917, 848952, 756360, 687536, 803667, 810495, 784230, 702546, 667650, 848233, 836492, 840951,887169, 933290, 881896, 781593, 899696, 888698, 875437], // y is an array of values corresponding to the provided x values.
  type: 'line',
  name: 'San Antonio',
  marker: {
    color: '#ffbf80'
  }
};

// Create the data object as an array of our data series objects:
var data = [trace1, trace2,]

// The layout object provides options for how our visualization will appear:
var layout = {
  title:'Passenger Growth of both Airports',
  showlegend: true,
  barmode: 'line',
  yaxis: {
    title: 'Number or Airlines'

  },
  xaxis: {
    title: 'Airlines',
    tickvals: ["1","2","3","4", "5", "6", "7", "8", "9","10","11","12","13","14", "15", "16", "17", "18", "19", "20","21","22","23","24", "25", "26", "27", "28", "29", "30","31","32","33","34", "35", "36", "37", "38", "39", "40","41","42","43","44", "45", "46", "47", "48"], // These should correspond to the x values in your data series objects
    ticktext: ["Jan. 15","Feb. 15","Mar. 15","Apr. 15", "May 15", "Jun. 15", "Jul. 15", "Aug. 15", "Sept. 15", "Oct. 15", "Nov. 15", "Dec. 15", "Jan. 16","Feb. 16","Mar. 16","Apr. 16", "May 16", "Jun. 16", "Jul. 16", "Aug. 16", "Sept. 16", "Oct. 16", "Nov. 16", "Dec. 16", "Jan. 17","Feb. 17","Mar. 17","Apr. 17", "May 17", "Jun. 17", "Jul. 17", "Aug. 17", "Sept. 17", "Oct. 17", "Nov. 17", "Dec. 17", "Jan. 18","Feb. 18","Mar. 18","Apr. 18", "May 18", "Jun. 18", "Jul. 18", "Aug. 18", "Sept. 18", "Oct. 18", "Nov. 18", "Dec. 18", ]
  }

}

var options = {
 staticPlot: false, // disable zoom, save and other toolbar options
}

Plotly.newPlot('viz2', data, layout, options , {responsive: true});
