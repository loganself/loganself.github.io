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
 staticPlot: true, // disable zoom, save and other toolbar options
}

Plotly.newPlot('viz', data, layout, options , {responsive: true});




var trace1 = {
  x: [1, 2, 3, 4, 5, 6 ], // x is an array of values for the x-axis.
  y: [34, 10, 8, 7, 19, 1], // y is an array of values corresponding to the provided x values.
  type: 'line',
  name: 'Austin',
  marker : {
    color: '#b3cce6'
  }

};

var trace2 = {
  x: [1, 2, 3, 4, 5, 6], // x is an array of values for the x-axis.
  y: [20, 12, 12,20, 11, 1], // y is an array of values corresponding to the provided x values.
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
    tickvals: ["1","2","3","4", "5", "6"], // These should correspond to the x values in your data series objects
    ticktext: ["2013","2014","2015","2016", "2017", "2018"]
  }

}

var options = {
 staticPlot: true, // disable zoom, save and other toolbar options
}

Plotly.newPlot('viz2', data, layout, options , {responsive: true});
