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
    title: 'Number or Destinations'

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
  y: [779481, 738355, 1006899, 957916, 1022353, 1088399, 1165811, 1062997, 964975, 1044747, 1036223, 1029803, 873560, 839213, 1066146, 1028337, 1081450, 1135796, 1133641, 1054496, 1018292, 1101284, 1070567, 1034067, 920946, 885325, 1156928, 1124625, 1217824, 1279204, 1310174, 1205341, 1099481, 1269153, 1229791, 1190513, 1042834, 1008052, 1306788, 1324938, 1414243, 1489191, 1511634, 1413983, 1249777, 1434756, 1360581, 1263135 ], // y is an array of values corresponding to the provided x values.
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
  title:'Passenger Growth of Both Airports',
  showlegend: true,
  barmode: 'line',
  yaxis: {
    title: 'Number of Passengers'

  },
  xaxis: {
    title: 'Month/Year',
    tickvals: ["1","2","3","4", "5", "6", "7", "8", "9","10","11","12","13","14", "15", "16", "17", "18", "19", "20","21","22","23","24", "25", "26", "27", "28", "29", "30","31","32","33","34", "35", "36", "37", "38", "39", "40","41","42","43","44", "45", "46", "47", "48"], // These should correspond to the x values in your data series objects
    ticktext: ["Jan. 15","Feb. 15","Mar. 15","Apr. 15", "May 15", "Jun. 15", "Jul. 15", "Aug. 15", "Sept. 15", "Oct. 15", "Nov. 15", "Dec. 15", "Jan. 16","Feb. 16","Mar. 16","Apr. 16", "May 16", "Jun. 16", "Jul. 16", "Aug. 16", "Sept. 16", "Oct. 16", "Nov. 16", "Dec. 16", "Jan. 17","Feb. 17","Mar. 17","Apr. 17", "May 17", "Jun. 17", "Jul. 17", "Aug. 17", "Sept. 17", "Oct. 17", "Nov. 17", "Dec. 17", "Jan. 18","Feb. 18","Mar. 18","Apr. 18", "May 18", "Jun. 18", "Jul. 18", "Aug. 18", "Sept. 18", "Oct. 18", "Nov. 18", "Dec. 18", ]
  }

}

var options = {
 staticPlot: false, // disable zoom, save and other toolbar options
}

Plotly.newPlot('viz2', data, layout, options , {responsive: true});

// This lets us get the unique items from an array:
$.extend({
    distinct : function(anArray) {
       var result = [];
       $.each(anArray, function(i,v){
           if ($.inArray(v, result) == -1) result.push(v);
       });
       return result;
    }
});

/***
This function is useful for returning an array of values corresponding to a column in your CSV file. It's not built in to PLotly, so you have to declare it as follows:
***/
let unpack = function(rows, key) {
  return rows.map(function(row) { return row[key]; });
}

$( document ).ready(function() {

  /*** When the page loads, we want to call the drawPlot function with "all" as the parameter: ***/
  drawPlot("All");

  // At this point, we also want to read in our CSV so we can generate the options in our dropdown.
  Plotly.d3.csv('abia.csv', function(err, rows){

    // rows is now an array from your CSV, so we can get a list of the unique crime types like this:
    let airport_type = $.distinct(
      unpack(rows, "airportLocation")
    );

    console.log(airport_type);

    // Now add options to the dropdown in the HTML for each unique crime.
  for (let i=0; i<airport_type.length; i++){
   $('#airportLocation').append("<option value='" + airport_type[i] + "'>" + airport_type[i] + "</option>");

  }

  })

    // Now attach an event listener to the dropdown so that when the user selects a crime type, the map updates. You should call the drawPlot() function to update the map.

  $('#airportLocation').on('change', function(event){
    $('#viz3').remove();
      $('#viz_holder').append('<div id="viz3"></div>');
      drawPlot(event.target.value);
  })

}) // document ready



var drawPlot = function(category) {

  Plotly.d3.csv('abia.csv', function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
      }
    if (category != "All") {
      var rows = rows.filter(function(item) {
        return item.airportLocation == category;
      })
    }

      var data = [{
          type: 'scattermapbox',
          lat: unpack(rows, 'Latitude'),
          lon: unpack(rows, 'Longitude'),
          text: unpack(rows,'airlineOptions'),
          hoverinfo: 'text',
          marker: {
            color: unpack(rows, 'Color')
          }

      }];


      var layout = {
       font: {
         color: '#222'
       },
        dragmode: 'zoom',
        mapbox: {
          center: { // Sets the center of the map.
            lat: 30.2672,
            lon: -97.7431
          },
          zoom: 2, // Sets the zoom level.
          style: 'light' // These are mapbox styles. Options include light, dark, satellite
        },
        margin: {
          r: 20,
          t: 40,
          b: 20,
          l: 20,
          pad: 0
        },
        paper_bgcolor: '#ffffff',
        plot_bgcolor: '#ffffff',
        showlegend: false,
        displayModeBar: false
      };

      var options = {
       displayModeBar: false, // disable zoom, save and other toolbar options.
      }

      Plotly.setPlotConfig({
        mapboxAccessToken: 'pk.eyJ1IjoiZGNhcnRlciIsImEiOiJjamZiZXczdnozNXc2MnFwNDNvazdic3d5In0._SFNB_RTylq_bYxJbqVdiQ' // Get your own Mapbox access token by registering at mapbox.com
      });

  Plotly.plot('viz3', data, layout, options);



  })

}// function drawPlot
