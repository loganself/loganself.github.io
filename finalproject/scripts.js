info = [{data: "airlines", abia: 18, tpa: 24, bna: 15, msp: 17, stl: 13, kci: 11, slc: 9, sea: 32},
{data: "destinations", abia: 70, tpa: 100, bna: 75, msp: 163, stl: 70, kci: 54, slc: 100, sea: 118},
{data: "domestic", abia: 62, tpa: 75, bna: 78, msp: 136, stl: 63, kci: 50, slc: 89, sea: 91},
{data: "international", abia: 8, tpa: 15, bna: 7, msp: 27, stl: 7, kci: 4, slc: 11, sea: 27},
];

//initial view of chart
drawChart();

function drawChart() {

firstdata= document.getElementById("thedropdown").value;
for(i=0;i<info.length; i++){
if(firstdata == info[i].data){

abia = info[i].abia;
tpa = info[i].tpa;

bna = info[i].bna;
msp = info[i].msp;

stl = info[i].stl;
kci = info[i].kci;

slc = info[i].slc;
sea = info[i].sea;
}
}

//plotly code for two bars; instead of using numbers, we replace with variables that change depending on what is selected in the dropdown.
var trace1 = {
x: ['ABIA', 'TPA', 'BNA', 'MSP', 'STL', 'KCI', 'SLC', 'SEA'],
y: [abia, tpa, bna, msp, stl, kci, slc, sea],
type: 'bar'
}


var data = [trace1]
var layout = {
title:'Season Passenger Totals - Graph 1',
xaxis: {title: {text:'Seasons'}}
}



Plotly.newPlot('graph', data, layout, {responsive: true} );
}


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
