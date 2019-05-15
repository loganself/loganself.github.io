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


// map of abia destinationa //
Plotly.d3.csv('abia.csv', function(err, rows){

      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
      }


      var data = [{
          type: 'scattermapbox',
          lat: unpack(rows, 'Latitude'),
          lon: unpack(rows, 'Longitude'),
          text: unpack(rows, 'airlineOptions'),
          marker: {
            color: ['#9fdfbf', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4','#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#b3cceb', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4', '#9abce4',]
          }
        }
      ];

      var layout = {
       title: 'ABIA Nonstop Locations',
       titlefont: {
      color: '#b3cceb',
      size: 20,
      family: 'Helvetica'
       },
        dragmode: 'zoom',
        mapbox: {
          center: {
            lat: 33.068431,
            lon: -41.641805
          },
          zoom: 2,
          style: 'light'
        },
        margin: {
          r: 20,
          t: 40,
          b: 20,
          l: 20,
          pad: 0
        },
        paper_bgcolor: '#343a40',
        plot_bgcolor: '#f00',
        showlegend: false
      };

      Plotly.setPlotConfig({
        mapboxAccessToken: 'pk.eyJ1IjoiZm9ycmVzdGxzZWxmIiwiYSI6ImNqc3R5c2dpZzI5NWE0OW1yeG8zbWthcmEifQ.AcdsLunuklaotGsvzqipbA' //
      });

      Plotly.plot('viz2', data, layout, {responsive: true});
});


var trace1 = {
x: [1, 2, 3, 4, 5, 6],
y: [8.2,10.8, 11.9, 12.4, 13.9, 15.8],
name: 'ABIA Passenger Totals',
type: 'scatter',
marker: {
  color: '#b3cceb'
}
};

var trace2 = {
  x: [1,2, 3, 4, 5, 6],
  y: [855215, 878733, 900701, 926426, 950715, 988384],
  name: 'City of Austin Population',
  yaxis: 'y2',
  type: 'scatter',
  marker: {
    color: '#9fdfbf'
  }
};

var data = [trace1, trace2]
var layout = {
  title:'Annual Passenger Totals - Graph 2',
  yaxis: {
    title: 'Passengers in Millions',
    range: [0,20]},
    yaxis2: {
      title: 'Population in Millions',
      titlefont: {color: '#000'},
      tickfont: {color: '#000'},
      overlaying: 'y',
      side: 'right'
    },

  xaxis: {
    title:'Years',
    tickvals: ["1","2","3","4", "5", "6"], // These should correspond to the x values in your data series objects
    ticktext: ["2013","2014","2015","2016", "2017", "2018"]
  }
}

Plotly.newPlot('viz3', data,layout);
